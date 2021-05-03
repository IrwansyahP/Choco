module.exports = ({
 name: "stop",
aliases: ["s"],
code: `
$stopSong
$onlyIf[$voiceID!=;{color:#ff0000}{title: Error}{description: You Haven't Joined The Voice Channel Yet!}]
$onlyIf[$queueLength==0;{color:#ff0000}{{title: Error}description: The Queue Is Empty!}]
$addCmdReactions[⏹️]`
});
