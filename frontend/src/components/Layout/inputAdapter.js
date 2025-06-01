// Função Adapter para transformar dados do backend
function adaptInputData(apiData) {
  return {
    label: apiData.label_text,
    placeholder: apiData.input_placeholder,
    supportText: apiData.helper_message,
    disabled: apiData.is_disabled,
    error: apiData.has_error,
    value: apiData.input_value,
  };
}

// Exemplo de dados vindos da API
const apiResponse = {
  label_text: "Nome",
  input_placeholder: "Digite seu nome",
  helper_message: "Campo obrigatório",
  is_disabled: false,
  has_error: false,
  input_value: "",
};

// Convertendo os dados para o formato esperado pelo componente
const adaptedData = adaptInputData(apiResponse);

// Usando os dados adaptados
console.log(adaptedData);
