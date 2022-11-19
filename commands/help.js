const { SlashCommandBuilder, inlineCode } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('shows info about all commmands'),
	async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
        .setTitle('Help - Minecraft Server Checker')
        .setColor(0x3424D8)
        .addFields(
            { name: 'Info about a Minecraft Server', value:'/server' },
            { name: 'Author', value: '/author - shows the development team of this bot', inline: true },
            { name: 'Version', value: '/version - shows the current version', inline: true },
            { name: 'Example', value: '/example - shows an example of the /server command', inline: true },
            { name: 'Support', value: 'shows the support server invite link', inline: true }
        )
        // .setFooter('Minecraft Server Checker');

		await interaction.reply({ embeds: [exampleEmbed], ephemeral: true });
	},
};