import type { NextApiRequest, NextApiResponse } from 'next';
import { EmbedBuilder, WebhookClient } from 'discord.js';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests are allowed' });
    }

    const { values } = req.body;

    const webhookClient = new WebhookClient({ url: process.env.DISCORD_WEBHOOK_URL as string });

    const embed = new EmbedBuilder()
        .setTitle('Message Sent')
        .setColor(0x00FFFF)
        .addFields(
            { name: 'Name', value: values.name },
            { name: 'Email', value: values.email },
            { name: 'Message', value: values.message }
        );

    try {
        await webhookClient.send({
            content: 'Webhook test',
            username: 'some-username',
            avatarURL: 'https://i.imgur.com/AfFp7pu.png',
            embeds: [embed],
        });

        res.status(200).json({ message: 'Message sent!' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred while sending the message.' });
    }
}
