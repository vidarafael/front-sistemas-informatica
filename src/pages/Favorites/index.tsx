import {
  Box,
  Link,
  Text,
} from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Link as ReachLink, useNavigate } from "react-router-dom"
import { TableFavorites } from "./TableFavorites"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { useApp } from "../../AppContext";
import { useEffect } from "react";

function Favorites() {
  const navigate = useNavigate()
  const { getAllProductsFavorites, productsFavorites, user } = useApp()

  useEffect(() => {
    if (!user) {
      navigate("/")
    }
    async function execute() {
      await getAllProductsFavorites()
    }

    execute();
  }, [productsFavorites])

  return (
    <>
      <Header />
      <Box
        width="100%"
        maxW="1280px"
        margin="50px auto"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text fontSize="3xl" fontWeight="bold">
            Meus favoritos
          </Text>

          <Link
            as={ReachLink}
            fontSize="1.25rem"
            fontWeight="bold"
            to="/"
          >
            Ver produtos{' >'}
          </Link>
        </Box>
        <Box
          maxW="1280px"
          marginTop="50px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap="100px"
        >
          {productsFavorites.length <= 0 ? (
            <Text fontSize="3xl" marginTop="50px">Nenhum produto encontrado...</Text>
          ) : (
            <TableFavorites productsFavorites={productsFavorites} />
          )}
        </Box>
      </Box>
      <ToastContainer />
    </>
  )
}

export { Favorites }