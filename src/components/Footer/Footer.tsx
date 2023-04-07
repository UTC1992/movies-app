import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { ContainerSocialIconsStyle, DividerStyle, LinkStyle, MenuItemStyle, MenuListStyle, RowStyle, ToolbarStyle } from './styles';

import { menuItems } from '../../constants/menu-bottom';

const Footer = () => {
  const menu = menuItems.map((menuItem, index) => (
    <MenuItemStyle key={`menu-item-${menuItem.value}`}>
      <LinkStyle href={menuItem.path}>
        {menuItem.value}
      </LinkStyle>
      {(index < menuItems.length - 1) &&
        <DividerStyle
          orientation='vertical'
          variant="middle"
          flexItem />
      }
    </MenuItemStyle>
  ))

  return (
    <ToolbarStyle>
      <Box>
        <MenuListStyle>
          {menu}
        </MenuListStyle>
        <Typography>
          Copyright © DEMO Streaming All Right Reserved
        </Typography>
      </Box>
      <RowStyle>
        <ContainerSocialIconsStyle>
          <Image
            src="/social/facebook-white.svg"
            alt='Logo facebook'
            height={30}
            width={30}
          />
          <Image
            src="/social/twitter-white.svg"
            alt='Logo facebook'
            height={30}
            width={30}
          />
          <Image
            src="/social/instagram-white.svg"
            alt='Logo facebook'
            height={30}
            width={30}
          />
        </ContainerSocialIconsStyle>
        <Box>

          <Image
            src="/store/app-store.svg"
            alt='Logo facebook'
            height={50}
            width={200}
          />
          <Image
            src="/store/play-store.svg"
            alt='Logo facebook'
            height={50}
            width={200}
          />
          <Image
            src="/store/windows-store.svg"
            alt='Logo facebook'
            height={50}
            width={200}
          />
        </Box>
      </RowStyle>
    </ToolbarStyle>
  )
}

export default Footer