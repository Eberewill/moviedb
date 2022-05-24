import { Center, Grid, Container, Box, Divider, Group } from '@mantine/core'
import React, { useEffect, useState } from 'react'

import { Eye } from 'tabler-icons-react';
import FilterBox from '../components/FilterBox'
import DefaultPagination from '../components/layouts/DefaultPagination'
import MovieCard from '../components/MovieCard'
import { SearchBox } from '../components/SearchBox'
import {  fetchTrendingMedia, setGenres, setPage } from '../state/features/media/mediaSlice'
import { useAppDispatch, useAppSelector } from '../state/hooks'


const Home = () => {
  const dispatch = useAppDispatch()
  const { page, total_pages, isSearch,  isLoading, mediaItems } = useAppSelector((state) => state.media);

  const [showTags, setShowTags] = useState(false)
  useEffect(() => {
    window.scroll(0, 0);
    if (page && !isSearch) {
      dispatch(fetchTrendingMedia(page))
    }
  }, [dispatch, page, isSearch])

  useEffect(() => {
   dispatch(setGenres())
  }, [dispatch])
  



  return (
    <>


      <Container>
        {!isLoading && showTags && <FilterBox />}

        <Group style={{ color: 'grey' }}> <Eye style={{ cursor: 'pointer' }} onClick={() => setShowTags(!showTags)} />{showTags ? 'Hide Genre' : "Show Genre"}</Group>



        <SearchBox />


        <Divider my="lg" label={isSearch ? `Showing search Results. showing page ${page} of ${total_pages} ` : `Trending Movies & Series showing page ${page} of ${total_pages} `} labelPosition="center" />
        <Grid>
          {mediaItems && mediaItems.map((_, index) => (
            <Grid.Col key={index} md={3} lg={4} sm={2} xs={1} xl={4} >
              <MovieCard  {..._} />
            </Grid.Col>
          ))}
        </Grid>
        <Center py={40}>
          <DefaultPagination activePage={page} setPage={(page) => {
            dispatch(setPage(page));
          }} total={total_pages ? total_pages : 10} />
        </Center>
      </Container>

    </>
  )
}

export default Home