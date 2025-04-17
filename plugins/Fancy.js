const { zokou } = require("../framework/zokou");
const fancy = require("../commandes/style");

zokou({ nomCom: "fancy", categorie: "Fun", reaction: "☑️" }, async (dest, zk, commandeOptions) => {
    const { arg, repondre, prefixe } = commandeOptions;
    const id = arg[0]?.match(/\d+/)?.join('');
    const text = arg.slice(1).join(" ");

    try {
        if (id === undefined || text === undefined) {
            return await repondre(`\nExemple : ${prefixe}fancy 10 Xgaga bots\n` + String.fromCharCode(8206).repeat(4001) + fancy.list('Xgaga bots', fancy));
        }

        const selectedStyle = fancy[parseInt(id) - 1];
        if (selectedStyle) {
            return await repondre(fancy.apply(selectedStyle, text));
        } else {
            return await repondre('_Style introuvable :(_');
        }
    } catch (error) {
        console.error(error);
        return await repondre('_Une erreur s\'est produite :(_'){
 contextInfo: {
        externalAdReply: {
          title: "Error Fetching Bible Passage",
          body: "Please try again later.",
          thumbnailUrl: "https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg", // Replace with a suitable thumbnail URL
          sourceUrl:  'https://whatsapp.com/channel/0029VaRHDBKKmCPKp9B2uH2F',
          mediaType: 1,
          showAdAttribution: true,
        },
      },
    });
  }
});   
