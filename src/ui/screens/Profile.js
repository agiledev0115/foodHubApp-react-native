import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors} from '../../themes/Colors';
import ProfileCard from '../components/ProfileCard';
import {units} from '../../themes/Units';
import {routes} from '../../navigation/routes';
import CustomButton from '../components/CustomButton';

const Profile = ({navigation}) => {
  const onClickNavigateOrders = () => {
    navigation.navigate(routes.DELIVERY);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Image
            source={require('../../assets/images/profileBg.png')}
            style={styles.image}
          />
          <View style={styles.profie}>
            <ProfileCard />
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.userName}>Ibrahim Asgari</Text>
          <Text style={styles.editText}>Edit Profile</Text>
        </View>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.fieldTitle}>Full Name</Text>
            <View style={styles.fieldContainer}>
              <Text style={styles.userName}>Ibrahim Asgari</Text>
            </View>
          </View>
          <View style={{marginTop: units.height / 50}}>
            <Text style={styles.fieldTitle}>E-mail</Text>
            <View style={styles.fieldContainer}>
              <Text style={styles.userName}>iasgeri456@gmail.com</Text>
            </View>
          </View>
          <View style={{marginTop: units.height / 50}}>
            <Text style={styles.fieldTitle}>Phone Number</Text>
            <View style={styles.fieldContainer}>
              <Text style={styles.userName}>+90 (536) 982 90 80</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Orders" onPress={onClickNavigateOrders} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  image: {
    alignSelf: 'center',
  },
  profie: {
    position: 'absolute',
    bottom: units.height / 41,
    left: 0,
    right: 0,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.DARK,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: units.height / -41,
  },
  editText: {
    color: colors.GRAY,
    marginTop: units.height / 81,
  },
  fieldContainer: {
    borderWidth: 1,
    borderColor: colors.ORANGE,
    borderRadius: 10,
    paddingVertical: units.height / 48,
    paddingLeft: units.width / 23,
    marginTop: units.height / 67,
  },
  bodyContainer: {
    marginHorizontal: units.width / 21,
    marginTop: units.height / 25,
  },
  fieldTitle: {
    fontSize: 16,
    color: colors.GRAY,
  },
  buttonContainer: {
    marginHorizontal: units.width / 12,
    marginTop: units.height / 38,
  },
});
