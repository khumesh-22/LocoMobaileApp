// import * as ApiClient from '../api/apiRequests';

// import { logInData } from "../redux/features/authSlice";
// import { logInData } from "../ReduxToolkit/features/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLoadingState } from '../redux/features/loadingSlice';
import { ApiRequest } from './apiRequests';
import { logInData } from '../redux/slices/authSlice';

export const signUpMethod = (data) => async (dispatch) => {
  console.log("data",data)
  const requestData = {
    name: data.name,
    email: data.email,
    password: data.password,
    age: data.age,
    profile_picture: {
      uri: data.profile_picture.uri,
      type: 'image/jpeg',
      name: 'profile_picture.jpg',
    },
  };

  try {
    const endUrl = 'https://api.apptask.thekaspertech.com/api/users/register';
    const headers = { 'Content-Type': 'multipart/form-data' };

    const formData = new FormData();
    Object.entries(requestData).forEach(([key, value]) => {
      if (key === 'profile_picture') {
        // Append profile picture as a file
        formData.append(key, {
          uri: value.uri,
          type: value.type,
          name: value.name,
        });
      } else {
        // Append other fields
        formData.append(key, value.toString());
      }
    });

    const method = 'POST';

    const response = await ApiRequest(endUrl, method, headers, formData);
    console.log('SignUpMethod response:', response);

    return response;
  } catch (error) {
    console.error('Network Error Signup:', error);
    // Handle the error as needed
  }
};

export const logInMethod = (data) => async (dispatch) => {
  try {
    const endUrl = 'https://api.apptask.thekaspertech.com/api/users/login';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(data);
    const method = 'POST';

    const response = await ApiRequest(endUrl, method, headers, body);
    console.log("response.data",response)
    if (response.token !==null) {
      console.log("response.data.ll",response)
      if (response) {
        console.log("response.data.khum",userData)
        const userData = response;
        dispatch(logInData(userData));

        try {
          const jsonValue = JSON.stringify(userData);
          console.log("response.data.khum",userData)
          await AsyncStorage.setItem('my-key', jsonValue);
        } catch (e) {
          console.error('Error saving to AsyncStorage:', e);
        }
      } else {
        console.error('Response data is null or undefined:', response);
      }
    }

    return response;
  } catch (error) {
    console.error('Network Error Login', error);
  }
};

export const logOutMethod = () => async (dispatch) => {
  await dispatch(logInData(null));
};

// ... (Other methods remain unchanged)
