"use client";

import { ISearchRes } from "models/ISearchRes";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

interface IProps {
  product: ISearchRes;
  loadFavorites?: () => void;
}

export const FavButton = ({ product, loadFavorites }: IProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some((fav: ISearchRes) => fav.id === product.id));
    setIsLoading(false);
  }, [product.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const index = favorites.findIndex(
      (fav: ISearchRes) => fav.id === product.id,
    );
    if (index === -1) {
      favorites.push(product);
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);

    loadFavorites && loadFavorites();
  };

  return isLoading ? (
    <div>
      <Loading size={16} />
    </div>
  ) : (
    <button onClick={toggleFavorite}>
      {isFavorite ? (
        <FaHeart size="16px" color="#6B48F7" />
      ) : (
        <div className="block text-white text-base font-extrabold">
          <CiHeart color="white" size={20} />
        </div>
      )}
    </button>
  );
};
