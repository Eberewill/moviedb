import { Button, Group, Modal, Text } from '@mantine/core'
import React, { useState } from 'react'
import Select from 'react-dropdown-select'
import { genreList } from '../../utils'

const FilterModal = () => {
    const [genreId, setGnreId] = useState<number>()
    const [opened, setOpened] = useState(false);
    const dataItems = genreList.map((item) => ({
      label: item.name,
      value: item.id
    }))
  return (
    <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      > <Group>
      <Text> Filter By Genre</Text>
       <Select
        //color='black'
         options={dataItems}
        // loading={isLoading}
        // disabled={isLoading}
         values={[]}
         placeholder='Sellect Genre'
         onChange={(value) => setGnreId(value[0].value)}
       />
      </Group>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
   
    </>
  )
}

export default FilterModal

