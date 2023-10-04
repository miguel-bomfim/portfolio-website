export const fetchHome = async () => {
  const res = await fetch('api-url-here', {
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
  const data = await res.json();
  
  return data;
}