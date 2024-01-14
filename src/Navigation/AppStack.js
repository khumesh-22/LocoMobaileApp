import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTab from './BottomTab'
import NavigationStrings from '../constants/NavigationStrings'
import HomeNext from '../Screens/AppScreens/Home/HomeNext'
import Selectorder from '../Screens/AppScreens/NewOrder/Selectorder'

const AppStack = (Stack) => {
  return (
    <>
      <Stack.Screen
        name={NavigationStrings.BOTTOM_TAB}
        component={BottomTab}
      />
 <Stack.Screen
        name={NavigationStrings.HOMENEXT}
        component={HomeNext}
      />
       <Stack.Screen
        name={NavigationStrings.SELECTORDER}
        component={Selectorder}
      />
      
      
   
  
 
  
    </>
  )
}

export default AppStack

const styles = StyleSheet.create({})