const requiredHandler = (value) => {
  if (!value || value.trim() === "") return "Campo obrigatório";
  return null;
};

const emailHandler = (value) => {
  if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "E-mail inválido";
  return null;
};

const minLengthHandler = (min) => (value) => {
  if (value && value.length < min) return `Mínimo ${min} caracteres`;
  return null;
};

function runValidationChain(handlers, value) {
  for (const handler of handlers) {
    const error = handler(value);
    if (error) return error;
  }
  return null;
}
