import Discord, { PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, TextChannel, Message, Colors } from "discord.js";
import { Roles } from "../config";
import { makeEmbed } from "../lib/embed";

const SCAM_LOGS_CHANNEL_ID = "1016324650449510440";

const dmEmbed = (reason: string, by: string) =>
    makeEmbed({
        title: "Salty Simulations | Banned",
        description: "You have been banned from Salty Simulations.",
        fields: [
            {
                name: "Reason",
                value: reason,
            },
            {
                name: "Banned by",
                value: by,
            },
        ],
        timestamp: new Date(),
    });

const scamEmbed = (message: Message) =>
    makeEmbed({
        title: "Potential Scam",
        author: {
            name: message.author.tag,
            iconURL: message.author.displayAvatarURL(),
        },
        fields: [
            {
                name: "Content",
                value: message.content,
            },
            {
                name: "Channel",
                value: message.channel.toString(),
            },
        ],
        timestamp: new Date(),
        footer: {
            text: `Author: ${message.author.id}`,
        },
    });

const noPermsEmbed = makeEmbed({ title: "Error", description: "You do not have permission to do this.", color: Colors.Red });

module.exports = {
    event: "messageCreate",
    run: async (client: Discord.Client<boolean>, message: Discord.Message<boolean>) => {
        if (!message.guild || message.author.bot) return;

        const content = message.content.toLowerCase();

        const urlRegex = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?");

        const containsUrl = urlRegex.test(content);
        const everyoneTag = content.includes("@everyone");
        const freeNitro = content.includes("free") && content.includes("nitro");

        const admin = message.member.permissions.has(PermissionFlagsBits.Administrator);

        if (((freeNitro && containsUrl) || everyoneTag) && !admin) {
            await message.delete();
            await message.member.timeout(86400000); // 1 day

            const scamLogs = (await client.channels.fetch(SCAM_LOGS_CHANNEL_ID)) as TextChannel;

            const id = message.id;

            const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
                new ButtonBuilder().setCustomId(`${id}-ban`).setLabel("Ban").setStyle(ButtonStyle.Primary),
                new ButtonBuilder().setCustomId(`${id}-ignore`).setLabel("Ignore & Untimeout").setStyle(ButtonStyle.Secondary)
            );

            const banCollector = scamLogs.createMessageComponentCollector({
                filter: (i) => i.customId === `${id}-ban` || i.customId === `${id}-ignore`,
            });
            const sureCollector = scamLogs.createMessageComponentCollector({
                filter: (i) => i.customId === `${id}-confirm` || i.customId === `${id}-cancel`,
            });

            banCollector.on("collect", async (i) => {
                if (!i.memberPermissions.has(PermissionFlagsBits.BanMembers)) {
                    await scamLogs.send({ embeds: [noPermsEmbed] });
                    return;
                }

                if (i.customId === `${id}-ban`) {
                    const sure = new ActionRowBuilder<ButtonBuilder>().addComponents(
                        new ButtonBuilder().setCustomId(`${id}-confirm`).setLabel("Confirm Ban").setStyle(ButtonStyle.Success),
                        new ButtonBuilder().setCustomId(`${id}-cancel`).setLabel("Cancel").setStyle(ButtonStyle.Danger)
                    );
                    await i.update({ components: [sure] });
                } else {
                    await message.member.timeout(null);
                    await i.update({ components: [] });
                }
                banCollector.stop();
            });

            sureCollector.on("collect", async (i) => {
                if (!i.memberPermissions.has(PermissionFlagsBits.BanMembers)) {
                    await scamLogs.send({ embeds: [noPermsEmbed] });
                    return;
                }

                if (i.customId === `${id}-confirm`) {
                    try {
                        const dm = await message.member.createDM();
                        await dm.send({ embeds: [dmEmbed("scam", i.member.toString())] });
                    } catch (e) {
                        await scamLogs.send({
                            embeds: [makeEmbed({ color: Colors.Red, title: "Error", description: `Could not send ban DM: \`${e.message}\`` })],
                        });
                    }

                    await message.member.ban({ reason: "scam" });

                    await i.update({ components: [] });
                } else {
                    await message.member.timeout(null);
                    await i.update({ components: [] });
                }
                sureCollector.stop();
            });

            const mods = await message.guild.roles.fetch(Roles.MODERATION_TEAM);

            await scamLogs.send({ embeds: [scamEmbed(message)], components: [row], content: mods.toString() });
        }
    },
};
