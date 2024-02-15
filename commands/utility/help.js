const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('help you using the bot'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle(`${interaction.client.emoji} Simple Music Bot Help Command`)
            .setThumbnail(`${interaction.client.user.avatarURL({ size: 4096 })}`)
            .setDescription("```Simply Simple Music Bot!```")
            .addFields({ name: "</play:1206281046891429888>", value: "```/play <songname> (Simply Plays A Song In The VC You Are In)```", inline: true })
            //.addField(".volume", "```Adjust The Volume Of The Music```", true)
            //.addField(".pause", "```Pauses The Music```", true)
            //.addField(".resume", "```Resumes The Music```", true)
            //.addField(".loop", "```Repeats The Music```", true)
            //.addField(".lyrics", "```Shows The Lyrics Of The Current Playing Song```")
            //.addField(".queue", "```Shows You The Current Queue```")
            .addFields({ name: "</stop:1206284396169269279>", value: "```Simply Stops The Song```", inline: true })
            //.addField('.join', '```Simply Joins The VC You Are In```', true)
            //.addField('.leave', '```Simply Leaves The VC```', true)
            //.addField(".searchlyrics", "```Search For Lyrics Of A Song```")
            .addFields({ name: "</ping:876100139498995792>", value: "```Simply Shows You The Latency```", inline: true })
            //.addField(".server","```Gives You The Support Server Invite Link```",    true)
            //.addField(".invite","```Gives You The Link To Invite The Bot In Your Server```",true)
            //.addField(".vote","```Gives You A List Where You Can Vote The Bot!```",true)
            //.addField(".uptime", "```Give You The Bot's Uptime!```", true)
            //.addField(".botinfo", "```Give Some Info/Stats About The Bot```", true)
            .setColor("#2F3136")
            .setFooter(
                "If You Need Any Help Join The Support Server! Type `.server` To Get The Link!"
            );
        await interaction.reply({ embeds: [embed] });
    },
};