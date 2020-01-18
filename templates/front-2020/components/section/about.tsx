import React from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/core'

export const About: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      bg='gray.200'
      id='about'>
      <Box width={[22 / 24, 18 / 24, 14 / 24, 10 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          What is YCC
        </Heading>
        <Text>
          ค่ายนักสร้างรุ่นเยาว์ ปีที่สอง หรือ Young Creator's Camp 2 เป็นค่าย
          Product Bootcamp ที่จะพาน้องๆ นักเรียนมัธยมปลาย
          ที่สนใจในการเขียนโปรแกรม ออกแบบกราฟิก และสร้างคอนเทนต์
          มาร่วมมือกันสร้างโปรดักต์ เพื่อแก้ไขปัญหาที่เกิดขึ้นในสังคม ภายในเวลา
          4 วัน
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec
          feugiat nisl pretium fusce id. Sit amet aliquam id diam maecenas
          ultricies. Cursus sit amet dictum sit amet justo. Mi eget mauris
          pharetra et ultrices neque.
        </Text>
      </Box>
    </Flex>
  )
}
