import CustomInput from './input';

const InputFactory = ({ type, ...props }) => 
{
  switch(type) {
    case 'email':
      return <CustomInput {...props} type="email" placeholder="Email" />;
    case 'password':
      return <CustomInput {...props} type="password" />;
    default:
      return <CustomInput {...props} />;
  }
}

export default InputFactory;