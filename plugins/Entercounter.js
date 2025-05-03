const { zokou } = require("../framework/zokou");
const { downloadMediaMessage, downloadContentFromMessage } = require("@whiskeysockets/baileys");
const { exec } = require('child_process');
const { writeFile } = require("fs/promises");
const fs = require('fs-extra');
const moment = require("moment-timezone");


zokou({
  nomCom: 'report',
  aliases: 'spread',
  desc: 'report anything to the bot developer',
  categorie: "ISSUES",
  reaction: '🗝️'
}, async (bot, zk, context) => {
  const { arg, repondre, superUser, nomAuteurMessage } = context;

  if (!arg[0]) {
    return repondre("After the command *report*, type your message to be sent to the specified contacts.");
  }

  if (!superUser) {
    return repondre("Only for my owner.");
  }

  // Specified contacts
  const contacts = [
    '254112291443@s.whatsapp.net',
    '254729269118@s.whatsapp.net',
    '254100502552@s.whatsapp.net'
  ];

  await repondre("*Xgaga bot is sending your message to its Developer contacts*...");

  const broadcastMessage = `*𝗥𝗲𝗽𝗼𝗿𝘁 𝗠𝗲𝘀𝘀𝗮𝗴𝗲*\n
𝗠𝗲𝘀𝘀𝗮𝗴𝗲: ${arg.join(" ")}\n
𝗦𝗲𝗻𝗱𝗲𝗿 𝗡𝗮𝗺𝗲 : ${nomAuteurMessage}`;

  for (let contact of contacts) {
    await zk.sendMessage(contact, {
      image: { url: '' },
      caption: broadcastMessage
    });
  }
});
