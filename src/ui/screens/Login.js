import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomInput from '../components/CustomInput';
import {colors} from '../../themes/Colors';
import {units} from '../../themes/Units';
import CustomButton from '../components/CustomButton';
import SocialMediaCard from '../components/SocialMediaCard';
import CircleImage from '../../assets/svgs/circle.svg';
import OrangeCircleImage from '../../assets/svgs/orangeCircle.svg';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {routes} from '../../navigation/routes';
import Loading from '../components/Loading';
import authFirebase from '../../services/firebase/auth';

const Login = ({navigation}) => {
  const {loading, loginUser} = authFirebase();

  const initailLoginValue = {
    email: '',
    password: '',
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email is not in correct format')
      .required('This field is required'),
    password: Yup.string().required('This field is required'),
  });

  const handeleLogin = values => {
    loginUser(values.email, values.password);
  };

  const onClickSignUp = () => {
    navigation.navigate(routes.REGISTER);
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
          <Text style={styles.title}>Login</Text>
          <Formik
            initialValues={initailLoginValue}
            onSubmit={handeleLogin}
            validationSchema={loginValidationSchema}>
            {({values, errors, touched, handleChange, handleSubmit}) => (
              <>
                <View style={{marginTop: units.height / 27}}>
                  <Text style={styles.emailText}>Email</Text>
                  <CustomInput
                    placeHolder="Your Email address"
                    type="email-address"
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>
                <View style={{marginTop: units.height / 27}}>
                  <Text style={styles.emailText}>Password</Text>
                  <CustomInput
                    placeHolder="Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    secure
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>
                <View style={{marginTop: units.height / 25}}>
                  <TouchableOpacity>
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                  </TouchableOpacity>
                  <View style={styles.loginContainer}>
                    <CustomButton title="LOGIN" onPress={handleSubmit} />
                    <View style={styles.signUpContainer}>
                      <Text>Don’t have an account? </Text>
                      <TouchableOpacity onPress={onClickSignUp}>
                        <Text style={{color: colors.ORANGE}}>Sign Up</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.signInContainer}>
                      <View style={styles.line} />
                      <Text style={{marginHorizontal: units.width / 16}}>
                        Sign in with
                      </Text>
                      <View style={styles.line} />
                    </View>
                    <View style={{marginVertical: units.height / 55}}>
                      <SocialMediaCard />
                    </View>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
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
  title: {
    color: colors.BLACK,
    fontSize: 36,
    fontWeight: '600',
  },
  forgotText: {
    color: colors.ORANGE,
    textAlign: 'center',
  },
  loginContainer: {
    marginHorizontal: units.width / 9,
    marginVertical: units.height / 25,
  },
  signUpContainer: {
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
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: units.height / 18,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    color: colors.ORANGE,
    marginTop: units.height / 101,
  },
});
