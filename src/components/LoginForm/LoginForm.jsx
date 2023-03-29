import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { 
  Box, 
  FormControl, 
  TextField, 
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styled from "./LoginForm.module.scss";


export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box className={styled.wrapper}>
      <form onSubmit={handleSubmit} autoComplete="off">
          <TextField 
            type="email" 
            name="email" 
            label="Email" 
            variant="standard" 
            className={styled.formControl__input}
            required
          />
        <FormControl 
          className={styled.formControl}
        >
          <InputLabel 
            htmlFor='password' 
            sx={{top:'5px', left:'-13px'}}
          >
            Password *
          </InputLabel>
          <Input
            name="password"
            label="password"
            required
            inputProps={{
              minLength: 8,
            }}
            className={styled.formControl__input}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end" sx={{left: '50px'}}>
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box sx={{display: 'flex', justifyContent: 'center', p: 2}}>
          <Button 
            type="submit" 
            variant="outlined"
            sx={{color: "#428A8B", borderColor: "#428A8B"}}
          >
            LogIn
          </Button>
        </Box>
      </form>
    </Box>
  );
};