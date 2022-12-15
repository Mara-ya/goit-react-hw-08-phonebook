import { ButtonSt } from 'components/AdditionalStyles/ButtonLogIn.styled';
import { PasswordInput } from 'components/AdditionalStyles/PasswordInput.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {Input} from '../AdditionalStyles/InputLogIn.styled';
import { Button, Label, Wrapper } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <PasswordInput type="password" name="password" />
        </Label>
        <Button>
        <ButtonSt type="submit">Register</ButtonSt>
        </Button>
      </form>
    </Wrapper>
  );
};
