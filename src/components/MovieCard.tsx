import React from 'react'
import { Eye, MessageCircle, Search , ThumbUp , StarHalf, Star} from 'tabler-icons-react';
import { Card, Box, Text, Group, Center, createStyles, Skeleton } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../state/hooks';
import { MediaItem } from '../models';
import { img_300, img_500 } from '../utils';

const useStyles = createStyles((theme, _params, getRef) => {
    const image = getRef('image');

    return {
        card: {
            position: 'relative',
            height: 380,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

            [`&:hover .${image}`]: {
                transform: 'scale(1.03)',
            },
        },
        cardBox1: {
            borderRadius: '6px',
            // height: 380,
            backgroundColor: theme.colorScheme === 'dark' ? '#64C6B6' : '#032541',

            [`&:hover `]: {
                // transform: 'scale(1.03)',
            },
        },

        image: {
            ref: image,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: 'cover',
            transition: 'transform 500ms ease',
        },

        overlay: {
            position: 'absolute',
            top: '20%',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
        },

        content: {
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            zIndex: 1,
        },

        title: {
            color: theme.white,
            marginBottom: 5,
        },

        bodyText: {
            color: theme.colors.dark[2],
            marginLeft: 7,
        },

        author: {
            color: theme.colors.dark[2],
        },
    };
});


function MovieCard({
    poster_path ,
    adult,
    overview,
    release_date,
    genre_ids,
    id,
    original_title,
    original_language,
    title,
    backdrop_path,
    popularity,
    vote_count,
    video,
    vote_average,
    
}: MediaItem) {

    const { classes, theme } = useStyles();
    
  const { isLoading} = useAppSelector((state) => state.media);

    const data = {
       
    }

    return (
        <Box className={classes.cardBox1} p={4}>
            <Link style={{ textDecoration: 'none' }}
                to={ `/movie`}  state={{ data: data }}>
                    
                <Card
                    p="lg"
                    shadow="lg"
                    className={classes.card}
                    radius="md"

                >
                    <Skeleton  visible={isLoading}> </Skeleton>
                    <div className={classes.image} style={{ backgroundImage: `url(${img_500 +poster_path})` }} />
                    <div className={classes.overlay} />

                    <div className={classes.content}>
                        <div>
                            <Text size="lg" className={classes.title} weight={500}>
                                {title}
                            </Text>
                            
                            <Text size="xs" className={classes.title} weight={500}>
                                {original_title}
                            </Text>

                            <Group position="apart" spacing="xs">
                                <Text size="sm" className={classes.author}>
                                    {release_date}
                                </Text>

                                <Group spacing="lg">
                                <Center>
                                        <Star size={16} color={theme.colors.dark[2]} />
                                        <Text size="sm" className={classes.bodyText}>
                                            {popularity}
                                        </Text>
                                    </Center>
                                    <Center>
                                        <StarHalf size={16} color={theme.colors.dark[2]} />
                                        <Text size="sm" className={classes.bodyText}>
                                            {vote_average}
                                        </Text>
                                    </Center>
                                    <Center>
                                        <ThumbUp size={16} color={theme.colors.dark[2]} />
                                        <Text size="sm" className={classes.bodyText}>
                                            {vote_count}
                                        </Text>
                                    </Center>
                                </Group>
                            </Group>
                        </div>
                    </div>
                   
                </Card>
            </Link>
        </Box>
    )
}

export default MovieCard