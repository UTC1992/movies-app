import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import { DividerStyle, LinkStyle, MenuItemStyle, MenuListStyle, ToolbarStyle } from './styles';

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
      <Box>
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
    </ToolbarStyle>
  )
}

export default Footer