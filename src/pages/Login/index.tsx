import { Box, VStack, Img, Input, Text, Button, Link } from "@chakra-ui/react"
import logoEmpresa from "../../assets/LogoEmpresa.png"
import { Link as ReachLink } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useApp } from "../../AppContext";
import { useState } from "react";

function Login() {
  const { login } = useApp()
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
          <Box backgroundColor="white" borderRadius="10px" marginTop="5px">
            <Img src={logoEmpresa} />
          </Box>
        </Box>
        <Box textAlign="left">
          <form method="post" onSubmit={async (e) => {
            e.preventDefault();
            await login(email, password)
          }}>
            <VStack align="stretch">
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </VStack>
            <VStack align="stretch" marginTop="30px">
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </VStack>

            <Button
              width="100%"
              backgroundColor="blue.500"
              type="submit"
              marginTop="30px"
              _hover={{ backgroundColor: "blue.600" }}
            >
              ENTRAR
            </Button>

            <Box textAlign="center" marginTop="30px">
              <Text fontSize="1rem" color="gray.400">Não possui conta?</Text>
              <Link
                fontSize="0.9rem"
                as={ReachLink}
                to="/register"
              >Clique aqui para se registrar</Link>
            </Box>
          </form>
        </Box>
      </Box>
      <ToastContainer />
    </Box >
  )
}

export { Login }