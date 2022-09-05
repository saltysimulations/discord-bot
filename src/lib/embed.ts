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
// This file provides easier methods for generating embed
// objects. It is imported to most commands.
//
//============================================================

import {EmbedData, EmbedBuilder } from 'discord.js';
import { Colors } from '../config';

export function makeEmbed(embed: EmbedData): EmbedBuilder {
    return new EmbedBuilder({
        color: Colors.SALTY_PURPLE,
        ...embed,
    });
}

export function makeLines(lines: string[]): string {
    return lines.join('\n');
}