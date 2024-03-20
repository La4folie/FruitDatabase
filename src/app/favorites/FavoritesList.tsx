"use client";

import { List } from "components/List";
import { ISearchRes } from "models/ISearchRes";
import { useEffect, useState } from "react";

export const FavoritesList = () => {
  const [favorites, setFavorites] = useState<ISearchRes[]>([]);

  const loadFavorites = () => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <List
      fruits={favorites}
      loadFavorites={loadFavorites}
      title="FAVORITES"
      subtitle="MY"
    />
  );
};
