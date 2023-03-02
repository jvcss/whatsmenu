
import { GetStaticProps } from "next";
import { Product } from "../types/Product";

import MainLayout from "../components/MainLayout";

type Props = {
  cardapio: Product[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("http://localhost:3000/api/cardapio");
  const cardapio = await res.json();

  return {
    props: {
      cardapio,
    },
  };
};

export default function Extra({ cardapio }: Props) {
  return (
    <>
      <MainLayout/>
    </>
  );
}
