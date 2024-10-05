//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://dreamguyskiyo:Ryv6BxyGDMTjSBB0@cluster0.5utbusu.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Aizawl/Mizoram";
global.github = process.env.GITHUB || "https://github.com/dg-yato-3/Queen-Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/dgyato";
global.sudo = process.env.SUDO || "919863840872";
global.owner = process.env.OWNER_NUMBER || "919863840872";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "919863840872";
global.read_status_from = process.env.READ_STATUS_FROM || "919863840872";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUw5OVFybEtkK3JTRlU1SVJ6TjQ1SmlnRkhXQkszTFY1UGxPUUU0Q0kxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGN5bzd6YUxYVldBRzQ5WDhlUnE2K1Y5YmJUUndUV1lXT2VvZkw3NE1FND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5S0t1aWhKWTVpYkMwT2pnYmpTMkNYTUlVU3RDMkNobzlNNmlxRzBHR0VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFcWtPaDNTMU5XWkI2N1BmUWxINWxxcHhsTlpHQXVYa3R3ZnZzK1d3SGxvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNIdDBXbFZqMC9QVm1sanpMRFU5THpDU0plWXhPb3MzSkhiNkY4L3FSblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iktua2xSa0lESVlqSGlPSE5NWW1jblpDWFhXQzhVeXdvQnJZR0pqVDkvVXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5SVnpGNkpkZzBMS2kvcHRsS0syd0xueXZ2TW9nOUF2Ym1yTVBsRXMwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXZUa20wYkIxTTU4bmNvVGdNWUMvQU45QXRqZkYxemlyczF4bW1SQ2JFRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1YNUg4ajM1OE9hSTd4VFduTDI4VWRsSXQ5UFR4Y0dZL3pBalRia0dHTDJsUkloR1c0NEp2ZHh3ZGdOZFN4QXBoeHlpTThNeE9jVXAxeVRNTjB1UkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzQsImFkdlNlY3JldEtleSI6ImlpUWlVakFUTGRzdTNSQXRuRzBFMkgybzF4NnoyUEVUQVZvRDVxOG1nb3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRfUl9hZ1JfU0k2amNmZUN2ZFU4NWciLCJwaG9uZUlkIjoiZDE1MmQ4NjctNDA1Mi00NTkzLTg4NGYtY2E5NTZlNTQ5NjE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZkakRZclc5UGc4czJLZi9MeWdoTEp3c2l3dz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQjFnR1hzZHd0SzlwN0doeEMxeExqN2RGRXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUjRQRVI2OTkiLCJtZSI6eyJpZCI6IjkxOTg2Mzg0MDg3MjoyNEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFMzL09JREVPWEpocmdHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTVdPYkhzWmRWZ2xSZXJpYnVhRjFDdms1TjJhSW4yREpuSGhxa2NFQkVHYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiR2RPY3ljT01LKzJUVVYzV25RMjZLbXFnNlZieW5uWUpOUkJxeVZ4aGZreXZDb1lVTlcrVFI0cnJhRU1TOVI1aG9heEl3SWlKM3luUVlvN0VZQ2lMQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IjJYeXVSbkVyWjhuSjB0djVlaVNFOGZYdkNPbCtkOHFPSjBwUld3a2V6WEJvTHlLNDlBV2RJQjlhUU8wZ2NKNHBtd0ZDZXNHQjVDQWVEUEZ1T1A5b0FnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE5ODYzODQwODcyOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRGam14N0dYVllKVVhxNG03bWhkUXI1T1RkbWlKOWd5Wng0YXBIQkFSQm4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgxNjEwMTAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSFV3In0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "=",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝐝𝐠𝐲𝐚𝐭𝐨™`",
  author: process.env.PACK_AUTHER || "𝐝𝐠𝐲𝐚𝐭𝐨",
  packname: process.env.PACK_NAME || "dgyato",
  botname: process.env.BOT_NAME || "dgyato",
  ownername: process.env.OWNER_NAME || "dgyato",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
