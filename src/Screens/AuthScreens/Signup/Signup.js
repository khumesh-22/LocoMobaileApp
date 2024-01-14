import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation, useTheme } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import { showMessage } from 'react-native-flash-message';
import commonStyles from '../../../styles/commonStyles';
import { moderateScale, moderateScaleVertical, scale } from '../../../styles/responsiveSize';
import TextInputWithLabel from '../../../Components/TextInputWithLabel';
import ButtonCompo from '../../../Components/ButtonCompo';
import { signUpMethod } from '../../../config/authApiMethods';
import { validateSignUpForm } from '../../../utils/validation';

const Signup = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    profile_picture: '',
  });
  const [profilePic, setProfilePic] = useState(null);
console.log("profilePic",profilePic)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const colors = useTheme().colors;

  const handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        const source = { uri: image.path };
        setProfilePic(source);
      })
      .catch((error) => {
        console.error('ImagePicker Error: ', error);
      });
  };

  const handleSubmit = async () => {
    try {
      console.log('formIsValid', formIsValid);
      if (formIsValid) {
        console.log('data', inputs);
        const data = {
          name: inputs.name,
          email: inputs.email,
          password: inputs.password,
          age: inputs.age,
          profile_picture: profilePic,
        };

        await dispatch(signUpMethod(data));
        navigation.goBack();
      } else {
        console.log('No data to submit');
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      showMessage({
        message: 'An error occurred during sign-up',
        type: 'danger',
      });
    }
  };

  const handleOnChange = (text, input) => {
    const formErrors = validateSignUpForm({ ...inputs, [input]: text });
    console.log('formErrors', formErrors);
    setErrors(formErrors);
    const isFormValid = Object.values(formErrors).every((error) => !error);
    console.log('isFormValid', isFormValid);
    setFormIsValid(isFormValid);
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  return (
    <ScrollView
      contentContainerStyle={[styles.scrollViewStyle, {}]}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.titleView}>
        <Text style={[commonStyles.fontBold24, { color: colors.text, fontWeight: 'bold' }]}>SignUp</Text>
      </View>

      <View style={[styles.formContainer, {}]}>
        <TouchableOpacity onPress={handleChoosePhoto} style={styles.profilePicContainer}>
          {profilePic ? (
            <Image source={profilePic} style={styles.profilePic} />
          ) : (
            <Text style={styles.profilePicText}>Select Profile Picture</Text>
          )}
        </TouchableOpacity>

        <TextInputWithLabel
          onChangeText={(text) => handleOnChange(text, 'name')}
          onFocus={() => setErrors({ ...errors, name: null })}
          iconName="numeric"
          label="Email"
          placeholder="Enter Your Name"
          error={errors.name}
        />

        <TextInputWithLabel
          onChangeText={(text) => handleOnChange(text, 'email')}
          onFocus={() => setErrors({ ...errors, email: null })}
          iconName="numeric"
          label="Email"
          placeholder="Enter Your Email"
          error={errors.email}
        />

        <TextInputWithLabel
          onChangeText={(text) => handleOnChange(text, 'age')}
          onFocus={() => setErrors({ ...errors, age: null })}
          iconName="numeric"
          label="Email"
          placeholder="Your age"
          keyboardType="number-pad"
          maxLength={2}
          error={errors.age}
        />
        <TextInputWithLabel
          onChangeText={(text) => handleOnChange(text, 'password')}
          onFocus={() => setErrors({ ...errors, password: null })}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
        />

        <ButtonCompo onPress={handleSubmit} title="Sign Up" style={{ marginVertical: moderateScale(6) }} />

        <View style={[{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }]}>
          <Text style={{ alignSelf: 'center' }}>Already have an account ?</Text>
          <TouchableOpacity style={{}}>
            <Text
              style={[styles.experienceText, commonStyles.fontBold16, { color: 'blue', fontWeight: 'bold' }]}
              onPress={() => navigation.goBack()}
            >
              logIn
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  scrollViewStyle: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  formContainer: {
    justifyContent: 'center',
    marginHorizontal: moderateScale(16),
  },
  titleView: {
    marginVertical: moderateScaleVertical(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScaleVertical(16),
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profilePicText: {
    borderRadius:scale(20),
    fontSize:scale(20),
    textAlign:"center",
    width:moderateScale(300),
    color: 'white',
    backgroundColor:"red"
  },
});
