import React, { useContext } from "react";
import { PostContext } from "../../App";

export default function PostComponent() {
  const { posts } = useContext(PostContext);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
