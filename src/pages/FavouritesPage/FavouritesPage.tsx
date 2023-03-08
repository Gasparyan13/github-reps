import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { Root } from "../HomePage/HomePage.styled";

export function FavouritesPage() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0)
    return <p style={{ textAlign: "center" }}>No items.</p>;

  return (
    <Root>
      <ul style={{ listStyle: "none" }}>
        {favourites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </Root>
  );
}
