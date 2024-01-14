import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: null,
  },
 
  reducers: {
    logInData: (state, action) => {
      console.log("action.payload",action.payload)
      state.authData = action.payload;
    },
  },
});

export const { logInData } = authSlice.actions;
console.log("storedData")
// Add an asynchronous action to fetch data from AsyncStorage
export const fetchDataFromStorage = () => async (dispatch) => {
  console.log("storedDatakk")

    console.log("storedData",storedData)
    const storedData = await AsyncStorage.getItem('my-key');
console.log("storedData",storedData)
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      dispatch(logInData(parsedData)); // Dispatch the action with the retrieved data
    } else {
      // Handle the case when no data is found in AsyncStorage
    }
   
};

export default authSlice.reducer;
