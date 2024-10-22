import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: apiKey });

export async function POST(req) {
    // The 'question' variable is the user's input from the frontend
    const { question } = await req.json();
    
    // Communicate with the OpenAI API to create our chatbot.
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant who supports Liverpool FC",
        },
        {
          role: "user",
          content: question,
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 300,
    });
  
    // Return the response we receive from OpenAI
    return new Response(JSON.stringify(response));
  }
