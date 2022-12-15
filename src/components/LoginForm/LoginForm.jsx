import { ButtonSt } from 'components/AdditionalStyles/ButtonLogIn.styled';
import { Input } from 'components/AdditionalStyles/InputLogIn.styled';
import { PasswordInput } from 'components/AdditionalStyles/PasswordInput.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Label, Wrapper } from './LoginForm.styled';

export const LoginForm = () => {
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

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <PasswordInput type="password" name="password" />
        </Label>
        <Button><ButtonSt type="submit">Log In</ButtonSt></Button>
      </form>
    </Wrapper>
  );
};
