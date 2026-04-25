const fs = require('fs');
const path = require('path');

const mcqs_unit4 = `
11. **Who was Daedalus?**
    - A) A famous warrior
    - B) A famous architect and inventor
    - C) A king
    - D) A god
    - ** Answer: B**

12. **Who was King Minos?**
    - A) The King of Crete
    - B) The King of Athens
    - C) A Greek god
    - D) Daedalus's brother
    - ** Answer: A**

13. **Why did King Minos imprison Daedalus?**
    - A) Daedalus stole from him
    - B) He lost the king's favor
    - C) He refused to build the Labyrinth
    - D) He murdered someone
    - ** Answer: B**

14. **What did Daedalus build for King Minos?**
    - A) A temple
    - B) A ship
    - C) The Labyrinth
    - D) A chariot
    - ** Answer: C**

15. **What was the Labyrinth used for?**
    - A) To store treasure
    - B) To hold the Minotaur / as a prison
    - C) For royal gardens
    - D) As a fortress
    - ** Answer: B**

16. **Who was imprisoned with Daedalus?**
    - A) His wife
    - B) His brother
    - C) His son, Icarus
    - D) King Minos
    - ** Answer: C**

17. **What did Daedalus observe while imprisoned that gave him an idea for escape?**
    - A) The ocean waves
    - B) The flight of birds
    - C) The wind blowing leaves
    - D) A passing ship
    - ** Answer: B**

18. **What materials did Daedalus use to make the wings?**
    - A) Cloth, wood, and glue
    - B) Feathers, wax, and thread
    - C) Leaves, mud, and vines
    - D) Metal and leather
    - ** Answer: B**

19. **How did Icarus behave while his father made the wings?**
    - A) He helped seriously
    - B) He cried in fear
    - C) He played with the feathers and wax, oblivious to the danger
    - D) He slept
    - ** Answer: C**

20. **What was Daedalus's primary warning to Icarus before they flew?**
    - A) To fly as high as possible
    - B) To fly close to the water
    - C) To fly the middle course
    - D) To fly only at night
    - ** Answer: C**

21. **Why did Daedalus warn against flying too low?**
    - A) The sea's dampness would weigh down the feathers
    - B) Sharks might jump out
    - C) Ships would see them
    - D) The wind was too strong
    - ** Answer: A**

22. **Why did Daedalus warn against flying too high?**
    - A) The air was too thin
    - B) The sun's heat would melt the wax
    - C) The birds would attack
    - D) They would get lost in the clouds
    - ** Answer: B**

23. **How did Daedalus feel before taking off?**
    - A) Excited and happy
    - B) Angry
    - C) Apprehensive and worried for his son
    - D) Confident and brave
    - ** Answer: C**

24. **What did the shepherds and plowmen think when they saw Daedalus and Icarus flying?**
    - A) That they were demons
    - B) That they were birds
    - C) That they were gods
    - D) That they were magicians
    - ** Answer: C**

25. **How did Icarus feel once he was in the air?**
    - A) Terrified
    - B) Exhilarated and drunk with the thrill of flight
    - C) Bored
    - D) Tired
    - ** Answer: B**

26. **What caused Icarus to fly higher?**
    - A) A strong wind
    - B) He wanted to touch the sun
    - C) The joy and freedom of flying made him forget the warning
    - D) To escape a bird
    - ** Answer: C**

27. **What did Daedalus try to do when he saw Icarus flying too high?**
    - A) He flew higher to catch him
    - B) He called out to him, but Icarus couldn't hear
    - C) He ignored him
    - D) He threw something at him
    - ** Answer: B**

28. **What happened to the wax on Icarus's wings?**
    - A) It froze
    - B) It melted from the sun's heat
    - C) It dried out and cracked
    - D) It turned to water
    - ** Answer: B**

29. **What fell like snowflakes from Icarus's wings?**
    - A) Wax
    - B) Thread
    - C) The feathers
    - D) Leaves
    - ** Answer: C**

30. **What did Icarus try to do when he lost his wings?**
    - A) He tried to swim
    - B) He flailed his bare arms, but couldn't catch the air
    - C) He grabbed onto Daedalus
    - D) He called for help
    - ** Answer: B**

31. **What did Daedalus see floating on the water?**
    - A) Icarus's body
    - B) A few scattered feathers
    - C) The entire wing
    - D) A piece of clothing
    - ** Answer: B**

32. **What is the sea where Icarus drowned called today?**
    - A) The Mediterranean Sea
    - B) The Aegean Sea
    - C) The Icarian Sea
    - D) The Adriatic Sea
    - ** Answer: C**

33. **To what island did Daedalus fly after his son's death?**
    - A) Crete
    - B) Sicily
    - C) Cyprus
    - D) Rhodes
    - ** Answer: B**

34. **What did Daedalus do to honor his son?**
    - A) He built a temple to Apollo and hung up his wings
    - B) He built a statue
    - C) He wrote a book
    - D) He killed King Minos
    - ** Answer: A**

35. **What is the moral of the myth?**
    - A) Never try to fly
    - B) The importance of self-discipline and moderation / avoiding hubris
    - C) Always trust kings
    - D) Sun is dangerous
    - ** Answer: B**

36. **What literary term describes a story with a hidden moral meaning, like this myth?**
    - A) Metaphor
    - B) Allegory
    - C) Simile
    - D) Irony
    - ** Answer: B**

37. **What does "hubris" mean in the context of this myth?**
    - A) Humility
    - B) Intelligence
    - C) Excessive pride or defiance of the gods/limits
    - D) Fear
    - ** Answer: C**

38. **What does "cleave" mean in "cleave the air"?**
    - A) To clean
    - B) To attach
    - C) To cut or split through
    - D) To fall
    - ** Answer: C**

39. **What is a "fledgling"?**
    - A) An old bird
    - B) A young bird learning to fly
    - C) A type of feather
    - D) A tool
    - ** Answer: B**

40. **How is Daedalus characterized?**
    - A) Foolish and weak
    - B) Cunning, intelligent, but ultimately tragic
    - C) Evil and cruel
    - D) Lazy
    - ** Answer: B**

41. **How is Icarus characterized?**
    - A) Wise and cautious
    - B) Rash, youthful, disobedient, impulsive
    - C) Angry and rebellious
    - D) Sad and depressed
    - ** Answer: B**

42. **What does the "middle course" represent metaphorically?**
    - A) The ocean
    - B) Moderation and balance in life
    - C) A specific road in Greece
    - D) The sky
    - ** Answer: B**

43. **The myth of Icarus and Daedalus belongs to which mythology?**
    - A) Roman Mythology
    - B) Norse Mythology
    - C) Greek Mythology
    - D) Egyptian Mythology
    - ** Answer: C**

44. **Who is Apollo in Greek mythology?**
    - A) The god of the sea
    - B) The god of the underworld
    - C) The god of the sun
    - D) The god of war
    - ** Answer: C**

45. **Why did Daedalus build a temple to Apollo?**
    - A) Because Apollo told him to
    - B) To appease him / as an offering after Icarus was killed by the sun
    - C) To hide from Minos
    - D) To live there
    - ** Answer: B**

46. **What did Daedalus vow to never do again?**
    - A) Build a labyrinth
    - B) Attempt to fly
    - C) Return to Crete
    - D) Have children
    - ** Answer: B**

47. **How did King Minos feel about Daedalus's escape?**
    - A) He was happy
    - B) He didn't care
    - C) He was angry and tried to find him
    - D) He forgave him
    - ** Answer: C**

48. **What is the symbolic meaning of the sun in this story?**
    - A) Coldness
    - B) Divine power, truth, or the limits of human ambition
    - C) Ignorance
    - D) Safety
    - ** Answer: B**

49. **What is the symbolic meaning of the sea?**
    - A) Destruction, the unknown, natural limits
    - B) Heaven
    - C) Peace
    - D) Home
    - ** Answer: A**

50. **Josephine Preston Peabody's version of the myth highlights what aspect of the story?**
    - A) The architecture of the Labyrinth
    - B) The relationship between father and son and the tragedy of disobedience
    - C) King Minos's cruelty
    - D) The science of flight
    - ** Answer: B**
`;

const mcqs_unit5 = `
11. **Who is the author of "How Much Land Does a Man Need?"**
    - A) Anton Chekhov
    - B) Fyodor Dostoevsky
    - C) Leo Tolstoy
    - D) Alexander Pushkin
    - ** Answer: C**

12. **What was Pahom's original profession?**
    - A) A merchant
    - B) A soldier
    - C) A peasant farmer
    - D) A priest
    - ** Answer: C**

13. **What was Pahom's initial boast?**
    - A) "If I had money, I would be a king!"
    - B) "If I had plenty of land, I shouldn't fear the Devil himself!"
    - C) "I can outrun any man!"
    - D) "I will never die!"
    - ** Answer: B**

14. **Who heard Pahom's boast?**
    - A) His wife
    - B) The village elder
    - C) The Devil, hiding behind the oven
    - D) A traveling merchant
    - ** Answer: C**

15. **What did the Devil decide to do after hearing the boast?**
    - A) Kill Pahom
    - B) Give Pahom land to ruin him
    - C) Steal Pahom's money
    - D) Ignore him
    - ** Answer: B**

16. **How did Pahom first acquire his own land?**
    - A) He inherited it
    - B) He bought it from a local lady
    - C) He stole it
    - D) The King gave it to him
    - ** Answer: B**

17. **How did Pahom's attitude change after buying his first land?**
    - A) He became generous
    - B) He became strict and fined his neighbors for trespassing
    - C) He stopped working
    - D) He gave it away
    - ** Answer: B**

18. **Why did Pahom decide to move to the Volga settlement?**
    - A) He was exiled
    - B) He wanted to live near water
    - C) He heard there was more land and better soil there
    - D) His family lived there
    - ** Answer: C**

19. **Was Pahom satisfied at the Volga settlement?**
    - A) Yes, completely
    - B) No, he still wanted more land
    - C) Yes, but he missed his old home
    - D) He decided to become a merchant instead
    - ** Answer: B**

20. **Who told Pahom about the Bashkirs?**
    - A) A passing dealer/merchant
    - B) His wife
    - C) The Devil
    - D) A neighbor
    - ** Answer: A**

21. **What did the dealer say about the Bashkirs?**
    - A) They were dangerous warriors
    - B) They had endless land and sold it very cheaply
    - C) They were very poor
    - D) They refused to sell land
    - ** Answer: B**

22. **What did Pahom take as gifts for the Bashkirs?**
    - A) Gold and silver
    - B) Tea, wine, and other goods
    - C) Weapons
    - D) Horses
    - ** Answer: B**

23. **What was the Bashkirs' attitude towards land?**
    - A) They fought over it constantly
    - B) They did not value it like Pahom did; they lived simply
    - C) They sold it for very high prices
    - D) They farmed it intensely
    - ** Answer: B**

24. **What was the price the Bashkir Chief set for the land?**
    - A) 100 rubles an acre
    - B) 1,000 rubles a day
    - C) 500 rubles a month
    - D) 10 rubles a mile
    - ** Answer: B**

25. **How was the amount of land to be measured?**
    - A) By a surveyor with a map
    - B) By walking around it in one day
    - C) By riding a horse around it
    - D) By throwing a stone
    - ** Answer: B**

26. **What was the condition attached to the sale?**
    - A) Pahom must pay double next year
    - B) Pahom must return to the starting point before sunset, or lose his money
    - C) Pahom must marry a Bashkir woman
    - D) Pahom must give half his crops to the Chief
    - ** Answer: B**

27. **What did Pahom do the night before his walk?**
    - A) He partied with the Bashkirs
    - B) He couldn't sleep properly and had a terrible dream
    - C) He walked the land to practice
    - D) He counted his money
    - ** Answer: B**

28. **What did Pahom dream about?**
    - A) He dreamed he was a king
    - B) He dreamed he was dead, and the Devil was laughing at him
    - C) He dreamed he lost all his money
    - D) He dreamed he couldn't walk
    - ** Answer: B**

29. **When did Pahom start his walk?**
    - A) At noon
    - B) At midnight
    - C) At sunrise
    - D) In the afternoon
    - ** Answer: C**

30. **What marked the starting and ending point?**
    - A) A large rock
    - B) A fox-fur cap placed by the Chief
    - C) A flag
    - D) A tree
    - ** Answer: B**

31. **What did Pahom do to mark his path?**
    - A) He dropped pebbles
    - B) He tied ribbons to bushes
    - C) He dug holes with a spade at the corners
    - D) He painted marks on trees
    - ** Answer: C**

32. **Why did Pahom keep extending his path?**
    - A) He got lost
    - B) He kept seeing better land further ahead
    - C) He wanted to impress the Bashkirs
    - D) He was trying to find water
    - ** Answer: B**

33. **What physical discomfort did Pahom suffer during the walk?**
    - A) Freezing cold
    - B) Extreme heat, thirst, and exhaustion
    - C) A broken leg
    - D) Hunger
    - ** Answer: B**

34. **What did Pahom do to lighten his load as he ran back?**
    - A) He threw away his coat, boots, and flask
    - B) He dropped his spade
    - C) He gave his money away
    - D) He stopped to rest
    - ** Answer: A**

35. **What did Pahom realize as the sun began to set?**
    - A) That he was going the wrong way
    - B) That he had been too greedy and might not make it back in time
    - C) That he didn't want the land anyway
    - D) That he was tired
    - ** Answer: B**

36. **What did Pahom hear as he approached the starting point?**
    - A) Birds singing
    - B) The Bashkirs shouting and urging him on
    - C) Thunder
    - D) Silence
    - ** Answer: B**

37. **Did the sun set before Pahom reached the hill?**
    - A) No, it was still high
    - B) Yes, it set behind the hill, but the Bashkirs on top could still see it
    - C) Yes, it was completely dark everywhere
    - D) It was morning
    - ** Answer: B**

38. **What happened just as Pahom reached the fox-fur cap?**
    - A) He celebrated with the Chief
    - B) He collapsed and died
    - C) He asked for water
    - D) He paid the money
    - ** Answer: B**

39. **What caused Pahom's death?**
    - A) A snake bite
    - B) A heart attack / exhaustion from his greedy run
    - C) The Bashkirs killed him
    - D) Starvation
    - ** Answer: B**

40. **Who picked up the spade to dig Pahom's grave?**
    - A) The Chief
    - B) His servant
    - C) His wife
    - D) The dealer
    - ** Answer: B**

41. **How much land did Pahom ultimately need?**
    - A) 1,000 acres
    - B) A whole country
    - C) Six feet, from his head to his heels
    - D) None
    - ** Answer: C**

42. **What is the central theme of the story?**
    - A) The importance of farming
    - B) The destructive nature of greed
    - C) The value of exercise
    - D) How to negotiate with tribes
    - ** Answer: B**

43. **What is the irony at the end of the story?**
    - A) Pahom became rich but had no friends
    - B) After seeking endless land, Pahom only needed enough for a grave
    - C) The Bashkirs didn't own the land
    - D) Pahom's wife inherited everything
    - ** Answer: B**

44. **The Bashkirs symbolize what kind of life?**
    - A) A corrupt, city life
    - B) A simple, contented, nomadic life uncorrupted by greed
    - C) A life of extreme poverty
    - D) A technologically advanced life
    - ** Answer: B**

45. **What does the Devil symbolize in this story?**
    - A) Good luck
    - B) Temptation and Pahom's own internal greed
    - C) The harshness of nature
    - D) Bad weather
    - ** Answer: B**

46. **What does "insatiable" mean in relation to Pahom?**
    - A) Easily satisfied
    - B) Unable to be satisfied
    - C) Very hungry
    - D) Tired
    - ** Answer: B**

47. **How is Tolstoy's writing style described in this fable?**
    - A) Complex and confusing
    - B) Simple, direct, and moralistic
    - C) Highly poetic and romantic
    - D) Scientific
    - ** Answer: B**

48. **What is the climax of the story?**
    - A) Pahom talking to his wife
    - B) Pahom buying his first land
    - C) Pahom's frantic race against the setting sun
    - D) Pahom meeting the Bashkirs
    - ** Answer: C**

49. **Pahom's statement "An hour to suffer, a lifetime to live" shows what?**
    - A) His wisdom
    - B) His rationalization of his greed
    - C) His patience
    - D) His fear of death
    - ** Answer: B**

50. **What is a "homestead"?**
    - A) A wild forest
    - B) A city apartment
    - C) A house and its surrounding land
    - D) A tent
    - ** Answer: C**
`;

const mcqs_unit6 = `
11. **Who wrote "The Day the Dam Broke"?**
    - A) Mark Twain
    - B) James Thurber
    - C) O. Henry
    - D) Edgar Allan Poe
    - ** Answer: B**

12. **In what city does the story take place?**
    - A) New York City
    - B) Columbus, Ohio
    - C) Chicago, Illinois
    - D) Los Angeles
    - ** Answer: B**

13. **In what year did the event described occur?**
    - A) 1900
    - B) 1913
    - C) 1929
    - D) 1945
    - ** Answer: B**

14. **What actually happened regarding the dam?**
    - A) It broke completely
    - B) It cracked slightly
    - C) Nothing; the dam did not break
    - D) It overflowed safely
    - ** Answer: C**

15. **What caused the panic?**
    - A) A loud explosion
    - B) An official warning on the radio
    - C) A false rumor started by someone running
    - D) A sudden thunderstorm
    - ** Answer: C**

16. **How did the panic spread?**
    - A) Through newspaper articles
    - B) By mass hysteria and the herd mentality
    - C) By police officers telling people to run
    - D) Through phone calls
    - ** Answer: B**

17. **Where was the narrator's grandfather during the panic?**
    - A) Running with the crowd
    - B) He refused to leave his house, thinking the Civil War was still on
    - C) At the dam
    - D) Out of town
    - ** Answer: B**

18. **Where was the narrator's father during the panic?**
    - A) At home
    - B) Downtown, but he also got caught up in it
    - C) At the police station
    - D) Swimming in the river
    - ** Answer: B**

19. **What was the narrator's mother's reaction?**
    - A) She fainted
    - B) She turned out all the fires and grabbed useless items
    - C) She called the police
    - D) She laughed
    - ** Answer: B**

20. **What is "The Great Run"?**
    - A) A famous marathon
    - B) The mass panic and fleeing of the citizens
    - C) A river current
    - D) A political campaign
    - ** Answer: B**

21. **What direction were the people fleeing towards?**
    - A) West
    - B) North
    - C) East, away from the river
    - D) South
    - ** Answer: C**

22. **How does Thurber describe the sound of the panic?**
    - A) Like a roaring lion
    - B) Like the sound of desolation or a low murmur
    - C) Like a marching band
    - D) Like absolute silence
    - ** Answer: B**

23. **Who was Dr. Mallory?**
    - A) The mayor of the city
    - B) A rational man who also panicked and ran
    - C) The man who built the dam
    - D) A police officer
    - ** Answer: B**

24. **What did Dr. Mallory think the sound of roller skates was?**
    - A) A train
    - B) The rushing water of the flood
    - C) Children playing
    - D) An earthquake
    - ** Answer: B**

25. **What did the woman holding a dozen eggs do?**
    - A) She threw them at people
    - B) She dropped them all
    - C) She carried them safely without dropping any while running
    - D) She cooked them
    - ** Answer: C**

26. **Where did people seek refuge?**
    - A) In basements
    - B) In the library
    - C) On roofs, in trees, and on high ground
    - D) In the river
    - ** Answer: C**

27. **Who drove through the streets trying to calm the crowd?**
    - A) Firefighters
    - B) Militiamen / City officials
    - C) Teachers
    - D) Doctors
    - ** Answer: B**

28. **What did the officials announce through megaphones?**
    - A) "Run for your lives!"
    - B) "The dam has NOT broken!"
    - C) "Stay in your homes!"
    - D) "The flood is coming!"
    - ** Answer: B**

29. **How did the crowd misinterpret the officials' announcement?**
    - A) They couldn't hear them at all
    - B) They thought they were saying "The dam HAS now broken!"
    - C) They thought it was a joke
    - D) They thought they were selling something
    - ** Answer: B**

30. **How long did the panic last before people realized the truth?**
    - A) A few minutes
    - B) About two hours
    - C) All night
    - D) Two days
    - ** Answer: B**

31. **How did people feel after they realized it was a false alarm?**
    - A) Angry at the mayor
    - B) Relieved and proud
    - C) Embarrassed and foolish
    - D) Terrified
    - ** Answer: C**

32. **Why does Thurber use a humorous tone?**
    - A) Because a real flood is funny
    - B) To mock the irrationality of mob psychology
    - C) Because he hates Columbus, Ohio
    - D) To make children laugh
    - ** Answer: B**

33. **What is "mob mentality"?**
    - A) When people act rationally together
    - B) When people blindly follow the actions of a crowd without thinking
    - C) A type of government
    - D) A criminal organization
    - ** Answer: B**

34. **What did the narrator's aunt do during the run?**
    - A) She wouldn't drop her heavy suitcase
    - B) She ran faster than everyone
    - C) She stopped to buy groceries
    - D) She took a nap
    - ** Answer: A**

35. **The phrase "safe as kittens under a cook stove" is an example of what literary device?**
    - A) Metaphor
    - B) Simile / Irony
    - C) Personification
    - D) Hyperbole
    - ** Answer: B**

36. **What makes the panic ironic?**
    - A) It was a sunny day
    - B) There was absolutely no danger
    - C) The dam was already broken
    - D) Only men ran
    - ** Answer: B**

37. **Thurber's writing is best classified as what genre?**
    - A) Horror
    - B) Humorous essay / Satire
    - C) Science Fiction
    - D) Romance
    - ** Answer: B**

38. **What does "melted away" mean in the context of the crowd?**
    - A) They dissolved in water
    - B) Dispersed gradually and quietly due to embarrassment
    - C) They got very hot
    - D) They fell asleep
    - ** Answer: B**

39. **What did the people do when they met each other the next day?**
    - A) They laughed about it
    - B) They avoided talking about the incident
    - C) They planned another run
    - D) They protested at the dam
    - ** Answer: B**

40. **What does the story teach about human nature?**
    - A) That humans are always rational
    - B) That humans are susceptible to irrational fear and groupthink
    - C) That humans are incredibly brave
    - D) That humans hate running
    - ** Answer: B**

41. **What is the significance of the "go east" chant?**
    - A) It shows the mindless repetition of the mob
    - B) East was the only safe direction
    - C) They were heading towards New York
    - D) It was a religious chant
    - ** Answer: A**

42. **How does the story relate to modern times?**
    - A) It doesn't relate at all
    - B) It is similar to how fake news or rumors spread on social media
    - C) Dams still break frequently
    - D) People still run east
    - ** Answer: B**

43. **What does "shut up like a clam" mean?**
    - A) To talk loudly
    - B) To refuse to speak out of embarrassment
    - C) To eat seafood
    - D) To close a door
    - ** Answer: B**

44. **Did anyone actually see water during the panic?**
    - A) Yes, huge waves
    - B) Yes, a small puddle
    - C) No
    - D) Only Dr. Mallory
    - ** Answer: C**

45. **Who started the rumor originally?**
    - A) Dr. Mallory
    - B) The narrator
    - C) No one knows; it started spontaneously
    - D) The mayor
    - ** Answer: C**

46. **What event made the citizens susceptible to the rumor?**
    - A) An earthquake
    - B) There had been heavy rains recently
    - C) A war
    - D) A solar eclipse
    - ** Answer: B**

47. **What does the grandfather's reaction highlight?**
    - A) His intelligence
    - B) The absurdity of the situation
    - C) His fear of water
    - D) His anger
    - ** Answer: B**

48. **What is the effect of Thurber including specific names and places?**
    - A) It makes the story boring
    - B) It adds a false sense of documentary realism to a ridiculous event
    - C) It protects him from lawsuits
    - D) It is required for essays
    - ** Answer: B**

49. **The story is an excerpt from which of Thurber's books?**
    - A) The Secret Life of Walter Mitty
    - B) My Life and Hard Times
    - C) The Thurber Carnival
    - D) The 13 Clocks
    - ** Answer: B**

50. **What does "broke into a trot" mean?**
    - A) Started crying
    - B) Suddenly started running faster
    - C) Rode a horse
    - D) Fell down
    - ** Answer: B**
`;

const files = [
    { name: 'docs/unit-4-1.md', content: mcqs_unit4 },
    { name: 'docs/unit-5-1.md', content: mcqs_unit5 },
    { name: 'docs/unit-6-1.md', content: mcqs_unit6 }
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
