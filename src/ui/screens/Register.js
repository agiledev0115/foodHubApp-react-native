import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CircleImage from '../../assets/svgs/circle.svg';
import OrangeCircleImage from '../../assets/svgs/orangeCircle.svg';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import SocialMediaCard from '../components/SocialMediaCard';
import {Formik} from 'formik';
import * as Yup from 'yup';
import authFirebase from '../../services/firebase/auth';
import Loading from '../components/Loading';

const Register = ({navigation}) => {
  const {loading, createUser} = authFirebase();

  const registerIntialValue = {
    email: '',
    password: '',
    rePassword: '',
  };

  const registerValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is not in correct format')
      .required('This field is required'),
    password: Yup.string()
      .min(6, 'Password must be a minimum of 6 characters')
      .required('This field is required'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords are not the same')
      .required('This field is required'),
  });

  const handleRegister = values => {
    createUser(values.email, values.password, onClickLogin);
  };

  const onClickLogin = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Loading />}
      <KeyboardAwareScrollView>
        <View style={styles.imageContainer}>
          <CircleImage />
          <OrangeCircleImage />
        </View>
        <View style={styles.bodyContainer}>
          <View>
            <Formik
              initialValues={registerIntialValue}
              onSubmit={handleRegister}
              validationSchema={registerValidationSchema}>
              {({values, errors, touched, handleChange, handleSubmit}) => (
                <>
                  <Text style={styles.title}>Sign Up</Text>
                  <View style={{marginTop: units.height / 27}}>
                    <Text style={styles.emailText}>E-mail</Text>
                    <CustomInput
                      placeHolder="Your E-mail"
                      type="email-address"
                      value={values.email}
                      onChangeText={handleChange('email')}
                    />
                    {errors.email && touched.email && (
                      <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                  </View>
                  <View style={{marginTop: units.height / 32}}>
                    <Text style={styles.emailText}>Password</Text>
                    <CustomInput
                      placeHolder="Your password"
                      value={values.password}
                      onChangeText={handleChange('password')}
                      secure
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.errorText}>{errors.password}</Text>
                    )}
                  </View>
                  <View style={{marginTop: units.height / 32}}>
                    <Text style={styles.emailText}>Re-Password</Text>
                    <CustomInput
                      placeHolder="Re password"
                      value={values.rePassword}
                      onChangeText={handleChange('rePassword')}
                      secure
                    />
                    {errors.rePassword && touched.rePassword && (
                      <Text style={styles.errorText}>{errors.rePassword}</Text>
                    )}
                  </View>
                  <View style={styles.buttonContainer}>
                    <CustomButton title="Sign Up" onPress={handleSubmit} />
                    <View style={styles.loginContainer}>
                      <Text>Don’t have an account? </Text>
                      <TouchableOpacity onPress={onClickLogin}>
                        <Text style={{color: colors.ORANGE}}>Login</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              )}
            </Formik>
            <View style={styles.signUpContainer}>
              <View style={styles.line} />
              <Text style={{marginHorizontal: units.width / 16}}>
                Sign up with
              </Text>
              <View style={styles.line} />
            </View>
            <View style={{marginVertical: units.height / 55}}>
              <SocialMediaCard />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  title: {
    color: colors.BLACK,
    fontSize: 36,
    fontWeight: '600',
  },
  bodyContainer: {
    paddingHorizontal: units.width / 14,
    marginTop: units.height / 40,
  },
  emailText: {
    color: colors.DARKGRAY,
    fontSize: 16,
    marginBottom: units.height / 67,
  },
  buttonContainer: {
    marginHorizontal: units.width / 9,
    marginVertical: units.height / 25,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: units.height / 25,
  },
  line: {
    height: 1,
    width: units.width / 3.5,
    backgroundColor: colors.GRAY,
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: units.height / 35,
  },
  errorText: {
    color: colors.ORANGE,
    marginTop: units.height / 101,
  },
});
