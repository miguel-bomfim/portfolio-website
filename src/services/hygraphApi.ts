import { HomePageData, PortfolioData } from './types'

interface HomeProps {
  data: {
    homePage: HomePageData
  }
}

interface PortfolioProps {
  data: {
    photographs: PortfolioData[]
  }
}

export const fetchHome = async () => {
  const res = await fetch(`${process.env.HYGRAPH_API}`, {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query Home {
          homePage(where: {id: "clmtyvdhc5a850blt4aubhmt6"}) {
            title
            homeBackground {
              url
            }
            bannerText
            spoilerText
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

export const fetchPorfolio = async () => {
  const res = await fetch(`${process.env.HYGRAPH_API}`, {
    method: 'POST',
    body: JSON.stringify({
      query: `
        query Portfolio {
          photographs {
            slug
            thumbnail {
              url
              width
              height
            }
            title
            
          }
        }
        
      `,
    }),
  })
  const portfolioData: PortfolioProps = await res.json()

  return portfolioData.data.photographs
}
