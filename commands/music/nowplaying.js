module.exports = ({
name: "nowplaying",
 aliases: ['np'],
code: `
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$advancedTextSplit[$songInfo[duration]; ;1];{description: 

▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];2]];{description: 

▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\`  

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];3]];{description: 

▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];4]];{description: 

▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];5]];{description: 

▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];8];6]];{description: 

▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];7]];{description: 

▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];8]];{description: 

▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];9]];{description: 

▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];10]];{description: 

▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];11]];{description: 

▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];12]];{description: 

▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];13]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];14]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];15]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];16]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\`  

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];17]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button:▬ 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color:#CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];18];18]];{description: 

▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬:radio_button: 

\`$replaceText[$replaceText[$splitText[3];(;];);] $textSplit[$songInfo[current_duration]; ]/ $replaceText[$replaceText[$splitText[3];(;];);]

$textSplit[$songInfo[duration]; ]\` 

Requested By: <@$songInfo[userID]>}{color: #CAEAF9}{thumbnail:$songInfo[thumbnail]}{title:$songInfo[title]}{url:$songInfo[url]}{author:Now Playing: $userAvatar[$clientID]}]

$onlyif[$voiceid!=;{title: Error}{description: You Haven't Joined The Voice Channel Yet!}{color: #ff0000}]

$onlyIf[$queueLength>0;{color:#ff0000}{title: Error}{description: Queue Is Empty!}]`
});
