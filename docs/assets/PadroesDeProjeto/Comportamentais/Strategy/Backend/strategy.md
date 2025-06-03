# Introdução ao Padrão Strategy

O padrão de projeto Strategy é um padrão comportamental que permite a definição de uma família de algoritmos, encapsulando cada um deles e tornando-os intercambiáveis. O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam. Este padrão é útil para situações onde é necessário escolher entre diferentes algoritmos em tempo de execução.

Neste documento, exploraremos a aplicação do padrão Strategy no contexto de um sistema backend, demonstrando como ele pode ser utilizado para melhorar a flexibilidade e a manutenibilidade do código.

## Modelagem

![Exemplo de modelagem usando o padrão Strategy](../../../../Strategy.drawio.png)

<font size="3"><p style="text-align: center"><b>Figura 1: </b>Exemplo de modelagem do Padrão de projeto Strategy aplicado a um sistema backend.</p></font>

## Funcionalidade

A funcionalidade do padrão Strategy no backend pode ser exemplificada através de um sistema de autenticação que suporta múltiplos métodos de login, como email, redes sociais, ou autenticação de dois fatores. Cada método de autenticação pode ser implementado como uma estratégia separada, permitindo que o sistema escolha dinamicamente o método apropriado com base nas preferências do usuário ou nas políticas de segurança.

## Bibliografia

> GAMMA, Erich et al. Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley, 1994.

> SOFTPLAN. Descomplicando o Strategy. Softplan – Tech Writers. Disponível em: https://www.softplan.com.br/tech-writers/descomplicando-o-strategy/. Acesso em: 31 maio 2025.

## Histórico de Versão

<div align="center">
    <table>
        <tr>
            <th>Data</th>
            <th>Versão</th>
            <th>Descrição</th>
            <th>Autor</th>
            <th>Data da Revisão</th>
            <th>Descrição da revisão</th>
            <th>Revisor</th>
        </tr>
        <tr>
            <td>02/06/2025</td>
            <td>1.0</td>
            <td>Adicionando introdução, modelagem, funcionalidade, bibliografia e histórico de versão</td>
            <td><a href="https://github.com/erteduarda">Eduarda Tavates</a> e <a href="https://github.com/RenataKurzawa">Renata Kurzawa</a></td>
            <td>00/00/0000</td>
            <td></td>
            <td><a href="https://github.com/SEU_GIT]">SEU_NOME</a></td>
        </tr>
    </table>
</div>