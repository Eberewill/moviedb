import React from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';

export function SearchBox() {
  const theme = useMantineTheme();
  return (
    <TextInput
      icon={<Search size={18} />}
      radius="xl"
      my={10}
      size="md"
      rightSection={
        <ActionIcon  color="cyan"  size={32} radius="xl"  variant="filled">
          {theme.dir === 'ltr' ? <ArrowRight size={18}  /> : <ArrowLeft  size={18} />}
        </ActionIcon>
      }
      placeholder="Search Movies"
      rightSectionWidth={42}
    />
  );
}