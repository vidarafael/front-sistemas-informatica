import { Avatar, Box, Button, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { useState } from "react"
import { Link as ReachLink } from "react-router-dom"
import { useApp } from "../AppContext"
import noAvatar from "../assets/NoAvatar.png"

function Header() {
  const [avatarIsHovered, setAvatarIsHovered] = useState(false)
  const { user, logout } = useApp()

  return (
    <Box
      height={"100px"}
    >
      <Box
        maxWidth="1280px"
        margin="0 auto"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid #2D3748"
        paddingX="10px"
      >
        <Box
          fontSize="3xl"
          height="100%"
          display="flex"
          alignItems="center"
        >
          <Text as="span" fontWeight="900" color="teal.400"><i>D</i></Text>
          <Text as="span" fontWeight="900" color="green.400"><i>F</i></Text>
          <Text as="span" fontWeight="700">{"\u00a0"}informática</Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box mr="4" textAlign="right">
            <Text>Olá, seja bem vindo</Text>
            <Text color="gray.300" fontSize="small">
              {user ? user.name : 'Clique no avatar para logar na aplicação ->'}
            </Text>
          </Box>
          <Menu>
            <MenuButton
              onMouseOver={() => setAvatarIsHovered(true)}
              onMouseLeave={() => setAvatarIsHovered(false)}
            >
              <Avatar
                name="Rafael Freitas"
                src={noAvatar}
                backgroundColor={avatarIsHovered ? "blue.500" : "black"}
                transition={"0.3s"}
              />
            </MenuButton>
            <MenuList
              backgroundColor="gray.700"
              border="none"
            >
              {user ? (
                <MenuItem
                  fontWeight="bold"
                  color="red.600"
                  onClick={() => logout()}
                >
                  Sair da aplicação
                </MenuItem>
              ) : (
                <Link
                  as={ReachLink}
                  to="/login"
                >
                  <MenuItem
                    fontWeight="bold"
                    color="green.600"
                  >
                    Entrar na aplicação
                  </MenuItem>
                </Link>

              )}

            </MenuList>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export { Header }