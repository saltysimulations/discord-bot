import Discord, { PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, TextChannel } from "discord.js";
import { makeEmbed } from "../lib/embed";

const SCAM_LOGS_CHANNEL_ID = "1013781202605441074";

module.exports = {
    event: "messageCreate",
    run: async (client: Discord.Client<boolean>, message: Discord.Message<boolean>) => {
        const content = message.content.toLowerCase();

        const urlRegex = new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?");

        const containsUrl = urlRegex.test(content);
        const everyoneTag = content.includes("@everyone");
        const freeNitro = content.includes("free") && content.includes("nitro");

        if ((freeNitro && containsUrl) || (everyoneTag && !message.member.permissions.has(PermissionFlagsBits.MentionEveryone))) {
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

            banCollector.on("collect", async i => {
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

            sureCollector.on("collect", async i => {
                console.log(i.customId)
                if (i.customId === `${id}-confirm`) {
                    console.log("user banned");
                    await i.update({ components: [] });
                } else {
                    await message.member.timeout(null);
                    await i.update({ components: [] });
                }
                sureCollector.stop();
            })

            const embed = makeEmbed({
                title: "Potential Scam",
                author: {
                    name: message.author.tag,
                    iconURL: message.author.displayAvatarURL()
                },
                fields: [
                    {
                        name: "Content",
                        value: message.content
                    },
                    {
                        name: "Channel",
                        value: message.channel.toString()
                    }
                ],
                timestamp: new Date(),
                footer: {
                    text: `Author: ${message.author.id}`
                }
            })

            scamLogs.send({ embeds: [embed], components: [row] })
        }
    },
};
