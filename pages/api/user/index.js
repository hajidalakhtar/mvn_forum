import prisma from "../../../lib/prisma";


export default async function handler(req, res) {

    if (req.method === 'POST') {
        try {
            const user = await prisma.participant.create({
                data: req.body,
            })
            res.status(200).json({status: 'Successs', data: user})

        } catch (e) {
            res.status(200).json({status: 'Error', data: req.body})
        }

    } else if (req.method === 'GET') {
        try {
            const user = await prisma.participant.findMany()
            res.status(200).json({status: 'Success', data: user})
        } catch (e) {
            res.status(500).json({status: 'Error', data: e.message})
        }
    } else {
        res.status(200).json({status: 'Not Support'})
    }
}








