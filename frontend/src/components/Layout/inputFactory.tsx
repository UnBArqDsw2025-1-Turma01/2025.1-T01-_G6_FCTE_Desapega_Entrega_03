import CustomInput from './input';

export const InputFactory = {
  create: (type, props) => {
    switch(type) {
      case 'email':
        return <CustomInput {...props} type="email" placeholder="Email" />;
      case 'password':
        return <CustomInput {...props} type="password" />;
      default:
        return <CustomInput {...props} />;
    }
  }
}
