import { useQuery } from 'react-query';
import Api from "../lib/api";

const useGetUser = () => {
    const api  = new Api()
    return useQuery({
        queryKey: 'user',
        queryFn: async () => await api.getUser()
    })
};

export default useGetUser;
