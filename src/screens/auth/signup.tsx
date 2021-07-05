import React, {useRef} from 'react';
import {TextInput} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Button, Container, Box, Text, Input, Footer} from '@components';
import {Route, StackNavigationProps} from '@core/types';

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
  passwordConfirmation: Yup.string()
    .required()
    .min(6)
    .max(16)
    .test('passwords-match', function (value) {
      return this.parent.password === value;
    }),
});

const SignUpScreen = ({navigation}: StackNavigationProps<Route, 'SignUp'>) => {
  const {values, handleChange, handleBlur, touched, errors, handleSubmit} =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      validationSchema: SignUpSchema,
      onSubmit: inputs => console.log(inputs),
    });

  const password = useRef<TextInput>(null);
  const passwordConfirmation = useRef<TextInput>(null);

  const footer = (
    <Footer
      label="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate('Login')}
    />
  );

  return (
    <Container {...{footer}}>
      <Box margin="xl">
        <Text variant="h1" textAlign="center">
          Create account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Let’s us know what your name, email, and your password
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
            returnKeyType="next"
            returnKeyLabel="Next"
            onSubmitEditing={() => passwordConfirmation.current?.focus()}
          />
        </Box>
        <Box marginTop="s" marginBottom="xl">
          <Input
            ref={passwordConfirmation}
            placeholder="Confirm your password"
            icon="lock"
            value={values.passwordConfirmation}
            onChance={handleChange('passwordConfirmation')}
            touched={touched.passwordConfirmation}
            error={errors.passwordConfirmation}
            onBlur={handleBlur('passwordConfirmation')}
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />
        </Box>
        <Button
          onPress={handleSubmit}
          label="Create your account"
          variant="primary"
        />
      </Box>
    </Container>
  );
};

export default SignUpScreen;
