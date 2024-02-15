const { Events, EmbedBuilder } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`${client.user.tag} started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members`);
		client.user.setPresence({ activities: [{ name: 'Simplicity | </help:1207727681005948938> | Simply Simple Music Bot!', type: 2 }] });
		client.channels.cache
			.get("850294318290829372")
			.send({ embeds: [new EmbedBuilder().setDescription(`\`\`\`bot started in ${client.guilds.cache.size} servers with ${client.users.cache.size} members\`\`\``)] });
	},
};