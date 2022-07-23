import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.900',
        color: 'white',
      },
    },
  },
})