import { ActionIcon, Badge } from '@mantine/core';
import React from 'react'
import { X } from 'tabler-icons-react';
import { addFilter, removeFilter } from '../state/features/media/mediaSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { findGenre, genreList } from '../utils'


const FilterBox = () => {
    
    const disPatch = useAppDispatch()
    const { page, filterGenre ,isSearch, genreListItems, pageGenre} = useAppSelector((state) => state.media);
  
    const removeButton = (id: number) => (
        <ActionIcon onClick={()=>disPatch(removeFilter(id)) }  size="xs" color="blue" radius="xl" variant="transparent">
          <X size={10} />
        </ActionIcon>
      );

   

  return (
    <>
    
    {
        filterGenre.map((_)=>(
        <Badge key={`${_}key${Math.random}`} variant="outline" sx={{ paddingLeft: 3 }} leftSection={removeButton(_)}>
        {findGenre(_)}
      </Badge>
      ))
    }
      
      { pageGenre.map((_)=>(
           <Badge style={{cursor: 'pointer'}} key={`${_}key${Math.random}`} onClick={(()=> disPatch(addFilter(_))) } size='xs'  variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>     {findGenre(_)}</Badge>

      ))
      }
    </>
  )
}

export default FilterBox