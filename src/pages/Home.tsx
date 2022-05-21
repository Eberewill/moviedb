import { Center, Grid, Container } from '@mantine/core'
import React from 'react'
import DefaultPagination from '../components/layouts/DefaultPagination'
import MovieCard from '../components/MovieCard'
import { SearchBox } from '../components/SearchBox'
import { movies } from './data'

const Home = () => {
  return (
  <>

<Container>
  <SearchBox />
  <Grid>
    {movies.map((_, index) => (
      <Grid.Col md={3} lg={4} sm={2} xs={1} xl={4} >
        <MovieCard key={index} {..._} />
      </Grid.Col>
    ))}
  </Grid>
  <Center py={40}>

    <DefaultPagination />
  </Center>
</Container>
  
  </>
  )
}

export default Home