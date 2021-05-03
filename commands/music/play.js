module.exports = ({
 name: "play",
 code: `
$color[#CAEAF9]
$author[Song Added!] 
$title[Play Music]
$description[Added The Song [$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;title]($jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;url]) To Queue!]

 $addField[Duration:;$jsonRequest[http://api.somecool.repl.co/yt-search?search=$message;duration;]; no]
 $addField[Added by:;$userTag[$authorID];no]
 $addField[URL:; $jsonRequest [http://api.somecool.repl.co/yt-search?search=$message;url;]; no]
 $thumbnail[$jsonRequest [http://api.somecool.repl.co/yt-search?search=$message;thumbnail;]]
 $addField[Currently Playing:;[$songInfo[title]\\]($songInfo[url]);no]

$playSong[$message;{title:Error}{description:Couldn't Find The Song Of: \`$message\`!}{color:#ff0000}]
$argsCheck[>1;{title:Error}{description:**Ussage:** \`c.play <song title | url>\`}{color:#ff0000}]
$onlyIf[$voiceID!=;{title:Error}{description:You Haven't Joined The Voice Channel Yet!}{color:#ff0000}]`
});
