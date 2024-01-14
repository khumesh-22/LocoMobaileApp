import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import colors from '../styles/colors';
import { useDispatch, useSelector } from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { logInData } from '../redux/slices/authSlice';

const Stack = createNativeStackNavigator();

const Routes = () => {
    const [isCheckingToken, setIsCheckingToken] = useState(true);
    const dispatch = useDispatch();
    const theme = useColorScheme() === 'dark' ? colors.dark : colors.light;
    const accessToken = useSelector(state => state.Auth?.authData?.token);
console.log("accessToken",accessToken)
    const fetchDataFromStorage = async () => {
        console.log("storedDatass")
        try {
            console.log("sredDatass")
            const storedData = await AsyncStorage.getItem('my-key');
            console.log("storedDatass",storedData)
            if (storedData) {
                const parsedData = JSON.parse(storedData);

                const jwtResponse = parsedData?.token;

                if (jwtResponse) {
                    dispatch(logInData(parsedData));
                    setIsCheckingToken(false);
                } else {
                    setIsCheckingToken(false);
                }
            } else {
                console.log("No data found in AsyncStorage.");
                setIsCheckingToken(false);
            }
        } catch (error) {
            console.error('Error fetching data from AsyncStorage:', error);
            setIsCheckingToken(false);
        }
    };

    useEffect(() => {
        fetchDataFromStorage();
    }, []);

    if (isCheckingToken) {
        return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {accessToken !== undefined ? <>{AppStack(Stack)}</> : <>{AuthStack(Stack)}</>}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;


const styles = StyleSheet.create({})