module.exports = ({
 name: "help",
 code: `
 $color[#CAEAF9]
 $thumbnail[$userAvatar[$clientID]]
 $if[$message[1]==]
 $author[$userTag[$clientID];$userAvatar[$clientID]]
 $description[
Hello **$username**, This Is My Help Commands.
Can't See Full Commands? Just Type \`c.help <module>\`!

**Module List:**
・Moderation
・Info
・Fun
・Music
・Utility]
 $footer[© Choco 2021 - #NolepGang's
]
 $addTimestamp
 $endIf
 $if[$message[1]==fun]
 $title[(🤣) - Fun]
 $description[
Hello **$username**, This Is My Fun Commands!
\`\`\`
ascii, meme, penis
\`\`\`
]
 $footer[© Choco 2021 - #NolepGang's]
 $addTimestamp
 $endIf
 $if[$message[1]==utility]
 $title[(🔒) - Utility]
 $description[
Hello **$username**, This Is My Utility Commands!
\`\`\`
avatar, remindme, weather, snipe
\`\`\`]
$footer[© Choco - #NolepGang's]
$addTimestamp
$endIf
 $if[$message[1]==info]
 $title[(❗) - Info]
 $description[
Hello **$username**, This Is My Fun Commands!
\`\`\`
help, ping, stats, serverinfo, serverlist
\`\`\`
]
 $footer[© Choco 2021 - #NolepGang's]
 $addTimestamp
 $endIf
 $if[$message[1]==moderation]
 $title[(🔨) - Moderation]
 $description[
Hello **$username**, This Is My Moderation Commands!
\`\`\`
kick, ban, unban
\`\`\`
]
 $footer[© Choco 2021 - #NolepGang's]
 $addTimestamp
 $endIf
 $if[$message[1]==music]
 $title[(🎧) - Music]
 $description[
\`\`\`
play, loop, music-config, nowplaying, stop
\`\`\`
]
 $footer[© Choco 2021 - #NolepGang's]
 $addTimestamp
 $endIf`
});
