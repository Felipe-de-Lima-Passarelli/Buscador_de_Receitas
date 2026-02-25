"use client";

//Next
import { useState } from "react";

//Components
import Cards from "./Cards";

//Types
import { MealsResponse } from "@/types/mealType";

const SearchAPI = () => {
  const [search, setSearch] = useState<string>("");
  const [cards, setCards] = useState<MealsResponse>({
    meals: [],
  });

  const urlAPI =
    "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search;

  async function fetchAPI(urlAPI: string) {
    const data = await fetch(urlAPI);
    const response = await data.json();
    setCards(response);
  }

  return (
    <main className="bg-white w-[50%] mx-auto py-[2%] my-[2%]">
      <h1 className="text-[#313131] text-4xl font-black text-center">
        Buscador de Receitas
      </h1>
      <div className="mt-[5%] flex flex-row items-center justify-between mx-[2%]">
        <input
          type="text"
          placeholder="Digite um ingrediente principal"
          className="w-[88%] border-2 py-[0.7%] px-[1.5%]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="text-white bg-[#55B254] py-[1%] px-[2%] font-semibold rounded-md cursor-pointer"
          onClick={() => {
            fetchAPI(urlAPI);
            setSearch("");
          }}
        >
          Buscar
        </button>
      </div>

      <Cards cards={cards} />
    </main>
  );
};

export default SearchAPI;
