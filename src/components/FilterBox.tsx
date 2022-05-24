import { ActionIcon, Badge } from '@mantine/core';
import React from 'react'
import { X } from 'tabler-icons-react';
import { addFilter, removeFilter } from '../state/features/media/mediaSlice';
import { useAppDispatch, useAppSelector } from '../state/hooks'
import { findGenre } from '../utils'


const FilterBox = () => {
    
    const disPatch = useAppDispatch()
    const {  filterGenre , genreListItems} = useAppSelector((state) => state.media);
  
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
      
      { genreListItems.map((_)=>(
           <Badge style={{cursor: 'pointer'}} key={`${_.id}key${Math.random}`} onClick={(()=> disPatch(addFilter(_.id))) } size='xs'  variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>{  findGenre(_.id)}</Badge>

      ))
      }
    </>
  )
}

export default FilterBox