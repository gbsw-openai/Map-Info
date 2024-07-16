import OpenAI from 'openai'
import dotenv from 'dotenv'
import { askDto } from '../../models/askModel'

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY']
})

const ask_chatgpt = async (content: string) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        "role": "system",
        "content": content,
      },
    ]
  })
  
  return response.choices[0].message.content
}

const assistant_guide = async (address: string) => {
  const prompt_role = `You are a friendly and professional tour guide for me.
I am traveling to ${address} and you need to explain the facilities around ${address}.
Information about nearby facilities includes shops, tourist attractions, and restaurants.
Please describe the name, address, and opening date of the facility.
All of these explanations must be in Korean.`

  return ask_chatgpt(prompt_role)

  // [
  //   {
  //     role: "system",
  //     content: `You are a useful assistant who provides quality information about the surroundings of ${address}.`,
  //   },
  //   {
  //     role: "user",
  //     content: question,
  //   }
  // ],
}

const ask = async (ask: askDto) => {
  
  const { address } = ask
  const askQry = await assistant_guide(address)
  
  return { status: 201, message: askQry }
}

export { ask }