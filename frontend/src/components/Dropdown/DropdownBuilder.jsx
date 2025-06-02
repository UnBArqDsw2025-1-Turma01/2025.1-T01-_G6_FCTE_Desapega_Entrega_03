import { CustomDropdown } from "./Dropdown";

export class DropdownBuilder {
  constructor() {
    this.props = {
      options: [],
      placeholder: "Selecione...",
      disabled: false,
      error: false,
      onChange: () => {},
    };
  }

  setOptions(options) {
    this.props.options = options;
    return this;
  }

  setPlaceholder(placeholder) {
    this.props.placeholder = placeholder;
    return this;
  }

  setDisabled(disabled = true) {
    this.props.disabled = disabled;
    return this;
  }

  setError(error = true) {
    this.props.error = error;
    return this;
  }

  setOnChange(callback) {
    this.props.onChange = callback;
    return this;
  }

  build() {
    return <CustomDropdown {...this.props} />;
  }
}
