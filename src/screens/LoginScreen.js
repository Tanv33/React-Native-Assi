/* eslint-disable  */
import React from 'react';
import {
  Button,
  Text,
  Box,
  FormControl,
  Input,
  WarningOutlineIcon,
  Link,
} from 'native-base';
import {StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
function LoginScreen({navigation}) {
  const handleSubmitFunction = values => {
    // console.log(values);
    if (values.email.length || values.password.length) {
      navigation.navigate('Home');
    }
  };
  return (
    <>
      <Box alignItems="center" justifyContent="center" flex="1">
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={handleSubmitFunction}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <FormControl isInvalid w="75%" maxW="300px">
              <FormControl.Label>Email</FormControl.Label>
              <Input
                size={'2xl'}
                placeholder="Enter email"
                type="email"
                name="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <FormControl.Label marginTop={'15'}>Password</FormControl.Label>
              <Input
                size={'2xl'}
                placeholder="Enter password"
                type="password"
                name="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {/* <Button size={'md'} type="submit" > */}
              <Button
                size={'md'}
                marginTop={'5'}
                variant="solid"
                colorScheme="secondary"
                // onPress={() => navigation.navigate('Signup')}
                onPress={handleSubmit}>
                login
              </Button>
            </FormControl>
          )}
        </Formik>
        <Box>
          <Text
            mt="2"
            fontSize={14}
            fontWeight="medium"
            color="cyan.600"
            onPress={() => navigation.navigate('Signup')}>
            create an account
          </Text>
        </Box>
      </Box>
    </>
  );
}

const styles = StyleSheet.create({
  text: {textAlign: 'center', margin: 10, fontSize: 25},
  alignEnd: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignContent: 'flex-end',
    // justifyContent: 'flex-end',
    textAlign: 'right',
  },
  textBold: {
    textAlign: 'center',
    margin: 10,
    fontSize: 25,
    fontWeight: '',
    fontStyle: 'italic',
    color: 'black',
  },
  centerCenter: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default LoginScreen;
