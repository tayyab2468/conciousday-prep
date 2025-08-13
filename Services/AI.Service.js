import axios from "axios";
require('dotenv').config()

class AIServices{
    static async QNA_Agent(journal, intention, dream, priorities){
        const AI_Prompt = `You are a daily reflection and planning assistant. Your goal is to:
        1. Reflect on the user's journal and dream input
        2. Interpret the user's emotional and mental state
        3. Understand their intention and 3 priorities
        4. Generate a practical, energy-aligned strategy for their day
        
        Input:
        Morning Journal: ${journal}
        Intention: ${intention}
        Dream: ${dream}
        Priorities: ${priorities}
        
        Output(JSON Only):
        {
        "reflection" : "...",
        "dream_interpretation" : "...",
        "mindset_insight" : "...",
        "strategy" : "..."
        }
        ;`

        const response = await axios.post(
            "https: //api-openrouter.ai/v1/chat/completions",
            {
                model : "openai/gpt-3.5-turbo",
                messages : [{role: "user", content: prompt}]
            },
            {
                headers : {"Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`}
            }
        );
        return JSON.parse(response.data.choices[0].message.content)
    }
}

module.exports = AIServices