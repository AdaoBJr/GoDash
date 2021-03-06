import React from 'react';
import { Box, Icon, IconButton, Paper, Typography, useMediaQuery } from '@mui/material';

import { Links } from './components';
import { Image } from '../../../lib/shared';
import { HeaderModuleProps } from '../../../types/interface';

export const HeaderModule: React.FC<HeaderModuleProps> = props => (
  <Paper
    sx={{
      position: props.fixed ? 'fixed' : 'inherit',
      width: '100%',
      padding: '0 2rem',
      ...props.sx
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: props.justify || 'space-between'
      }}
    >
      <Box>
        <Image
          src={props.src!}
          height={props.heightImg}
          width={props.widthImg || 70}
          alt={props.altImg || 'logo GoDash'}
        />
        <Typography component="span">{props.title || 'GoDash'}</Typography>
      </Box>
      {!props?.windowSize?.smDown && props?.linksProps && (
        <Links {...props?.linksProps} />
      )}
      {props?.windowSize?.smDown && (
        <IconButton>
          <Icon fontSize="large">menu</Icon>
        </IconButton>
      )}
    </Box>
  </Paper>
);
