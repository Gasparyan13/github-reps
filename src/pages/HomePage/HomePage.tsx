import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/debounce";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../../store/github/github.api";
import { RepoCard } from "../../components/RepoCard/RepoCard";
import { Input, Item, Option, Root } from "./HomePage.styled";
import Pagination from "../../components/Pagination/Pagination";

export function HomePage() {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 1,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropdown(debounced.length > 1 && data?.length! > 0);
  }, [debounced, data]);

  const clickHandler = (username: string) => {
    fetchRepos(username);
    setDropdown(false);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = repos?.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts);

  return (
    <Root>
      {isError && (
        <p style={{ textAlign: "center" }}>Something went wrong...</p>
      )}
      <div style={{ width: 560, position: "relative" }}>
        <Input
          type="text"
          placeholder="Search for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {dropdown && (
          <Option>
            {isLoading && <p style={{ textAlign: "center" }}>Loading...</p>}
            {data?.map((user) => (
              <Item key={user.id} onClick={() => clickHandler(user.login)}>
                {user.login}
              </Item>
            ))}
          </Option>
        )}
        <div style={{ width: "100%" }}>
          {areReposLoading && (
            <p style={{ textAlign: "center" }}>Repos are loading...</p>
          )}
          {currentPosts?.map((repo) => (
            <RepoCard repo={repo} key={repo.id} />
          ))}
          <Pagination
            totalPosts={repos?.length as number}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </Root>
  );
}
