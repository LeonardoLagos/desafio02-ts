import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { AppButton } from './AppButton';
import { login as loginEvt } from '../services/login';
import { Header } from './Header';
import { Footer } from './Footer';

interface ICard {
  id: number,
  paragraph: string,
  details: string,
  login: () => {}
}

export const Card = () => {
  return(
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <Center>
      <Header></Header>
      </Center>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <AppButton login={loginEvt}/>
          </Center>
        </Box>
        <Center>
        <Footer></Footer>
        </Center>
      </Box>
    </ChakraProvider>
  )
}