import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const airframe: CommandDefinition = {
    id: "airframe",
    name: ["airframe", "profile", "simbriefairframe"],
    description: "flaps takeoff config",
    run: async (_client, message, _args) => {
        const airframeEmbed = makeEmbed({
            title: "SimBrief Profile",
            description:
                "With the release of the Fuel and Payload manager, we now recommend using our \
                [custom SimBrief airframe](https://www.simbrief.com/system/dispatch.php?sharefleet=141372_1660066082616) \
                for the best experience.",
        });
        await message.channel.send({ embeds: [airframeEmbed] });
    },
};

export const command = airframe;
