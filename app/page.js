import styles from "./page.module.css";
import { client } from "../libs/client";

export default async function Home() {
  const data = await client.get({
    endpoint: "news",
  });
  const news = data.contents;

  return (
    <div>
      {news.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </div>
  );
}
