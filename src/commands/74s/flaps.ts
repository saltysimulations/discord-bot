import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const flaps: CommandDefinition = {
    id: "flaps",
    name: ["flaps"],
    description: "flaps takeoff config",
    run: async (_client, message, _args) => {
        const flapsEmbed = makeEmbed({
            title: "Flaps Settings",
            description:
                "The only valid takeoff flaps settings on the 747 are `10` and `20`.",
        });
        await message.channel.send({ embeds: [flapsEmbed] });
    },
};

export const command = flaps;
