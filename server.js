const aoi = require("aoi.js")
const bot = new aoi.Bot({

token: "//ur bot token", 
prefix: "c." ,
mobile: true,
autoUpdate: true
})

//status
bot.status({
text: "c.help | #NolepGang's",
type: "PLAYING",
time: 3
})

bot.status({
text: "c.help | $allMembersCount User's",
type: "PLAYING",
time: 3
})

bot.status({
text: "c.help | $serverCount Guild's",
type: "PLAYING",
time: 3
})

//variable
bot.variables({
    user_ID: "",
    user_message: "",
    afk: "0",
    afkwhy: "",
})

bot.onMessage()

const fs = require('fs')
const folders = fs.readdirSync("./commands/")
for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))
for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command(command)
//music config
bot.awaitedCommand({
 name: "awaitMusic1",
 code: `$editMessage[$message[1];{color:#CAEAF9}
 {title:Skip}{description:The Current Song Was Skiped!}]
 $skipSong`})

 bot.awaitedCommand({
 name: "awaitMusic2",
 code: `$editMessage[$message[1];{color:#CAEAF9}
 {title:Loop}{description:The Queue Was Looped!}]
 $loopQueue`})

 bot.awaitedCommand({
 name: "awaitMusic3",
 code: `$editMessage[$message[1];{color:#CAEAF9}
 {title:Pause}{description:Paused The Current Music!}]
 $pauseSong`})

 bot.awaitedCommand({
 name: "awaitMusic4",
 code: `$editMessage[$message[1];{color:#CAEAF9}
 {title:Resume}{description:Resumed The Current Music!}]
 $resumeSong`})

 bot.awaitedCommand({
 name: "awaitMusic5",
 code: `$editMessage[$message[1];{color:#CAEAF9}
 {title:Music Config}{description:⏭️ - Skip
 🔄 - Loop
 ⏸️ - Pause
 ▶️ - Resume
 🔄 - Back}]`})

//eval
bot.awaitedCommand({
 name: "awaitEval",
 code: `$deleteMessage[$message[1]]`
})

//snipe
bot.onMessageDelete()
bot.deletedCommand({
 channel: "$channelID",
 code: `
 $setChannelVar[user_message;$message]
 $setChannelVar[user_ID;$authorID]
 `
});

} 
}