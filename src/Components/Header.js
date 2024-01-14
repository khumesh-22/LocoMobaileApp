import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { moderateScale, textScale } from '../styles/responsiveSize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {moderateScale, textScale} from '../styles/responsiveSize';
// import imagePath from '../constants/imagePath';

const Header= ({
  screenName,
  onBackPress,
  onPressLeft,
  onPressLefttrue,
}) => {
  console.log(onPressLefttrue);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={onBackPress}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.screenName}>{screenName}</Text>
        
      </View>
      <MaterialCommunityIcons name="account-circle-outline" size={26} style={{marginRight:20,}} />
      {/* {onPressLeft == undefined ?
                null

                :
                <TouchableOpacity onPress={() => onPressLeft} style={[{ height: moderateScale(30), width: moderateScale(30), alignSelf: 'center' }]}>
                    <Image
                        source={imagePath.AddPackgeService}
                        style={{ height: '100%', width: '100%' }}
                        resizeMode='center'
                    />
                </TouchableOpacity>
            } */}
      {onPressLefttrue && (
        <TouchableOpacity
          onPress={() => onPressLeft()}
          style={[
            {
              height: moderateScale(30),
              width: moderateScale(30),
              alignSelf: 'center',
            },
          ]}>
          <Image
            source={imagePath.AddPackgeService}
            style={{height: '100%', width: '100%'}}
            resizeMode="center"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: moderateScale(10),
    // borderBottomWidth: 1,
    elevation: 4,
    // borderBottomColor: 'lightgray',
    justifyContent: 'space-between',
  },
  screenName: {
    fontSize: textScale(18),
    fontWeight: 'bold',
    marginLeft: moderateScale(10),
  },
});

export default Header;
