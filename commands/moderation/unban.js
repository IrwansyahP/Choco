module.exports = ({
 name:"unban",
 code:`$unban[$findUser[$message[1]]]
 $title[Unban]
 $description[
 **Successfully Unbanned:**
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]

 **Reason:**
 $noMentionMessage]
 $footer[Unbanned By: $username[$authorID]]
 $addTimestamp
 $color[FF0000]

$onlyIf[$memberExists[$findUser[$message[1]]]==true;{title: Error}{description: I Can't Find That Member!}{color: #ff0000}]
$onlyIf[$message[1]!=;{title: Error}{description: **Ussage:** \`c.unban <mention> <reason>\`}{color: #ff0000}]
$onlyBotPerms[ban;{title: Error}{description: I Don't Have \`ban\` Permission!}{color: #ff0000}]
$onlyPerms[ban;{title: Error}{description: You Don't Have \`ban\` Permission!}{color: #ff0000}]`
});
