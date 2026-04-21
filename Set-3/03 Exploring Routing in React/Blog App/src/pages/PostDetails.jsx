import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <p>
        <strong>Views:</strong> {post.views}
      </p>
      <p>
        <strong>Likes:</strong> {post.reactions.likes}
      </p>

      {/* 🏷 Tags */}
      <p>
        <strong>Tags:</strong> {post.tags.join(", ")}
      </p>
    </div>
  );
};

export default PostDetails;
