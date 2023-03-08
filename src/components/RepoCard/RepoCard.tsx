import React, { useState } from "react";
import { IRepo } from "../../store/models/models";
import { useActions } from "../../hooks/action";
import { useAppSelector } from "../../hooks/redux";
import { ButtonAdd, ButtonRemove, Root } from "./RepoCard.styled";

export function RepoCard({ repo }: { repo: IRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favourites.includes(repo.html_url));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavourite(repo.html_url);
    setIsFav(true);
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavourite(repo.html_url);
    setIsFav(false);
  };

  return (
    <Root>
      <a href={repo.html_url} target="_blank">
        <h2 style={{ fontWeight: "bold" }}>{repo.full_name}</h2>
        <p style={{ fontSize: 14 }}>
          Forks:{" "}
          <span style={{ fontWeight: "bold", marginRight: 2 }}>
            {repo.forks}
          </span>
          Stars: <span style={{ fontWeight: "bold" }}>{repo.watchers}</span>
        </p>
        <p style={{ fontWeight: "bold" }}>{repo?.description}</p>

        {!isFav && <ButtonAdd onClick={addToFavourite}>Add</ButtonAdd>}

        {isFav && (
          <ButtonRemove onClick={removeFromFavourite}>Remove</ButtonRemove>
        )}
      </a>
    </Root>
  );
}
