import axios from 'axios';

const API_URL: string | undefined = process.env
    .REACT_APP_STORE_API_URL as string;

export const fetchAllProducts = async () => {
    const res = await axios(API_URL);
    return res.data;
};

export const fetchSingleProduct = async (id: string | undefined) => {
    const res = await axios(`${API_URL}/${id}`);
    return res.data;
};

export const fetchCategories = async () => {
    const res = await axios(`${API_URL}/categories`);
    return res.data;
};
