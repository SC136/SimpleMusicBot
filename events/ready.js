const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`${client.user.tag} started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members`);
		client.user.setActivity(`Simplicity | </help:1207727681005948938> | Simply Simple Music Bot!`, {
			type: "LISTENING",
		});
		client.channels.cache
			.get("850294318290829372")
			.send({ embeds: [new EmbedBuilder().setDescription(`\`\`\`bot started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members\`\`\``)] });
	},
};