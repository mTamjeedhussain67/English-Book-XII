$sourceDir = "D:\Study Notes"
$targetFile = "D:\Study Notes\Section C.docx"
$outputFile = "d:\English-Book-XII-main\scratch\extracted_text.txt"










$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Open($targetFile)
$text = $doc.Content.Text
$text | Out-File -FilePath $outputFile -Encoding utf8
$doc.Close()
$word.Quit()
Write-Output "Extracted text to $outputFile"

