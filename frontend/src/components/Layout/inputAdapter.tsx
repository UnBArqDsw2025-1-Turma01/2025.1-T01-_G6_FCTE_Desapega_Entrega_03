export const adaptInputData = (apiData) => ({
  label: apiData.label_text,
  placeholder: apiData.input_placeholder,
  error: apiData.has_error,
  value: apiData.input_value
});
