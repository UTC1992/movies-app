'use client'

import { Box, Grid } from '@mui/material';

import TitleBar from 'movies-app/src/components/TitleBar/TitleBar';

import CardSeriesAndMovies from '../../components/CardSeriesAndMovies/CardSeriesAndMovies';
import data from '../../data/sample.json'
import { ContainerCardsStyle } from '../home/styles';

const SeriesPage = () => {

  const series = data.entries.filter(s => s.programType == 'series' && s.releaseYear >= 2010)
  console.log(series);
  return (
    <Box>
      <TitleBar title="Popular Series" />
      <ContainerCardsStyle>
        <Grid container spacing={2} justifyContent="space-evenly" flexWrap="wrap" rowGap={2}>
          {
            series.map((item) => (
              <Grid item key={`key-series-${item.title}`} sx={{ m: 1 }}>
                <CardSeriesAndMovies
                  title={item.title}
                  description={item.description}
                  imageUrl={item.images['Poster Art'].url}
                  releaseYear={item.releaseYear}
                />
              </Grid>
            ))
          }
        </Grid>
      </ContainerCardsStyle>

    </Box>
  )
}

export default SeriesPage