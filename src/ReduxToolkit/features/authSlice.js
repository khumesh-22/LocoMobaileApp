// // // authSlice.js
// // import { createSlice } from '@reduxjs/toolkit';

// // initialState = {
// //   isAuthenticated: false,
// //   isFirstTime: true,
// //   user: [],
// // }

// // const authSlice = createSlice({
// //   name: 'auth',
// //   initialState,
// //   reducers: {
// //     loginSuccess: (state, action) => {
// //       state.isAuthenticated = true;
// //       state.user = action.payload;
// //     },
// //     logoutSuccess: (state) => {
// //       state.isAuthenticated = false;
// //       state.user = null;
// //     },
// //   },
// // });

// // export const { loginSuccess, logoutSuccess } = authSlice.actions;
// // export const selectAuthState = (state) => state.auth;

// // export default authSlice.reducer;
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     authData: [],
// }

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logInData: (state, action) => {
//             // state.authData.push( action.payload)
//             state.authData = action.payload
//         },


//     },
// })

// // Action creators are generated for each case reducer function
// export const { logInData, } = authSlice.actions

// export default authSlice.reducer

// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { createSlice } from '@reduxjs/toolkit'
// import localStorage from 'redux-persist/es/storage'

// const initialState = {
//     authData:JSON.parse( AsyncStorage.getItem('my-key'))
   
// }

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logInData: (state, action) => {
//             // state.authData.push( action.payload)
//             state.authData = action.payload
            
//         },


//     },
// })

// // Action creators are generated for each case reducer function
// export const { logInData, } = authSlice.actions

// export default authSlice.reducer
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: null,
  },
  reducers: {
    logInData: (state, action) => {
      state.authData = action.payload;
    },
  },
});

export const { logInData } = authSlice.actions;

// Add an asynchronous action to fetch data from AsyncStorage
export const fetchDataFromStorage = () => async (dispatch) => {
  try {
    const storedData = await AsyncStorage.getItem('my-key');
    if (storedData) {
      dispatch(logInData(JSON.parse(storedData)));
    }
  } catch (error) {
    console.error('Error fetching data from AsyncStorage:', error);
  }
};

export default authSlice.reducer;
