import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const install: CommandDefinition = {
    id: "install",
    name: ["install", "installer"],
    description: "installer",
    run: async (_client, message, _args) => {
        const installEmbed = makeEmbed({
            title: "Installation",
            description:
                "We recommend using the [FlyByWire Installer](https://api.flybywiresim.com/installer) \
             for simple installation and updates.",
        });
        await message.channel.send({ embeds: [installEmbed] });
    },
};

export const command = install;
