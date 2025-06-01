// Factory Method para criar diferentes tipos de input
function inputFactory(type, props) {
  switch (type) {
    case "password":
      return <CustomInput {...props} type="password" placeholder="Digite sua senha" />;
    case "email":
      return <CustomInput {...props} type="email" placeholder="Digite seu e-mail" />;
    default:
      return <CustomInput {...props} type="text" placeholder="Continue with Google" />;
  }
}


export default function InputDemo() {
  return (
    <div>
      {inputFactory("default", {})}
      {inputFactory("email", {})}
      {inputFactory("password", {})}
    </div>
  );
}
