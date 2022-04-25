import { makeEmbed } from '../../lib/embed';

const TIMBO_URL: string = "https://cdn.discordapp.com/attachments/772533338820837437/966942411194515506/timbo_image.gif";

const timbo = {
    id: 'timbo', // Unique command identifier
    name: ['timbo', 'timburr'],
    description: 'timbo command',
    run: async (client, message, args) => {
        const timboEmbed = makeEmbed({ image: { url: TIMBO_URL }});
        await message.channel.send({ embeds: [ timboEmbed ] });
    }
};

export const command = timbo;