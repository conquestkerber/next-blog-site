import classes from "../posts/postItem.module.css";
import Link from "next/link";
import Image from "next/image";

const PostItem = (props) => {
  const { title, image, text, date, path } = props.post;
  const dateFormat = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${path}/${image}`;
  const linkHref = `/posts/${path}`;
  return (
    <li className={classes.post}>
      <Link href={linkHref} legacyBehavior>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{dateFormat}</time>
            <p>{text}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
