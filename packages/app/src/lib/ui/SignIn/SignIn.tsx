import React from 'react';
import { Button, Grid } from '@mui/material';
import { SignInModule } from '@dash/module-customer';
import { AnimationModule } from '@dash/module-components';

import { Header } from 'lib/shared';
import { PaperForm } from './styles';
import { ReactFC } from 'types/interface';
import { useSignIn } from 'services/talons';
import { GridContainer, Form, PaperFormWrapper } from 'lib/shared/__styles__';

export const SignIn: React.FC<ReactFC> = () => {
  const {
    compProps: { formProps, signInModuleProps, buttonProps, animationProps }
  } = useSignIn();

  return (
    <GridContainer container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item md={6}>
        <PaperFormWrapper sx={PaperForm}>
          <Form {...formProps}>
            <SignInModule {...signInModuleProps} />
            <Button {...buttonProps}>Entrar</Button>
          </Form>
        </PaperFormWrapper>
      </Grid>
      <Grid item md={6}>
        <AnimationModule {...animationProps} />
      </Grid>
    </GridContainer>
  );
};
