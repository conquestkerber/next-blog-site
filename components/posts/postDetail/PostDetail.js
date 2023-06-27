import classes from "./postDetail.module.css";
import PostHeader from "./PostHeader";
import { post } from "../../../data";

const PostDetail = () => {
  const imagePath = `/images/posts/${post.path}/${post.image}`;
  return (
    <div className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {post.text}
    </div>
  );
};

export default PostDetail;
