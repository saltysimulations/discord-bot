import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const SHOWER_URL = "https://cdn.discordapp.com/attachments/1013173464489803778/1015726622374117557/shower.gif";

const shower: CommandDefinition = {
    id: "shower", // Unique command identifier
    name: ["shower"],
    description: "please take a shower immediately",
    run: async (_client, message, _args) => {
        const showerEmbed = makeEmbed({ image: { url: SHOWER_URL } });
        await message.channel.send({ embeds: [showerEmbed] });
    },
};

export const command = shower;
