import React from 'react'

import { Box } from '@chakra-ui/core'
import { css, Global } from '@emotion/core'

import HeadTitle from '../../core/components/HeadTitle'

const AppComponent: React.FC = props => {
  const { children } = props

  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body,
          #__next {
            height: 100%;
          }
        `}
      />
      <HeadTitle />
      <Box height='100%'>{children}</Box>
    </React.Fragment>
  )
}

export default AppComponent
