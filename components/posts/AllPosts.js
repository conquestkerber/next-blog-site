import classes from "../posts/allposts.module.css";
import PostsGrid from "./PostsGrid";

const AllPosts = (props) => {
  console.log(props);
  return (
    <div className={classes.posts}>
      <h1>AllPosts</h1>
      <PostsGrid posts={props.posts} />
    </div>
  );
};

export default AllPosts;
