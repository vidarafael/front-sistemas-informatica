import { Box, VStack, Input, Text, Button, Link } from "@chakra-ui/react"
import { Link as ReachLink } from "react-router-dom"
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useApp } from "../../AppContext";

function Register() {
  const { register } = useApp()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Box
      height={"100vh"}
      width={"100vw"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width="100%"
        maxW={"560px"}
        height="600px"
        backgroundColor="blue.800"
        display="flex"
        flexDirection={"column"}
        padding="50px 100px"
        gap="50px"
        borderRadius="10px"
      >
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
        >
          <Box
            borderRadius="10px"
            marginTop="5px"
            display="flex"
            alignItems="center"
            justifyContent="left"
            width="100%"
          >
            <Link
              as={ReachLink}
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <Button
                backgroundColor="blue.500"
                _hover={{ backgroundColor: "blue.600" }}
              >
                <ChevronLeftIcon />
                Voltar
              </Button>
            </Link>
          </Box>
        </Box>
        <Box textAlign="left">
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              await register(name, email, password)
            }}
          >
            <VStack align="stretch">
              <label htmlFor="email">
                <Text
                  fontSize="1xl"
                  fontWeight="bold"
                >Nome</Text>
              </label>
              <Input
                id="name"
                type='text'
                placeholder="Seu nome"
                backgroundColor="blue.900"
                variant='filled'
                _hover={{ backgroundColor: "blue.500" }}
                onChange={(e) => { setName(e.target.value) }}
              />
            </VStack>
            <VStack align="stretch" marginTop="20px">
              <label htmlFor="email">
                <Text
                  fontSize="1xl"
                  fontWeight="bold"
                >Email</Text>
              </label>
              <Input
                id="email"
                type='email'
                placeholder="exemplo@hotmail.com"
                backgroundColor="blue.900"
                variant='filled'
                _hover={{ backgroundColor: "blue.500" }}
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </VStack>
            <VStack align="stretch" marginTop="20px">
              <label htmlFor="password">
                <Text
                  fontSize="1xl"
                  fontWeight="bold"
                >Senha</Text>
              </label>
              <Input
                id="password"
                type='password'
                placeholder="**********"
                backgroundColor="blue.900"
                variant='filled'
                _hover={{ backgroundColor: "blue.500" }}
                onChange={(e) => { setPassword(e.target.value) }}
              />
            </VStack>
            <Button
              width="100%"
              backgroundColor="blue.500"
              _hover={{ backgroundColor: "blue.600" }}
              marginTop="25px"
              type="submit"
            >
              REGISTRAR-SE
            </Button>
          </form>
        </Box>

      </Box>
      <ToastContainer />
    </Box >
  )
}

export { Register }