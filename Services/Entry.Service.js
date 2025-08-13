import prisma from '../Config/Prisma.client.js';
const AIServices = require('./AI.Service.js')

class EntryService {
    static async EntryPoint(journal, intention, dream, priorities){
        const Output = await AIServices.getAgentResponse(journal, intention, dream, priorities);

        const entry = await prisma.entry.create({
            data: {
                date: new Date(),
                journal,
                intention,
                dream,
                priorities, 
                reflection: Output.reflection,
                dream_interpretation: Output.dream_interpretation,
                mindset_insight: Output.mindset_insight,
                strategy: Output.strategy
            }
        });
        return entry;
    }

    static async enterbydate(date){
        return prisma.entry.findfirst({
            where: {date: new Date(date)}
        })
    }
}

module.exports = EntryService;