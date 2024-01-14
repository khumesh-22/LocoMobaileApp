
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import imagePath from '../constants/ImagePath';
import { useTheme } from '@react-navigation/native';
import { moderateScale, textScale } from '../styles/responsiveSize';
import MenuPopUp from './MenuPopUp';

const HomeHeader = ({ user_name }) => {
  const userInitial = user_name ? user_name[0].toUpperCase() : '';
  const colors = useTheme().colors;



  return (
    <View style={styles.container}>
      <Image
        source={imagePath.alert}
        style={styles.logo}

      />
      <TouchableOpacity style={[styles.profileButton, { backgroundColor: colors.btnColor }]} >
        <MenuPopUp
          userInitial={userInitial}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: moderateScale(10),
    backgroundColor: 'white',
    // borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    // elevation:4
  },
  logo: {
    width: moderateScale(40),
    height: moderateScale(40),
  },
  profileButton: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    fontSize: textScale(18),
    color: 'white',
    color: 'red'
  },
});

export default HomeHeader;
