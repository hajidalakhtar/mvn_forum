import prisma from "../../../lib/prisma";


export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const {event_date, event_name, participant} = req.body
            const event = await prisma.event.create({
                data: {
                    event_date: event_date,
                    event_name: event_name,
                },
            })


            const participantEventReq = participant.map(participantId => {
                return {
                    event_id: event.id,
                    participant_id: participantId,
                }
            })
            const participantEvent = await prisma.participantEvent.createMany({
                data: participantEventReq,
                skipDuplicates: true,
            })

            res.status(200).json({status: 'Successs', data: participantEvent})

        } catch (e) {
            res.status(200).json({status: 'Error', data: e.message})
        }

    } else if (req.method === 'GET') {

        const {id: event_id} = req.query

        try {
            let query = prisma.event
            let result;


            if (event_id != null) {
                result = await query.findUnique({
                    where: {
                        id: event_id,
                    },
                    include: {
                        ParticipantEvent: {
                            include: {
                                participant: true,
                            }
                        },
                    }
                })
            } else {
                result = await query.findMany({
                    include: {
                        ParticipantEvent: {
                            include: {
                                participant: true,
                            }
                        },
                    }
                })
            }


            res.status(200).json({status: 'Success', data: result})
        } catch (e) {
            res.status(500).json({status: 'Error', data: e.message})
        }
    } else {
        res.status(200).json({status: 'Not Support'})
    }
}





