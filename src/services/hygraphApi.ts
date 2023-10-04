import { HomeData } from './types'

export const fetchHome = async () => {
  const res = await fetch(`${process.env.HYGRAPH_API}`, {
      method: 'POST',  
      body: JSON.stringify({
          query: `
    query MyQuery {
      homePage(where: {id: "clmtyvdhc5a850blt4aubhmt6"}) {
        title
        homeBackground {
          url
        }
        bottomText
      }
    }
    `
      })
  });
  const homeData: HomeData = await res.json();

  return homeData.data.homePage;
}