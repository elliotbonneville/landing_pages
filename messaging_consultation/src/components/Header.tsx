/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';

const Header: React.FC = () => {
  return (
    <Box
      sx={{ width: '100%', p: 3, display: 'flex', backgroundColor: 'black' }}
    >
      Header
    </Box>
  );
};

export default Header;
