import React, {useRef} from 'react';
import {TextInput} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Route, StackNavigationProps} from '@core/types';
import {
  Button,
  Container,
  Box,
  Text,
  Input,
  Link,
  Checkbox,
  Footer,
} from '@components';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

const LoginScreen = ({navigation}: StackNavigationProps<Route, 'SignUp'>) => {
  const {values, handleChange, handleBlur, touched, errors, handleSubmit} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: LoginSchema,
      onSubmit: inputs => console.log(inputs),
    });

  const password = useRef<TextInput>(null);

  const footer = (
    <Footer
      label="Don’t have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );

  return (
    <Container {...{footer}} pattern={0}>
      <Box margin="xl">
        <Text variant="h1" textAlign="center">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginVertical="s">
          <Input
            placeholder="Enter your email"
            icon="mail"
            value={values.email}
            onChance={handleChange('email')}
            touched={touched.email}
            error={errors.email}
            onBlur={handleBlur('email')}
            returnKeyType="next"
            returnKeyLabel="Next"
            onSubmitEditing={() => password.current?.focus()}
          />
        </Box>
        <Box marginVertical="s">
          <Input
            ref={password}
            placeholder="Enter your password"
            icon="lock"
            value={values.password}
            onChance={handleChange('password')}
            touched={touched.password}
            error={errors.password}
            onBlur={handleBlur('password')}
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          marginTop="s"
          marginBottom="l"
          justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Link
            onPress={() => navigation.navigate('ForgotPassword')}
            label="Forgot password"
          />
        </Box>
        <Button
          onPress={handleSubmit}
          label="Log into your account"
          variant="primary"
        />
      </Box>
    </Container>
  );
};

export default LoginScreen;
