export default function Post({ post }) {
  return (
    <a>
      <span>{post.id}</span>
      {" : "}
      <a href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </a>
    </a>
  );
}