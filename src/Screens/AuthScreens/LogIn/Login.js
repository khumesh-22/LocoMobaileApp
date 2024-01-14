import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import Signup from '../Signup/Signup';
import commonStyles from '../../../styles/commonStyles';
import TextInputWithLabel from '../../../Components/TextInputWithLabel';
import { validateLoginForm } from '../../../utils/validation';
import ButtonCompo from '../../../Components/ButtonCompo';
import { moderateScale, moderateScaleVertical, scale } from '../../../styles/responsiveSize';
import {  logInMethod } from '../../../config/authApiMethods';


const Login = () => {
  const accessToken = useSelector(state => state?.Auth?.authData?.jwt_response);
  const [errors, setErrors] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const colors = useTheme().colors;
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (formIsValid) {
      console.log("formIsValid",formIsValid)
      const data = {
        email: inputs.email,
        password: inputs.password,
      };

      dispatch(logInMethod(data));
    } else {
      showMessage({
        message: "Please Enter Details",
        type: "danger",
      })
    }
  };

  const handleOnChange = (text, input) => {
    const formErrors = validateLoginForm({ ...inputs, [input]: text });
    setErrors(formErrors);
    const isFormValid = Object.values(formErrors).every((error) => !error);
    setFormIsValid(isFormValid);
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      keyboardDismissMode="interactive"
      keyboardShouldPersistTaps="always"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.formContainer}>
        <Text style={[commonStyles.fontBold24, { fontWeight: 'bold', marginBottom: scale(10), alignSelf: 'center' }]}>
          LogIn
        </Text>

        <TextInputWithLabel
          onChangeText={(text) => handleOnChange(text, 'email')}
          onFocus={() => setErrors({ ...errors, email: null })}
          iconName="phone"
          placeholder="Enter Your Email"
          error={errors.email}
        />

        <TextInputWithLabel
          onChangeText={(text) => handleOnChange(text, 'password')}
          onFocus={() => setErrors({ ...errors, password: null })}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          maxLength={12}
          error={errors.password}
          password
        />

        <ButtonCompo onPress={handleSubmit} title="Log In" />

        <View style={styles.signupTextContainer}>
          <Text style={styles.signupText}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(Signup)}>
            <Text style={[styles.signupText, { color: 'blue', fontWeight: 'bold' }]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  formContainer: {
    justifyContent: 'center',
    marginHorizontal: moderateScale(16)
  },
  signupTextContainer: {
    flexDirection: 'row',
    marginTop: moderateScaleVertical(10),
    alignItems: 'center',
    alignSelf: 'center'
  },
  signupText: {
    color: 'gray',
    fontSize: moderateScale(16),
    marginLeft: moderateScale(5),
  },
});

export default Login;
