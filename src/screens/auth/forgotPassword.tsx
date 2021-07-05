import React from 'react';
import {Linking} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Route, StackNavigationProps} from '@core/types';
import {Button, Container, Box, Text, Input, Footer, Link} from '@components';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

const ForgotPasswordScreen = ({
  navigation,
}: StackNavigationProps<Route, 'ForgotPassword'>) => {
  const {values, handleChange, handleBlur, touched, errors, handleSubmit} =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: LoginSchema,
      onSubmit: inputs => console.log(inputs),
    });

  const footer = (
    <Footer
      label="Don’t have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );

  return (
    <Container {...{footer}}>
      <Box margin="xl">
        <Text variant="h1" textAlign="center">
          Forgot password?
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
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
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          marginTop="s"
          marginBottom="l"
          justifyContent="center">
          <Text>Don’t work? </Text>
          <Link
            onPress={() => Linking.openURL('mailto:support@mail.com')}
            label="Try another way"
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

export default ForgotPasswordScreen;
