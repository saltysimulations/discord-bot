import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const efb: CommandDefinition = {
    id: "efb",
    name: ["efb"],
    description: "efb",
    run: async (_client, message, _args) => {
        const efbEmbed = makeEmbed({
            title: "EFB",
            description: "The EFB is a work in progress, and is not currently functional.",
        });
        await message.channel.send({ embeds: [efbEmbed] });
    },
};

export const command = efb;
