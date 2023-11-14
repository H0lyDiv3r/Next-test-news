import React from 'react'
import { Box, SimpleGrid } from "@chakra-ui/react";
import Link from 'next/link';
import Container from '../components/common/Container';
import SpecificCard from '../components/cards/SpecificCard';
import Pagination from '../components/buttons/Pagination';

const page = async ({searchParams}) => {
    const res = await fetch(`https://news-app-9uaj.onrender.com/api/articles?populate=*&filters[category][$eqi]=Business&${searchParams.page ? `pagination[page] = ${searchParams.page}`: `1`}&pagination[pageSize]=2`)
    const data = await res.json()
    return (
        <Container>
            <SimpleGrid minChildWidth={"300px"} display={"flex"} spacing={10}>
            {data &&
                <>
                    {data.data.map(news=>
                        <Link key={news.id} href={`/business/${news.id}`}>
                            <SpecificCard  id={news.id} attributes={news.attributes}/>
                        </Link>
                    )}
                </>
            }
            </SimpleGrid>
            <Pagination page={1} length={data.meta.pagination.pageCount} />
        </Container>
    )
}

export default page