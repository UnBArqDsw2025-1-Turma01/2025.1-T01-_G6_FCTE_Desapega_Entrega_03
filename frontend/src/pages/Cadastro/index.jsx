import React from 'react';
import logo from "../../assets/Logo.png";

class FormBuilder {
  constructor() {
    this.fields = [];
  }

  addEmail(label, placeholder) {
    this.fields.push(
      <div key="email" className="form-group">
        <label>{label}</label>
        <input type="email" placeholder={placeholder} className="form-control" />
      </div>
    );
    return this;
  }

  addText(label, placeholder, name) {
    this.fields.push(
      <div key={name} className="form-group">
        <label>{label}</label>
        <input type="text" placeholder={placeholder} className="form-control" />
      </div>
    );
    return this;
  }

  addPassword(label, placeholder, name) {
    this.fields.push(
      <div key={name} className="form-group password-group">
        <label>{label}</label>
        <div className="password-wrapper">
          <input type="password" placeholder={placeholder} className="form-control" />
          <span className="icon">👁️‍🗨️</span>
        </div>
      </div>
    );
    return this;
  }

  build() {
    return this.fields;
  }
}

const CadastroPage = () => {
  const builder = new FormBuilder();
  const formFields = builder
    .addEmail('Email Institucional', 'Insira seu email institucional')
    .addText('Nome', 'Insira o seu nome', 'nome')
    .addText('Telefone', 'Insira seu telefone', 'telefone')
    .addPassword('Senha', 'Insira sua senha', 'senha')
    .addPassword('Repita sua senha', 'Repita sua senha', 'repetirSenha')
    .build();

  return (
    <div className="container">
      <button className="back-button">← Voltar</button>
      <div className="form-container">
        <img src={logo} alt="Logo" className="logo" />
        <form className="form">
          {formFields}
          <button type="submit" className="submit-button">Cadastrar</button>
        </form>
      </div>

      <style>{`
        .container {
          font-family: sans-serif;
          background-color: #fdf7f3;
          height: 100vh;
          padding: 20px;
        }

        .back-button {
          background: none;
          border: none;
          font-size: 16px;
          margin-bottom: 20px;
          cursor: pointer;
        }

        .form-container {
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          background-color: #fdf7f3;
        }

        .logo {
          display: block;
          margin: 0 auto 30px auto;
          max-width: 160px;
          height: auto;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #00517a;
          border-radius: 8px;
          font-size: 14px;
        }

        .form label {
          font-weight: bold;
          display: block;
          margin-bottom: 5px;
        }

        .password-group .password-wrapper {
          display: flex;
          align-items: center;
        }

        .password-wrapper .icon {
          margin-left: -30px;
          cursor: pointer;
        }

        .submit-button {
          width: 100%;
          padding: 12px;
          background-color: #00517a;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default CadastroPage;
