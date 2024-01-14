import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Login from '../LogIn/Login'
import ButtonCompo from '../../../Components/ButtonCompo'
import ImagePath from '../../../constants/ImagePath'

const OnBoarding = () => {
  const navigattion = useNavigation()

  return (
    <View style={{flex:1,marginTop:'50%',}} >
    <View style={styles.container}>
    <Image
      source={ImagePath.onbording}
      style={{
        width: '100%', 
        height: '60%', 
        borderRadius: 10,
        borderWidth: 0,
        borderColor: 'black',
        opacity: 2, 
        
      }}
    />
    
  </View>
   <View style={styles.buttonContainer}>
  <ButtonCompo
    title={'Get Started'}
    onPress={() => navigattion.navigate(Login)}
  />
  </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  
display:'flex',
// justifyContent: 'space-between',
 
  alignItems: 'center',
},
buttonContainer: {
  position: 'absolute',
  justifyContent: 'space-between',
  bottom: 10, 
  width: '100%',
},
});

export default OnBoarding