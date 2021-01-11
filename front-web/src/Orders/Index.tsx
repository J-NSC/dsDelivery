import {toast} from 'react-toastify'
import { useEffect, useState } from 'react';
import { fetchProduct, saveOrder } from './api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductList from './ProductList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './Types';
import Footer from '../Footer/Index';
import { checkIsSelected } from './Helpers';

function Orders(){
    const [products, setProduct] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLacation] =  useState<OrderLocationData>();
    const totalPrice = selectedProducts.reduce((sum,item) => {
        return sum + item.price;
    },0)
    useEffect(() => {
        fetchProduct()
            .then(response => setProduct(response.data))
            .catch(error => {
              toast.warning('Erro ao lista os pedido');
            });
    }, [])

    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return (
        <>
         <div className = "orders-container">
            <StepsHeader />
            <ProductList 
            products={products}
            onSelectProduct = {handleSelectProduct}
            selectedProducts = {selectedProducts}
            />
            <OrderLocation onChangeLocation={location =>setOrderLacation(location)} />
            <OrderSummary 
            amount ={selectedProducts.length} 
            totalPrice={totalPrice} 
            onSubmit={handleSubmit}
            />
        </div>
        <Footer />
        </>
    )
}

export default Orders;