import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { IProduct } from '../model';

const ProductCard: React.FC<IProduct> = ({
    id,
    title,
    category,
    price,
    image,
    rating,
}) => {
    return (
        <Card>
            <Card.Img
                variant='top'
                style={{
                    height: '200px',
                    objectFit: 'contain',
                    width: '100%',
                }}
                src={image}
            />
            <Card.Body>
                <Card.Subtitle>{category}</Card.Subtitle>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Rating: {rating.rate}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <LinkContainer to={`/products/${id}`}>
                    <Button variant='primary'>See more</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
