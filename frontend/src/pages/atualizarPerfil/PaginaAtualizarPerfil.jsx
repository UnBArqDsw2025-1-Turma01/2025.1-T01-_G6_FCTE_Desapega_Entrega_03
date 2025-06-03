import React from 'react';
import Header from './Header';
import Footer from './Footer';

// Padrão GoF Criacional: BUILDER
class FormBuilder {
  constructor() {
    this.fields = [];
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

  addTextWithHint(label, placeholder, name, hint) {
    this.fields.push(
      <div key={name} className="form-group">
        <label>{label}</label>
        <input type="text" placeholder={placeholder} className="form-control" />
        <p className="hint-text">{hint}</p>
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
        </div>
      </div>
    );
    return this;
  }

  build() {
    const senhaFields = this.fields.slice(-2);
    const otherFields = this.fields.slice(0, -2);

    return [
      ...otherFields,
      <div key="mudar-senha" className="mudar-senha-box">
        <h2 className="mudar-senha-titulo">Mudar senha</h2>
        {senhaFields}
      </div>
    ];
  }
}

const PaginaAtualizarPerfil = () => {
  const builder = new FormBuilder();

  const formFields = builder
    .addTextWithHint('Nome *', 'Martin Macfly', 'nome', 'O nome inserido é o nome que aparecerá em seus anúncios.')
    .addTextWithHint('Telefone *', '(61) 91234-5432', 'telefone', 'Mantenha seu telefne atualizado para que os clientes possam entrar em contato!')
    .addText('CPF *', '123.456.123-90', 'cpf')
    .addPassword('Senha nova', 'Digite a nova senha', 'senhaNova')
    .addPassword('Repita sua senha', 'Repita a nova senha', 'repetirSenha')
    .build();

  return (
    <div className="container">
      <Header />

      <main className="main">
        <button className="back-button">← Voltar</button>

        <div className="form-container">
          <h1 className="titulo">Confira seus dados</h1>

          <form className="form">
            {formFields}

            <div className="botoes">
              <div className="deletar-container">
                <h2 className="deletar-titulo">Deletar conta</h2>
                <button type="button" className="botao deletar-btn">Deletar conta</button>
              </div>
              <button type="submit" className="botao salvar-btn">Salvar</button>
            </div>
          </form>
        </div>
      </main>

      <Footer />

      <style>{`
        .container {
          font-family: sans-serif;
          background-color: #fdf7f3;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .main {
          flex: 1;
          width: 100%;
          max-width: 700px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .back-button {
          background: none;
          border: none;
          font-size: 16px;
          margin-bottom: 20px;
          cursor: pointer;
        }

        .titulo {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          text-align: left;
          color: #4D4D4D;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          color: #4D4D4D;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-weight: bold;
          font-size: 0.9rem;
        }

        .form-control {
          width: 100%;
          padding: 10px;
          border: 1px solid #00517a;
          border-radius: 20px; 
          font-size: 14px;
        }


        .hint-text {
          font-size: 0.9rem;
          color: #555;
          margin-top: 2px;
        }

        .password-group .password-wrapper {
          display: flex;
          align-items: center;
        }

        .mudar-senha-box {
          border: 2px solid #00517a;
          border-radius: 16px;
          padding: 1.5rem;
          margin-top: 1rem;

        }

        .mudar-senha-titulo {
          font-size: 1.2rem;
          font-weight: bold;
          color: #00517a;
          margin-bottom: 1rem;
        }

        .botoes {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .deletar-container {
          border: 2px solid #f07d00;
          border-radius: 16px;
          padding: 1rem;
        }

        .deletar-titulo {
          font-size: 1.1rem;
          font-weight: bold;
          margin-bottom: 0.8rem;
          color: #d86400;
        }

        .botao {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 20px;
          font-size: 16px;
          cursor: pointer;
          color: white;
        }

        .salvar-btn {
          background-color: #00517a;
        }

        .deletar-btn {
          background-color: #d86400;
        }

        }
      `}</style>
    </div>
  );
};

export default PaginaAtualizarPerfil;
