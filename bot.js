const Client = require('discord.js');
const Discord = require('discord.js');
const embeddy = require('discord-embed-maker');
const embed2 = require('discord-embed-maker');
const client = new Discord.Client();
const prefix = "/"

embeddy.setTitle(`Command List`);
//embeddy.color(65281);
embeddy.setDescription(`A list of commands`);
embeddy.addField(prefix + `**help**`, `shows this list`, true);
embeddy.addField(prefix + `**decision**`, `helps you make a
decision`, true);
embeddy.addField("Hey there also did you notice there are removed commands?They are hidden by an secret command!");
embeddy.addField(prefix + "**randommember**" , "gets an random member", true);
embeddy.addField(prefix + `**search**`, `Searches an dark alley.`, true);
embeddy.addField(prefix + `**botinfo**`, `you get the name`, true);

var decisionarray = [
  "Yes",
  "No",
  "Maybe",
  "Maybe Not"
];

var searchy = [
  "Somebody forgot their meme pile here,the pile is owned by Kaiser Inamorta",
  "you found an empty dialog congrats",
  "hey im kinda running out of dialogues",
  "you found an invite to jimks top secret group!As you touch it,a strong force repels your hand.",
  "You found 30 bucks worth of currency for this bot,But Upon closer inspection its fake and broken.",
  "You found the mythical godly,Jimk22!"
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Prefix:/")
});

client.on('message', msg => {
  if (msg.content === prefix + 'decision') {
    var randomItem = decisionarray[Math.floor(Math.random()*decisionarray.length)];
    msg.channel.send('' + randomItem);
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'search') {
    var randomsearch = searchy[Math.floor(Math.random() * searchy.length)];
    msg.channel.send('' + randomsearch);
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'help') {
    msg.channel.send( { embed: embeddy } );
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'botinfo') {
    const embed2 = {
      "title": "Bot Information",
      "color": 8311585,
      "fields": [
        {
          "name": "**Owner**",
          "value": "₱ɄⱤØ#6512",
          "inline": true
        },
        {
          "name": "**Co-Owner**",
          "value": "Jimk#1657",
          "inline": true
        },
        {
          "name": "**Info**",
          "value": "This is an bot i created for the babft wiki,its kinda trash but yeah thats fine i guess."
        }
      ]
    };
    msg.channel.send({embed: embed2});
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'randommember') {
    var toselect = msg.guild.members.random()
    var tosay = toselect.user.tag
    msg.channel.send("" + tosay);
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'hihigaymeter') {
    var randomgay = ~~(Math.random(0,1) * 10)
    msg.channel.send({embed: {
      color: 3447003,
      title: "**Hella gay meter: " + randomgay + "%**"
    }});
  }
});

client.login('NDk5OTI3NzIwOTU2OTE5ODM4.DqIqZQ.l3Uik0iGZoonD5CKBap0w7yOAfM')