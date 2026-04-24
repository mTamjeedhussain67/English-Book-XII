$sourceDir = "D:\Study Notes"
$targetDir = "d:\English-Book-XII-main\docs"
$scratchBase = "d:\English-Book-XII-main\scratch"

if (!(Test-Path $scratchBase)) { New-Item -ItemType Directory $scratchBase }

$orderMap = @{
    "Unit 1.1" = 1
    "Unit 2.1" = 2
    "Unit 3.1" = 3
    "Unit 4.1" = 4
    "Unit 5.1" = 5
    "Unit 6.1" = 6
    "Unit 7.1" = 7
    "Section B" = 8
    "Section C" = 9
}

$files = Get-ChildItem -Path $sourceDir -Filter "*.docx"

$utf8NoBOM = New-Object System.Text.UTF8Encoding($false)

foreach ($file in $files) {
    $baseName = $file.BaseName
    $slug = $baseName.ToLower().Replace(" ", "-").Replace(".", "-")
    $zipPath = Join-Path $scratchBase "$baseName.zip"
    $extractPath = Join-Path $scratchBase "$baseName-extracted"
    
    if (Test-Path $zipPath) { Remove-Item $zipPath -Force }
    if (Test-Path $extractPath) { Remove-Item $extractPath -Recurse -Force }
    
    Copy-Item $file.FullName $zipPath
    Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force
    
    $docXmlPath = Join-Path $extractPath "word/document.xml"
    if (Test-Path $docXmlPath) {
        [xml]$xml = [System.IO.File]::ReadAllText($docXmlPath)
        $namespaces = @{w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
        
        $content = ""
        $paragraphs = Select-Xml -Xml $xml -XPath "//w:p" -Namespace $namespaces
        foreach ($p in $paragraphs) {
            $pContent = ""
            $runs = Select-Xml -Xml $p.Node -XPath ".//w:r" -Namespace $namespaces
            $lastWasBold = $false
            foreach ($r in $runs) {
                $isBold = $null -ne (Select-Xml -Xml $r.Node -XPath ".//w:b" -Namespace $namespaces)
                $t = (Select-Xml -Xml $r.Node -XPath ".//w:t" -Namespace $namespaces | ForEach-Object { $_.Node.InnerText }) -join ""
                
                if ($isBold) {
                    if (-not $lastWasBold) { $pContent += "**" }
                    $pContent += $t
                    $lastWasBold = $true
                } else {
                    if ($lastWasBold) { $pContent += "**" }
                    $pContent += $t
                    $lastWasBold = $false
                }
            }
            if ($lastWasBold) { $pContent += "**" }
            
            if ($pContent.Trim()) {
                # Clean up empty bold pairs like ****
                $pContent = $pContent.Replace("****", "")
                $content += "$pContent`n`n"
            }
        }
        
        $content = $content.Trim()
        
        $pos = if ($orderMap.ContainsKey($baseName)) { $orderMap[$baseName] } else { 10 }
        $title = $baseName
        
        $mdContent = "---`ntitle: $title`nsidebar_position: $pos`n---`n`n# $title`n`n$content"
        
        $mdPath = Join-Path $targetDir "$slug.md"
        [System.IO.File]::WriteAllText($mdPath, $mdContent, $utf8NoBOM)
        Write-Host "Converted $baseName to $slug.md (Pos: $pos)"
    }
}
