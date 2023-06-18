const getRandomUsernames = (num) => {
    const usernames = new Set();
  
    while (usernames.size < num) {
      const username = `username${usernames.size + 1}`;
      usernames.add(username);
    }
  
    return Array.from(usernames);
  };
  
  const randomUsers = getRandomUsernames(100);
  console.log(randomUsers);

const getRandomEmails = (num) => {
    const emails = new Set();
  
    while (emails.size < num) {
      const email = `email${emails.size + 1}@example.com`;
      emails.add(email);
    }
  
    return Array.from(emails);
  };
  
  const randomEmails = getRandomEmails(100);
  console.log(randomEmails);

const randomThoughts = [
    "The sunsets always remind me of the beauty in endings.",
    "I wonder what lies beyond the stars.",
    "Sometimes, a smile can change someone's entire day.",
    "The sound of rain is both calming and melancholic.",
    "Dreams are the windows to our hidden desires.",
    "Music has a way of speaking when words fail.",
    "In solitude, we often discover our true selves.",
    "Kindness is like a ripple in a pond, spreading far and wide.",
    "Nature has a way of healing the soul.",
    "The scent of freshly baked bread is simply irresistible.",
    "Laughter is a language understood by all.",
    "Memories are the treasure chests of our lives.",
    "A good book can transport you to another world.",
    "Happiness is found in the simplest of moments.",
    "The night sky holds countless mysteries waiting to be explored.",
    "Sometimes, all we need is a warm hug.",
    "The best lessons are learned through experience.",
    "A cup of tea can solve almost anything.",
    "Sunflowers always bring a smile to my face.",
    "Words have the power to inspire and ignite change.",
    "The sound of waves crashing on the shore is my favorite lullaby.",
    "Challenges are opportunities for growth.",
    "Stars are like whispers from distant galaxies.",
    "Love is the universal language that binds us all.",
    "Mistakes are stepping stones on the path to success.",
    "A single act of kindness can change the world.",
    "Imagination has no limits or boundaries.",
    "Rainbows are a reminder of hope after the storm.",
    "The smell of fresh-cut grass reminds me of childhood summers.",
    "A walk in nature can clear the clutter in our minds.",
    "Every ending is a new beginning in disguise.",
    "The best way to predict the future is to create it.",
    "Silence speaks volumes when words are inadequate.",
    "Art has the power to move hearts and stir emotions.",
    "A gentle breeze can carry away our worries.",
    "The sweetest moments are often the simplest ones.",
    "We are all interconnected threads in the tapestry of life.",
    "Time is a precious gift, use it wisely.",
    "The moon is a faithful companion in the darkest of nights.",
    "Success is not measured by material possessions, but by inner fulfillment.",
    "A warm fireplace and good company make for a perfect evening.",
    "The sound of children's laughter is pure magic.",
    "The world needs more dreamers and believers.",
    "The scent of a blooming flower can turn a bad day around.",
    "Every ending is an invitation for a new beginning.",
    "A smile is the most beautiful curve on a person's face.",
    "Courage is not the absence of fear, but the triumph over it.",
    "Dancing in the rain is liberating and exhilarating.",
    "Life is a journey, enjoy the scenery along the way.",
    "True beauty shines from within.",
    "The sound of a loved one's voice can instantly bring comfort.",
    "Every person we meet has a story worth listening to.",
    "Worrying does not take away tomorrow's troubles, it takes away today's peace.",
    "A soft pillow and a cozy blanket make for a perfect night's sleep.",
    "The best adventures are the ones we least expect.",
    "The taste of chocolate can make any day better.",
    "The world needs more love and compassion.",
    "Forgiveness sets us free from the chains of the past.",
    "The smell of rain on a hot day",
  

];

const randomReactions = [
    "So true!",
    "I can relate.",
    "Wow, that's deep.",
    "Exactly!",
    "I never thought of it that way.",
    "That's beautiful.",
    "Oh, I love that!",
    "So inspiring.",
    "Absolutely!",
    "Aha, I get it now.",
    "Incredible!",
    "Yes, yes, yes!",
    "Oh, how true that is.",
    "Well said!",
    "That resonates with me.",
    "I couldn't agree more.",
    "Oh, the nostalgia!",
    "So profound.",
    "That's a great perspective.",
    "I needed to hear that.",
    "It's like you read my mind.",
    "That's so powerful.",
    "I'm speechless.",
    "Couldn't have said it better.",
    "That's spot on!",
    "This speaks to me.",
    "Oh, I love this thought.",
    "Absolutely mind-blowing!",
    "That's pure wisdom.",
    "Such a simple truth.",
    "Incredible insight.",
    "I'm in awe.",
    "Oh, the beauty in that.",
    "So beautifully expressed.",
    "This made my day.",
    "Brilliant!",
    "I'm touched.",
    "Oh, I needed this reminder.",
    "So refreshing to hear.",
    "That's so profound.",
    "You've captured it perfectly.",
    "This gives me hope.",
    "Wow, just wow.",
    "I'm inspired.",
    "That's exactly what I needed.",
    "Oh, how true!",
    "I'm moved by this thought.",
    "I'm in agreement.",
    "This is pure gold.",
    "That's so relatable.",
    "I'm smiling ear to ear.",
    "Oh, how beautiful.",
    "You've nailed it.",
    "This made me pause and reflect.",
    "I'm impressed.",
    "So thought-provoking.",
    "This is everything.",
    "Oh, the truth in those words.",
    "I'm grateful for this insight.",
    "Absolutely mind-opening.",
    "This makes my heart happy.",
    "You've got me thinking.",
    "Oh, the simplicity of it.",
    "I'm captivated by this thought.",
    "So, so true.",
    "This is pure brilliance.",
    "I couldn't agree more!",
    "Oh, this hits home.",
    "You've got a way with words.",
    "This is a game-changer.",
    "I'm in love with this thought.",
    "So beautifully stated.",
    "This resonates deeply.",
    "Oh, how I needed this.",
    "I'm applauding your insight.",
    "This is pure magic.",
    "I'm embracing this thought.",
    "Oh, I'm smiling now.",
    "This speaks volumes.",
    "I'm sharing this with others.",
    "This deserves a standing ovation.",
    "Oh, the power of these words.",
    "I'm touched to the core.",
    "This is life-changing.",
    "I'm bookmarking this thought.",
    "Oh, this makes my heart sing.",
    "This is a revelation.",
    "I'm nodding in agreement.",
    "So beautifully articulated.",
    "This is soul-stirring.",
    "Oh, the truth in this."  
  ]

  
  const users = [];

//   get a random item given any array

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () => {
    if (randomUsers.length === 0) {
      return "defaultUsername";
    }
  
    const usedUsernames = new Set(randomUsers);
    let username = getRandomArrItem(randomUsers);
  
    // Generate a new username if it has already been used
    while (usedUsernames.has(username)) {
      username = getRandomArrItem(randomUsers);
    }
  
    return username;
  };
  


const getRandomEmail = (int) => {
    const results = [];
    const usedEmails = new Set(); // Keep track of used email addresses
  
    for (let i = 0; i < int; i++) {
      let email = getRandomArrItem(randomEmails);
  
      // Generate a new email if it has already been used
      while (usedEmails.has(email)) {
        email = getRandomArrItem(randomEmails);
      }
  
      usedEmails.add(email); // Add the email to the usedEmails set
  
      const username = getRandomUser();
      results.push({
        email,
        username,
      });
    }
  
    return results;
  };
  
  

const getRandomThought = (int) => {
        if (int === 1) {
            return getRandomArrItem(randomThoughts);
        }
        const results = [];
        for (let i = 0; i < int; i++) {
            results.push({
              thoughts: getRandomArrItem(randomThoughts),
              createdAt: Date.now,
              reactions: [...getReactions(3)],

            });
          }
          return results;};

          const getReactions = (int, depth = 1) => {
            if (depth === int) {
              return [{
                reactionBody: getRandomArrItem(randomReactions),
                createdAt: Date.now(),
                username: getRandomUser(),
              }];
            }
          
            const results = [];
          
            for (let i = 0; i < int; i++) {
              results.push({
                reactionBody: getRandomArrItem(randomReactions),
                createdAt: Date.now(),
                reactions: getReactions(int, depth + 1),
                username: getRandomUser(),
              });
            }
          
            return results;
          };
          
    
module.exports = {getRandomUser, getRandomThought, getRandomEmail, getReactions}
  