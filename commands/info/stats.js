module.exports = ({
 name: "stats",
 aliases: ["botstats", "botinfo"],
 code: `
$title[Bot Statistic]
$author[$username[$clientid];$useravatar[$clientid]]
$color[#CAEAF9]
$description[
**Bot Info's:**
・Total Command: \`$commandsCount\`
・Latency: \`$botPing MS\`
・Uptime: \`$uptime\`
・Bot Owner: \`$usertag[$botownerid]\`

**Version:**
・Version: \`1.0.0\`
・NodeJS Version: \`$getObjectProperty[nodev]\`
・Discord.js Version: \`$getObjectProperty[discordv]\`

**Hosting Status:**
・Platform: \`DanBot Hosting\`
・CPU Ussage: \`$cpu\`
・CPU Model: \`$djsEval[require ('os').cpus()[0].model;yes]\`
・CPU Platform: \`$djsEval[require ('os').platform();yes]\`
・RAM Ussage: \`$ram MB\`
・Memory Usage: $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB]
 $djseval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version
$createObject[{}]]`
});
