import { useCallback, useEffect, useState } from 'react';
import axiosInstance from './axios';

const useGetQuery = (endpoint) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const query = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await axiosInstance.get(endpoint);
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

    useEffect(() => {
        query();
    }, [query]);

    return {
        data,
        loading,
        error
    };
};

export default useGetQuery;
