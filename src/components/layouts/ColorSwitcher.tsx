import { ActionIcon, Stack, useMantineColorScheme } from '@mantine/core'
import React from 'react'
import { MoonStars, Sun } from 'tabler-icons-react';

const ColorSwitcher = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
  return (
    <Stack m={4}>
    <ActionIcon
    variant="outline"
    color={dark ? 'yellow' : 'blue'}
    onClick={() => toggleColorScheme()}
    title="Toggle color scheme"
  >
    {dark ? <Sun size={18} /> : <MoonStars size={18} />}
  </ActionIcon>
  </Stack>
  )
}

export default ColorSwitcher