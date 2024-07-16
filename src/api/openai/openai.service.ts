import OpenAI from 'openai'
import dotenv from 'dotenv'
import { askDto } from '../../models/askModel'

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY']
})

const ask = async (ask: askDto) => {
  const ask_chatgpt = async (address: string, question: string) => {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: "system",
          content: `You are a useful assistant who provides quality information about the surroundings of ${address}.`,
        },
        {
          role: "user",
          content: question
        }
      ],
    })
    
    return response.choices[0].message.content
  }
  
  const { address, question } = ask
  const askQry = await ask_chatgpt(address, question)

  return { status: 201, message: askQry }
}

export { ask }