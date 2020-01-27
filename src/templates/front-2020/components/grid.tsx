import React from 'react'

import { useWindowSize } from 'web-api-hooks'

import { PseudoBox } from '@chakra-ui/core'

export const Grid: React.FC = props => {
  const size = 2
  const space = 50

  const [windowWidth, windowHeight] = useWindowSize()

  return (
    <PseudoBox
      as='table'
      zIndex={-1}
      position='fixed'
      top={0}
      bottom={0}
      right={0}
      left={0}
      border={`${size}px solid transparent`}>
      {Array.apply(null, Array(Math.floor(windowHeight / (size + space)))).map(
        (_, i) => (
          <tr
            key={`bg-table-row-${i}`}
            style={{ border: `${size}px solid transparent` }}>
            {Array.apply(
              null,
              Array(Math.floor(windowWidth / (size + space)))
            ).map((_, j) => (
              <td
                key={`bg-table-row-${i}-col-${j}`}
                style={{
                  background: 'white',
                  backgroundClip: 'padding-box',
                  padding: `${space}px`,
                  border: `${size}px solid transparent`,
                }}
              />
            ))}
          </tr>
        )
      )}
    </PseudoBox>
  )
}
