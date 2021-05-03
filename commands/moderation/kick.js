module.exports = ({

 name: "kick",

 code: `

 $kick[$mentioned[1]]

$if[$mentioned[1]==]

Anda Harus Tag Seseorang!

$elseIf[$message[2]==]

$author[$username[$mentioned[1]] Telah Di Kick!;$userAvatar[$mentioned[1]]]

$description[

 **Tag:** $userTag[$findUser[$message[1]]]

 **Mention:** <@$findUser[$message[1]]>

 **ID:** $findUser[$message[1]]]

 $addField[Di Kick Oleh:; $userTag[$authorID]]

$footer[]

$addTimestamp

$addField[Alasan:; \`Tidak Ada Alasan\`]

$color[RED]

$sendDM[$mentioned[1];Kamu Telah Di Kick Dari Server **$serverName**, Karena: \`Tidak Ada Alasan\`]

$endelseIf

$elseIf[$message[2]==$message[2]]

$author[$username[$mentioned[1]] Telah Di Kick!;$userAvatar[$mentioned[1]]]

$description[

 **Tag:** $userTag[$findUser[$message[1]]]

 **Mention:** <@$findUser[$message[1]]>

 **ID:** $findUser[$message[1]]]

 $addField[**Di Kick Oleh:**; $userTag[$authorID]]

$addField[**Alasan:**; \`$noMentionMessage\`]

$footer[]

$addTimestamp

$color[RED]

$sendDM[$mentioned[1];Kamu Telah Di Kick Dari Server **$serverName**, Karena: \`$noMentionMessage\`]

$endelseIf

$endif

$onlyIf[$findUser[$message[1]]!=$clientID;<@$authorID>, Saya Tidak Bisa Kick Diri Saya Sendiri!]

$onlyIf[$findUser[$message[1]]!=$authorID;<@$authorID>, Kamu Tidak Bisa Kick Dirimu Sendiri!]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<@$authorID>, Kamu Tidak Bisa Kick Seseorang Yang Rolenya Lebih Tinggi Daripada Rolemu!]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];<@$authorID>, Saya Tidak Bisa Kick Seseorang Yang Rolenya Lebih Tinggi Daripada Role Saya!]

$onlyIf[$memberExists[$findUser[$message[1]]]==true;<@$authorID>, Saya Tidak Bisa Menemukan Dia!]

$onlyIf[$findUser[$message[1]]!=$ownerID;<@$authorID>, Kamu Tidak Bisa Kick Owner Server!]

$onlyBotPerms[kick;<@$authorID>, Saya Tidak Ada \`KICK\` Permission!]

$onlyPerms[kick;<@$authorID>, Kamu Tidak Ada \`KICK\` Permission!]`

});
