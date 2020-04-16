/** @jsx jsx */
import React from 'react';
import { jsx, Box } from 'theme-ui';

interface SpacerProps {
  width?: number | string;
  height?: number | string;
}

const Spacer: React.FC<SpacerProps> = ({ width, height }: SpacerProps) => (
  <Box sx={{ pb: height, pl: width }} />
);

export default Spacer;
