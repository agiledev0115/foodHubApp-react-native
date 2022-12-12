import {useState} from 'react';
import qs from 'qs';
import {api} from '../../hooks/useApi';
import {showMessage} from 'react-native-flash-message';

const payBasketApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const payClearBasket = async navigateOrder => {
    setLoading(true);
    try {
      const response = await api.post(
        '/clear_bag.php',
        qs.stringify({
          user: 'asgeriFood',
        }),
      );
      if (response.ok) {
        if (response.data.status == 1) {
          showMessage({
            message: 'Your order has been placed successfully',
            type: 'success',
          });
          navigateOrder();
        } else {
          showMessage({
            message: 'Something went wrong',
            type: 'success',
          });
        }
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {loading, error, payClearBasket};
};

export default payBasketApi;
