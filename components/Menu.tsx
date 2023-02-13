import React from 'react'
import {Flex, Menu, MenuButton, MenuGroup, MenuList, Text, Stack, Link} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'

{/* <MenuButton as={Button} rightIcon={<HamburgerIcon />} color='#000000CC'/>             */}


export default function Menus() {
    return (
        <Menu>
            <MenuButton color='#CBD5E0' fontFamily={'sans-serif'} fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>Store</MenuButton> 
            <MenuList bgColor={'black'}><Stack spacing='16px' w='full' h='500px' border={'0px'}>
                <Text color='#CBD5E0' textColor='#CBD5E0' fontSize={['h3', 'h2', 'h1']} px={['3', '5', '6', '7', '8']}>Shop</Text>
                <Link href='https://apple.com/us/shop/goto/store' fontFamily={'sans-serif'} textColor='#CBD5E0' px={['3', '5', '6', '7', '8']} fontSize='4xl'>Shop the Latest</Link>  
            </Stack></MenuList>           
        </Menu>
    )
}