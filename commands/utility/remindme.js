module.exports = ({
 name: "remindme",
 aliases: ['reminder', 'remind', 'rmd'],
 code: `$sendDM[$authorID;{title: Reminder!}{description: $messageSlice[1]}{color:#CAEAF9}{author:$username[$clientid]:$useravatar[$clientid]} {footer:$servername:$servericon[$guildid]}]
$wait[$getObjectProperty[duration]ms]
$sendMessage[<@$authorID>, I Will Remind You In **$getObjectProperty[durationdone]:** \`$messageSlice[1]\`;no]
$djsEval[const util = require('dbd.js-utils')

d.object.durationdone = util.parseMS("$getObjectProperty[duration]")
] 
$djsEval[const util = require('dbd.js-utils')

d.object.duration = util.parseToMS("$message[1]")
] 
$createObject[{}]
$argsCheck[>2;{title: Error}{description: **Ussage:** \`c.remindme <duration> <reason>\`}{color: #ff0000}]`
})
