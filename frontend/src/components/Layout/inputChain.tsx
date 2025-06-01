interface IValidator {
  setNext(next: IValidator): IValidator;
  validate(value: string): string | null;
}

// Classe base Validator
class Validator implements IValidator {
  protected next: IValidator | null = null;

  setNext(next: IValidator): IValidator {
    this.next = next;
    return next;
  }

  validate(value: string): string | null {
    if (this.next) return this.next.validate(value);
    return null;
  }
}

// Validador de campo obrigatório
class RequiredValidator extends Validator {
  validate(value: string): string | null {
    if (!value || value.trim() === "") return "Campo obrigatório";
    return super.validate(value);
  }
}

// Validador de e-mail
class EmailValidator extends Validator {
  validate(value: string): string | null {
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "E-mail inválido";
    }
    return super.validate(value);
  }
}

// Função para criar cadeia de validação
function createValidationChain(): IValidator {
  const required = new RequiredValidator();
  const email = new EmailValidator();
  required.setNext(email);
  return required;
}

// Função de validação
function validateInput(value: string): string | null {
  const validator = createValidationChain();
  return validator.validate(value);
}
