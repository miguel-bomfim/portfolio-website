import { HomePageData } from './types'

interface HomeProps {
  data: {
    homePage: HomePageData
  }
}

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
            homePhotos {
              url
            }
          }
        }
      `,
    }),
  })
  const homeData: HomeProps = await res.json()

  return homeData.data.homePage
}
