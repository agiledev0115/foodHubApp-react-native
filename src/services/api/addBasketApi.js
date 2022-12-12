import {useState} from 'react';
import qs from 'qs';
import {api} from '../../hooks/useApi';
import {showMessage} from 'react-native-flash-message';

const addBasketApi = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const addBagProductApi = async (product, goBasket) => {
    setLoading(true);
    try {
      const params = {
        user: 'asgeriFood',
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        count: product.count,
        image_two: '',
        image_three: '',
        sale_state: '',
      };

      const response = await api.post('/add_to_bag.php', qs.stringify(params));
      if (response.ok) {
        setData(response.data);
        if (response.data.status == 1) {
          showMessage({
            message: response.data.message,
            type: 'success',
          });
          goBasket();
        } else {
          showMessage({
            message: response.data.message,
            type: 'danger',
          });
        }
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return {data, loading, error, addBagProductApi};
};

export default addBasketApi;
