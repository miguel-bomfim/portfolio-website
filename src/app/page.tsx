import { fetchHome } from "@/services/hygraphApi";
import Image from "next/image";

export default async function Home() {
  const homeData = await fetchHome();
  
  return (
    <div>
      <nav>
        <ul className="flex items-center justify-center gap-6 p-6">
          <li>Portfolio</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="font-sans text-4xl m-4">{homeData.title}</h1>
        <p>{homeData.bottomText}</p>
        <Image src={homeData.homeBackground.url} alt="" fill className="-z-10 opacity-70"/>
      </div>
    </div>
  );
}
