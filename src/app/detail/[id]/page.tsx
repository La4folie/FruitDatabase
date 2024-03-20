import axios from "axios";
import { FavButton } from "components/FavButton";
import { IFruitDetail } from "models/IFruitDetail";
import { IImageRes } from "models/IImageRes";
import { ISearchRes } from "models/ISearchRes";
import Image from "next/image";

interface IProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const { data: fruitList } = await axios.get<ISearchRes[]>(
    "https://www.fruityvice.com/api/fruit/all",
  );
  return fruitList.map(({ id }) => ({
    id: id.toString(),
  }));
}

export default async function Detail({ params }: IProps) {
  const { data: product } = await axios.get<IFruitDetail>(
    `https://www.fruityvice.com/api/fruit/${params.id}`,
  );

  const { data: image } = await axios.get<IImageRes>(
    `https://api.pexels.com/v1/search?query=${product.name}`,
    {
      headers: {
        Authorization:
          "MhBcWRsStnrktuH3whIZCfMjVZbQAYBokFijOJDqgNJmHbxXrxgvEqCf",
      },
    },
  );

  return (
    <main className="h-screen text-white">
      <div className="h-full flex flex-col justify-center items-center">
        <div className="text-base font-bold tracking-custom-wide mt-10">
          {product.name}
        </div>
        <div className="text-4xl font-bold pl-4 tracking-custom-wide">
          DETAIL
        </div>
        <Image
          src={image.photos[0].src.original}
          width={193}
          height={193}
          alt="Image of orange"
          className="rounded-full m-6"
          style={{ width: "193px", height: "193px" }}
        />
        <div className="flex flex-col justify-center items-center w-[380px] bg-cus-black">
          <div className="m-3">NUTRITIONS</div>

          <div className="m-2">
            <span className="text-sm font-normal">Carbohydrates:</span>
            <span className="ml-1 text-sm font-bold">
              {product.nutritions.carbohydrates}
            </span>
          </div>
          <div className="m-2">
            <span className="text-sm font-normal">Calories:</span>
            <span className="ml-1 text-sm font-bold">
              {product.nutritions.calories}
            </span>
          </div>
          <div className="m-2">
            <span className="text-sm font-normal">Fat:</span>
            <span className="ml-1 text-sm font-bold">
              {product.nutritions.fat}
            </span>
          </div>
          <div className="m-2">
            <span className="text-sm font-normal">Sugar:</span>
            <span className="ml-1 text-sm font-bold">
              {product.nutritions.sugar}
            </span>
          </div>
          <div className="m-2">
            <span className="text-sm font-normal">Protein:</span>
            <span className="ml-1 text-sm font-bold">
              {product.nutritions.protein}
            </span>
          </div>
        </div>
        <div className="m-4">
          <FavButton product={product} />
        </div>
      </div>
    </main>
  );
}
