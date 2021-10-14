import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import productsContext from '../context/productsContext';
import TopMenu from '../components/TopMenu/TopMenu';
import fetches from '../services/fetches';
import ProductsCard from '../components/ProductCard/ProductCard';

export default function Products() {
  const history = useHistory();
  const tokenFromLocalStorage = localStorage.getItem('token');
  const { setProducts } = useContext(productsContext);

  useEffect(() => {
    const fetch = async () => {
      const allProducts = await fetches.fetchAllProducts();
      setProducts(allProducts.data);
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRedirect = (token) => {
    if (!token) return history.push('/login');
  };

  return (
    <div>
      <div>
        <TopMenu pageTitle="TryBeer" />
      </div>
      { handleRedirect(tokenFromLocalStorage) }
      <div>
        <ProductsCard />
      </div>
    </div>
  );
}
