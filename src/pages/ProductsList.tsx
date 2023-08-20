import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard';
import Container from 'react-bootstrap/esm/Container';
import { IProduct } from '../model';
import { useQuery } from '@tanstack/react-query';
import { fetchAllProducts } from '../utils/fetchers';

const ProductsList: React.FC = () => {
    const { isLoading, data } = useQuery<IProduct[]>({
        queryKey: ['products'],
        queryFn: fetchAllProducts,
    });

    return (
        <>
            <h1 className='text-center pb-4'>Products</h1>
            {!isLoading ? (
                <Container>
                    <Row
                        xs={2}
                        md={3}
                        xl={4}
                        className='g-4 justify-content-center'
                    >
                        {data?.map((product) => (
                            <Col key={product.id}>
                                <ProductCard {...product} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            ) : (
                <h2>Loading...</h2>
            )}
        </>
    );
};

export default ProductsList;
