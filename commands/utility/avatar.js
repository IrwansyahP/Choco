module.exports = ({
name: "avatar",
aliases: "av",
code: `
$title[$author[$username[$findUser[$message]] Avatar;$userAvatar[$findUser[$message]]]]
 $description[[Avatar Link]($userAvatar[$findUser[$message]])]
 $color[#CAEAF9] 
 $footer[]
 $addTimestamp
 $image[$userAvatar[$findUser[$message]]]`
})
