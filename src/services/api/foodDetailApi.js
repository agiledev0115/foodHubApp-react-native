import {useState, useEffect, useCallback} from 'react';
import {api} from '../../hooks/useApi';
import qs from 'qs';

const FoodDetailApi = foodId => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getFoodDetailApi();
  }, []);

  const getFoodDetailApi = useCallback(async () => {
    const params = {
      id: foodId,
    };

    try {
      const response = await api.post(
        '/get_product_by_id.php',
        qs.stringify(params),
      );
      if (response.ok) {
        setData(response.data[0]);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [foodId]);

  return {data, loading, error};
};

export default FoodDetailApi;
