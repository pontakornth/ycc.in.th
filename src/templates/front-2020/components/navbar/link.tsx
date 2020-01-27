import React from 'react'

import { PseudoBox, Text } from '@chakra-ui/core'

import { INavbarLinkProps } from '../../@types/INavbarLinkProps'

const NavLink: React.FC<INavbarLinkProps> = props => {
  const { text, href } = props

  const innerLink = (
    <PseudoBox
      display='flex'
      px={3}
      py={4}
      height={'100%'}
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      cursor='pointer'
      transition='background 0.25 ease'
      _hover={{
        bg: 'gray.50',
      }}
      {...props}>
      <Text userSelect='none' fontSize={['sm', 'sm', 'sm', 'md']}>
        {text}
      </Text>
    </PseudoBox>
  )

  return (
    <a
      href={href.toString()}
      onClick={() =>
        document
          .querySelector(href.toString())
          .scrollIntoView({ behavior: 'smooth' })
      }>
      {innerLink}
    </a>
  )
}

export default NavLink
