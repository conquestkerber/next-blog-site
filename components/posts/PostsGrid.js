import classes from "../posts/postsGrid.module.css";
import PostItem from "./PostItem";

const PostsGrid = (props) => {
  const { posts } = props;
  console.log(posts);
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.path} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
