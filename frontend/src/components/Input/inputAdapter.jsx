export const jsonSchemaAdapter = (schemaField) => ({
  label: schemaField.title || schemaField.name || "Label",
  placeholder: schemaField.examples?.[0] || schemaField.description || "Digite aqui",
  value: schemaField.default || "",
  disabled: schemaField.readOnly || false,
  error: false,
  supportText: schemaField.description || "Texto de suporte",
  type: schemaField.format === "email" ? "email" : 
        schemaField.format === "password" ? "password" : "text",
  required: schemaField.required || false,
  minLength: schemaField.minLength,
  maxLength: schemaField.maxLength
});