import { fetchHome } from "@/services/hygraphApi";

export default async function Home() {
  const homeData = await fetchHome();
  
  return (
    <div>
      <nav>
        <ul>
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </nav>
      <h1 className="font-sans text-4xl m-4 ">{homeData.title}</h1>
      <p>{homeData.bottomText}</p>
    </div>
  );
}
