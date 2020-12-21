import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import SignInSignUp from '../src/components/client/SignIn-SignUp/SignInSignUp';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const counter = useSelector((state) => state.count);
  const [open, setOpen] = React.useState(false);

  const login = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <div>
          <Button variant="contained" onClick={login} color="primary">
            Primary
          </Button>
          <SignInSignUp open={open} onClose={handleClose} />
        </div>
      </Box>
    </Container>
  );
}
