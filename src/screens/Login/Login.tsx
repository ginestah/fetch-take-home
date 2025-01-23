import React, { useState, useEffect } from 'react';
import useLogin from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast/Toast';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { mutate, isLoading, isError, isSuccess } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate({ email, name });
  };

  useEffect(() => {
    // Redirect to home on successful login
    if (isSuccess) {
      navigate('/search');
    }
  }, [isSuccess, navigate]);

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{ mt: 2 }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        {isError && <Toast message="Login failed. Please try again." />}
      </Box>
    </Container>
  );
};

export default LoginForm;