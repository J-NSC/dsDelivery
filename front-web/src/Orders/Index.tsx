import { useEffect, useState } from 'react';
import { fetchProduct } from './api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationdata, Product } from './Types';

function Orders(){
    const [products, setProduct] = useState<Product[]>([]);
    const [orderLocation, setOrderLacation] =  useState<OrderLocationdata>();

    useEffect(() => {
        fetchProduct()
            .then(response => setProduct(response.data))
            .catch(error => console.log(error));
    }, [])

    return (
        <div className = "orders-container">
            <StepsHeader />
            <ProductList products={products}/>
            <OrderLocation onChangeLocation= {location => setOrderLacation(location)}/>
        </div>
    )
}

export default Orders;