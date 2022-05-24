import { Badge, BadgeVariant } from '@mantine/core';
import React from 'react'
import { genreList } from '../utils';

const GenreBadge = ({ id ,variant }: { id: number, variant : BadgeVariant  }) => {


    const currentGenre = genreList.find(_ => _.id == id);

    return (
        <>
            <Badge mx={3} variant={variant} gradient={{ from: 'indigo', to: 'cyan' }}>{currentGenre?.name}</Badge>

            {  /* 
            <Badge variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Badge>
            <Badge variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Badge>
            <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Badge>
            <Badge variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Badge>
            */
            }
        </>
    )
}

export default GenreBadge