const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'm!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  client.user.setGame(`Type m!help For Help | ${client.guilds.size} Server Using This Bot`, "https://twitch.tv/TwixBot")
});

client.on("message", message => {
        var command = message.content.split(" ").join(" ").slice(prefix.length)
        if (!message.content.startsWith(prefix)) return;
        if (message.author.bot) return;
 if (command == "help") {
  const embed = new Discord.RichEmbed()
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .addField("General commands",
`『m!id - معلومات عن حسابك』
『m!embed - يكرر كلامك بأيمبيد』
『m!say - يكرر كلامك』
『m!roles - يعرض لك الرتب و عددها』
『m!rooms - يعرض لك الرومات وعددها』
『m!server - معلومات عن السيرفر』
『m!icon - يعرض صوره السيرفر』
『m!avatar - يعرض صورتك او صوره شخص』
『m!date - يعرض لك التاريخ』`)
      .addField("Bot commands",
`『m!ping - يعرض لك سرعه اتصال البوت』
『m!uptime - يعرض لك صار للبوت كم شغال』
『m!support - سيرفر الدعم القني و المساعده』
『m!invite - اضافه البوت』
『m!info - معلومات عن البوت』`)
      .addField("Adminstrator commands",
`『m!kick - كيك』
『m!ban - بان』
『m!mute - ميوت』
『m!unmute - فك الميوت』
『m!mc - قفل الشات』
『m!umc - فتح الشات』
『m!delete.r - حذف رتبة』
『m!delete.c - حذف روم』
『m!bc - برودكاست』
『m!clear』 - حذف الرسائل في الشات`)
      .addField("Games commands",
`『** Soon **』`)


        message.author.send(embed)

        }else if (message.content.startsWith(`${prefix}id`)) {
                var men = message.mentions.users.first();
                if (!men) men = message.author
                var l;
                if (!men.presence.game) {
                        l = "لا شيء"
                } else {
                        l = men.presence.game.name;
                }
                var id = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .addField("『الاسم』", `『${men.username}』`)
                .addField("『الأيدي』", `『${men.id}』`)
                .addField("『الحالة』", `『${l}』`)
                .addField("『التاق』", `『${men.discriminator}』`)
                .addField("『تاريخ انشاء الحساب』", `『${men.createdAt.toLocaleString()}』`)
                .setColor("RANDOM")
                .setThumbnail(men.avatarURL);
                message.channel.send({embed : id});
        } else if (message.content.startsWith(`${prefix}embed`)) {
                var embed = new Discord.RichEmbed()
                .setAuthor(client.user.username,client.user.avatarURL)
                .setTitle("Message By " + message.author.tag)
                .setDescription(message.content.split(" ").join(" ").slice(7))
                .setColor("RANDOM")
                .setThumbnail(message.author.avatarURL)
                message.channel.send(embed);
        } else if (message.content.startsWith(`${prefix}say`)) {
                message.channel.send(message.content.split(" ").join(" ").slice(5));
        } else if (message.content.startsWith(`${prefix}roles`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                var r = message.guild.roles.map(r => r.name).join("\n")
                var roles = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor(client.user.username, client.user.avatarURL)
                .setTitle("Server Roles")
                .setDescription(`**${r}**`);
                message.channel.send({embed : roles});
        } else if (message.content.startsWith(`${prefix}rooms`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                var r = message.guild.channels.map(m => m.name).join("\n");
                var channels = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setAuthor(client.user.username, client.user.avatarURL)
                .setTitle("Server Channels")
                .setDescription(`**${r}**`);
                message.channel.send({embed : channels})
        } else if (message.content.startsWith(`${prefix}server`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                var server = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setColor("RANDOM")
                .setThumbnail(message.guild.iconURL)
                .addField("『الأسم』", `『${message.guild.name}』`,true)
                .addField("『الأيدي』", `『${message.guild.id}』`,true)
                .addField("『المنطقة』", `『${message.guild.region}』`,true)
                .addField("『عدد الرتب』", `『${message.guild.roles.size}』`,true)
                .addField("『عدد الرومات الكتابية』", `『${message.guild.channels.filter(c => c.type == "text").size}』`,true)
                .addField("『عدد الرومات الصوتية』", `『${message.guild.channels.filter(c => c.type == "voice").size}』`,true)
                .addField("『تاريخ الصنع』", `『${message.guild.createdAt.toLocaleString()}』`, true)
                .addField("『المالك』", `『${message.guild.owner.user.tag}』` ,true);
                message.channel.send(server);
        } else if (message.content.startsWith(`${prefix}icon`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                var icon = new Discord.RichEmbed().setColor("RANDOM").setAuthor(client.user.username, client.user.avatarURL).setImage(message.guild.iconURL);
                message.channel.send(icon);
        } else if (message.content.startsWith(`${prefix}avatar`)) {
                var men = message.mentions.users.first()
                if (!men) men = message.author;
                message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(client.user.username,client.user.avatarURL).setColor("RANDOM").setImage(men.avatarURL));
        } else if (message.content.startsWith(`${prefix}date`)) {
                var day = new Date().getDate();
                var month = new Date().getMonth() + 1
                var year = new Date().getFullYear();
                var date = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .setTitle("Date 📆")
                .setColor("RANDOM")
                .setDescription(`${day} - ${month} - ${year}`);
                message.channel.send(date);
        } else if (message.content == prefix + "ping") {
                message.channel.send("Pingging | 🏓").then(m => m.edit(`Ping is ${m.createdTimestamp - message.createdTimestamp}ms | 🏓`));
        } else if (message.content == prefix + "uptime") {
                let totalSeconds = process.uptime();
                let sec = Math.floor(totalSeconds % 60);
                let days = Math.floor((totalSeconds % 31536000) / 86400);
                let hours = Math.floor((totalSeconds / 3600) % 24);
                let mins = Math.floor((totalSeconds / 60) % 60);
                var uptime = new Discord.RichEmbed()
                .setAuthor(client.user.username, client.user.avatarURL)
                .addField("Uptime 🕛", `Seconds : ${sec} \n Minutes : ${mins} \n Hours : ${hours} \n Days : ${days}`)
                .setColor("RANDOM")
                message.channel.send(uptime)
        } else if (message.content == prefix + "support") {
                message.channel.send({embed: {
                        color: 3447003,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL
                        },
                        description: "لدخول سيرفر المساعدة [انه طغضا](https://discord.gg/5TV4rud)",
                        footer: {
                          icon_url: client.user.avatarURL,
                          text: "© All copyrights Reseaved"
                        }
                      }
                    });
        } else if (message.content == prefix + "inv" || message.content == prefix + "invite") {
                message.channel.send({embed: {
                        color: 3447003,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL
                        },
                        description: "لدعوة البوت لسيرفرك [انه طغضا](http://cutt.us/MakingBot)",
                        footer: {
                          icon_url: client.user.avatarURL,
                          text: "© All copyrights Reseaved"
                        }
                      }
                    });
        } else if (message.content == prefix + "info") {
                message.channel.send({embed: {
                        color: 3447003,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL
                        },
                        fields : [
                        {
                                name : "『الاسم』",
                                value : `『${client.user.username}』`
                        },
                        {
                                name : "『التاق』",
                                value : `『${client.user.discriminator}』`
                        },
                        {
                                name : "『الآيدي』",
                                value : `『${client.user.id}』`
                        },
                        {
                                name : "『المالك』",
                                value : "『<@322182857655320576>』"
                        },
                        {
                                name : "『مكتبة البوت』",
                                value : `『[Discord.js](https://github.com/discordjs/discord.js)』`
                        },
                        {
                                name : "『اضافة البوت』",
                                value :`『[انه طغضا](http://cutt.us/MakingBot)』`
                        }
                ],
                        footer: {
                          icon_url: client.user.avatarURL,
                          text: "© All copyrights Reseaved"
                        }
                      }
                    });
        } else if (message.content.startsWith(`${prefix}kick`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You Should Have `Kick Members` Permission To Do This Command");
                if(!message.guild.members.get(client.user.id).hasPermission("KICK_MEMBERS")) return message.channel.send("I Should Have `Kick Members` Permission To So This Command");
                if (!message.content.split(" ").join(" ").slice(6)) return message.channel.send("You Should Type The ID Or Mention Which Member You Want To Kick");
                var men = message.guild.members.get(message.content.split(" ").join(" ").slice(6)) || message.mentions.members.first();
                if (!men) return message.channel.send("I Can't Find This Member");
                men.kick();
                message.channel.send(`I Have Kicked <@${men.id}> !`);
        } else if (message.content.startsWith(`${prefix}ban`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You Should Have `Ban Members` Permission To Do This Command");
                if(!message.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return message.channel.send("I Should Have `Ban Members` Permission To So This Command");
                if (!message.content.split(" ").join(" ").slice(5)) return message.channel.send("You Should Type The ID Or Mention Which Member You Want To Ban");
                var men = message.guild.members.get(message.content.split(" ").join(" ").slice(6)) || message.mentions.members.first();
                if (!men) return message.channel.send("I Can't Find This Member");
                men.ban(); message.channel.send(`I Have Banned <@${men.id}> !`)
        } else if (message.content.startsWith(`${prefix}mute`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You Should Have `Manage Channels` Permission To Do This Command");
                if(!message.guild.members.get(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Should Have `Manage Channels` Permission To So This Command");
                if (!message.content.split(" ").join(" ").slice(6)) return message.channel.send("You Should Type The ID Or Mention Which Member You Want To Mute");
                var men = message.guild.members.get(message.content.split(" ").join(" ").slice(6)) || message.mentions.members.first();
                message.channel.overwritePermissions(men , {
                        SEND_MESSAGES : false
                });
        } else if (message.content.startsWith(`${prefix}unmute`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You Should Have `Manage Channels` Permission To Do This Command");
                if(!message.guild.members.get(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Should Have `Manage Channels` Permission To So This Command");
                if (!message.content.split(" ").join(" ").slice(8)) return message.channel.send("You Should Type The ID Or Mention Which Member You Want To UnMute");
                var men = message.guild.members.get(message.content.split(" ").join(" ").slice(6)) || message.mentions.members.first();
                message.channel.overwritePermissions(men , {
                        SEND_MESSAGES : true
                });
        } else if (message.content == `${prefix}mc`) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You Should Have `Manage Channels` Permission To Do This Command");
                if(!message.guild.members.get(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Should Have `Manage Channels` Permission To So This Command");
                message.channel.overwritePermissions(message.guild.id , {
                        SEND_MESSAGES : false
                });
        } else if(message.content == `${prefix}umc`) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You Should Have `Manage Channels` Permission To Do This Command");
                if(!message.guild.members.get(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Should Have `Manage Channels` Permission To So This Command");
                message.channel.overwritePermissions(message.guild.id , {
                        SEND_MESSAGES : true
                });
        } else if (message.content.startsWith(`${prefix}delete.r`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You Should Have `Manage Roles` Permission To Do This Command");
                if(!message.guild.members.get(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send("I Should Have `Manage Roles` Permission To So This Command");
                if (!message.content.split(" ").join(" ").slice(10)) return message.channel.send("You Should Type The Name of The Role That You Want To Delete");
                if (!message.guild.roles.find("name", message.content.split(" ").join(" ").slice(10))) return message.channel.send("i Can't Find This Role ");
                message.guild.roles.find("name", message.content.split(" ").join(" ").slice(10)).delete().then(() => {
                        message.channel.send("I Have Deleted This Role !");
                })
        } else if (message.content.startsWith(`${prefix}delete.c`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("You Should Have `Manage Channels` Permission To Do This Command");
                if(!message.guild.members.get(client.user.id).hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Should Have `Manage Channels` Permission To So This Command");
                if (!message.content.split(" ").join(" ").slice(10)) return message.channel.send("You Should Type The Name of The Channel That You Want To Delete");
                if(!message.guild.channels.find("name", message.content.split(" ").join(" ").slice(10))) return message.channel.send("I Can't Find This Channel");
                message.guild.channels.find("name", message.content.split(" ").join(" ").slice(10)).delete();
                message.channel.send("I Have Deleted This Channel")
        } else if (message.content.startsWith(`${prefix}bc`)) {
                if (!message.channel.guild) return message.channel.send(`This Command is Only Allowed For Server ! :x:`);
                if (!message.member.hasPermission(8)) return message.channel.send("You Should Have `Adminstrator` Permission To Do This Command");
                if (!message.content.split(" ").join(" ").slice(4)) return message.channel.send("You Should Type The Message You Want it To Send");
                message.guild.members.filter(m => m.presence.status !== "invisible").forEach(m => {
                        var e = new Discord.RichEmbed()
                        .setAuthor(client.user.username, client.user.avatarURL)
                        .setColor("RANDOM")
                        .addField("Broadcast 📢",
`** Server **
- ${message.guild.name}

** Sender **
- ${message.author.tag}

** Mesaage **
- ${message.content.split(" ").join(" ").slice(4)}`);
                m.send(e);
                })
        } else if (message.content.startsWith(prefix + "clear")) {
                var args = message.content.substring(prefix.length).split(" ");
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
      var msg;
      msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
      title: "Whoaaaaaaaa!",
      color: 0x06DF00,
      description: "Messages have gone to :wastebasket:",
      footer: {
      text: "This message will be deleted in 3 seconds!"
      }
      }}).then(msg => {msg.delete(3000)});}
});


client.login('NTA1NDAzNTEwNzc5Njc0NjI0.DrTFUQ.qw3JQ1NfF1xm2Cu31TyB-s22oUI');
