
import { NextRequest, NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json({message: "hello"});
}

const apiKey = 'o.fUBRQ7mVC6Od7Mb1M3cQpSQ5rROCyTCS'; 
export async function POST(req, res) {
  // console.log(req.body);
  
  if (req.method === 'POST') {
    const body = await req.json(); // Parse the JSON body
    const { name, number } = body;
    const title = 'Client Details';

    try {
      const response = await fetch('https://api.pushbullet.com/v2/pushes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Token': apiKey,
        },
        body: JSON.stringify({
          type: 'note',
          title: title,
          body: `Name: ${name}\nNumber: ${number}`,
        }),
      });

      const data = await response.json();
      // console.log('Message sent:', data);
      
      return NextResponse.json({ message: 'Notification sent successfully' });
    } catch (error) {
      console.error('Error sending notification:', error);
      return NextResponse.json({ error: 'Internal Server Error' });
    }
  } else {
    return NextResponse.json({ error: 'Method Not Allowed' });
  }
}