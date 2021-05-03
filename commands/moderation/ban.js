module.exports = ({
 name:"ban",
 code:`$ban[$findUser[$message[1]]]
 $title[Ban]
 $description[
 **Successfully Banned:**
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]

 **Reason:**
 $noMentionMessage]
 $footer[Banned By: $username[$authorID]]
 $addTimestamp
 $color[FF0000]

$onlyIf[$findUser[$message[1]]!=$clientID;{title: Error}{description: I Can't Ban Myself!}{color: #ff0000}]
$onlyIf[$findUser[$message[1]]!=$authorID;{title: Error}{description: You Can't Ban Your Self!}{color: #ff0000}]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;{title: Error}{description: I Can't Find That Member!}{color: #ff0000}]
$onlyIf[$findUser[$message[1]]!=$ownerID;{title: Error}{description: You Can't Ban Server Owner!}{color: #ff0000}]
$onlyIf[$message[1]!=;{title: Error}{description: **Ussage:** \`c.ban <mention> <reason>\`}{color: #ff0000}]
$onlyBotPerms[ban;{title: Error}{description: I Don't Have \`ban\` Permission!}{color: #ff0000}]
$onlyPerms[ban;{title: Error}{description: You Don't Have \`ban\` Permission!}{color: #ff0000}]`
});
