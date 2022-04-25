//============================================================
//
// Salty Simulations Discord Bot
// Author: saltysimulations
// URL: https://github.com/owen2007/Salty-Simulations-Discord-Bot/
// Date: 2022-04-25
// Version: 0.0.1
// License: AGPLv3
//
// Source based on:
// FlyByWire Discord Bot
// Author: flybywire
// URL: https://github.com/flybywiresim/discord-bot/
//
//============================================================
//
// This handler logs a ready message upon bot startup.
//
//============================================================

module.exports = {
    event: 'ready',
    run: async (client, readyEvent) => {
        console.log(`Ready in ${client.guilds.cache.size} guilds!`);
    }
};