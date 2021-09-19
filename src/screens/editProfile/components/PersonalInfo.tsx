import React from 'react';
import {ScrollView} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Box, CheckboxGroup, Input, Text} from '@components';
import {useTheme} from '@config/theme';

import {genders} from '@core/content';

interface PersonalInfoProps {}

const ProfileSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(16).required(),
});

const PersonalInfo = ({}: PersonalInfoProps) => {
  const theme = useTheme();
  const {values, handleChange, handleBlur, touched, errors} = useFormik({
    initialValues: {
      name: '',
      password: '',
      address: '',
    },
    validationSchema: ProfileSchema,
    onSubmit: inputs => console.log(inputs),
  });
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: theme.spacing.m,
        paddingBottom: theme.spacing.xl * 4,
      }}>
      <Box marginVertical="m">
        <Text variant="body">Account information</Text>
      </Box>
      <Box marginVertical="m">
        <Input
          placeholder="Name"
          icon="user"
          value={values.name}
          onChance={handleChange('name')}
          touched={touched.name}
          error={errors.name}
          onBlur={handleBlur('name')}
        />
      </Box>
      <Box marginVertical="m">
        <Input
          placeholder="Password"
          icon="lock"
          value={values.password}
          onChance={handleChange('password')}
          touched={touched.password}
          error={errors.password}
          onBlur={handleBlur('password')}
          secureTextEntry
        />
      </Box>
      <Box marginVertical="m">
        <Input
          placeholder="Address"
          icon="map-pin"
          value={values.address}
          onChance={handleChange('address')}
          touched={touched.address}
          error={errors.address}
          onBlur={handleBlur('address')}
        />
      </Box>
      <CheckboxGroup options={genders} />
    </ScrollView>
  );
};

export default PersonalInfo;
