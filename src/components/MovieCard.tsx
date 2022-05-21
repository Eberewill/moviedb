import React from 'react'
import { Eye, MessageCircle, Search } from 'tabler-icons-react';
import { Card, Box, Text, Group, Center, createStyles } from '@mantine/core';
import { Link } from 'react-router-dom';

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

interface ArticleCardVerticalProps {
    image: string;
    category: string;
    title: string;
    date: string;
    author: {
        name: string;
        avatar: string;
    };
}

function MovieCard({
    image,
    category,
    title,
    date,
    author,
}: ArticleCardVerticalProps) {

    const { classes, theme } = useStyles();

    const data = {
        image,
        category,
        title,
        date,
        author,
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
                    <div className={classes.image} style={{ backgroundImage: `url(${image})` }} />
                    <div className={classes.overlay} />

                    <div className={classes.content}>
                        <div>
                            <Text size="lg" className={classes.title} weight={500}>
                                {title}
                            </Text>

                            <Group position="apart" spacing="xs">
                                <Text size="sm" className={classes.author}>
                                    {author.name}
                                </Text>

                                <Group spacing="lg">
                                    <Center>
                                        <Eye size={16} color={theme.colors.dark[2]} />
                                        <Text size="sm" className={classes.bodyText}>
                                            {2}
                                        </Text>
                                    </Center>
                                    <Center>
                                        <MessageCircle size={16} color={theme.colors.dark[2]} />
                                        <Text size="sm" className={classes.bodyText}>
                                            {2}
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