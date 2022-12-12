import {createSlice} from '@reduxjs/toolkit';
import {initialStates} from './initalStates';
import {showMessage} from 'react-native-flash-message';

export const userSlicer = createSlice({
  name: 'userSlice',
  initialState: initialStates,
  reducers: {
    loginAccount: state => {
      state.isLogin = true;
    },
    logOutAccount: state => {
      state.isLogin = false;
    },
    addFavorites: (state, action) => {
      const {restaurant} = action.payload;
      const find = state.favoritesFood.find(item => item.id === restaurant.id);
      if (!find) {
        const newList = [...state.favoritesFood, restaurant];
        state.favoritesFood = newList;
        showMessage({
          message: 'Eestaurant added to favorites',
          type: 'success',
        });
      } else {
        showMessage({
          message: 'Restaurant available in favorites',
          type: 'warning',
        });
      }
    },
    removeFavorites: (state, action) => {
      const {id} = action.payload;
      const filterList = state.favoritesFood.filter(item => item.id !== id);
      state.favoritesFood = filterList;
    },
  },
});

export const {loginAccount, logOutAccount, addFavorites, removeFavorites} =
  userSlicer.actions;

export default userSlicer.reducer;
