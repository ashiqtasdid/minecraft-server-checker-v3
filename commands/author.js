const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('author')
		.setDescription('Name of the developer'),
	async execute(interaction) {
		await interaction.reply('Ashiq The Dev');
	},
};