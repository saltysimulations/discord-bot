import { CommandDefinition } from "../../lib/command";
import { makeEmbed } from "../../lib/embed";

const FUEL_URL = "https://cdn.discordapp.com/attachments/1013173464489803778/1016281785786712065/unknown.png";

const fuel: CommandDefinition = {
    id: "fuel", // Unique command identifier
    name: ["fuel"],
    description: "fuel",
    run: async (_client, message, _args) => {
        const fuelEmbed = makeEmbed({ title: "Fuel Management Guide", image: { url: FUEL_URL } });
        await message.channel.send({ embeds: [fuelEmbed] });
    },
};

export const command = fuel;
