import { error } from 'console';
import { useEffect, useState } from 'react';
import { fetchProduct } from './api';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { Product } from './Types';

function Orders(){
    const [products, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        fetchProduct()
            .then(response => setProduct(response.data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className = "orders-container">
            <StepsHeader />
            <ProductList products={products}/>
        </div>
    )
}

export default Orders;