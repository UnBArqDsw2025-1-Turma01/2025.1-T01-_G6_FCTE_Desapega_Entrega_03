import React from "react";
import { useCardStrategy } from "../strategies/cardStrategies";

// Array de anúncios de exemplo com diferentes tipos (venda, troca, doação)
const anunciosData = [
    {
        id: 1,
        type: "venda",
        title: "MacBook Pro 2022",
        price: "R$ 8.500,00",
        user: "João Silva",
        local: "FCTE",
        category: "Eletrônicos"
    },
    {
        id: 2,
        type: "troca",
        title: "Livro Arquitetura Limpa",
        user: "Maria Oliveira",
        local: "Darcy Ribeiro",
        category: "Livros"
    },
    {
        id: 3,
        type: "doacao",
        title: "Caderno de Anotações",
        user: "Pedro Santos",
        local: "FCTE",
        category: "Papelaria"
    },
    {
        id: 4,
        type: "venda",
        title: "Monitor 24 polegadas",
        price: "R$ 950,00",
        user: "Ana Costa",
        local: "Darcy Ribeiro",
        category: "Eletrônicos"
    },
    {
        id: 5,
        type: "troca",
        title: "Casaco UnB",
        user: "Lucas Mendes",
        local: "FCTE",
        category: "Roupas"
    },
    {
        id: 6,
        type: "doacao",
        title: "Calculadora Científica",
        user: "Juliana Alves",
        local: "Outro",
        category: "Eletrônicos"
    },
    {
        id: 7,
        type: "venda",
        title: "Mesa de Estudos",
        price: "R$ 320,00",
        user: "Rafael Souza",
        local: "FCTE",
        category: "Móveis"
    },
    {
        id: 8,
        type: "troca",
        title: "Bola de Basquete",
        user: "Fernanda Lima",
        local: "Darcy Ribeiro",
        category: "Esporte"
    },
    {
        id: 9,
        type: "doacao",
        title: "Apostilas de Cálculo",
        user: "Gabriel Martins",
        local: "FCTE",
        category: "Livros"
    }
];

const AnunciosList = () => {
    // Usa o hook personalizado que implementa o padrão Strategy
    const { renderCard } = useCardStrategy();
    
    // Função que renderiza um card para um anúncio específico
    const renderAnuncioCard = (anuncio) => {
        return renderCard(anuncio.type, {
            title: anuncio.title,
            price: anuncio.price,
            user: anuncio.user,
            local: anuncio.local
        });
    };

    return (
        <section className="w-full grid grid-cols-3 gap-4 border-l border-primary-800 pl-4">
            {anunciosData.map((anuncio) => (
                <div key={anuncio.id} className="mb-4">
                    {renderAnuncioCard(anuncio)}
                </div>
            ))}
        </section>
    );
};

export default AnunciosList;