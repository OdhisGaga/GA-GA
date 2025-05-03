import dotenv from "dotenv";
dotenv.config();
const conf = {
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
  AUTO_LIKE: process.env.AUTO_LIKE || "yes",
  AUTO_READ_DM: process.env.AUTO_READ_DM || "off",
  AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || "no",
  ADM: process.env.ANTI_DELETE || "on",
  ON: process.env.OWNER_NAME || "GAGA-MD",
  ANTICALL: process.env.ANTICALL || "off",
  ANTIPROMOTE: process.env.ANTIPROMOTE || "off",
  ANTIDEMOTE: process.env.ANTIDEMOTE || "off",
  timezone: process.env.TIME_ZONE || "Africa/Nairobi",
  PRESENCE_DM: process.env.DM_PRESENCE || "typing",
  PRESENCE_GROUP: process.env.GROUP_PRESENCE || "paused",
  MODE: process.env.MODE || "private",
  AV: process.env.AV || "on",
  PREFIXES: process.env.PREFIX ? process.env.PREFIX.split(",").map(p => p.trim()).filter(p => p) : [],
  Session: process.env.SESSION || "",
  NUMBER: process.env.OWNER_NUMBER || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || ""
};
export default conf;
