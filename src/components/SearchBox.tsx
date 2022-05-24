import React, { useCallback, useEffect, useState } from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme, Group, Button, Box, Divider } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';
import Select from 'react-dropdown-select';
import { genreList } from '../utils';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { searchMedia } from '../state/features/media/mediaSlice';
import { searchInterface } from '../models';

export function SearchBox() {

  const dispatch = useAppDispatch()

  const [keyWord, setSearch] = useState('')
  const [searchType, setsearchType] = useState('')
  const { isLoading, page , isSearch} = useAppSelector((state) => state.media)


  const handleSearch = () => {
    console.log(keyWord, searchType)
    if (page && (keyWord && searchType)) {
    const searchObj: searchInterface = { keyWord, page, searchType }
      dispatch(searchMedia(searchObj))
    }
  }

  useEffect(() => {
    if (page && isSearch){
    const searchObj: searchInterface = { keyWord, page, searchType }
    dispatch(searchMedia(searchObj))
    }
  }, [page])
  

  
  return (
    <>
      <Group position="apart" grow>
        <TextInput
          icon={<Search size={18} />}
          radius="xl"
          my={10}
          size="md"
          value={keyWord}
          placeholder="Search Keyword"
          rightSectionWidth={42}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <Box>
          <Select
            //color='black'
            options={[{ label: 'Movies', value: 'movie' }, { label: 'Tv Series', value: 'tv' }]}
            loading={isLoading}
            disabled={isLoading}
            values={[]}
            placeholder='Sellect Type'
            onChange={(value) => setsearchType(value[0].value)}
          />
        </Box>
        <Button onClick={handleSearch} disabled={!keyWord || !searchType} fullWidth variant="outline" loading={isLoading}>
          Search
        </Button>
      </Group>
    </>
  );
}