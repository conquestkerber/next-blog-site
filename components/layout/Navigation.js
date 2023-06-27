import Link from "next/link";
import classes from "../layout/navigation.module.css";

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">Home</Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/">Aboute me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
