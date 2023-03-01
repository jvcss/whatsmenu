import { NextApiRequest, NextApiResponse } from 'next';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }
  
  const cardapio: Product[] = [
    {
      id: 1,
      name: "Hamburguer",
      description: "Pão, carne e queijo",
      price: 10.0,
      image: "https://cdn.panelinha.com.br/receita/1562096945621-receita.jpg",
    },
    {
      id: 2,
      name: "Batata frita",
      description: "Porção de batatas fritas",
      price: 5.0,
      image: "https://assets.unileversolutions.com/recipes-v2/236946.jpg",
    },
    {
      id: 3,
      name: "Batata frita",
      description: "Porção de batatas fritas",
      price: 5.0,
      image: "https://assets.unileversolutions.com/recipes-v2/236946.jpg",
    },
    {
      id: 4,
      name: "Batata frita",
      description: "Porção de batatas fritas",
      price: 5.0,
      image: "https://assets.unileversolutions.com/recipes-v2/236946.jpg",
    },
    {
      id: 5,
      name: "Batata frita",
      description: "Porção de batatas fritas",
      price: 5.0,
      image: "https://assets.unileversolutions.com/recipes-v2/236946.jpg",
    },
    {
      id: 6,
      name: "Batata frita",
      description: "Porção de batatas fritas",
      price: 5.0,
      image: "https://assets.unileversolutions.com/recipes-v2/236946.jpg",
    },

    // adicione mais produtos aqui
  ]
  
  export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(cardapio);
  }
  