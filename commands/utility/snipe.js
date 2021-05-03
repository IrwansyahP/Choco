module.exports = ({
 name: "snipe",
 code: `
$author[$username[$getChannelVar[user_ID]]#$discriminator[$getChannelVar[user_ID]];$userAvatar[$getChannelVar[user_ID]]]
$addTimestamp
$description[
$getChannelVar[user_message]
]
$color[#CAEAF9]
$onlyIf[$getChannelVar[user_message]!=undefinied;{title: Error}{description:I Don't Found The Deleted Message!}{color:#ff0000}]
`
})
