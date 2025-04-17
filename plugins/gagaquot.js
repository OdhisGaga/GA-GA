const { zokou } = require('../framework/zokou');
const traduire = require('../framework/traduction');

zokou({ nomCom: 'quote', categorie: 'FUN 📱' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('Commande réservée au groupe uniquement');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`╔══════════════════════════╗
║   𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 𝐗𝐆𝐀𝐆𝐀 𝐁𝐎𝐓𝐒              ║
╚══════════════════════════╝

🎬 Anime: ${quote.anime}
👤 Personnage: ${quote.character}
💬 Citation: ${await traduire(quote.quote, { to: 'fr' })}

𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 𝐗𝐆𝐀𝐆𝐀 𝐁𝐎𝐓𝐒`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`╔══════════════════════════╗
║   𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 𝐗𝐆𝐀𝐆𝐀 𝐁𝐎𝐓𝐒              ║
╚══════════════════════════╝

🎬 Anime: ${quote.anime}
👤 Personnage: ${quote.character}
💬 Citation: ${await traduire(quote.quote, { to: 'fr' })}

𝐊𝐄𝐄𝐏 𝐔𝐒𝐈𝐍𝐆 𝐗𝐆𝐀𝐆𝐀 𝐁𝐎𝐓𝐒`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});
