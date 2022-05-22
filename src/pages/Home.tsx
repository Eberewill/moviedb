import { Center, Grid, Container } from '@mantine/core'
import React, { useEffect, useState } from 'react'
import DefaultPagination from '../components/layouts/DefaultPagination'
import MovieCard from '../components/MovieCard'
import { SearchBox } from '../components/SearchBox'
import { fetchTrendingMedia, setPage } from '../state/features/media/mediaSlice'
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { movies } from './data'

const Home = () => {
  const dispatch = useAppDispatch()
  const { page, total_pages , mediaItems} = useAppSelector((state) => state.media);
 

  useEffect(() => {
    if (page) {
      dispatch(fetchTrendingMedia(page))
    }
  }, [dispatch, page])
  return (
    <>
      <Container>
        <SearchBox />
        <Grid>
          {mediaItems&& mediaItems.map((_, index) => (
            <Grid.Col md={3} lg={4} sm={2} xs={1} xl={4} >
              <MovieCard key={index} {..._} />
            </Grid.Col>
          ))}
        </Grid>
        <Center py={40}>
          <DefaultPagination activePage={page} setPage={(page)=> {
            dispatch(setPage(page))
          }} total={ total_pages ? total_pages : 10} />
        </Center>
      </Container>

    </>
  )
}

export default Home