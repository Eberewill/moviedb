import React from 'react';
import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { BrandTwitter, BrandYoutube, BrandInstagram , BrandLinkedin} from 'tabler-icons-react';


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
     
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
          <a target={'_blank'} href='https://twitter.com/eberewill' rel="noreferrer"><BrandTwitter size={18} /></a>  
          </ActionIcon>
          <ActionIcon size="lg">
          <a target={'_blank'} href='https://www.linkedin.com/in/williams-eberechi-iroh/' rel="noreferrer"><BrandLinkedin size={18} /></a>  
          </ActionIcon>
          <ActionIcon   size="lg">
          <a target={'_blank'} href='https://www.instagram.com/willexchukwu/' rel="noreferrer"><BrandInstagram   size={18} /></a>  
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}