import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Post from "./components/Post";
import { PostDatas } from "./redux/action/action";

function App() {
  const [term, setterm] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const { posts, isLoading, error } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PostDatas(setterm));
  }, []);

  const handleFilter = (e) => {
    const filterPost = posts.filter((value) => {
      return value.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setterm(filterPost);
  };

  return (
    <div className="App">
      <div>
        <input
          style={{ height: "2rem", width: "12rem" }}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search here"
        />
        <button className="btn" onClick={handleFilter}>
          Search
        </button>
      </div>

      {isLoading ? (
        "Loading..."
      ) : (
        <>
          {term.map((item, i) => (
            <Post item={item} key={i} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
