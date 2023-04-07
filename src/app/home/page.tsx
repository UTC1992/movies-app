'use client'
import { Grid } from '@mui/material';

import { useRouter } from 'next/navigation';

import { ContainerCardsStyle } from './styles';

import TitleBar from '../../components/TitleBar/TitleBar';
import TitleCard from '../../components/TitleCard/TitleCard';

export default function Home() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route)
  }

  return (
    <div>
      <TitleBar title="Popular Titles" />
      <ContainerCardsStyle>
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <TitleCard
              title='Series'
              description='Popular series'
              onClick={() => handleNavigate('/series')}
            />
          </Grid>
          <Grid item xs={6} md={2}>
            <TitleCard
              title='Movies'
              description='Popular Movies'
              onClick={() => handleNavigate('/movies')}
            />
          </Grid>
        </Grid>
      </ContainerCardsStyle>
    </div>
  )
}
