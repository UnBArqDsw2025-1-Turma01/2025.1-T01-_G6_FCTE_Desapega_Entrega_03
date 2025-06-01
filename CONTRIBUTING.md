# Política de Contribuição

## Introdução

Este repositório busca promover um ambiente colaborativo, organizado e eficiente para todos os membros da equipe do projeto FCTEDesapega. Para garantir a qualidade do projeto, seguimos um fluxo de trabalho estruturado, baseado em boas práticas de desenvolvimento.

Por favor, leia este documento antes de começar a contribuir. Ele define diretrizes claras sobre como realizar commits, criar branches, realizar merges e fazer deploy para o Docsify.

---

## Fluxo de Trabalho

### 1. Criação de Branches

- Sempre crie uma branch nova para cada funcionalidade, correção ou melhoria que deseja implementar.
- Nomeie as branches utilizando identificadores claros e descritivos.
- Nunca trabalhe diretamente na branch `main` ou `docs`.

- As branches devem seguir a estrutura:
```bash
nome/descriçao 
```

### 2. Commit de Alterações

Ao realizar commits, siga estas diretrizes:
- Use mensagens de commit claras e descritivas:
  ```
  git commit -m "docs: Adiciona funcionalidade de heatmap para exibir disponibilidade"
  ```
- Faça commits pequenos e frequentes para facilitar revisões.

### 3. Merge para a Branch `docs`

- Após finalizar o trabalho em sua branch, abra um Pull Request na branch `docs`.
- Certifique-se de que:
  - Todos os **status checks** estão passando.
  - As mudanças foram revisadas e não causam nenhum tipo de conflito.
- Siga as instruções do template de Pull Request no repositório:
  [Template de Pull Request](./.github/pull_request_template.md).

### 4. Merge para a Branch `main`

- Depois que a branch `docs` estiver completamente revisada e finalizada, coordene com a equipe para realizar o merge na branch `main`.
- A branch `main` deve refletir sempre o estado estável e pronto para deploy.

---

## Deploy para o Docsify

Após o merge na `main`, siga estas etapas para realizar o deploy do projeto para o Docsify:

1. **Configurar o Docsify**:
Execute o seguinte comando para iniciar o servidor local:
   ```bash
   docsify serve ./docs
   ```

2. **Publicar no GitHub Pages**:
   Configure o GitHub Pages para apontar para o diretório `/docs` na branch `main`:
   - No GitHub, acesse as configurações do repositório.
   - Em "GitHub Pages", selecione "Source" como branch `main` e o diretório `/docs`.

3. **Verificar o Deploy**:
   Acesse o link gerado pelo GitHub Pages para garantir que as alterações foram aplicadas.

---

### Como Criar Branches

1. **Atualize seu repositório local**:
   ```bash
   git fetch
   ```

2. **Mude para a branch principal**:
   ```bash
   git checkout main
   ```

3. **Sincronize sua branch principal com o repositório remoto**:
   ```bash
   git reset --hard origin/main
   ```

4. **Crie uma nova branch a partir da branch principal**:
   ```bash
   git checkout -b /
   ```

---

### Regras para Criação de Issues

| Passo                                                                                  | Detalhes                                                                                 |
|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Verificar issues existentes                                                            | Verifique se já existe uma issue relacionada ao assunto em questão.                     |
| Criar um título claro e objetivo                                                       | O título deve resumir o problema tratado pela issue.                                    |
| Adicionar uma descrição detalhada                                                     | A descrição deve ser compreensível para qualquer membro do repositório.                 |
| Definir Assignees                                                                      | Adicione pelo menos um responsável pela tarefa.                                         |
| Usar Labels                                                                            | Categorize a issue conforme apropriado (ex.: `bug`, `enhancement`, `documentation`).    |

---

## Melhoria de Funcionalidades

### Como Sugerir Melhorias

1. Antes de criar uma sugestão, verifique se a funcionalidade desejada já foi proposta.
2. Inclua no issue:
   - Um título claro e descritivo.
   - Passos detalhados sobre como você imagina que a funcionalidade funcionaria.
   - Exemplos práticos para ilustrar a ideia.
   - Razões pelas quais essa funcionalidade seria útil para o projeto.

---

### Formato de Commit

```bash
type:subject 
```

- **`type`**: Tipo da alteração. Deve seguir a tabela de "Tipos de Branches", descrita acima.
- **`subject`**: Descrição breve, clara e escrita em português sobre a modificação.


#### Tipos de Branches

| **Tipo (`type`)** | **Descrição**                                                      |
|--------------------|--------------------------------------------------------------------|
| `feat`            | Adição de novas funcionalidades.                                   |
| `fix`             | Correção de bugs.                                                 |
| `docs`            | Atualizações ou criações de documentação.                         |
| `style`           | Alterações de formatação, sem afetar a lógica do código.          |
| `refactor`        | Refatorações ou melhorias no código sem mudar funcionalidades.     |
| `test`            | Adição ou atualização de testes.                                  |
| `chore`           | Outras alterações no projeto que não impactam diretamente o código.|


### Referências

- [Commits Convencionais](https://www.conventionalcommits.org/pt-br/v1.0.0/)
- [Git Branch Naming Conventions](https://deepsource.io/blog/git-branch-naming-conventions/)
- [Como usar o Planning Poker](https://www.planningpoker.com/)
- [Gerenciamento de Branches com Git Flow](https://tableless.com.br/git-flow-introducao/)

---


## Commits

A política de commits segue a convenção [Conventional Commits v1.0.0](https://www.conventionalcommits.org/pt-br/v1.0.0/).

## Código de Conduta

Todos os contribuidores devem seguir nosso [Código de Conduta](CODE_OF_CONDUCT.md) para garantir um ambiente acolhedor e inclusivo.

---


<p align="center"><strong> Histórico de Versões</strong></p>

<table style="margin: auto; width: 60%; border-collapse: collapse;" border="1" cellpadding="8">
  <thead>
    <tr>
      <th style="text-align: center;">Versão</th>
      <th style="text-align: center;">Data</th>
      <th style="text-align: center;">Descrição</th>
      <th style="text-align: center;">Autor(es)</th>
      <th style="text-align: center;">Revisor(es)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center;">1.0</td>
      <td style="text-align: center;">01/06/2025</td>
      <td style="text-align: center;">Criação do documento.</td>
      <td style="text-align: center;"><a href="https://github.com/GabrielSMonteiro">Gabriel Monteiro</a></td>
      <td style="text-align: center;"></td>
    </tr>
  </tbody>

</table>    