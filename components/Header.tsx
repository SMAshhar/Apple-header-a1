import React from 'react'
import { Stack, Flex, Link, Img, keyframes } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import Menus from './Menu'

const animation = keyframes`
from {
    background: inherit
}

to {
    background: black
}
`

export default function Header() {
    const myAnime = `${animation} infinite 1s`
    return (
        <Stack align={'center'} border='4px' bgColor={'#000000CC'} position='static'>
            <Stack w='max' color={'black'} direction='row' >
                
                <Flex w='max' textColor={'#CBD5E0'} p='10px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                    <Link href='/'> <Img src='/a1.png' alt='apple-logo' w={'16px'} h='18px'></Img></Link>
                </Flex>
                <Flex _hover={{animation:myAnime}}>
                <Menus/>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'} _hover={{ animation: myAnime }}>Store</Link>

                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'}>Mac</Link>
                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} px={['1', '4', '5']} p='12px' fontSize={['xxs', 'xs', 'xs']}>
                        <Link href='/' fontFamily={'sans-serif'}>iPad</Link>
                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'}>iPhone</Link>
                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'}>Watch</Link>
                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'}>AirPods</Link>
                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'}>TV & Home</Link>
                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'}>Entertainment</Link>
                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'}>Accessories</Link>
                    </Flex>
                    <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                        <Link href='/' fontFamily={'sans-serif'}>Support</Link>
                    </Flex></Flex>
                <Flex w='max' textColor={'#CBD5E0'} p='12px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                    <Link href='/' fontFamily={'sans-serif'}><SearchIcon /></Link>
                </Flex>
                <Flex w='max' textColor={'#CBD5E0'} p='10px' fontSize={['xxs', 'xs', 'xs']} px={['1', '2', '3', '4', '5']}>
                    <Link href='/'> <Img src='/clipboard.png' alt='apple-logo' pt='2px' color={'#CBD5E0'} w={'16px'} h='16px'></Img></Link>
                </Flex>
               
            </Stack>
        </Stack>
    )
}