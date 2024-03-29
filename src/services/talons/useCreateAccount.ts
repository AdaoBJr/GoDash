import { useEffect, useMemo, useState } from 'react';
import * as yup from 'yup';
import { ButtonProps } from '@mui/material';
import { FormikConfig, FormikHelpers } from 'formik';
import { CreateAccountDomain } from '@dash/module-domain';
import { CreateAccountProps } from '@dash/module-customer';
import { AnimationModuleProps, AvatarModuleProps } from '@dash/module-components';

import { useAppContext } from 'context';
import { form } from 'services/utils/validation';
import { SubmitButton } from 'lib/shared/__styles__';
import { valuesRegisterInittial } from 'types/shared';
// import { useCreateCustomer } from 'services/infra/requests';
import * as animation from 'assets/animations/register.json';
import { createAccountInputs, createAccountTitle } from 'articles';
import { CreateAccountInputs, CreateAccountTitle } from 'lib/ui/CreateAccount/styles';
// import img_profile from '../../assets/images/profile.jpg';

export const useCreateAccount = () => {
  const { windowSize } = useAppContext();
  const [formErrors, setFormErrors] = useState<boolean>(true);

  // const { mutate, response } = useCreateCustomer({ values });

  const formValidation = useMemo(
    () =>
      yup.object().shape({
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        dateOfBirth: form.dateOfBirth,
        gender: form.gender,
        cpf: form.cpf,
        country: form.country,
        telephone: form.telephone,
        password: form.password,
        password_confirm: form.password_confirm
      }),
    []
  );

  const handleSubmit = (
    values: CreateAccountDomain,
    props: FormikHelpers<CreateAccountDomain>
  ) => {
    console.log('enviando dados...', values);
  };

  const compProps = useMemo(
    () => ({
      formikProps: {
        onSubmit: handleSubmit,
        initialValues: valuesRegisterInittial,
        validationSchema: formValidation
      } as FormikConfig<CreateAccountDomain>,
      formProps: {
        // sx: { gap: '2rem' }
        // autoComplete: 'off'
      },
      createAccountModuleProps: {
        title: { ...createAccountTitle, sx: CreateAccountTitle },
        container: { spacing: 1 },
        input: { sx: CreateAccountInputs },
        articles: createAccountInputs,
        handleErrors
      } as CreateAccountProps,
      buttonProps: {
        type: 'submit',
        variant: 'contained',
        disabled: formErrors,
        sx: SubmitButton
      } as ButtonProps,
      animationProps: {
        animation,
        width: windowSize?.smDown ? 345 : 500,
        height: windowSize?.smDown ? 345 : 445,
        style: { margin: windowSize?.smDown ? '7rem 0 0' : '13rem 0 0' }
      } as AnimationModuleProps,
      avatarProps: {
        // src: img_profile,
        alt: 'imagem do perfil',
        sx: {
          width: 100,
          height: 100
        }
      } as AvatarModuleProps
    }),
    [handleSubmit, formValidation]
  );

  function handleErrors(error?: boolean) {
    setFormErrors(error === undefined ? true : error);
  }

  useEffect(handleErrors, []);

  return { handleSubmit, compProps };
};
