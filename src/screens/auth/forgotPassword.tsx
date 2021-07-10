import React, {useState} from 'react';
import {Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Route, StackNavigationProps} from '@core/types';
import {
  Button,
  Container,
  Box,
  Text,
  Input,
  Footer,
  Link,
  Modal,
} from '@components';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

const SIZE = 80;

const ForgotPasswordScreen = ({
  navigation,
}: StackNavigationProps<Route, 'ForgotPassword'>) => {
  const [visible, setVisible] = useState(false);
  const {values, handleChange, handleBlur, touched, errors, handleSubmit} =
    useFormik({
      initialValues: {
        email: '',
      },
      validationSchema: LoginSchema,
      onSubmit: () => setVisible(true),
    });

  const footer = (
    <Footer
      label="Don’t have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate('SignUp')}
    />
  );

  return (
    <>
      <Container {...{footer}} pattern={2}>
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
      <Modal visible={visible} onClose={() => setVisible(!visible)}>
        <Box margin="xl">
          <Box flexDirection="row" justifyContent="center" marginVertical="xl">
            <Box
              height={SIZE}
              width={SIZE}
              backgroundColor="primaryLight"
              alignItems="center"
              justifyContent="center"
              style={{borderRadius: SIZE / 2}}>
              <Text color="primary">
                <Icon name="check" size={25} />
              </Text>
            </Box>
          </Box>
          <Text variant="h1" textAlign="center">
            Your password was successfully changed
          </Text>
          <Text variant="body" textAlign="center" marginVertical="xl">
            Close this window and login again
          </Text>
          <Button
            onPress={() => setVisible(!visible)}
            label="Login again"
            variant="primary"
          />
        </Box>
      </Modal>
    </>
  );
};

export default ForgotPasswordScreen;
