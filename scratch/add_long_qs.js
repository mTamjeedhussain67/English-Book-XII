const fs = require('fs');
const path = require('path');

const data = {
    'docs/unit-1-1.md': `
### Descriptive Questions (Long Answers)

**Q1: Analyze the character of the Miller in "The Devoted Friend". How does he use the concept of friendship for his own selfish gains?**
**A:** Hugh, the rich Miller, represents hypocrisy and selfishness masked as friendship. He constantly takes from little Hans—demanding his wheelbarrow, his time, and his labor—while offering nothing but empty words and false promises in return. The Miller uses the ideology of "true friendship" to manipulate Hans, convincing him that serving others without expectation is a noble duty. His character critiques the exploitation of the poor by the rich under the guise of benevolence.

**Q2: What is the central theme of Oscar Wilde's "The Devoted Friend"? Discuss how the story serves as a critique of hypocrisy and unequal relationships.**
**A:** The central theme is the exploitation of innocence and the hypocrisy of conditional friendship. Wilde satirizes the Victorian ideals of morality by showing how the wealthy (the Miller) exploit the poor (Hans) while self-righteously preaching about generosity. The story highlights the danger of unequal relationships where one party constantly sacrifices while the other only benefits, ultimately leading to the tragic destruction of the devoted, naive friend.
`,
    'docs/unit-2-1.md': `
### Descriptive Questions (Long Answers)

**Q1: Discuss the historical significance and the main theme of Martin Luther King Jr.'s "I Have a Dream" speech.**
**A:** Delivered during the 1963 March on Washington, the speech is a historic milestone in the American Civil Rights Movement. The main theme is the urgent need for racial equality, justice, and the end of segregation. King eloquently envisions a future where individuals are judged by the "content of their character" rather than the "color of their skin." His speech served as a catalyst for sweeping civil rights legislation and remains a universal symbol of hope and equality.

**Q2: How does Martin Luther King Jr. use the metaphor of a "bad check" to describe the condition of African Americans?**
**A:** King uses the metaphor of a "bad check" to illustrate the unfulfilled promises of the US Constitution and the Declaration of Independence. He argues that America promised all its citizens the unalienable rights of life, liberty, and the pursuit of happiness. However, for African Americans, this promise was like a check that "came back marked 'insufficient funds'." This powerful imagery highlights the economic and social injustices faced by black Americans and demands that the "bank of justice" finally honor its debt.
`,
    'docs/unit-3-1.md': `
### Descriptive Questions (Long Answers)

**Q1: According to Bertrand Russell, what are the main causes of unhappiness in modern society?**
**A:** In "The Conquest of Happiness," Russell identifies self-absorption, envy, fatigue, and an obsession with competition as primary causes of unhappiness. He argues that modern individuals are too focused on their internal anxieties and societal expectations. The constant comparison with others (envy) and the relentless pursuit of material success lead to chronic fatigue and a loss of joy in simple pleasures.

**Q2: How does Russell suggest one can achieve true happiness? Discuss the role of outward focus and varied interests.**
**A:** Russell suggests that true happiness is achieved by turning one's focus outward rather than inward. He advocates for developing genuine interests in the external world—hobbies, nature, relationships, and meaningful work. By cultivating a zest for life and engaging passionately with diverse activities, individuals can break free from self-centered anxiety. Happiness, therefore, is an active conquest that requires effort to engage with the world enthusiastically.
`,
    'docs/unit-4-1.md': `
### Descriptive Questions (Long Answers)

**Q1: Write a character sketch of Daedalus. What are his main inventions and what do they reveal about his personality?**
**A:** Daedalus is a brilliant architect, inventor, and master craftsman of ancient Greek mythology. He is famous for building the Labyrinth for King Minos and inventing artificial wings made of feathers and wax. His character reveals human ingenuity and the pursuit of knowledge. However, his genius also brings tragedy, as he fails to consider the reckless nature of youth (his son Icarus). Daedalus represents the double-edged sword of human intellect—capable of miraculous creation but also profound sorrow.

**Q2: Discuss the moral lesson of the myth "Icarus and Daedalus". How does it highlight the dangers of disobedience and lack of self-discipline?**
**A:** The primary moral lesson is the importance of moderation, self-discipline, and obedience. Daedalus warns Icarus to fly the "middle course"—neither too low (where the sea would dampen the wings) nor too high (where the sun would melt the wax). Icarus, overcome by the thrill of flight, disobeys his father and flies too close to the sun, leading to his fatal fall. The myth serves as a timeless warning against hubris (excessive pride) and the dangerous consequences of ignoring wise counsel.
`,
    'docs/unit-5-1.md': `
### Descriptive Questions (Long Answers)

**Q1: Analyze the character of Pahom. How does his insatiable greed lead to his ultimate downfall?**
**A:** Pahom begins as an ordinary, content peasant, but once he tastes the ownership of land, his desire becomes insatiable. He grows increasingly selfish, restless, and dissatisfied with what he has. His obsession blinds him to physical limits and moral boundaries. In his final attempt to claim a massive tract of land from the Bashkirs, he pushes his body beyond its limits, running until his heart gives out. His character illustrates how unchecked greed consumes the soul and ultimately destroys the individual.

**Q2: Discuss the central theme of Leo Tolstoy's story "How Much Land Does a Man Need?". What moral lesson does it convey to the readers?**
**A:** The central theme is the destructive nature of human greed and the illusion of material wealth. Tolstoy explores how the pursuit of more land (representing wealth and power) leads to spiritual poverty and death. The story answers its own title question with profound irony: in the end, the only land a man truly needs is the six feet required for his grave. The moral lesson emphasizes contentment, spiritual well-being, and the futility of chasing endless material possessions.
`,
    'docs/unit-6-1.md': `
### Descriptive Questions (Long Answers)

**Q1: How does James Thurber create humor in "The Day the Dam Broke"? Describe the panic and irrational behavior of the crowd.**
**A:** Thurber creates humor through exaggeration, absurdity, and vivid descriptions of mass hysteria. He recounts a historical event where the citizens of Columbus, Ohio, panicked over a false rumor that the local dam had broken. The humor arises from the irrational behavior of the characters: people running without knowing why, abandoning their businesses mid-sentence, and carrying useless items. The contrast between the complete lack of danger and the extreme, chaotic reaction of the mob provides brilliant comedic effect.

**Q2: What does the story teach us about human psychology and the danger of rumors?**
**A:** The story serves as a satirical study of crowd psychology and the "herd mentality." It demonstrates how easily fear and misinformation can override logic and critical thinking. When one person starts running, others follow blindly without verifying the facts. Thurber highlights the danger of rumors, showing how panic is highly contagious and can transform sensible individuals into an unthinking, stampeding mob.
`,
    'docs/unit-7-1.md': `
### Descriptive Questions (Long Answers)

**Q1: What are the primary causes of climate change as discussed in the text? Explain the role of human activities in global warming.**
**A:** The primary causes of climate change are deeply rooted in human activities that increase the concentration of greenhouse gases in the atmosphere. The burning of fossil fuels (coal, oil, and natural gas) for energy and transportation is the largest contributor, releasing massive amounts of carbon dioxide. Deforestation exacerbates the problem by reducing the number of trees available to absorb CO2. Industrial processes and agricultural practices also release potent greenhouse gases like methane and nitrous oxide, trapping heat and causing global warming.

**Q2: Discuss the major effects of climate change on our environment and what measures can be taken to mitigate them.**
**A:** Climate change has severe environmental effects, including rising global temperatures, melting polar ice caps, rising sea levels, and an increase in extreme weather events like hurricanes, droughts, and floods. These changes threaten biodiversity, disrupt agriculture, and endanger coastal communities. To mitigate these effects, we must transition to renewable energy sources (solar, wind), enhance energy efficiency, protect forests, and adopt sustainable agricultural practices. Global cooperation and individual actions are essential to reduce our carbon footprint.
`,
    'docs/section-b.md': `
### Descriptive Questions (Long Answers)

**Q1: Summarize the main theme of the poem "If" by Rudyard Kipling. What qualities does the poet consider essential for true manhood?**
**A:** The main theme of "If" is the cultivation of a balanced, virtuous character capable of withstanding life's extremes. Kipling outlines essential qualities for true manhood: maintaining composure in the face of panic, trusting oneself while accepting doubt, being patient, honest, and humble. A true leader must treat both success ("Triumph") and failure ("Disaster") as impostors, rebuilding after loss without complaint. The poem emphasizes self-discipline, resilience, and moral integrity as the highest human achievements.

**Q2: Describe the seven stages of human life as portrayed by William Shakespeare in "All the World's a Stage".**
**A:** Shakespeare compares life to a play with seven acts. It begins with the helpless **Infant**, crying and vomiting. Next is the **Whining Schoolboy**, reluctantly walking to school. The third is the **Lover**, sighing passionately and writing sad poems. The fourth is the **Soldier**, aggressive, seeking honor, and quick to fight. The fifth is the **Justice** (judge), mature, prosperous, and full of wise sayings. The sixth stage shows the elderly **Pantaloon**, thin, wearing spectacles, with a shrinking voice. The final stage is **Second Childishness**, characterized by complete memory loss and the absence of teeth, eyes, taste, and everything—ending in death.
`
};

for (const [relPath, newContent] of Object.entries(data)) {
    const fullPath = path.join(__dirname, '..', relPath);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        const insertMarker = '##  MULTIPLE CHOICE QUESTIONS (MCQs)';
        if (content.includes(insertMarker)) {
            content = content.replace(insertMarker, newContent + '\n\n' + insertMarker);
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Updated ' + relPath);
        } else {
            const insertMarker2 = '##  VOCABULARY BUILDER';
            if (content.includes(insertMarker2)) {
                content = content.replace(insertMarker2, newContent + '\n\n' + insertMarker2);
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated ' + relPath);
            } else {
                content += '\n\n' + newContent;
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Updated ' + relPath + ' (Appended to end)');
            }
        }
    } else {
        console.log('File not found: ' + fullPath);
    }
}
