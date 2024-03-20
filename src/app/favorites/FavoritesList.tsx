"use client";

import { List } from "components/List";
import { LoadingOverlay } from "components/LoadingOverlay";
import { ISearchRes } from "models/ISearchRes";
import { useEffect, useState } from "react";

export const FavoritesList = () => {
  const [favorites, setFavorites] = useState<ISearchRes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadFavorites = () => {
    setFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  };

  useEffect(() => {
    loadFavorites();
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <LoadingOverlay />
  ) : (
    <List
      fruits={favorites}
      loadFavorites={loadFavorites}
      title="FAVORITES"
      subtitle="MY"
    />
  );
};
