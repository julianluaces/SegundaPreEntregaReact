import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import './styles.css'
import ItemCount from './ItemCount'

const Navbar = () => {
    return (
        <div className='navbar-contenedor'>


            <Flex>

                <Box p='6' >
                    My Ecommerce
                </Box>

                <Spacer />

                <Menu>
                    <MenuButton>
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Notebooks</MenuItem>
                        <MenuItem>PC de Escritorio</MenuItem>
                    </MenuList>
                </Menu>

                <Spacer />

                <Box p='6' >

                    <CartWidget />

                </Box>

            </Flex>
   



        </div>
    )
}

export default Navbar