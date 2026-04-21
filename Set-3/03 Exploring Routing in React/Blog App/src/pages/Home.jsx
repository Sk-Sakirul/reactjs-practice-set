import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  // Filter logic (case-insensitive)
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>All Posts</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          display: "block",
          margin: "20px auto",
          padding: "10px",
          width: "300px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              cursor: "pointer",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 80)}...</p>

            {/* Navigate to details */}
            <Link to={`/post/${post.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
