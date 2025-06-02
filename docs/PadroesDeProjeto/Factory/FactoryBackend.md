## Factory

## Introdução

O Factory Method é um dos padrões de design criacionais utilizados na engenharia de software. Ele fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados. Esse padrão promove o baixo acoplamento e a alta escalabilidade, sendo fundamental para sistemas que precisam ser flexíveis e fáceis de manter. Como o nome indica ele tem uma função semelhante a um molde mestre, componente essencial de fabricação de peças. 


## Metodologia

O factory por sua essência lembra muito o sistema de classes amplamente utilizado mas com alterações que durante o desenvolvimento se notaram significantes. 

 O Factory Method segue uma estrutura simples e eficiente:

    - Produto (Product): Interface ou classe abstrata que define os métodos que os produtos concretos devem implementar.

    - Produtos Concretos (Concrete Products): Implementações específicas da interface do produto.

    - Criador (Creator): Classe abstrata que declara o método fábrica, que retorna um objeto do tipo Product.

    - Criadores Concretos (Concrete Creators): Subclasses que sobrescrevem o método fábrica para retornar um tipo específico de produto.


Baseando-se nisso foi proposto ideias de onde se poderia utilizar o Factory no projeto, e logo se veio a proposta de usar no sistema de anuncios. Anuncios para o projeto se configura basicamente em um serviço de transação, esse serviço de transação entretanto se prova único em cada tipo por ter propriedades distintas pra sua finalidade (troca, venda e doação). Como apesar de serem transações, em todas são comerciais e uma se baseia em um valor arbitrário (no caso da troca) é necessário um grau de desacomplamento onde a lógica de criação de objetos é isolada do código que os utiliza. Em seguida voltamos ao sistema de Factory para usuários, uma vez que um usário admin apesar de ter este titulo, exibe um comportamento totalmente diferente do usuário regular da plataforma, apesar de ter sua navegação no site do mesmo modo. 

Outros motivos para essa escolha neste ponto são o fato de que anuncios exigem uma configuração complexa que não poderia estar espalhada em multiplas funções e locais do código, e também porque anúncio pode crescer e ter funções diferentes ainda que sendo transação (por exemplo futuramente se necessário alguém pode criar um tipo de transação empréstimo ou alugues, que também é um anúncio E transação). 

## Implementação do padrão no Proejto

Aqui temos modos como foi pensando o uso do factory no projeto: 

![Padrão do Factory1](../../assets/factory1b.png)

<p align="center"><em>Autores(as): <a href="https://github.com/arthur-suares">Arthur Suares</a> e <a href="https://github.com/Jagaima">Davi Nobre</a>, 2025.</em></p>

![Padrão do Factory2](../../assets/factory2.png)

<p align="center"><em>Autores(as): <a href="https://github.com/arthur-suares">Arthur Suares</a> e <a href="https://github.com/Jagaima">Davi Nobre</a>, 2025.</em></p>