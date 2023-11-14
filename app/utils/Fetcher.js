
const Fetcher = async (url)=>{
    try {
        const res = await fetch("https://news-app-9uaj.onrender.com/api/articles?populate=*",{
            cache:"no-cache"
          })
          const data = await res.json()
          return data
    } catch (error) {
        return "there was an error"
    }
}