/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';

import Spacer from './Spacer';

const Pitch = (): React.ReactElement => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        pt: 5,
        maxWidth: 670,
        flexDirection: 'column',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <Heading as="h1">
        Are you struggling to come up with a header for your landing page?
      </Heading>
      <Spacer height={3} />
      <ul sx={{ textAlign: 'left' }}>
        <li>
          Do you always feel like you have to come up with three different
          examples to explain what your SaaS does?
        </li>
        <li>Do you feel like users don’t understand your product?</li>
        <li>Do you struggle to tell your friends what your software does?</li>
        <li>Is the conversion on your homepage lower than you'd like?</li>
        <li>
          Are you afraid your product will be rejected because you won’t be able
          to explain what it is to investors?
        </li>
      </ul>
      <Text>
        Take a minute and imagine that you had such a clear elevator pitch for
        your software that before you finish your sentence your users' eyes
        light up.
      </Text>
    </Box>
  );
};

export default Pitch;
