import {
  Box,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  Img
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { useApp } from "../../../AppContext";

interface IProductsFavorites {
  _id: string;
  title: string;
  description: string;
  imageURL: string;
  price: number;
}

interface ITableFavoritesProps {
  productsFavorites: IProductsFavorites[]
}

function TableFavorites({ productsFavorites }: ITableFavoritesProps) {
  const { deleteProductFavorite } = useApp()

  return (
    <>
      <TableContainer
        width="100%"
        maxWidth="1280px"
        borderRadius="10px"
      >
        <Table >
          <Thead backgroundColor="gray.700" height="75px">
            <Tr>
              <Th color="white" borderColor="gray.700" fontSize="1xl">
                Imagem
              </Th>
              <Th color="white" borderColor="gray.700" fontSize="1xl">
                Título
              </Th>
              <Th color="white" borderColor="gray.700" fontSize="1xl">
                Descrição
              </Th>
              <Th color="white" borderColor="gray.700" fontSize="1xl">
                Preço
              </Th>
              <Th color="white" borderColor="gray.700" fontSize="1xl">

              </Th>
            </Tr>
          </Thead>
          <Tbody backgroundColor="gray.700" textColor="white">
            {productsFavorites.length >= 1 && productsFavorites.map((product) => {
              return (
                <Tr key={product._id} transition={'0.3s'}>
                  <Td
                    fontWeight="bold"
                    borderColor="gray.600"
                  >
                    <Img src={product.imageURL}
                      borderRadius="50%"
                      width="100px"
                      height="100px"
                      objectFit="cover"
                    />
                  </Td>
                  <Td color="gray.300" borderColor="gray.600">
                    {product.title}
                  </Td>
                  <Td borderColor="gray.600">
                    {product.description}
                  </Td>
                  <Td fontSize="14px" color="gray.300" borderColor="gray.600">
                    {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL', currencyDisplay: 'narrowSymbol' }).format(product.price)}
                  </Td>
                  <Td fontSize="14px" color="gray.300" borderColor="gray.600">
                    <Button backgroundColor="red" onClick={async () => {
                      await deleteProductFavorite(product._id)
                    }}>
                      <DeleteIcon />
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Box
        bgColor="gray.700"
        borderBottomRadius="5px"
        height="50px"
        color="white"
      ></Box>
    </>
  )
}

export { TableFavorites }