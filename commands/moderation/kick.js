module.exports = ({
 name: "kick",
 usage: "kick <user>",
 description: "Kick A Member",
 perms: "kick",
 code: `$kick[$findMember[$message;no]]
 $title[Kick]
 $description[
 **Successfully Kicked:**
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]

**Reason:**
$noMentionMessage]
 $footer[Kicked By: $username[$authorID]]
 $addTimestamp
 $color[GREEN]
 $onlyIf[$findMember[$message;no]!=$authorID;{title: Error} {description: Something Went Error!} {color: #ff0000}]
 $onlyIf[$userExists[$findMember[$message;no]]==true;{title: :mg_reactno: Error!} {description: That User Doesn't Exist!} {color: #fc0000}]
 $argsCheck[1;{title: :Error} {description: **Ussage:** \`c.kick <mention> <reason>\`} {color: #ff0000}]
 $onlyPerms[kick;{title: :Error} {description: You Don't Have \`kick\` Permission!} {color: #ff0000}]
$onlyBotPerms[kick;{title: Error} {description: I Don't Have \`kick\` Permission!} {color: #ff0000}]
 `
});
