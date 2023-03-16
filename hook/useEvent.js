import {useQuery} from 'react-query';
import Api from "../lib/api";

const useGetEvents = () => {
    const api = new Api()
    return useQuery({
        queryKey: 'event',
        queryFn: async () => await api.getEvent()
    })
};


const useFindByIdEvent = (id) => {
    const api = new Api()
    return useQuery({
        queryKey: ['event', id],
        queryFn: async () => await api.getEventById(id)
    })
}

export  {useGetEvents, useFindByIdEvent};
