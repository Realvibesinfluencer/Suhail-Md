const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348157553029,2348101119500,2349049374785";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347056025320";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_54_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDg4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyLFxuICAgICAgICAyNixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDksXG4gICAgICAgIDIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc5LFxuICAgICAgICA1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDk0LFxuICAgICAgICA2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMSxcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL09WeFNuVVJyWXRCSSt0bGpZYnFCdVlaV29nV2dtZkJaTE4xVHlaVU1ydz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDU2MDI1MzIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RUY4QTZGRkRDNDQ0NzczRUE2QjJDNzI4NDEwREFCQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk4NjAwNjFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVW8xaG1OVkNRWUdlai0yNERSX1Nwd1wiLFxuICBcInBob25lSWRcIjogXCI5MDFhOTc2NC1jOTFkLTQyMzItYmY4Zi03MDE2ZTgzZWUxZTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEzLFxuICAgICAgMTE4LFxuICAgICAgNTEsXG4gICAgICA5MSxcbiAgICAgIDIxMSxcbiAgICAgIDE2NCxcbiAgICAgIDE5NCxcbiAgICAgIDE4OSxcbiAgICAgIDEzMCxcbiAgICAgIDk4LFxuICAgICAgMTkwLFxuICAgICAgMTk3LFxuICAgICAgMTc4LFxuICAgICAgNjMsXG4gICAgICAyNDksXG4gICAgICAyMzksXG4gICAgICAzLFxuICAgICAgMTYsXG4gICAgICAxOTEsXG4gICAgICAxODRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgMTQ5LFxuICAgICAgNzcsXG4gICAgICAxNjIsXG4gICAgICAxODksXG4gICAgICAxNjUsXG4gICAgICAxMjQsXG4gICAgICA1MCxcbiAgICAgIDE5MSxcbiAgICAgIDc3LFxuICAgICAgMTcwLFxuICAgICAgNjYsXG4gICAgICAxNjMsXG4gICAgICAxMzMsXG4gICAgICAxNDksXG4gICAgICA2LFxuICAgICAgODEsXG4gICAgICAyNSxcbiAgICAgIDIzNyxcbiAgICAgIDYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFEUDFTUlFaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDU2MDI1MzIwOjQ3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDg3NTE2NzEyMTgxOTU6NDdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERpMjlJREVOUDJpN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJybHhDT3dqbWQ1UEV5cnFXTk1MbGtORnU4TXZiSllja0JZdURTQ2xlbHlzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlhEVFdKRUFaNllFQnBxSG1OZWJQdWRGYjcydDBiV2NhRVNvcU41ajQ4Yk90Tkh2YnZLUENacmFNNW1DbC82TUJQUjl4U3RreGt3djhBODJ6bVZLY0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjZpYnF0QUtRaEJsLy9xQ0xZOFZueWFRb0xpK205bXlXU09pVTRCYlAvUzVoeGxlWEdmTy83QmFlbTE2OFA1YkFDRmtVaHZtcXJZTUFxcS9wSEE1VUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNTYwMjUzMjA6NDdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODYwMDU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzQ4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNDguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjaXJDY1R0SGlMem9VZWtwWElJbmc0QVFNempvc05zOW0yV1ozek9YUzdjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk3ODc3NjQzMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTg1OTk0NDYzNlwifSIKfQ==is"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
