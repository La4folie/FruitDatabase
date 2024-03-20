import { ISearchRes } from "models/ISearchRes";
import { FavButton } from "./FavButton";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface IProps {
  fruits: ISearchRes[];
  loadFavorites?: () => void;
  title: string;
  subtitle: string;
}

export const List = ({ fruits, loadFavorites, title, subtitle }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center mt-32 text-base font-bold tracking-custom-wide">
        {subtitle}
      </div>
      <div className="text-center text-4xl font-bold pl-4 tracking-custom-wide mt-2">
        {title}
      </div>
      <table className="w-full min-w-max text-center mt-20">
        <thead className="text-xs uppercase">
          <tr>
            <th scope="col" className="px-4 py-3 text-base">
              ID
            </th>
            <th scope="col" className="px-4 py-3 text-base">
              NAME
            </th>
            <th scope="col" className="px-4 py-3 text-base">
              GENUS
            </th>
            <th scope="col" className="px-4 py-3 text-base">
              ORDER
            </th>
            <th scope="col" className="px-4 py-3 text-base">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="w-full min-w-max">
          {fruits.map((product) => (
            <tr key={product.id} className="even:bg-cus-purple">
              <th className="p-4">{product.id}</th>
              <td className="p-4">{product.name}</td>
              <td className="p-4">{product.genus}</td>
              <td className="p-4">{product.order}</td>
              <td className="p-4">
                <div className="flex items-center justify-center">
                  <FavButton product={product} loadFavorites={loadFavorites} />
                  <Link href={`detail/${product.id}`}>
                    <FaArrowRight color="white" size={14} className="ml-4" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
