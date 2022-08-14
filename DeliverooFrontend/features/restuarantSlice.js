import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  restaurants: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    shortDescription: null,
    dishes: null,
    latitude: null,
    longitude: null,
  },
};

export const restuarantSlice = createSlice({
  name: 'restuarant',
  initialState,
  reducers: {
    setRestuarant: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const {setRestuarant} = restuarantSlice.actions;

export const selectRestuarant = state => state.restuarant.restaurants;

export default restuarantSlice.reducer;
