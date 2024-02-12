const { SlashCommandBuilder, EmbedBuiler } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ embeds: [new EmbedBuiler().setDescription('```pong```')] });
	},
};