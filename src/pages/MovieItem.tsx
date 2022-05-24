import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Container,
  Group,
  SimpleGrid,
  createStyles,
  Header,
  Box,
  Badge,
  Stack,
  Divider
} from '@mantine/core';
import React, { useEffect } from 'react'
import { useLocation, Link } from "react-router-dom";
import { Line, ArrowLeft, Star, StarHalf, ThumbUp, CalendarTime, Video, Settings } from 'tabler-icons-react';
import GenreBadge from '../components/GenreBadge';
import { MediaItem } from '../models';
import { img_500 } from '../utils';
type stateObject = {
  data: MediaItem
}

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
        }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    posterImg: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg - 2,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: '1px solid transparent',
      padding: theme.spacing.xl,
      flex: '0 0 280px',

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
    heading: {
      fontSize: "48px",
      fontFamily: "Clash Display",
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "48px",
      color: theme.colors.textDefault,
      marginBottom: "1rem",

    },
  };
});

const MovieItem = () => {
  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [])
  
  const { data: {
    poster_path,
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
    vote_average } } = location.state as stateObject;
  const { classes } = useStyles();
  return (

    <Container>
      <Link style={{ textDecoration: 'none' }} to='/'>
        <Group>
          <ArrowLeft color='cyan' />
        </Group>
      </Link>

      <Paper mt={3} shadow="lg" radius="lg">
        <div className={classes.wrapper}>
          <div style={{
            backgroundImage: `url(${img_500 + poster_path})`,
          }} className={classes.posterImg}>

          </div>

          <Box className={classes.form} >
            {genre_ids && genre_ids.map((_) => (
              <GenreBadge id={_} key={_} variant={'gradient'} />
            ))}
            <Text
              mt={5}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
              size="xl"
              weight={700} className={classes.heading}>
              {title}
            </Text>
            
            <Text>{overview}</Text>
            <Stack  align={'flex-end'}>
              <Text>{original_language}</Text>
            </Stack>
            <div className={classes.fields}>
             



              <Divider my="sm" />
              <Group position="apart" mt="lg">
                <Stack spacing="xs">
                  <Text color='cyan'>Vote Count</Text>
             <Group><Text>{vote_count}</Text> <ThumbUp/></Group>     
                </Stack>

                <Stack spacing="xs">
                  <Text color='cyan'>Vote Average</Text>
                 <Group><Text>{vote_average}</Text> <StarHalf/></Group> 
                </Stack>

                <Stack spacing="xs">
                  <Text color='cyan'>Popularity</Text>
               <Group> <Text>{popularity}</Text> <Star/></Group>  
                </Stack>
              </Group>

              <Divider my="sm" />

              <Group position="apart" mt="lg">
                <Stack spacing="xs">
                  <Text gradient={{ from: 'indigo', to: 'cyan' }} color='cyan'>Release Date</Text>
             <Group><Text>{release_date}</Text> <CalendarTime/></Group>     
                </Stack>

                <Stack spacing="xs" align={'flex-start'}>
                  <Text gradient={{ from: 'indigo', to: 'cyan' }} color='cyan'>Video</Text>
                 <Group><Text>{video ? 'Yes' : "No"}</Text> <Video /></Group> 
                </Stack>

                <Stack spacing="xs">
                  <Text gradient={{ from: 'indigo', to: 'cyan' }} color='cyan'>Adult content</Text>
               <Group> <Text>{adult ? "Included" : "Not included"}</Text> <Settings/></Group>  
                </Stack>
              </Group>
            </div>
          </Box>
        </div>
      </Paper>

    </Container>
  )
}

export default MovieItem