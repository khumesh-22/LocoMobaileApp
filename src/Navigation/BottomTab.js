import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/AppScreens/Home/Home';
import NavigationStrings from '../constants/NavigationStrings';
import NewOrder from '../Screens/AppScreens/NewOrder/NewOrder';
import MenuOnbording from '../Screens/AppScreens/Menu/MenuOnbording';
const Tab = createMaterialBottomTabNavigator();
const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="blue"
            inactiveColor="#3e2465"
            screenOptions={{
                headerShown: false,
            }}
            barStyle={{ backgroundColor: '#FFF', elevation: 4, }}
        >
            <Tab.Screen name={NavigationStrings.HOME} component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: 'blue',

                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons
                        name="bank-remove" size={26} color={focused ? 'blue' : null} />
                    ),
                }}
            />
             <Tab.Screen name={NavigationStrings.NewOrder} component={NewOrder}
                options={{
                    tabBarLabel: ' NewOrder',
                    tabBarColor: 'blue',

                    tabBarIcon: ({ color, focused }) => (
                        <MaterialCommunityIcons name="bank-transfer" size={26} color={focused ? 'blue' : null} />
                    ),
                }}
            />
            <Tab.Screen name={NavigationStrings.TEST} component={MenuOnbording}
                options={{
                    tabBarLabel: 'Menu',
                    tabBarColor: 'blue',

                    tabBarIcon: ({ color, focused }) => (
                        <View style={{ flex: 1, }}>

                            <MaterialCommunityIcons name="order-bool-descending-variant" size={26} color={focused ? 'blue' : null} />
                        </View>
                    ),
                }}
            />
           
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({})