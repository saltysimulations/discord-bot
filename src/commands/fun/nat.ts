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
// NAT
//
//============================================================

import { makeEmbed } from '../../lib/embed';

const NAT_URL: string = "https://cdn.discordapp.com/attachments/987508579508572201/987509878874603520/anime-cute.gif";

const nat = {
    id: 'nat', // Unique command identifier
    name: ['nat', 'ninjo'],
    description: 'nat command',
    run: async (client, message, args) => {
        const natEmbed = makeEmbed({ image: { url: NAT_URL }});
        await message.channel.send({ embeds: [ natEmbed ] });
    }
};

export const command = nat;