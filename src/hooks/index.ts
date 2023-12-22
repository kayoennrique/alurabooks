export const usePersistToken = () => {
    return (token: string) => {
        sessionStorage.setItem('token', token);
    };
};

export const useGetToken = () => {
    return sessionStorage.getItem('token');
};

export const useClearToken = () => {
    sessionStorage.removeItem('token');
};