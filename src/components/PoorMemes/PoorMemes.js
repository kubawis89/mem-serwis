import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addUpvote,
  addDownvote,
  favoriteMem,
} from "../../store/actions/globalActions";

function PoorMemes() {
  const memDataFromState = useSelector((state) => state);
  const dispatch = useDispatch();

  const hotMemList = memDataFromState.memes
    .filter((mem) => mem.upvotes - mem.downvotes < 0)
    .map((filteredMem) => (
      <div key={filteredMem.id} className="memSection">
        <h2>{filteredMem.title}</h2>
        <img
          className="memImg"
          src={filteredMem.img}
          width="600"
          alt={filteredMem.title}
        ></img>
        <div className="assesment">
          <div className="vote">
            <section className="thumbs">
              <button
                className="button"
                style={{ margin: "0 7px 0 0" }}
                onClick={() => {
                  const thumbsUpId = filteredMem.id;
                  dispatch(addUpvote(thumbsUpId));
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/up.png"}
                  width="30"
                  alt="Upvotes"
                />
              </button>
              {filteredMem.upvotes}
            </section>
            <section className="thumbs">
              <button
                className="button"
                style={{ margin: "0 7px 0 0" }}
                onClick={() => {
                  const thumbsDownId = filteredMem.id;
                  dispatch(addDownvote(thumbsDownId));
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/images/down.png"}
                  width="30"
                  alt="Downvotes"
                />
              </button>
              {filteredMem.downvotes}
            </section>
          </div>
          <div className="voteResult">
            <span
              className={`${
                filteredMem.upvotes - filteredMem.downvotes > 4
                  ? "hot"
                  : "span1"
              }`}
            >
              <NavLink to="/hot" className="navLink">
                Hot
              </NavLink>
            </span>
            <span
              className={`${
                filteredMem.upvotes - filteredMem.downvotes < 5 &&
                filteredMem.upvotes - filteredMem.downvotes > -1
                  ? "regular"
                  : "span2"
              }`}
            >
              <NavLink to="/regular" className="navLink">
                Regular
              </NavLink>
            </span>
            <span
              className={`${
                filteredMem.upvotes - filteredMem.downvotes < 0
                  ? "poor"
                  : "span3"
              }`}
            >
              <NavLink to="/poor" className="navLink">
                Poor
              </NavLink>
            </span>
          </div>
          <div className="favorite">
            <button
              className="button"
              onClick={() => {
                const favoriteMemId = filteredMem.id;
                dispatch(favoriteMem(favoriteMemId));
              }}
            >
              <img
                src={`${
                  filteredMem.favorite
                    ? process.env.PUBLIC_URL + "/images/addedToFavorite.png"
                    : process.env.PUBLIC_URL + "/images/addToFavorite.png"
                }`}
                width="30"
                alt={`${
                  filteredMem.favorite
                    ? "Remove from favorite"
                    : "Add to favorite"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <main>
      <div className="under320px">Go get some bigger screen!</div>
      <div>{hotMemList}</div>
    </main>
  );
}

export default PoorMemes;
