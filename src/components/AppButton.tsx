import { 
    Center,
    ChakraProvider,
    Input,
    Box,
    Button
  } from '@chakra-ui/react'

interface IButton{
    login():void;
}
export const AppButton = ({login}:IButton) => {
return(
    <>
    <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Button
    </Button>
    </>
)}