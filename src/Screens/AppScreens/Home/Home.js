import { Button, FlatList, Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { moderateScale } from '../../styles/responsiveSize'
// import imagePath from '../../constants/imagePath'
// import commonStyles from '../../styles/commonStyles'
import ImagePath from '../../../constants/ImagePath'
import { useDispatch, useSelector } from 'react-redux'
// import { LogOutMethod } from '../../api/authAction'
import { useNavigation } from '@react-navigation/native'
// import ImagePath from '../../../constants/ImagePath'
import commonStyles from '../../../styles/commonStyles'
import { moderateScale } from '../../../styles/responsiveSize'
import { logOutMethod } from '../../../config/authApiMethods'



const actiondata = [
  // {
  //   id: 1,
  //   title: 'Profile',
  //   icon: imagePath.call
  // },
  {
    id: 2,
    title: 'Change Password',
    icon: ImagePath.Change_Password
  },
  {
    id: 3,
    title: 'History',
    icon: ImagePath.history
  },
  {
    id: 4,
    title: 'Support',
    icon: ImagePath.support
  },
  {
    id: 5,
    title: 'Log Out',
    icon: ImagePath.log_Out
  },
]

const Home = () => {
  const dispatch = useDispatch()
  
  const accessToken = useSelector(state => state.Auth?.authData)

console.log("emaile",accessToken.user.email)
  return (
    <View style={styles.container}>
      <View style={[styles.top]}>
        <Text></Text>
      </View>

      <View style={styles.midlle}>
        <View style={[{ minHeight: moderateScale(100), minWidth: moderateScale(100), borderRadius: 50, bottom: moderateScale(50) }]}>
          <Image
            // source={{ uri: "https://i.pinimg.com/564x/84/62/80/846280899168e1abab5a6cd0d6e03dcf.jpg" }}
            source={ImagePath.profileImg}
            style={{ flex: 1, alignSelf: 'center', }}
            resizeMode='contain'
          />

        </View>

        <View style={{ alignItems: 'center', bottom: moderateScale(40) }}>
          <Text style={[commonStyles.fontBold24, { fontWeight: 'bold' }]} numberOfLines={1}>{accessToken.user.name}</Text>
          <Text style={[commonStyles.fontSize12, {}]} numberOfLines={1}>{accessToken.user.email}</Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <FlatList
          data={actiondata}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) =>
            <View style={[{ height: moderateScale(50), flexDirection: 'row', marginLeft: moderateScale(8), gap: moderateScale(8) }]}>
              <Image
                source={item.icon}
                style={{ height: moderateScale(50), width: moderateScale(50) }}
                resizeMode='center'
              />
              <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => item.id == 5 ? dispatch(logOutMethod()) : null} >
                <Text style={[commonStyles.fontBold24, { fontWeight: 'bold', alignSelf: "center" }]} numberOfLines={1}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          }
          style={{ flex: 1, }}
          ItemSeparatorComponent={() => {
            return (<View style={{ marginVertical: moderateScale(5), height: moderateScale(5), gap: moderateScale(10) }} />)
          }}
        />
      </View>
      

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  top: {
    minHeight: moderateScale(200),
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#FE8808'
  },
  midlle: {
    minHeight: moderateScale(120),
    // backgroundColor: 'green',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  bottom: {
    // height: moderateScale(200),
    flex: 1,
    // backgroundColor: 'red'
  },
})
