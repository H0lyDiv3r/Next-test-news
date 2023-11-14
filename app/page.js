
import { Box, SimpleGrid } from "@chakra-ui/react";
import DefaultCard from "./components/cards/DefaultCard";
import Link from "next/link";
import { categories } from "./utils/data";
import Pagination from "./components/buttons/Pagination";
import LatestCard from "./components/cards/LatestCard";
import MostRecent from "./components/mostRecent/MostRecent";




export default async function Home({searchParams}) {

  const res = await fetch(`https://news-app-9uaj.onrender.com/api/articles?populate=*&${searchParams.page ? `pagination[page] = ${searchParams.page}`: `1`}&pagination[pageSize]=5`)
  const data = await res.json()
  return (
    <main>
      
        <MostRecent data={data}/>
        <SimpleGrid minChildWidth={"300px"} spacing={10}>
          {data.data.map(news=>
            <Link key={news.id} href={`/${categories[news.attributes.category]}/${news.id}`}>
              <DefaultCard  id={news.id} attributes={news.attributes}/>
            </Link>
          )}
        </SimpleGrid>
        <Pagination page={1} length={data.meta.pagination.pageCount} />
        
    </main>
  )
}
