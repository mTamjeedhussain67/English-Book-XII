const fs = require('fs');
const path = require('path');

const mcqs_unit1 = `
21. **What kind of friend did the Miller consider himself to be?**
    - A) A generous benefactor
    - B) A devoted friend
    - C) A distant acquaintance
    - D) A harsh critic
    - ** Answer: B**

22. **What was Hans's profession?**
    - A) A miller
    - B) A blacksmith
    - C) A gardener
    - D) A doctor
    - ** Answer: C**

23. **What did Hans sell first to buy bread in winter?**
    - A) His wheelbarrow
    - B) His silver buttons
    - C) His silver chain
    - D) His big pipe
    - ** Answer: B**

24. **What did the Miller's youngest son offer to do when he heard about Hans in winter?**
    - A) Give him half his porridge
    - B) Give him a blanket
    - C) Go visit him
    - D) Give him a coin
    - ** Answer: A**

25. **How did the Miller react to his son's offer?**
    - A) He praised his generosity
    - B) He got angry and called him foolish
    - C) He agreed and sent the porridge
    - D) He ignored him
    - ** Answer: B**

26. **What was the weather like when the Miller asked Hans to fetch the doctor?**
    - A) Sunny and clear
    - B) A gentle rain
    - C) A terrible storm / hurricane
    - D) Snowy and freezing
    - ** Answer: C**

27. **Why did Hans refuse the Miller's request initially?**
    - A) He was too tired
    - B) He was scared of the dark
    - C) He didn't refuse, he agreed immediately
    - D) He was angry at the Miller
    - ** Answer: C**

28. **What item did Hans desperately need to fetch the doctor safely?**
    - A) A horse
    - B) A lantern
    - C) A map
    - D) A warm coat
    - ** Answer: B**

29. **Why didn't the Miller give his lantern to Hans?**
    - A) He had lost it
    - B) Because it was new and might get ruined
    - C) Because he needed it himself
    - D) Because it was broken
    - ** Answer: B**

30. **Where did Hans drown?**
    - A) In the river
    - B) In the ocean
    - C) In a pool on the moor
    - D) In a well
    - ** Answer: C**

31. **Who found Hans's body the next day?**
    - A) The Miller
    - B) The Doctor
    - C) Goatherds / shepherds
    - D) The Miller's son
    - ** Answer: C**

32. **Who was the chief mourner at Hans's funeral?**
    - A) The Doctor
    - B) The Mayor
    - C) The Miller
    - D) Hans's brother
    - ** Answer: C**

33. **What reason did the Miller give for walking at the front of the funeral procession?**
    - A) He was the oldest man in the village
    - B) He had paid for the funeral
    - C) He was his most devoted friend
    - D) He was the mayor
    - ** Answer: C**

34. **What did the Miller complain about after the funeral?**
    - A) The cost of the flowers
    - B) That he had the wheelbarrow left on his hands
    - C) That it was raining
    - D) That no one thanked him
    - ** Answer: B**

35. **How did the Miller describe the wheelbarrow?**
    - A) It was brand new
    - B) It was made of gold
    - C) It was in very bad repair and missing spokes
    - D) It was very expensive
    - ** Answer: C**

36. **What did the Miller tell Hans to fix on the barn?**
    - A) The door
    - B) The roof
    - C) The windows
    - D) The floor
    - ** Answer: B**

37. **What flower did the Miller ask Hans to pick for him?**
    - A) Roses
    - B) Lilies
    - C) Primroses
    - D) Tulips
    - ** Answer: C**

38. **What did Hans give to the Miller to mend the barn roof?**
    - A) A bag of nails
    - B) A plank of wood
    - C) A bundle of straw
    - D) A bucket of tar
    - ** Answer: B**

39. **What did the Miller's wife think of her husband's ideas on friendship?**
    - A) She thought they were cruel
    - B) She admired them and thought they were beautiful
    - C) She ignored them
    - D) She argued with him about them
    - ** Answer: B**

40. **What is the symbolic meaning of the Miller's comfortable house while Hans freezes?**
    - A) The value of hard work
    - B) The disparity between rich and poor
    - C) The importance of insulation
    - D) The joy of winter
    - ** Answer: B**

41. **Which literary device is mainly used when the Miller calls himself a "devoted friend"?**
    - A) Simile
    - B) Metaphor
    - C) Irony
    - D) Personification
    - ** Answer: C**

42. **Why didn't Hans sell his wheelbarrow during the winter?**
    - A) Because he did sell it
    - B) Because he needed it
    - C) Because it was stolen
    - D) Because the Miller took it
    - ** Answer: A**

43. **What is the tone of the story?**
    - A) Joyful
    - B) Satirical
    - C) Romantic
    - D) Factual
    - ** Answer: B**

44. **Who is the author of "The Devoted Friend"?**
    - A) Charles Dickens
    - B) Oscar Wilde
    - C) William Shakespeare
    - D) Mark Twain
    - ** Answer: B**

45. **In what collection was this story originally published?**
    - A) The Happy Prince and Other Tales
    - B) Grimms' Fairy Tales
    - C) Aesop's Fables
    - D) The Jungle Book
    - ** Answer: A**

46. **What animal's story frames the narrative of "The Devoted Friend"?**
    - A) The Lion and the Mouse
    - B) The Linnet and the Water-rat
    - C) The Fox and the Crow
    - D) The Tortoise and the Hare
    - ** Answer: B**

47. **How does the Water-rat react to the story's moral?**
    - A) He cries
    - B) He apologizes
    - C) He dislikes it and walks away
    - D) He praises it
    - ** Answer: C**

48. **What did the Miller claim was a "privilege"?**
    - A) Working in the garden
    - B) Hearing him talk about friendship
    - C) Carrying flour
    - D) Fixing the roof
    - ** Answer: B**

49. **What did Hans do instead of tending to his own flowers?**
    - A) He slept
    - B) He did chores for the Miller
    - C) He traveled
    - D) He read books
    - ** Answer: B**

50. **What is the ultimate consequence of Hans's devotion?**
    - A) He becomes rich
    - B) He becomes famous
    - C) His tragic death
    - D) He marries the Miller's daughter
    - ** Answer: C**
`;

const mcqs_unit2 = `
11. **When was the "I Have a Dream" speech delivered?**
    - A) August 28, 1963
    - B) July 4, 1776
    - C) January 1, 1863
    - D) April 4, 1968
    - ** Answer: A**

12. **Where was the speech delivered?**
    - A) The White House
    - B) Lincoln Memorial, Washington D.C.
    - C) Central Park, New York
    - D) Independence Hall, Philadelphia
    - ** Answer: B**

13. **What document does King refer to at the beginning of his speech?**
    - A) The Constitution
    - B) The Declaration of Independence
    - C) The Emancipation Proclamation
    - D) The Bill of Rights
    - ** Answer: C**

14. **How many years had passed since the Emancipation Proclamation?**
    - A) 50 years
    - B) 100 years / Five score years
    - C) 200 years
    - D) 150 years
    - ** Answer: B**

15. **What "check" does King say America has given the Negro people?**
    - A) A blank check
    - B) A generous check
    - C) A bad check
    - D) A stolen check
    - ** Answer: C**

16. **What does the "bank of justice" metaphor represent?**
    - A) The national treasury
    - B) The nation's promise of equal rights
    - C) A literal bank in Washington
    - D) The legal system
    - ** Answer: B**

17. **What state does King specifically mention as sweltering with the heat of injustice?**
    - A) New York
    - B) California
    - C) Mississippi
    - D) Massachusetts
    - ** Answer: C**

18. **King mentions the red hills of which state where sons of former slaves and slave owners will sit together?**
    - A) Alabama
    - B) Georgia
    - C) Texas
    - D) Virginia
    - ** Answer: B**

19. **What is the "promissory note" King refers to?**
    - A) The Emancipation Proclamation
    - B) The Constitution and Declaration of Independence
    - C) A loan from the bank
    - D) A treaty with Native Americans
    - ** Answer: B**

20. **King advises his people not to drink from the cup of what?**
    - A) Bitterness and hatred
    - B) Sorrow and despair
    - C) Apathy and indifference
    - D) Violence and revenge
    - ** Answer: A**

21. **What does King urge his followers to meet physical force with?**
    - A) More physical force
    - B) Weapons
    - C) Soul force
    - D) Silence
    - ** Answer: C**

22. **Which state's governor does King mention as having his lips dripping with the words of interposition and nullification?**
    - A) Georgia
    - B) Mississippi
    - C) Alabama
    - D) Arkansas
    - ** Answer: C**

23. **King dreams that his children will be judged by what?**
    - A) The color of their skin
    - B) Their wealth
    - C) The content of their character
    - D) Their education
    - ** Answer: C**

24. **What mountain range in New York does King mention?**
    - A) The Rockies
    - B) The Appalachians
    - C) The prodigious hilltops / mighty mountains
    - D) The Sierra Nevada
    - ** Answer: C**

25. **"Let freedom ring from the snow-capped Rockies of..."**
    - A) Colorado
    - B) Utah
    - C) Wyoming
    - D) Montana
    - ** Answer: A**

26. **"Let freedom ring from the curvaceous slopes of..."**
    - A) Oregon
    - B) Washington
    - C) California
    - D) Nevada
    - ** Answer: C**

27. **"Let freedom ring from Stone Mountain of..."**
    - A) Georgia
    - B) Tennessee
    - C) South Carolina
    - D) North Carolina
    - ** Answer: A**

28. **What phrase is repeated throughout the climax of the speech?**
    - A) We shall overcome
    - B) Let freedom ring
    - C) Now is the time
    - D) I have a dream
    - ** Answer: B**

29. **King says they cannot be satisfied as long as the Negro is the victim of the unspeakable horrors of what?**
    - A) Poverty
    - B) Police brutality
    - C) Unemployment
    - D) Segregation
    - ** Answer: B**

30. **What metaphor does King use to describe segregation?**
    - A) A locked door
    - B) A dark and desolate valley
    - C) A heavy chain
    - D) A high wall
    - ** Answer: B**

31. **What metaphor does King use to describe racial justice?**
    - A) A sunlit path
    - B) A calm river
    - C) A sturdy bridge
    - D) A bright star
    - ** Answer: A**

32. **What is the tone of the speech?**
    - A) Angry and resentful
    - B) Inspiring and urgent
    - C) Sad and defeated
    - D) Sarcastic and cynical
    - ** Answer: B**

33. **The speech played a major role in the passage of which act?**
    - A) The Voting Rights Act of 1965
    - B) The Civil Rights Act of 1964
    - C) The Fair Housing Act
    - D) The Equal Pay Act
    - ** Answer: B**

34. **What term does King use for the situation of African Americans living in poverty amidst wealth?**
    - A) A lonely island of poverty in a vast ocean of material prosperity
    - B) A desert of despair in an oasis of hope
    - C) A valley of tears in a mountain of joy
    - D) A prison of poverty in a palace of wealth
    - ** Answer: A**

35. **What is the "fierce urgency of now"?**
    - A) The need for immediate action for civil rights
    - B) The rush to pass a new law
    - C) The panic of a riot
    - D) The haste to leave the country
    - ** Answer: A**

36. **King warns against taking the "tranquilizing drug of..."**
    - A) Gradualism
    - B) Apathy
    - C) Violence
    - D) Despair
    - ** Answer: A**

37. **The phrase "five score years ago" is an allusion to which speech?**
    - A) George Washington's Farewell Address
    - B) The Gettysburg Address by Abraham Lincoln
    - C) John F. Kennedy's Inaugural Address
    - D) Franklin D. Roosevelt's Pearl Harbor Speech
    - ** Answer: B**

38. **What season does King say must pass before equality is achieved?**
    - A) The freezing winter of inequality
    - B) The sweltering summer of the Negro's legitimate discontent
    - C) The stormy spring of protest
    - D) The gloomy autumn of despair
    - ** Answer: B**

39. **What season of equality is approaching?**
    - A) An invigorating autumn of freedom
    - B) A warm summer of justice
    - C) A bright spring of hope
    - D) A calm winter of peace
    - ** Answer: A**

40. **King says they will not be satisfied until justice rolls down like what?**
    - A) A waterfall
    - B) Waters
    - C) A river
    - D) A rainstorm
    - ** Answer: B**

41. **King says they will not be satisfied until righteousness rolls down like what?**
    - A) A mighty stream
    - B) A gentle brook
    - C) A raging river
    - D) A tidal wave
    - ** Answer: A**

42. **What does King call the white people who joined the march?**
    - A) Sympathizers
    - B) Allies
    - C) Brothers whose destiny is tied up with theirs
    - D) Supporters
    - ** Answer: C**

43. **What song does King quote near the end of his speech?**
    - A) The Star-Spangled Banner
    - B) America the Beautiful
    - C) My Country 'Tis of Thee
    - D) God Bless America
    - ** Answer: C**

44. **The phrase "Free at last!" comes from where?**
    - A) A poem by Langston Hughes
    - B) An old Negro spiritual
    - C) The Bible
    - D) The Constitution
    - ** Answer: B**

45. **What does King hope will happen to the "jangling discords" of the nation?**
    - A) They will be silenced
    - B) They will be ignored
    - C) They will be transformed into a beautiful symphony of brotherhood
    - D) They will be punished
    - ** Answer: C**

46. **What does King describe as a "dark and desolate valley"?**
    - A) Slavery
    - B) Segregation
    - C) Poverty
    - D) Ignorance
    - ** Answer: B**

47. **What does King describe as a "solid rock"?**
    - A) The Constitution
    - B) Brotherhood
    - C) The church
    - D) The government
    - ** Answer: B**

48. **What right were African Americans in the South often denied, which King mentions?**
    - A) The right to own property
    - B) The right to vote
    - C) The right to bear arms
    - D) The right to free speech
    - ** Answer: B**

49. **What does the "vaults of opportunity" refer to?**
    - A) Bank safes
    - B) The nation's wealth and potential for all citizens
    - C) Educational institutions
    - D) Government buildings
    - ** Answer: B**

50. **What is the ultimate message of the speech?**
    - A) African Americans should move to Africa
    - B) Violence is the only way to achieve equality
    - C) Hope for a united, racially equal America
    - D) The government should pay reparations
    - ** Answer: C**
`;

const mcqs_unit3 = `
11. **Who is the author of "The Conquest of Happiness"?**
    - A) Oscar Wilde
    - B) Bertrand Russell
    - C) Charles Dickens
    - D) Mark Twain
    - ** Answer: B**

12. **What does Russell identify as the most universal cause of unhappiness?**
    - A) Poverty
    - B) Self-absorption / Egocentrism
    - C) Illness
    - D) Lack of education
    - ** Answer: B**

13. **According to Russell, what role does envy play in modern society?**
    - A) It is a primary cause of unhappiness
    - B) It is a motivating force for good
    - C) It is completely harmless
    - D) It only affects the rich
    - ** Answer: A**

14. **What does Russell say about competition?**
    - A) It is essential for survival
    - B) The obsession with it ruins the joy of life
    - C) It makes people happier
    - D) It should be taught in schools
    - ** Answer: B**

15. **What type of fatigue does Russell consider most damaging?**
    - A) Muscle fatigue
    - B) Sleep deprivation
    - C) Nervous / Psychological fatigue
    - D) Eye strain
    - ** Answer: C**

16. **How does Russell view boredom?**
    - A) As a disease to be cured
    - B) As a necessary part of life that people try too hard to escape
    - C) As the ultimate goal of life
    - D) As something only lazy people experience
    - ** Answer: B**

17. **What is Russell's opinion on excitement?**
    - A) It is the key to happiness
    - B) Everyone needs as much as possible
    - C) Too much excitement leads to exhaustion and a craving for more
    - D) It should be avoided entirely
    - ** Answer: C**

18. **What does Russell suggest is the cure for self-absorption?**
    - A) Meditation
    - B) Therapy
    - C) Developing external interests
    - D) Reading books about oneself
    - ** Answer: C**

19. **How does Russell view affection?**
    - A) It is an illusion
    - B) Receiving and giving affection is crucial for happiness
    - C) It makes people weak
    - D) It is only for children
    - ** Answer: B**

20. **What role does "zest" play in Russell's philosophy?**
    - A) It is a type of food
    - B) It is the secret to happiness—an appetite for life
    - C) It is a cause of unhappiness
    - D) It is irrelevant
    - ** Answer: B**

21. **What happens when a person focuses only on their own sins, follies, and shortcomings?**
    - A) They become perfect
    - B) They become a victim of the "sinner's" unhappiness
    - C) They become enlightened
    - D) They become successful
    - ** Answer: B**

22. **What does the "megalomanic" suffer from according to Russell?**
    - A) The desire to be loved
    - B) The desire to be powerful rather than to be loved
    - C) A fear of heights
    - D) A lack of ambition
    - ** Answer: B**

23. **What does the "narcissist" suffer from?**
    - A) The desire to be admired rather than to be loved
    - B) A fear of water
    - C) The desire to be powerful
    - D) A lack of self-esteem
    - ** Answer: A**

24. **According to Russell, how do people try to escape boredom?**
    - A) By sleeping
    - B) Through harmful habits like gambling, alcohol, or excessive excitement
    - C) By reading poetry
    - D) By taking long walks
    - ** Answer: B**

25. **What is the "Byronic unhappiness"?**
    - A) A fear of dogs
    - B) A philosophical pessimism and belief that life is meaningless
    - C) A type of physical illness
    - D) Unhappiness caused by poverty
    - ** Answer: B**

26. **How does Russell view the pursuit of wealth?**
    - A) It is the most noble goal
    - B) It guarantees happiness
    - C) It is a false path to happiness if it becomes the sole focus
    - D) It is a sin
    - ** Answer: C**

27. **What is the relationship between work and happiness?**
    - A) Work always makes people unhappy
    - B) Constructive work provides a sense of purpose and prevents boredom
    - C) Only manual labor brings happiness
    - D) Work is irrelevant to happiness
    - ** Answer: B**

28. **What does Russell say about having a "hobby"?**
    - A) It is a waste of time
    - B) It is only for children
    - C) It provides relief from the stresses of daily life
    - D) It is a sign of laziness
    - ** Answer: C**

29. **How does Russell view the importance of family?**
    - A) It is a constant source of misery
    - B) It can be a source of profound happiness if based on mutual respect
    - C) It is unnecessary in modern society
    - D) It is only important for financial reasons
    - ** Answer: B**

30. **What does Russell consider the "happy man" to be like?**
    - A) One who lives subjectively and worries constantly
    - B) One who lives objectively, with free affections and wide interests
    - C) One who isolates himself from the world
    - D) One who seeks power over others
    - ** Answer: B**

31. **How does excessive worry affect a person?**
    - A) It makes them smarter
    - B) It drains their nervous energy and leads to breakdown
    - C) It improves their problem-solving skills
    - D) It has no effect
    - ** Answer: B**

32. **What is Russell's advice for dealing with worry?**
    - A) Ignore it completely
    - B) Talk about it constantly
    - C) Face the worst possible outcome rationally, and then dismiss it
    - D) Take medication
    - ** Answer: C**

33. **How does Russell differentiate between physical and nervous fatigue?**
    - A) They are exactly the same
    - B) Physical fatigue promotes sleep; nervous fatigue prevents it
    - C) Nervous fatigue promotes sleep; physical fatigue prevents it
    - D) Physical fatigue is always worse
    - ** Answer: B**

34. **What is the impact of public opinion on happiness?**
    - A) It always increases happiness
    - B) Fearing public opinion restricts individual freedom and joy
    - C) It provides necessary guidance
    - D) It has no impact
    - ** Answer: B**

35. **How does Russell view the "sense of sin"?**
    - A) As a necessary moral compass
    - B) As a destructive force instilled in childhood that causes lifelong guilt
    - C) As a path to enlightenment
    - D) As a sign of intelligence
    - ** Answer: B**

36. **What is the role of "resignation" in happiness?**
    - A) It means giving up on life
    - B) Accepting the inevitable without despair frees energy for other things
    - C) It is a sign of weakness
    - D) It leads to depression
    - ** Answer: B**

37. **How does Russell define "effort" in the context of happiness?**
    - A) Happiness comes effortlessly
    - B) Happiness is not passively received; it must be actively pursued
    - C) Effort is only required for making money
    - D) Effort is the opposite of happiness
    - ** Answer: B**

38. **What does Russell say about the feeling of being unloved?**
    - A) It makes people stronger
    - B) It creates a defensive, unhappy attitude towards the world
    - C) It is a rare feeling
    - D) It leads to greater independence
    - ** Answer: B**

39. **How does Russell view "conscious" vs "unconscious" thought in solving problems?**
    - A) Conscious thought is always better
    - B) He advocates giving the unconscious mind time to work on problems
    - C) Unconscious thought is useless
    - D) They are equally effective
    - ** Answer: B**

40. **What is Russell's view on the balance between effort and resignation?**
    - A) Effort is more important than resignation
    - B) Resignation is more important than effort
    - C) A happy life requires a balance of both
    - D) Neither is necessary for happiness
    - ** Answer: C**

41. **What does the "martyr" complex lead to?**
    - A) Sainthood
    - B) Resentment and making others unhappy
    - C) Great happiness
    - D) Increased popularity
    - ** Answer: B**

42. **How does Russell suggest we view our own importance in the universe?**
    - A) As the center of the universe
    - B) With a sense of proportion, recognizing our insignificance
    - C) As superior to all others
    - D) As completely irrelevant
    - ** Answer: B**

43. **What is the danger of comparing oneself to others?**
    - A) It leads to self-improvement
    - B) It breeds envy, which destroys contentment
    - C) It creates healthy competition
    - D) It builds strong friendships
    - ** Answer: B**

44. **According to Russell, what happens when a person loses their "zest"?**
    - A) They become wiser
    - B) Life becomes a chore rather than an adventure
    - C) They become more productive
    - D) They find true peace
    - ** Answer: B**

45. **How does Russell describe the modern urban lifestyle?**
    - A) As the ideal way to live
    - B) As unnatural and contributing to nervous fatigue
    - C) As relaxing and peaceful
    - D) As the only path to happiness
    - ** Answer: B**

46. **What does Russell suggest is the best way to overcome fear?**
    - A) By hiding from it
    - B) By analyzing it rationally rather than avoiding it
    - C) By taking unnecessary risks
    - D) By ignoring it
    - ** Answer: B**

47. **How does Russell view the role of intellect in happiness?**
    - A) Intellect guarantees happiness
    - B) Intellect should be used to understand the world, not to dwell on personal misery
    - C) Intellectuals are always unhappy
    - D) Intellect has nothing to do with happiness
    - ** Answer: B**

48. **What is the "intoxication" of power?**
    - A) A harmless feeling of success
    - B) A dangerous illusion that leads to isolation and eventual downfall
    - C) The best kind of happiness
    - D) A necessary trait for leaders
    - ** Answer: B**

49. **How does Russell describe the ideal attitude towards others?**
    - A) Suspicious and guarded
    - B) Friendly, observant, and free from the desire to dominate
    - C) Competitive and aggressive
    - D) Indifferent and aloof
    - ** Answer: B**

50. **What is the ultimate message of "The Conquest of Happiness"?**
    - A) Happiness is impossible to achieve
    - B) Happiness is an active, outward-facing state that requires conscious cultivation
    - C) Wealth is the only path to happiness
    - D) Happiness is entirely dependent on luck
    - ** Answer: B**
`;

const files = [
    { name: 'docs/unit-1-1.md', content: mcqs_unit1 },
    { name: 'docs/unit-2-1.md', content: mcqs_unit2 },
    { name: 'docs/unit-3-1.md', content: mcqs_unit3 }
];

for (const f of files) {
    const fullPath = path.join(__dirname, '..', f.name);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Find end of MCQs. We can just append before Section B or VOCABULARY BUILDER or QUICK REVISION SHEET
        // Let's find "##  VOCABULARY BUILDER" or "### Section B: Vocabulary" or "### Section B:"
        let insertPos = content.indexOf('### Section B:');
        if (insertPos === -1) insertPos = content.indexOf('##  VOCABULARY BUILDER');
        if (insertPos === -1) insertPos = content.indexOf('##  QUICK REVISION SHEET');
        
        if (insertPos !== -1) {
            content = content.slice(0, insertPos) + f.content + '\n\n' + content.slice(insertPos);
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Appended MCQs to ' + f.name);
        } else {
            // Append to very end if no marker found
            content += '\n\n' + f.content;
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log('Appended MCQs to ' + f.name + ' at the end.');
        }
    } else {
        console.log('Not found: ' + f.name);
    }
}
