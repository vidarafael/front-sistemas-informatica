import { Box, Button, Img, Text } from "@chakra-ui/react"
import { toast } from "react-toastify";
import { useApp } from "../AppContext";

interface ICardProductProps {
  _id: string;
  imageURL?: string;
  title: string;
  description: string;
  price?: number;
}

function CardProduct({
  _id,
  imageURL,
  title,
  description,
  price
}: ICardProductProps) {
  const { user, addProductFromFavorite } = useApp()

  return (
    <>
      <Box
        width="300px"
        minHeight="480px"
        backgroundColor="gray.700"
        borderRadius="10px"
      >
        <Img
          src={imageURL}
          alt="imagem do produto"
          height="300px"
          width="100%"
          objectFit="cover"
          borderTopRadius="10px"
        />
        <Box
          padding="10px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            fontSize="1.2rem"
            textAlign="center"
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text color="gray.400" marginTop="10px">
            {description}
          </Text>
          <Text color="gray.200" marginTop="10px" textAlign="center" >
            R$ {price}
          </Text>
          <Button
            marginTop="15px"
            backgroundColor="black"
            _hover={{ backgroundColor: "blue.500" }}
            onClick={async () => {
              if (!user) {
                toast.error("Para adicionar aos favoritos precisa de logar na aplicação", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })
              }
              await addProductFromFavorite(_id)
            }}
          >
            Adicionar aos favoritos
          </Button>
        </Box>
      </Box>
    </>

  )
}

export { CardProduct }