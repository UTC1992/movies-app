import { CardContent, Typography } from '@mui/material'

import { CardTitleStyle, ContainerCardStyle, TextStyle } from './styles'

interface ITitleCardProps {
  title: string
  description: string
  onClick: () => void
}

const TitleCard: React.FC<ITitleCardProps> = ({ title, description, onClick }) => {
  return (
    <ContainerCardStyle onClick={onClick}>
      <CardTitleStyle>
        <CardContent>
          <TextStyle>
            {title}
          </TextStyle>
        </CardContent>
      </CardTitleStyle>
      <Typography>
        {description}
      </Typography>
    </ContainerCardStyle>
  )
}

export default TitleCard