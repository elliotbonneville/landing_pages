/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';

const Footer: React.FC = () => (
  <Box
    sx={{
      padding: 3,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    }}
  >
    © Bonneville Solutions, Inc.
  </Box>
);

export default Footer;
