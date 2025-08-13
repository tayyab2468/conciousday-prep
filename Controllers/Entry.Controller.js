import { Enter as _Enter, Enterbydate as _Enterbydate } from '../Services/Entry.Service.js';

class EntryController{
    static async Enter(req,res){
        try {
            const{journal, intention, dream, priorities} = req.body;
            const entry = await _Enter(journal, intention, dream, priorities);
            res.status(201).json(entry)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }

    static async Enterbydate(req,res){
        try {
            const entry = await _Enterbydate(req.params.date);
            if (!entry) {
                res.status(404).json({error: `Entry not found`})
            }
            res.json(entry)
        } catch (error) {
            res.status(500).json({error: error.message})
        }
    }
}

export default EntryController;