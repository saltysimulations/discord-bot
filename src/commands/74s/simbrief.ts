import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const simbrief: CommandDefinition = {
    id: "simbrief",
    name: ["simbrief", "sb"],
    description: "simbrief integration",
    run: async (_client, message, _args) => {
        const simbriefEmbed = makeEmbed({
            title: "SimBrief Integration",
            description:
                "The Salty 74S supports uplinking the route, payload and performance data from your SimBrief OFP. \
                Check out [our tutorial](https://youtu.be/cSY-r83pXio) to learn how to set up SimBrief integration.",
        });
        await message.channel.send({ embeds: [simbriefEmbed] });
    },
};

export const command = simbrief;
