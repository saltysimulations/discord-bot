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
// TIMBOOOOOOOOOOOOOOOOOOOOOOOOOO
//
//============================================================

import { CommandDefinition } from '../../lib/command';
import { makeEmbed } from '../../lib/embed';

const TIMBO_URL = "https://cdn.discordapp.com/attachments/742874848837107742/1013554268327903252/IMG_5343.gif";

const timbo: CommandDefinition = {
    id: 'timbo', // Unique command identifier
    name: ['timbo', 'timburr'],
    description: 'timbo command',
    run: async (_client, message, _args) => {
        const timboEmbed = makeEmbed({ image: { url: TIMBO_URL }});
        await message.channel.send({ embeds: [ timboEmbed ] });
    }
};

export const command = timbo;