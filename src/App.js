import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { PostDatas } from "./redux/action/action";

function App() {
  const [term, setterm] = useState([]);
  const { posts, isLoading, error } = useSelector((state) => state);
  console.log(posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostDatas());
  }, []);

  // const filterPost = posts.filter((filt) =>
  //   filt.title.toLowerCase().includes(setterm.toLowerCase())
  // );

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const filterPost = posts.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setterm(filterPost);
  };

  return (
    <div className="App">
      <div>
        <input
          style={{ height: "2rem", width: "12rem" }}
          type="text"
          value={term}
          onChange={handleFilter}
          placeholder="search here"
        />
        <button className="btn">Search</button>
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {posts.map((item, i) => (
            <div className="box_wrapper">
              <h1 key={i}>{item.title}</h1>
              <p className="text-body">{item.body}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default App;
