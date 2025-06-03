# Factory Method

## Introdução

"O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados." [1].
Além disso, o padrão Factory Method pode ser utilizado quando há a necessidade de otimizar o uso de recursos do sistema, especialmente em cenários onde a criação repetida de objetos é custosa em termos de desempenho ou memória. Em vez de instanciar novos objetos constantemente, o Factory Method permite centralizar e controlar a lógica de criação, possibilitando o reaproveitamento de instâncias já existentes. Dessa forma, reduz-se a sobrecarga do sistema, melhora-se a eficiência e promove-se um código mais limpo e modular, com maior facilidade de manutenção e extensão futura.

## Implementação
Uma das maneiras de se implementar o padrão Factory Method é através do modelo a seguir:

![modelagem de cards usando o padrão factory Method](./../../assets/factoryMethodStructure.png)

<font size="3"><p style="text-align: center"><b>Figura 1: </b>Modelagem do Padrão de projeto Factory Method.</p></font>

Explicação sobre os elementos da figura acima:

## Product
Esta é uma interface para criar os objetos.

## ConcreteProducts
Esta é uma classe que implementa a interface do produto.

## Creator
Esta é uma classe abstrata e declara o método factory, que retorna um objeto do tipo Product.

## ConcreteCreators
Esta é uma classe que implementa a classe Creator e substitui o método factory para retornar uma instância de um ConcreteProduct.
<br>

## Referências Bibliográficas


> [1] GAMMA, Erich et al. Factory Method – Padrões de Projeto. Refactoring Guru. Disponível em: https://refactoring.guru/pt-br/design-patterns/factory-method. Acesso em: 31 maio 2025.

> [2] JONES, Roberto. *Design Patterns - Factory Method*. Medium, 2020. Disponível em: [https://medium.com/@jonesroberto/desing-patterns-factory-method-a7496ae071aa](https://medium.com/@jonesroberto/desing-patterns-factory-method-a7496ae071aa). Acesso em: 31 maio 2025.

## Histórico de Versão


<div align="center">
    <table>
        <tr>
            <th>Data</th>
            <th>Versão</th>
            <th>Descrição</th>
            <th>Autor</th>
            <th>Data da Revisão</th>
            <th>Descrição de revisão</th>
            <th>Revisor</th>
        </tr>
        <tr>
            <td>02/06/2025</td>
            <td>1.0</td>
            <td>Adicionando o porque usar o padrão, os códigos e imagem</td>
            <td><a href="https://github.com/Marianannn">Mariana Letícia</a></td>
            <td>02/06/2015</td>
            <td>Foi revisado o alinhamento, a exibição de imagens e o texto, além da organização dos componentes</td>
            <td><a href="https://github.com/arthur-suares">Arthur Suares</a></td>
        </tr>
    </table>
</div>
