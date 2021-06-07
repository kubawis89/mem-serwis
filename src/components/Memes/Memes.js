import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addUpvote,
  addDownvote,
  favoriteMem,
} from "../../store/actions/globalActions";
import "./Memes.scss";

function Memes() {
  const memDataFromState = useSelector((state) => state);
  const dispatch = useDispatch();

  const memList = memDataFromState.memes.map((mem) => (
    <div key={mem.id} className="memSection">
      <h2>{mem.title}</h2>
      <img className="memImg" src={mem.img} width="600" alt={mem.title}></img>
      <div className="assesment">
        <div className="vote">
          <section className="thumbs">
            <button
              className="button"
              style={{ margin: "0 7px 0 0" }}
              onClick={() => {
                const thumbsUpId = mem.id;
                dispatch(addUpvote(thumbsUpId));
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/up.png"}
                width="30"
                alt="Upvotes"
              />
            </button>
            {mem.upvotes}
          </section>
          <section className="thumbs">
            <button
              className="button"
              style={{ margin: "0 7px 0 0" }}
              onClick={() => {
                const thumbsDownId = mem.id;
                dispatch(addDownvote(thumbsDownId));
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/down.png"}
                width="30"
                alt="Downvotes"
              />
            </button>
            {mem.downvotes}
          </section>
        </div>
        <div className="voteResult">
          <span
            className={`${mem.upvotes - mem.downvotes > 4 ? "hot" : "span1"}`}
          >
            <NavLink to="/hot" className="navLink">
              Hot
            </NavLink>
          </span>
          <span
            className={`${
              mem.upvotes - mem.downvotes < 5 &&
              mem.upvotes - mem.downvotes > -1
                ? "regular"
                : "span2"
            }`}
          >
            <NavLink to="/regular" className="navLink">
              Regular
            </NavLink>
          </span>
          <span
            className={`${mem.upvotes - mem.downvotes < 0 ? "poor" : "span3"}`}
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
              const favoriteMemId = mem.id;
              dispatch(favoriteMem(favoriteMemId));
              console.log(window.pageYOffset);
            }}
          >
            <img
              src={`${
                mem.favorite
                  ? process.env.PUBLIC_URL + "/images/addedToFavorite.png"
                  : process.env.PUBLIC_URL + "/images/addToFavorite.png"
              }`}
              width="30"
              alt={`${
                mem.favorite ? "Remove from favorite" : "Add to favorite"
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
      <div>{memList}</div>
    </main>
  );
}

export default Memes;
