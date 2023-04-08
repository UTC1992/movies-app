'use client'
import { Tooltip, Typography } from '@mui/material';

import { useState } from 'react';

import { ContainerCardStyle, ImageStyle } from './styles';

import TitleCard from '../TitleCard/TitleCard';

interface ICardSeriesAndMoviesProps {
  title: string
  imageUrl: string
  description: string
  releaseYear: number
}

const CardSeriesAndMovies: React.FC<ICardSeriesAndMoviesProps> = ({ title, imageUrl }) => {
  const [defaultImageLoaded, setDefaultImageLoaded] = useState(false);

  const handleDefaultImageError = (e: any) => {
    e.target.onerror = null; // Prevent infinite loop
    setDefaultImageLoaded(true);

  }
  return (
    <ContainerCardStyle>
      {!defaultImageLoaded && <ImageStyle
        src={imageUrl}
        alt={`${title}`}
        width={150}
        height={200}
        onError={handleDefaultImageError}
      />}
      {defaultImageLoaded && <TitleCard />}
      <Tooltip title={title}>
        <Typography sx={{ textOverflow: 'ellipsis', width: 150, overflow: 'hidden', whiteSpace: 'nowrap' }}>
          {title}
        </Typography>
      </Tooltip>
    </ContainerCardStyle>
  )
}

export default CardSeriesAndMovies