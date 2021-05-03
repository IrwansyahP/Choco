module.exports = ({
 name: "loop",
 aliases: ["repeat"],
 code: `
 $title[Loop]
 $color[#CAEAF9]
 $description[$replaceText[$replaceText[$checkCondition[$loopQueue==true];true;Loop Enabled!];false;Loop Disabled!]]
 $onlyIf[$voiceID!=;{title: Error}{description: You Haven't Joined The Voice Channel Yet!}{color: #ff0000}]`
 });
