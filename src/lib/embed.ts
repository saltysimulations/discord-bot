import discord from 'discord.js';
import { Colors } from '../config';

export function makeEmbed(embed: discord.MessageEmbedOptions): discord.MessageEmbed {
    return new discord.MessageEmbed({
        color: Colors.SALTY_PURPLE,
        ...embed,
    });
}

export function makeLines(lines: string[]): string {
    return lines.join('\n');
}