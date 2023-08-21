import { useParams } from 'react-router-dom';
import { IProduct } from '../model';
import { useQuery } from '@tanstack/react-query';
import { fetchSingleProduct } from '../utils/fetchers';

type ProductParams = {
    id: string;
};

const Product: React.FC = () => {
    const params = useParams<ProductParams>();

    const { isLoading, isError, data } = useQuery<IProduct>({
        queryKey: ['product', params.id],
        queryFn: () => fetchSingleProduct(params.id),
    });

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error...</span>;
    }

    return <>{data.title}</>;
};

export default Product;
