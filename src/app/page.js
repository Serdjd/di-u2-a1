import Image from "next/image";
import styles from "./page.module.css";
import Gallery from './Gallery.js';
import Profile from "./profile";
import Bio from "./Bio";
import TodoList from "./TodoList";
import TodoList2 from "./TodoList2"

export default function Home() {
  return (
    <div>
      <Gallery />
      <Profile />
      <Bio />
      <TodoList />
      <TodoList2 />
    </div>
  );
}
