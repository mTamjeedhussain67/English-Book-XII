const fs = require('fs');
const path = require('path');

const mcqs_unit7 = `
11. **What is the primary cause of modern climate change?**
    - A) Volcanic eruptions
    - B) Solar flares
    - C) Human activities
    - D) Natural Earth cycles
    - ** Answer: C**

12. **Which gas is responsible for most global warming?**
    - A) Oxygen
    - B) Carbon dioxide / CO2
    - C) Helium
    - D) Nitrogen
    - ** Answer: B**

13. **What human activity is the largest source of CO2 emissions?**
    - A) Breathing
    - B) Burning fossil fuels
    - C) Building houses
    - D) Swimming
    - ** Answer: B**

14. **What are fossil fuels?**
    - A) Wind and solar energy
    - B) Wood and leaves
    - C) Coal, oil, and natural gas
    - D) Water and ice
    - ** Answer: C**

15. **How does deforestation contribute to climate change?**
    - A) It makes the ground hotter
    - B) Trees absorb CO2; cutting them down leaves more CO2 in the air
    - C) It creates more wind
    - D) It releases oxygen
    - ** Answer: B**

16. **Approximately how many hectares of forest are destroyed each year?**
    - A) 1 million hectares
    - B) 5 million hectares
    - C) 12 million hectares
    - D) 50 million hectares
    - ** Answer: C**

17. **What gas is released during the extraction and transport of coal and natural gas?**
    - A) Oxygen
    - B) Methane
    - C) Argon
    - D) Helium
    - ** Answer: B**

18. **Methane is how much more potent than CO2 at trapping heat?**
    - A) 2 times more potent
    - B) 10 times more potent
    - C) 25 times more potent
    - D) 100 times more potent
    - ** Answer: C**

19. **Which industry is a major emitter of nitrous oxide?**
    - A) The tech industry
    - B) Agriculture / fertilizer use
    - C) The fashion industry
    - D) The film industry
    - ** Answer: B**

20. **What sector accounts for about 25% of global energy-related CO2 emissions?**
    - A) Transportation
    - B) Residential heating
    - C) Waste management
    - D) Fishing
    - ** Answer: A**

21. **What process releases both carbon dioxide and toxic pollutants from waste?**
    - A) Recycling
    - B) Composting
    - C) Incineration / burning of plastic
    - D) Burying
    - ** Answer: C**

22. **How does urbanization contribute to climate change?**
    - A) Cities are too loud
    - B) It increases energy demand and emissions
    - C) People breathe more in cities
    - D) Cities have fewer cars
    - ** Answer: B**

23. **What is one of the most visible effects of global warming?**
    - A) More rainbows
    - B) Melting polar ice caps and glaciers
    - C) Taller trees
    - D) Cleaner air
    - ** Answer: B**

24. **What does the melting of ice caps cause?**
    - A) Earthquakes
    - B) Rising sea levels
    - C) Tornadoes
    - D) Volcanoes
    - ** Answer: B**

25. **What is the consequence of rising sea levels for coastal communities?**
    - A) Better fishing
    - B) Increased risk of flooding and erosion
    - C) More tourists
    - D) Colder weather
    - ** Answer: B**

26. **How does climate change affect weather patterns?**
    - A) It makes weather perfectly predictable
    - B) It causes more extreme weather events
    - C) It stops all rain
    - D) It prevents storms
    - ** Answer: B**

27. **Which extreme weather event is NOT typically linked to climate change in the text?**
    - A) Hurricanes
    - B) Droughts
    - C) Earthquakes
    - D) Floods
    - ** Answer: C**

28. **What happens to oceans as they absorb more CO2?**
    - A) They become sweeter
    - B) They become more acidic
    - C) They freeze
    - D) They boil
    - ** Answer: B**

29. **Ocean acidification is particularly harmful to what?**
    - A) Ships
    - B) Coral reefs and marine life
    - C) Swimmers
    - D) Sand
    - ** Answer: B**

30. **How does climate change impact agriculture?**
    - A) It improves all crop yields
    - B) It disrupts growing seasons and reduces crop yields
    - C) It has no impact
    - D) It makes vegetables bigger
    - ** Answer: B**

31. **What is a "drought"?**
    - A) A heavy rainstorm
    - B) A prolonged period of abnormally low rainfall
    - C) A type of hurricane
    - D) A snowstorm
    - ** Answer: B**

32. **Approximately how many species are at risk of extinction due to climate change?**
    - A) Ten thousand
    - B) One million species
    - C) Five million species
    - D) One hundred
    - ** Answer: B**

33. **Why are species at risk of extinction?**
    - A) Because they are too old
    - B) Their habitats are changing faster than they can adapt
    - C) Because of hunting only
    - D) Because they migrate too much
    - ** Answer: B**

34. **The WHO calls climate change the "single biggest..." what?**
    - A) Hoax
    - B) Financial opportunity
    - C) Health threat facing humanity
    - D) Scientific mystery
    - ** Answer: C**

35. **What is "mitigation" in the context of climate change?**
    - A) Ignoring the problem
    - B) Actions taken to reduce greenhouse gas emissions
    - C) Moving to another planet
    - D) Adapting to the heat
    - ** Answer: B**

36. **What is the best alternative to burning fossil fuels?**
    - A) Burning wood
    - B) Renewable energy like solar and wind power
    - C) Using candles
    - D) Burning plastic
    - ** Answer: B**

37. **What is energy efficiency?**
    - A) Using more energy
    - B) Using less energy to perform the same task
    - C) Turning off all power forever
    - D) Wasting electricity
    - ** Answer: B**

38. **How can individuals reduce their carbon footprint?**
    - A) By driving more SUVs
    - B) By using public transport, carpooling, or walking
    - C) By leaving lights on
    - D) By eating more meat
    - ** Answer: B**

39. **What is reforestation?**
    - A) Cutting down trees
    - B) Planting trees in areas where forests have been cut down
    - C) Building wooden houses
    - D) Making paper
    - ** Answer: B**

40. **Why is planting trees important?**
    - A) They look nice
    - B) Trees act as "carbon sinks" by absorbing CO2
    - C) They produce fruit
    - D) They block the wind
    - ** Answer: B**

41. **What sustainable practice involves changing how we grow food?**
    - A) Urban sprawl
    - B) Sustainable agriculture / reducing chemical fertilizers
    - C) Deep-sea fishing
    - D) Factory farming
    - ** Answer: B**

42. **What is a "carbon footprint"?**
    - A) A fossil of a footprint
    - B) The total amount of greenhouse gases generated by our actions
    - C) A mark left by a shoe
    - D) The size of a car tire
    - ** Answer: B**

43. **What requires global cooperation according to the text?**
    - A) Local politics
    - B) Tackling climate change
    - C) School exams
    - D) Building roads
    - ** Answer: B**

44. **Who must be involved in fighting climate change?**
    - A) Only scientists
    - B) Governments, corporations, and individuals
    - C) Only politicians
    - D) Only children
    - ** Answer: B**

45. **What does the text suggest about plastic usage?**
    - A) We should use more of it
    - B) We should reduce single-use plastics
    - C) It has no effect on the environment
    - D) Plastic is better than paper
    - ** Answer: B**

46. **Which of the following is a greenhouse gas?**
    - A) Oxygen
    - B) Nitrous oxide
    - C) Helium
    - D) Hydrogen
    - ** Answer: B**

47. **How does public transportation help the environment?**
    - A) It goes faster
    - B) It reduces the number of individual cars on the road, lowering emissions
    - C) It is free
    - D) It uses coal
    - ** Answer: B**

48. **What is the overall tone of the climate change text?**
    - A) Happy and relaxed
    - B) Informative, urgent, and cautionary
    - C) Angry and hopeless
    - D) Sarcastic
    - ** Answer: B**

49. **What does the phrase "interconnected global crisis" mean?**
    - A) A problem isolated to one country
    - B) A problem that affects all countries and systems together
    - C) An internet problem
    - D) A banking error
    - ** Answer: B**

50. **What is the ultimate goal of addressing climate change?**
    - A) To make money
    - B) To ensure a sustainable and livable planet for future generations
    - C) To freeze the Earth
    - D) To stop all technology
    - ** Answer: B**
`;

const mcqs_sectionb = `
11. **Who wrote the poem "If"?**
    - A) William Shakespeare
    - B) Rudyard Kipling
    - C) W.H. Auden
    - D) Pablo Neruda
    - ** Answer: B**

12. **What does Kipling say you should do when all men doubt you?**
    - A) Fight them
    - B) Ignore them
    - C) Trust yourself, but make allowance for their doubting too
    - D) Doubt yourself as well
    - ** Answer: C**

13. **In "If", what two things are called "impostors"?**
    - A) Love and Hate
    - B) Joy and Sorrow
    - C) Triumph and Disaster
    - D) Wealth and Poverty
    - ** Answer: C**

14. **What does "keep your head" mean in "If"?**
    - A) Wear a hat
    - B) Stay calm in a crisis
    - C) Be stubborn
    - D) Look straight ahead
    - ** Answer: B**

15. **Who wrote the poem "All the World's a Stage"?**
    - A) John Keats
    - B) William Shakespeare
    - C) John Milton
    - D) Alfred Tennyson
    - ** Answer: B**

16. **What play is "All the World's a Stage" taken from?**
    - A) Hamlet
    - B) Macbeth
    - C) As You Like It
    - D) Romeo and Juliet
    - ** Answer: C**

17. **Who is the speaker of "All the World's a Stage"?**
    - A) Romeo
    - B) Jaques
    - C) Othello
    - D) King Lear
    - ** Answer: B**

18. **How many acts are in Shakespeare's metaphor of life?**
    - A) Five
    - B) Seven
    - C) Ten
    - D) Three
    - ** Answer: B**

19. **What is the first stage of life?**
    - A) The Schoolboy
    - B) The Lover
    - C) The Infant
    - D) The Soldier
    - ** Answer: C**

20. **What characterizes the "Lover" stage?**
    - A) Seeking the bubble reputation
    - B) Sighing like furnace, with a woeful ballad
    - C) Full of wise saws
    - D) Creeping like snail
    - ** Answer: B**

21. **What is the "Soldier" seeking?**
    - A) True love
    - B) The bubble reputation
    - C) Wealth
    - D) Peace
    - ** Answer: B**

22. **What characterizes the "Justice" stage?**
    - A) A fair round belly, full of wise saws
    - B) Jealous in honor
    - C) Mewling and puking
    - D) Sans teeth, sans eyes
    - ** Answer: A**

23. **What is the final stage called?**
    - A) The Pantaloon
    - B) Second childishness and mere oblivion
    - C) The Justice
    - D) The Ghost
    - ** Answer: B**

24. **What does "sans" mean in the phrase "sans teeth, sans eyes"?**
    - A) With
    - B) Without
    - C) Before
    - D) After
    - ** Answer: B**

25. **Who wrote the poem "Ulysses"?**
    - A) William Wordsworth
    - B) Alfred, Lord Tennyson
    - C) Robert Browning
    - D) T.S. Eliot
    - ** Answer: B**

26. **What does Ulysses want to do?**
    - A) Rule his kingdom peacefully
    - B) Continue traveling and seeking knowledge
    - C) Retire and rest
    - D) Start a war
    - ** Answer: B**

27. **Who is Ulysses leaving his kingdom to?**
    - A) His wife, Penelope
    - B) His son, Telemachus
    - C) His generals
    - D) The gods
    - ** Answer: B**

28. **What is the famous last line of "Ulysses"?**
    - A) To be or not to be
    - B) To strive, to seek, to find, and not to yield
    - C) I am the master of my fate
    - D) Into the valley of Death
    - ** Answer: B**

29. **What does "You Start Dying Slowly" emphasize?**
    - A) The importance of saving money
    - B) The importance of passion, change, and avoiding a repetitive routine
    - C) The dangers of traveling
    - D) The inevitability of physical death
    - ** Answer: B**

30. **Who is often credited with "You Start Dying Slowly"?**
    - A) Pablo Neruda / Martha Medeiros
    - B) Sylvia Plath
    - C) Maya Angelou
    - D) Emily Dickinson
    - ** Answer: A**

31. **According to "You Start Dying Slowly", you die slowly if you become a slave to what?**
    - A) Your job
    - B) Your habits
    - C) Society
    - D) Technology
    - ** Answer: B**

32. **What does the poem say about self-esteem?**
    - A) You die slowly if you kill your self-esteem
    - B) Self-esteem is dangerous
    - C) It is better to be humble
    - D) It doesn't mention self-esteem
    - ** Answer: A**

33. **Who wrote "Funeral Blues"?**
    - A) W.B. Yeats
    - B) W.H. Auden
    - C) Dylan Thomas
    - D) Seamus Heaney
    - ** Answer: B**

34. **What is the tone of "Funeral Blues"?**
    - A) Joyful and celebratory
    - B) Deeply sorrowful and despairing
    - C) Angry and bitter
    - D) Calm and peaceful
    - ** Answer: B**

35. **What does the speaker in "Funeral Blues" want to happen to the clocks?**
    - A) Wind them up
    - B) Stop all the clocks
    - C) Sell them
    - D) Ignore them
    - ** Answer: B**

36. **What did the deceased mean to the speaker?**
    - A) "He was my North, my South, my East and West"
    - B) "He was just a friend"
    - C) "He was a passing shadow"
    - D) "He was my enemy"
    - ** Answer: A**

37. **What does the speaker in "Funeral Blues" want to do to the moon and stars?**
    - A) Pray to them
    - B) Dismantle the sun, pack up the moon / put out the stars
    - C) Paint them
    - D) Sing to them
    - ** Answer: B**

38. **Who is the author of "Age of Infancy" (from the syllabus context)?**
    - A) Faiz Ahmad Faiz
    - B) Allama Iqbal
    - C) Mirza Ghalib
    - D) Mir Taqi Mir
    - ** Answer: B**

39. **What is the focus of "Age of Infancy"?**
    - A) The struggles of adulthood
    - B) The pure, innocent worldview of a child and maternal love
    - C) Political freedom
    - D) War
    - ** Answer: B**

40. **What represents the universe for the infant?**
    - A) The stars
    - B) "The expanse of mother's bosom"
    - C) The sky
    - D) The house
    - ** Answer: B**

41. **Who wrote "Sur Sasui"?**
    - A) Bulleh Shah
    - B) Shah Abdul Latif Bhittai
    - C) Sachal Sarmast
    - D) Khawaja Ghulam Farid
    - ** Answer: B**

42. **What is the central theme of "Sur Sasui"?**
    - A) Political power
    - B) Devotion, suffering for love, and the journey to find the beloved
    - C) Nature's beauty
    - D) Wealth and greed
    - ** Answer: B**

43. **What does "Sasui" represent metaphorically?**
    - A) The cruel world
    - B) The human soul seeking the divine
    - C) A lost child
    - D) A queen
    - ** Answer: B**

44. **What must Sasui endure on her journey?**
    - A) A comfortable carriage ride
    - B) Scorching heat, rough terrain, and physical pain
    - C) A sea voyage
    - D) Nothing, it was easy
    - ** Answer: B**

45. **What does the phrase "Burn as long as you live" imply in Sur Sasui?**
    - A) Literal fire
    - B) The continuous pain and passion of true devotion
    - C) Anger towards society
    - D) Destructive behavior
    - ** Answer: B**

46. **Which poem focuses heavily on the theme of grief?**
    - A) "If"
    - B) "Funeral Blues"
    - C) "Age of Infancy"
    - D) "Ulysses"
    - ** Answer: B**

47. **Which poem focuses heavily on the theme of perseverance in old age?**
    - A) "Sur Sasui"
    - B) "Ulysses"
    - C) "All the World's a Stage"
    - D) "You Start Dying Slowly"
    - ** Answer: B**

48. **Which poem focuses on stoicism and balanced manhood?**
    - A) "If"
    - B) "Funeral Blues"
    - C) "Sur Sasui"
    - D) "Age of Infancy"
    - ** Answer: A**

49. **In "All the World's a Stage", who wears "spectacles on nose"?**
    - A) The Justice
    - B) The Pantaloon / Sixth stage
    - C) The Lover
    - D) The Schoolboy
    - ** Answer: B**

50. **What is the overarching message of "You Start Dying Slowly"?**
    - A) Avoid risks
    - B) Live life fully and passionately
    - C) Focus on making money
    - D) Stay in your comfort zone
    - ** Answer: B**
`;

const mcqs_sectionc = `
11. **Who is the protagonist of Great Expectations?**
    - A) Joe Gargery
    - B) Pip
    - C) Herbert Pocket
    - D) Bentley Drummle
    - ** Answer: B**

12. **What is Pip's real full name?**
    - A) Philip Pirrip
    - B) Peter Piper
    - C) Paul Pirrip
    - D) Patrick Pip
    - ** Answer: A**

13. **Who is Mrs. Joe Gargery?**
    - A) Pip's aunt
    - B) Pip's older sister
    - C) Pip's mother
    - D) Pip's teacher
    - ** Answer: B**

14. **How does Mrs. Joe treat Pip?**
    - A) With tender love
    - B) Harshly, she raises him "by hand"
    - C) She ignores him
    - D) She spoils him
    - ** Answer: B**

15. **What is Joe Gargery's profession?**
    - A) Carpenter
    - B) Blacksmith
    - C) Lawyer
    - D) Miller
    - ** Answer: B**

16. **Who is the escaped convict Pip helps?**
    - A) Compeyson
    - B) Abel Magwitch
    - C) Orlick
    - D) Arthur Havisham
    - ** Answer: B**

17. **What does Pip steal for the convict?**
    - A) Money and clothes
    - B) A file and some food/pork pie
    - C) A horse
    - D) A boat
    - ** Answer: B**

18. **Why does the convict need a file?**
    - A) To sharpen a knife
    - B) To cut off his leg iron
    - C) To fix a door
    - D) To break a window
    - ** Answer: B**

19. **Who is the other convict on the marshes?**
    - A) Jaggers
    - B) Compeyson
    - C) Wemmick
    - D) Drummle
    - ** Answer: B**

20. **Who is Compeyson?**
    - A) Magwitch's brother
    - B) Magwitch's enemy and the man who broke Miss Havisham's heart
    - C) Pip's uncle
    - D) A police officer
    - ** Answer: B**

21. **What is the name of Miss Havisham's house?**
    - A) Bleak House
    - B) Satis House
    - C) Manor Farm
    - D) The Forge
    - ** Answer: B**

22. **What does the name "Satis" mean?**
    - A) Sadness
    - B) Enough
    - C) Wealth
    - D) Darkness
    - ** Answer: B**

23. **At what time are all the clocks stopped in Satis House?**
    - A) Twelve o'clock
    - B) Twenty minutes to nine
    - C) Six o'clock
    - D) Three fifteen
    - ** Answer: B**

24. **What is Miss Havisham wearing when Pip first meets her?**
    - A) A black mourning dress
    - B) A faded wedding dress
    - C) A colorful gown
    - D) Rags
    - ** Answer: B**

25. **Who is the beautiful but cold girl living with Miss Havisham?**
    - A) Biddy
    - B) Estella
    - C) Clara
    - D) Molly
    - ** Answer: B**

26. **What card game do Pip and Estella play?**
    - A) Poker
    - B) Beggar my Neighbor
    - C) Whist
    - D) Hearts
    - ** Answer: B**

27. **What does Estella criticize Pip for?**
    - A) His lack of money
    - B) His coarse hands and thick boots
    - C) His bad grammar
    - D) His dirty hair
    - ** Answer: B**

28. **What is Pip's reaction to Estella's criticism?**
    - A) He insults her back
    - B) He feels ashamed of his background and wants to be a gentleman
    - C) He laughs
    - D) He doesn't care
    - ** Answer: B**

29. **Who is the "pale young gentleman" Pip fights?**
    - A) Bentley Drummle
    - B) Herbert Pocket
    - C) Startop
    - D) Orlick
    - ** Answer: B**

30. **Who tells Pip about his "great expectations"?**
    - A) Miss Havisham
    - B) Mr. Jaggers
    - C) Joe Gargery
    - D) Pumblechook
    - ** Answer: B**

31. **What is Mr. Jaggers's profession?**
    - A) Doctor
    - B) A powerful London lawyer
    - C) Judge
    - D) Banker
    - ** Answer: B**

32. **What condition is attached to Pip's new wealth?**
    - A) He must marry Estella
    - B) He must keep the name Pip and not ask who his benefactor is
    - C) He must live in London forever
    - D) He must never see Joe again
    - ** Answer: B**

33. **Who does Pip believe is his benefactor?**
    - A) Mr. Jaggers
    - B) Miss Havisham
    - C) Magwitch
    - D) The Crown
    - ** Answer: B**

34. **Who becomes Pip's roommate and close friend in London?**
    - A) Bentley Drummle
    - B) Herbert Pocket
    - C) Wemmick
    - D) Startop
    - ** Answer: B**

35. **How does Pip treat Joe when Joe visits London?**
    - A) With great joy
    - B) He is embarrassed by him and treats him coldly
    - C) He introduces him to all his friends
    - D) He asks him for money
    - ** Answer: B**

36. **Who is Biddy?**
    - A) A wealthy London lady
    - B) A kind girl from Pip's village who teaches him to read
    - C) Miss Havisham's maid
    - D) Estella's sister
    - ** Answer: B**

37. **Who attacks Mrs. Joe, leaving her brain-damaged?**
    - A) Magwitch
    - B) Orlick
    - C) Compeyson
    - D) Pip
    - ** Answer: B**

38. **Who is Orlick?**
    - A) A lawyer's clerk
    - B) Joe's malicious journeyman blacksmith
    - C) A London merchant
    - D) A prison guard
    - ** Answer: B**

39. **When does Pip discover the true identity of his benefactor?**
    - A) When he gets married
    - B) On his 23rd birthday
    - C) When Miss Havisham dies
    - D) Before he goes to London
    - ** Answer: B**

40. **How does Pip feel when he learns Magwitch is his benefactor?**
    - A) Overjoyed
    - B) Horrified and disgusted
    - C) Relieved
    - D) Indifferent
    - ** Answer: B**

41. **What happens if Magwitch is caught in England?**
    - A) He will be sent back to Australia
    - B) He will be hanged
    - C) He will be fined
    - D) He will be imprisoned for life
    - ** Answer: B**

42. **What is Magwitch's alias?**
    - A) Mr. Campbell
    - B) Provis
    - C) John Smith
    - D) Uncle Abel
    - ** Answer: B**

43. **Who is Estella's biological father?**
    - A) Mr. Jaggers
    - B) Magwitch
    - C) Compeyson
    - D) Arthur Havisham
    - ** Answer: B**

44. **Who is Estella's biological mother?**
    - A) Miss Havisham
    - B) Molly, Jaggers's housekeeper
    - C) Mrs. Joe
    - D) Biddy
    - ** Answer: B**

45. **Who does Estella marry instead of Pip?**
    - A) Herbert Pocket
    - B) Bentley Drummle
    - C) Startop
    - D) Mr. Jaggers
    - ** Answer: B**

46. **What kind of man is Bentley Drummle?**
    - A) Kind and gentle
    - B) Cruel, abusive, and wealthy
    - C) Poor but honest
    - D) A brilliant scholar
    - ** Answer: B**

47. **How does Miss Havisham die?**
    - A) Of old age
    - B) Her wedding dress catches fire
    - C) She is murdered
    - D) She starves herself
    - ** Answer: B**

48. **What does Miss Havisham ask of Pip before she dies?**
    - A) To marry Estella
    - B) To forgive her
    - C) To take her money
    - D) To rebuild Satis House
    - ** Answer: B**

49. **What happens to Pip's wealth?**
    - A) He gives it to Joe
    - B) It is confiscated by the Crown after Magwitch is arrested
    - C) He invests it and becomes richer
    - D) Estella steals it
    - ** Answer: B**

50. **Who pays off Pip's debts when he falls ill?**
    - A) Herbert Pocket
    - B) Joe Gargery
    - C) Mr. Jaggers
    - D) Miss Havisham
    - ** Answer: B**
`;

const files = [
    { name: 'docs/unit-7-1.md', content: mcqs_unit7 },
    { name: 'docs/section-b.md', content: mcqs_sectionb },
    { name: 'docs/section-c.md', content: mcqs_sectionc }
];

for (const f of files) {
    const fullPath = path.join(__dirname, '..', f.name);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        let insertPos = content.indexOf('### Section B:');
        if (insertPos === -1) insertPos = content.indexOf('##  VOCABULARY BUILDER');
        if (insertPos === -1) insertPos = content.indexOf('##  QUICK REVISION SHEET');
        
        if (insertPos !== -1) {
            content = content.slice(0, insertPos) + f.content + '\n\n' + content.slice(insertPos);
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Appended MCQs to ' + f.name);
        } else {
            content += '\n\n' + f.content;
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Appended MCQs to ' + f.name + ' at the end.');
        }
    } else {
        console.log('Not found: ' + f.name);
    }
}
