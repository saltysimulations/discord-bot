import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const liveries: CommandDefinition = {
    id: "liveries",
    name: ["liveries", "convert"],
    description: "convert liveries",
    run: async (_client, message, _args) => {
        const liveriesEmbed = makeEmbed({
            title: "Livery Conversion",
            description:
                "In order to convert default 747 liveries into Salty 74S liveries,\
                follow our [quick tutorial](https://youtu.be/qyZjiWjcgSE).",
        });
        await message.channel.send({ embeds: [liveriesEmbed] });
    },
};

export const command = liveries;
