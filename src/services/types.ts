export type HomePageData = {
  title: string
  homeBackground: {
    url: string
  }
  bannerText: string
  spoilerText: string
  homePhotos: [
    {
      url: string
    },
  ]
}

export type PortfolioData = {
  slug: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
  title: string
}
