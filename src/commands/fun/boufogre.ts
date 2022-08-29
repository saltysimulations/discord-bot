import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const BOUFOGRE_URL = "https://cdn.discordapp.com/attachments/801800818113511454/968109522994487306/unknown.gif";

const boufogre: CommandDefinition = {
    id: "boufogre", // Unique command identifier
    name: ["boufogre", "bouf", "elmo"],
    description: "boufogre command",
    run: async (_client, message, _args) => {
        const boufEmbed = makeEmbed({ image: { url: BOUFOGRE_URL } });
        await message.channel.send({ embeds: [boufEmbed] });
    },
};

export const command = boufogre;
