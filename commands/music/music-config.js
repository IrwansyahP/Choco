module.exports = ({
 name: "music-config",
 description: "Calls Up The Music Control",
 code: `$reactionCollector[$splitText[1];$authorID;1h;⏭️,🔄,⏸️,▶️,◀️;awaitMusic1,awaitMusic2,awaitMusic3,awaitMusic4,awaitMusic5;yes]
 $textSplit[$sendMessage[{color: #CAEAF9}
 {title:Music Config}{description:
 ⏭️ - Skip
 🔄 - Loop
 ⏸️ - Pause
 ▶️ - Resumе
 ◀️ - Back};yes]
 $onlyIf[$voiceID[$authorID]!=;{title: Error}{description: You Haven't Joined The Voice Channel Yet!}{color: #ff0000}]]`
});
