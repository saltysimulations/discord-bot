import Discord from "discord.js";

export interface CommandDefinition {
    id: string;
    name: string[];
    description: string;
    run: (client: Discord.Client<boolean>, message: Discord.Message<boolean>, args: string[]) => void;
    [key: string]: any
}
