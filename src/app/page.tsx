import { fetchHome } from "@/services/hygraphApi";
type HomeData = {};

export default async function Home() {
  const data = await fetchHome();

  console.log(data);
  return (
    <main>
      <nav>
        <ul>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </nav>
      <h1 className="font-sans text-4xl m-4">{data.title}</h1>
    </main>
  );
}
