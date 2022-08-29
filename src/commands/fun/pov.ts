import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const POV_URL = "https://cdn.discordapp.com/attachments/742874848837107742/1013560242308657353/IMG_5348.gif";

const pov: CommandDefinition = {
    id: "pov", // Unique command identifier
    name: ["pov", "timbopov"],
    description: "pov timbo saw you download the salty 747",
    run: async (_client, message, _args) => {
        const timboEmbed = makeEmbed({ image: { url: POV_URL } });
        await message.channel.send({ embeds: [timboEmbed] });
    },
};

export const command = pov;
