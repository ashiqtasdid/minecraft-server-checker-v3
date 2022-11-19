const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('Shows the current version of the bot'),
        async execute(interaction) {
            const exampleEmbed = new EmbedBuilder()
            .setTitle('Version - Minecraft Server Checker')
            .setColor(0x2458D8)
            .addFields(
                { name: 'Version', value:'3.0.1' },
            )
            // .setFooter('MC Server Checker');

            await interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
	},
};