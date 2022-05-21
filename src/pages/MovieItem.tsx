import { Container, Group , Text} from '@mantine/core';
import React from 'react'
import { useLocation, Link } from "react-router-dom";
import { Line, ArrowLeft } from 'tabler-icons-react';
type stateObject = {
    data: {
        title: string
    }
}

const MovieItem = () => {
    const location = useLocation();
    const {data: {title} } = location.state as stateObject;
    
  return (
      
<Container>
   
        <Link style={{ textDecoration: 'none' }} to='/'>
        <Group>
        <ArrowLeft color='cyan'/> 
        
        </Group>
    </Link>
   
    
    <div>{title}</div>
    </Container>
  )
}

export default MovieItem