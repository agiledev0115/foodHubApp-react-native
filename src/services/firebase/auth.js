import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loginAccount} from '../../context/userSlice';
import {showMessage} from 'react-native-flash-message';

const authFirebase = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const loginUser = (email, password) => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        res.user.uid && dispatch(loginAccount());
        setLoading(false);
        showMessage({
          message: 'You have successfully logged into your account',
          type: 'success',
        });
      })
      .catch(err => {
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'danger',
        });
      });
  };

  const createUser = (email, password, backLogin) => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        setLoading(false);
        showMessage({
          message: 'Your account has been created successfully',
          type: 'success',
        });
        backLogin();
      })
      .catch(err => {
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'danger',
        });
      });
  };

  return {loading, createUser, loginUser};
};

export default authFirebase;
