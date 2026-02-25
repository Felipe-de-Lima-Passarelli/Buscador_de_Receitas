"use client";

//Next
import Image from "next/image";
import { useState } from "react";

//Types
import { Meal } from "@/types/mealType";

//Interface
type CardsProps = {
  cards: {
    meals: Meal[];
  };
};

const Cards = ({ cards }: CardsProps) => {
  const [actualItem, setActualItem] = useState<string[]>([]);
  const [onItem, setOnIteam] = useState<boolean>(false);

  const number = actualItem.length - 6;
  const arrayIngrediente = Array.from({ length: number }, (_, i) => i + 3);

  return (
    <>
      <div className="mt-[3%] mx-[2%] grid grid-cols-3 gap-6">
        {cards.meals.map((item) => (
          <div key={item.idMeal} className="border border-gray-600">
            <div className="flex flex-col m-[5%]">
              <button
                className="cursor-pointer"
                onClick={() => {
                  setActualItem(
                    [
                      item.strMeal || "",
                      item.strMealThumb || "",
                      item.strCategory || "",
                      item.strIngredient1 + " - " + item.strMeasure1,
                      item.strIngredient2 + " - " + item.strMeasure2,
                      item.strIngredient3 + " - " + item.strMeasure3,
                      item.strIngredient4 + " - " + item.strMeasure4,
                      item.strIngredient5 + " - " + item.strMeasure5,
                      item.strIngredient6 + " - " + item.strMeasure6,
                      item.strIngredient7 + " - " + item.strMeasure7,
                      item.strIngredient8 + " - " + item.strMeasure8,
                      item.strIngredient9 + " - " + item.strMeasure9,
                      item.strIngredient10 + " - " + item.strMeasure10,
                      item.strIngredient11 + " - " + item.strMeasure11,
                      item.strIngredient12 + " - " + item.strMeasure12,
                      item.strIngredient13 + " - " + item.strMeasure13,
                      item.strIngredient14 + " - " + item.strMeasure14,
                      item.strIngredient15 + " - " + item.strMeasure15,
                      item.strIngredient16 + " - " + item.strMeasure16,
                      item.strIngredient17 + " - " + item.strMeasure17,
                      item.strIngredient18 + " - " + item.strMeasure18,
                      item.strIngredient19 + " - " + item.strMeasure19,
                      item.strIngredient20 + " - " + item.strMeasure20,
                      item.strInstructions || "",
                      item.strTags || "",
                      item.strYoutube || "",
                    ].filter((item) => item.length > 5),
                  );
                  setOnIteam(true);

                  setTimeout(() => {
                    document.getElementById("card")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 0);
                }}
              >
                <Image
                  src={item.strMealThumb || ""}
                  alt="teste"
                  width={1000}
                  height={1000}
                  className="w-full"
                />
                <h2 className="text-xl font-semibold text-center mt-[6%] mb-[12%]">
                  {item.strMeal}
                </h2>
              </button>
            </div>
          </div>
        ))}
      </div>
      {onItem && (
        <div id="card" className="mx-[2%] my-[6%] text-xl font-semibold">
          <h1>{actualItem[0]}</h1>
          <Image
            src={actualItem[1]}
            alt={`${actualItem[0] + "Image"}`}
            width={1000}
            height={1000}
            className="w-[30%] my-[3%]"
          />
          <h2>Ingredientes:</h2>
          <ul className="my-[3%] mx-[5%] text-lg font-normal list-disc">
            {arrayIngrediente.map((number) => (
              <li key={number}>{actualItem[number]}</li>
            ))}
          </ul>
          <h2>Instruções:</h2>
          <p className="text-lg font-normal my-[3%]">
            {actualItem.filter((item) => item.length > 80)}
          </p>
          <iframe
            width="560"
            height="315"
            src={actualItem[actualItem.length - 1]
              ?.replace("watch?v=", "embed/")
              ?.replace("youtu.be/", "youtube.com/embed/")
              ?.replace("shorts/", "embed/")}
            title="YouTube video"
            allowFullScreen
          ></iframe>
          <button
            className="text-white bg-[#55B254] py-[1%] px-[2%] font-semibold rounded-md cursor-pointer mb-[2%] mt-[2%]"
            onClick={() => setOnIteam(false)}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Cards;
