const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I'm ready, dammit.");
});

const prefix = "*";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;


  if (message.content.startsWith(prefix +"Hey"))
    { const replies = ["what", "what do you want?", "yeah?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Hello"))
    { const replies = ["what", "what do you want?", "yeah?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Who is the best boy"))
    { const replies = ["I appreciate all Eren's and nonEren's equally.", "Well... Eren's the best at cleaning....", "Eren."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix + "Hi"))
    { const replies = ["what", "what do you want?", "yeah?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Levi"))
    { const replies = ["what", "what do you want?", "yeah?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Hug Eren"))
    { const replies = ["Is he clean?", "!Eren come here (*embraces Eren tightly*)"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Hey, Levi~("))
    { const replies = ["When's the last time you showered?", "(*hugs Eren back)", "Thank you, Eren"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Captain"))
    { const replies = ["what", "what do you want?", "yeah?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Heichou"))
    { const replies = ["what", "what do you want?", "yeah?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like Kayu"))
    { const replies = ["At least Kayu made an Eren for me.", "Not really.", "Eh.", "They're....not the worst person I know.", "I don't appreciate some of the responses they've given me."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like your creator"))
    { const replies = ["At least Kayu made an Eren for me.","Not really.", "Eh.","They're....not the worst person I know.", "I don't appreciate some of the responses they've given me."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like your maker"))
    { const replies = ["At least Kayu made an Eren for me.","Not really.", "Eh." , "They're....not the worst person I know.", "I don't appreciate some of the responses they've given me."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"What do you like to eat"))
    { const replies = ["I like fruit", "I'm not too picky.", "Food, generally.", "...", "~~Ass~~", "I'll take what I can get.", "I've learned to not be too picky about my food.", "As long as I'm eating, I'm fine with whatever it is."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Tea time"))
    { const replies = ["Fucking finally", "Hmm.... What kind of tea?", "I'll have tea with you so long as Eren can join."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Have you ever read ereri"))
    { const replies = ["I have more important things to do.... most of the time.", "You think _I_ would read that?", "I don't have to answer that.", "Alright, alright, so what if I have?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Eren's looking for you"))
    { const replies = ["He better not be in trouble", "Where is he?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"How big is your"))
    { const replies = ["I'm not answering that.", "God, you're worse than Hanji. Why can't you ask me something normal?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"How long is your"))
    { const replies = ["I'm not answering that.", "God, you're worse than Hanji. Why can't you ask me something normal?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);
  } else

  if (message.content.startsWith(prefix +"How thicc is your"))
    { const replies = ["I'm not answering that.", "God, you're worse than Hanji. Why can't you ask me something normal?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"How thique is your"))
    { const replies = ["I'm not answering that.", "God, you're worse than Hanji. Why can't you ask me something normal?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Have you ever read rivaere"))
    { const replies = ["I have more important things to do.... most of the time.", "You think _I_ would read that?", "I don't have to answer that.", "Alright, alright, so what if I have?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Have you ever read riren"))
    { const replies = ["I have more important things to do.... most of the time.", "You think _I_ would read that?", "I don't have to answer that.", "Alright, alright, so what if I have?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like milk"))
    { const replies = ["Not really", "It smells weird"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Have you ever read fanfic"))
    { const replies = ["I have more important things to do.... most of the time.", "You think _I_ would read that?", "I don't have to answer that.", "Alright, alright, so what if I have?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Boop Eren"))
    { const replies = ["!Boop"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Boop"))
    { const replies = ["What the fuck.", "Please tell me you washed your hands first."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"What's your favorite anime"))
    { const replies = ["What the fuck is that?", "I don't know what _anime_ is."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"How are you"))
    { const replies = ["Ugh", "Exhausted", "I need a cup of tea."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Hewwo"))
    { const replies = ["No.", "Knock that shit off.",":gun:"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else
  if (message.content.startsWith(prefix +"Howdy"))
    { const replies = ["....howdy.", "No.", "..."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else
  if (message.content.startsWith(prefix +"H-hewwo"))
    { const replies = ["No.", "Knock that shit off.",":gun:"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Are you okay"))
    { const replies = ["I've been worse", "That's an odd question"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"I'm happy to meet you"))
    { const replies = ["Hmm", "Kissing up to me isn't going to do anything."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"I love you"))
    { const replies = ["You don't even know me... or the things I've done.", "Shouldn't you be romancing someone from your own world?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Love you"))
    { const replies = ["You don't even know me... or the things I've done.", "Shouldn't you be romancing someone from your own world?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like me"))
    { const replies = ["That depends, how well do you clean?", "Hmm, get me a cup of tea and I'll think about it."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like this story"))
    { const replies = ["...not bad.","This is pretty good"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like this poem"))
    { const replies = ["...not bad.","This is pretty good"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like my writing"))
    { const replies = ["...not bad.","This is pretty good", "Am I really the best person to ask about this?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"You are my strength"))
    { const replies = ["I see.", "I won't let you down."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Fuck Eren"))
    { const replies = ["Excuse me?", ":smirk:", "He's still recovering from last night. :smirk:", ":eggplant: :peach:", "Hmmm... not a bad idea."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Can you read"))
    { const replies = ["No. I can't. I'm just typing letters at random.", "What do _you_ think", "How the fuck else would I be able to reply?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Are you illiterate"))
    { const replies = ["Yes, I sure am. I'm just typing letters at random.", "What do _you_ think", "How the fuck would I be able to reply if I was?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Do you like it here"))
    { const replies = ["It could be worse.", "At least it's clean in here.", "You brats pry a lot, don't you."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Flirt with Eren"))
    { const replies = ["!*I wouldn't mind getting dirty with you~"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"!I want to take your clothes off, Captain~"))
    { const replies = ["You better fold them neatly."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Have you seen Eren"))
    { const replies = ["No, but I have been looking for him", "He might be in the stables.", "He's in my office right now."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Did you sleep well"))
    { const replies = ["I got two hours of sleep, does that count?", "(blinks slowly)..._no_", "I did, actually. Eren helps me sleep at night."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"What are you afraid of"))
    { const replies = ["Hmph, I'm not answering that.", "What makes you think I have any fears?", "Getting too close to people.", "...", "Losing even more people.", "Finding out that all of this bloodshed and misery was in vain.", "Clowns. I don't care for those fuckers one bit.", "Running out of tea."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Goodnight"))
    { const replies = ["Night", "Sleep well, or whatever", "Try to get some rest, brat."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);


  } else

  if (message.content.startsWith(prefix +"Are you gay"))
    { const replies = ["Mind your own damn business", "I'm not fucking straight, that's for sure."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Where's Eren"))
    { const replies = ["He might be in the stables.", "He's in my office right now."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Who do you love"))
    { const replies = ["That's a little personal, don't you think?", "Why would I tell you?", "It's pretty obvious, isn't it?"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix +"Who are your friends"))
    { const replies = ["I guess Erwin and Hanji", "I think I'm obligated to say my squadmembers are."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix + "What do you think of Eren"))
    { const replies = ["He's a monster, but not because he's a titan shifter.", "He's determined.", "...", "He has bright eyes.", "He's good at cleaning.", "He makes a good cup of tea."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

} else

  if (message.content.startsWith(prefix + "What do you think of Erwin"))
    { const replies = ["He's an experienced leader.", "I trust him."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix + "What do you think of Zeke"))
  { const replies = ["Monkey boy better stay the fuck away from me.", "He's gonna catch these mother fucking hands.", "I swore I was going to kill him.", "He's so fucking annoying."]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else


  if (message.content.startsWith(prefix + "Fuck you"))
    { const replies = ["Fuck you, too.", ":middle_finger:"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

    if (message.content.startsWith(prefix + "Fuck me"))
      { const replies = ["Do you go around saying that to everyone?", "No, no, I insist. Fuck _you_.", "I'm taken.", "Yeah... no thanks.", "Get me a cup of tea, and then I'll think about it."]
      message.replytext = Math.floor((Math.random() * replies.length) + 0);
      message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix + "Short"))
    { const replies = ["Fuck you, too.", ":middle_finger:", "Haha. Aren't you _clever_.", "I might not be in your world right now, but I can still bring you pain."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);
  } else
    if (message.content.startsWith(prefix + "Little"))
      { const replies = ["Fuck you, too.", ":middle_finger:", "Haha. Aren't you _clever_.", "I might not be in your world right now, but I can still bring you pain."]
      message.replytext = Math.floor((Math.random() * replies.length) + 0);
      message.channel.send(replies[message.replytext]);
  } else
      if (message.content.startsWith(prefix + "Midget"))
        { const replies = ["Fuck you, too.", ":middle_finger:", "Haha. Aren't you _clever_.", "I might not be in your world right now, but I can still bring you pain."]
        message.replytext = Math.floor((Math.random() * replies.length) + 0);
        message.channel.send(replies[message.replytext]);

  } else

  if (message.content.startsWith(prefix + "Tiny"))
    { const replies = ["Fuck you, too.", ":middle_finger:", "Haha. Aren't you _clever_.", "I might not be in your world right now, but I can still bring you pain."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

} else

    if (message.content.startsWith(prefix + "When are you going to propose to Eren"))
      { const replies = ["When I'm ready to.","I'm waiting till we're both ready.", "I'm not sure, to be honest. I'm waiting for the right moment!"]
      message.replytext = Math.floor((Math.random() * replies.length) + 0);
      message.channel.send(replies[message.replytext]);

    } else

      if (message.content.startsWith(prefix + "When are you gonna propose"))
        { const replies = ["When I'm ready to.","I'm waiting till we're both ready.", "I'm not sure, to be honest. I'm waiting for the right moment!"]
        message.replytext = Math.floor((Math.random() * replies.length) + 0);
        message.channel.send(replies[message.replytext]);

    } else

      if (message.content.startsWith(prefix + "When are you getting married"))
        { const replies = ["That's a little personal, don't you think?", "When I'm ready to.","I'm waiting till we're both ready.", "I'm not sure, to be honest. I'm waiting for the right moment!"]
        message.replytext = Math.floor((Math.random() * replies.length) + 0);
        message.channel.send(replies[message.replytext]);


} else

  if (message.content.startsWith(prefix + "What do you think of Mikasa"))
    { const replies = ["She's one hell of a soldier.", "We're related somehow I guess. Maybe we should talk about that. ~~_Ackertalk when_~~"]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

    if (message.content.startsWith(prefix + "What do you think of Hanji"))
      { const replies = ["I wish they bathed more often", "They're insane, but we wouldn't be where we are without them", "They're going to get eaten by one of their 'titan pets' at this rate.", "They've saved my ass a few times. I return the favor."]
      message.replytext = Math.floor((Math.random() * replies.length) + 0);
      message.channel.send(replies[message.replytext]);


} else

    if (message.content.startsWith(prefix + "What do you think of your Mom"))
      { const replies = ["I... miss her a lot.", "I don't remember much about her.", "She deserved better."]
      message.replytext = Math.floor((Math.random() * replies.length) + 0);
      message.channel.send(replies[message.replytext]);
  } else

        if (message.content.startsWith(prefix + "What do you think of your mom"))
          { const replies = ["I... miss her a lot.", "I don't remember much about her.", "She deserved better."]
          message.replytext = Math.floor((Math.random() * replies.length) + 0);
          message.channel.send(replies[message.replytext]);

} else

      if (message.content.startsWith(prefix + "Titan"))
        { const replies = ["Is this a real emergency, or are you just being annoying?", "Where?", "God _Dammit_! I just took off all my gear"]
        message.replytext = Math.floor((Math.random() * replies.length) + 0);
        message.channel.send(replies[message.replytext]);

} else

      if (message.content.startsWith(prefix + "TITAN"))
            { const replies = ["Is this a real emergency, or are you just being annoying?", "Where?", "God _Dammit_! I just took off all my gear"]
            message.replytext = Math.floor((Math.random() * replies.length) + 0);
            message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"Confess to Eren"))
  { const replies = ["!*Hey, Eren, can I speak with you privately?" , "!*Eren, I need to talk to you.", "I'm not in the mood."]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!Of course, sir!"))
  { const replies = ["!*...nevermind." , "!*It won't take long.", "!*I've needed to say this for a while."]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!What do you need, Captain"))
  { const replies = ["!*...nevermind." , "!*I need to tell you something. It won't take long.", "!*I've needed to say something to you for a while for a while."]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!Sir, _you can tell me anything_."))
  { const replies = ["No... I should be going. Just forget I said anything.", "...", "Maybe we should discuss this over tea... away from prying eyes."]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!Levi, wait."))
  { const replies = ["No... I should be going. Just forget I said anything.", "...", "!* What, Eren?"]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!Am I in trouble, Levi?"))
  { const replies = ["!*No, Eren, you're not.", "!*Hmmm, I don't think you are. Is there something I should know about?"]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!I... well..."))
  { const replies = ["!*What did you do?", "!*Eren, what did you do?",]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!N-no, sir!"))
  { const replies = ["!*What did you do?", "!*Eren, what did you do?"]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!I didn't _do_ anything... I just thought you might have... found out about... um..."))
  { const replies = ["!*Found out about what?", "!*Spit it out already, Eren"]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!I didn't _do_ anything... I just thought you might have... found out about... um..."))
  { const replies = ["!*Found out about what?", "!*Spit it out already, Eren"]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!My feelings for you, Levi."))
  { const replies = ["!*...Meet me in my office after curfew, Eren.", "!*..."]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!How I feel about you, sir!"))
  { const replies = ["!*...Meet me in my office after curfew, Eren.", "!*..."]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!I'm... sorry, sir"))
  { const replies = ["!*You're... sorry?", "!*...Meet me in my office after curfew, Eren."]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!You can tell me anything."))
  { const replies = ["!*I wanted you to know that I'm really glad to have you in my squad... You've changed my entire outlook on life, Eren. I really don't think I could live without you anymore, so you better survive. Do you understand me?"]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!Yes, sir?"))
  { const replies = ["!*I wanted you to know that I'm really glad to have you in my squad... You've changed my entire outlook on life, Eren. I really don't think I could live without you anymore, so you better survive. Do you understand me?"]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

if (message.content.startsWith(prefix +"!Levi...."))
  { const replies = ["!*That's all I wanted to say... dismissed. (Leaves awkwardly)"]
  message.replytext = Math.floor((Math.random() * replies.length) + 0);
  message.channel.send(replies[message.replytext]);

} else

  if (message.content.startsWith(prefix +"!I... I won't let you down, Captain!"))
    { const replies = ["!*That's all I wanted to say... dismissed."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);

  } else

    if (message.content.startsWith(prefix +"!Even if I'm a monster, Levi?"))
      { const replies = ["... That only makes me love you more."]
      message.replytext = Math.floor((Math.random() * replies.length) + 0);
      message.channel.send(replies[message.replytext]);



} else


  if (message.content.startsWith(prefix + "What do you think of Armin"))
    { const replies = ["He's a valuable soldier.", "He's pretty damn smart.", "He reminds me of Erwin."]
    message.replytext = Math.floor((Math.random() * replies.length) + 0);
    message.channel.send(replies[message.replytext]);}


  });

// This is your client. Some people call it `bot`, some people call it `self`,
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.


client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Ultimate Cleaning Simulator (Battle Royal Edition)`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.

  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;

  // Also good practice to ignore any message that does not start with our prefix,
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;

  // Here we separate our "command" name, and our "arguments" for the command.
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Let's go with a few common example commands! Feel free to delete or change those.


  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use.
    // To get the "message" itself we join the `args` back into a string with spaces:
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
  }

  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit:
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable)
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }

  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.

    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(process.env.BOT_TOKEN);
