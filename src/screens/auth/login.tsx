import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  Button,
  Container,
  Box,
  Text,
  Input,
  Link,
  Checkbox,
  SocialLogin,
} from '@components';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required'),
});

const LoginScreen = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => console.log(values),
  });

  const {values, handleChange, touched, errors, handleSubmit} = formik;

  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="s">
        <Button variant="transparent" onPress={() => console.warn('SignUp')}>
          <Box flexDirection="row">
            <Text variant="button" color="white" marginRight="s">
              Don’t have an account?
            </Text>
            <Text variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{footer}}>
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
          />
        </Box>
        <Box marginVertical="s">
          <Input
            placeholder="Enter your password"
            icon="lock"
            value={values.password}
            onChance={handleChange('password')}
            touched={touched.password}
            error={errors.password}
            secureTextEntry
          />
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          marginTop="s"
          marginBottom="l"
          justifyContent="space-between">
          <Checkbox label="Remember me" />
          <Link onPress={() => {}} label="Forgot password" />
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
