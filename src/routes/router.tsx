import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import Home from '../pages/Home';
import ProductsList from '../pages/ProductsList';
import Product from '../pages/Product';
import Layout from '../Layout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<ProductsList />} />
            <Route path='/products/:id' element={<Product />} />
        </Route>
    )
);

export default router;
