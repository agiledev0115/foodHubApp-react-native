import {useEffect, useState} from 'react';
import {api} from '../../hooks/useApi';
import qs from 'qs';

const RestaurantFoodApi = restaurantName => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getRestaurantFoodApi(restaurantName);
  }, [restaurantName]);

  const getRestaurantFoodApi = async name => {
    try {
      const params = {
        user: 'asgeriFood',
        category: name,
      };

      const response = await api.post(
        '/get_products_by_user_and_category.php',
        qs.stringify(params),
      );
      if (response.ok) {
        setData(response.data);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return {data, loading, error};
};

export default RestaurantFoodApi;
