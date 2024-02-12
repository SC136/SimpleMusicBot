const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { useQueue } = require('discord-player');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('stops the song'),
	async execute(interaction) {
        if (!interaction.inCachedGuild()) return;
        await interaction.deferReply();

        const queue = useQueue(interaction.guildId);
      
        if (!queue?.isPlaying()) {
          const embed = new EmbedBuilder()
          .setDescription("```no music is playing in this server```")
      
          return interaction.editReply({ embeds: [embed] });
        }
      
        queue.node.stop();
      
        const embed = new EmbedBuilder()
        .setDescription('```music stopped```')
      
        return interaction.editReply({ embeds: [embed] });
	},
};