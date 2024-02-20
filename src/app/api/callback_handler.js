// app/api/callback.js

import nodemailer from 'nodemailer';

import Cors from 'cors';

const cors = Cors({
  methods: ['POST'],
});


export default async function handler(req, res) {
  await cors(req, res);
  if (req.method === 'POST') {
    const { name, number } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'priyanshusaini1102@gmail.com',
        pass: '+1PRlfmvnb',
      },
    });

    const mailOptions = {
      from: 'priyanshusaini1102@gmail.com',
      to: 'anujv028@gmail.com',
      subject: 'Callback Request',
      text: `Name: ${name}\nNumber: ${number}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
