import {useState} from 'react';
import {api} from '../../hooks/useApi';
import qs from 'qs';

const basketApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deliveryPrice, setDeliveryprice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(deliveryPrice + subTotal);
  const [subTotal, setSubTotal] = useState();

  const getBasketDataApi = async () => {
    try {
      const response = await api.post(
        '/get_bag_products_by_user.php',
        qs.stringify({
          user: 'asgeriFood',
        }),
      );
      if (response.ok) {
        setData(response.data);
        calculateTotalPrice(response.data);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const calculateTotalPrice = basketData => {
    if (basketData.length != 0) {
      let total = 0;
      basketData.forEach(item => {
        total += parseFloat(item.price);
      });
      setSubTotal(total.toFixed(2));
      setTotalPrice((total + 5.99).toFixed(2));
      setDeliveryprice(5.99);
    } else {
      setSubTotal(0);
      setDeliveryprice(0);
      setTotalPrice(0);
    }
  };

  return {
    data,
    loading,
    error,
    getBasketDataApi,
    totalPrice,
    subTotal,
    deliveryPrice,
  };
};

export default basketApi;
