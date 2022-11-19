const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('example')
		.setDescription('Shows an example of the /server command'),
	async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
        .setTitle('Example - Minecraft Server Checker')
        .setColor(0x010101)
        .addFields(
            { name: 'Info about a Minecraft Server', value:'/info [IP] [PORT] (Default port is 25565)' },
        )
        // .setFooter('MC Server Checker');

		await interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
	},
};