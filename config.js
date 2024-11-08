const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2540746314005";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_33_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAzMixcbiAgICAgICAgMjksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgwLFxuICAgICAgICAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICA5NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyLFxuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgODksXG4gICAgICAgIDI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcwLFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjksXG4gICAgICAgIDg4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICA2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODYsXG4gICAgICAgIDM5LFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkx3dElPZGJURHBwWm5RcWgzMnFqcGhPTzRuWDMzdEk4TXlnVHpIWEt6OEU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlczZDRiMnkzUTlHWnhSbURTZEJTbFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTlhOWMxMDgtMWYwOC00MzUwLWJiZDEtODhlMmJjYWYwNmEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgNTEsXG4gICAgICAxOTUsXG4gICAgICAxMSxcbiAgICAgIDI0OSxcbiAgICAgIDI0MyxcbiAgICAgIDE3MCxcbiAgICAgIDEzNixcbiAgICAgIDc1LFxuICAgICAgMTE2LFxuICAgICAgMTY3LFxuICAgICAgMTE1LFxuICAgICAgMTkxLFxuICAgICAgMTE0LFxuICAgICAgMzcsXG4gICAgICAyMDksXG4gICAgICAxNjgsXG4gICAgICAxOTQsXG4gICAgICAyNTUsXG4gICAgICAxNDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAyNDksXG4gICAgICAxNDIsXG4gICAgICA0NyxcbiAgICAgIDE2MyxcbiAgICAgIDE4MSxcbiAgICAgIDIyNSxcbiAgICAgIDkxLFxuICAgICAgMTg4LFxuICAgICAgMjA1LFxuICAgICAgNjgsXG4gICAgICAyMSxcbiAgICAgIDE5MixcbiAgICAgIDIzMyxcbiAgICAgIDE5OCxcbiAgICAgIDE1NSxcbiAgICAgIDgxLFxuICAgICAgMTczLFxuICAgICAgOCxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4QTVYWUY0TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ2MzE0MDA1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjQ5NzIzMTg4NzMyMTIwOjhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWl5eE93REVMYVp0N2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzWHZRRUdDVmdRNURPTmRjREtMbVB6TktnY1lZKzJLWjFkRHgrVDZBdXlJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBTMFVZeXdnb2NOZ1lPVEhBeERjaFpIVkM3Y3V5ajkzZ25YRUM0MUdlSGg3d2Rha0ZJM1J3NXBla1BlMUFGTkhBUjJxQ3RqWFl0b3BaVjdxSXZPMUFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRGckx3T2tJSktyVGdiYmVZd1liSnlrcmV5TkNEZmVYU3NkUHgrM2paTHhqSEdleXFiVEQ4cUxKc2VTRVM4b2FUVW9YTENkU2YwakhnQUdGakljWkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NjMxNDAwNTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTYy"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Hacky Salim ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
