import React from 'react'
import { Heading, Flex, Stack, Link, Text } from '@chakra-ui/react'

export default function New() {
    return (
        <Stack align={'center'} h='1200' textColor='white' bgImage='/iphone14.png' overflow={'hidden'} bgPosition={'bottom'} bgRepeat='np-repeat'>
            <Heading as='h1' fontFamily={'sans-serif'} size='3xl' pt='10'>iPhone 14 Pro</Heading>
            <Heading fontFamily={'sans-serif'} size='lg' pt='1'>Pro. Beyond.</Heading>
            <Flex align={'center'}>
                <Link href='/somehwere' color='blue' fontFamily={'mono'} fontSize='2xl'>Learn more &#62;</Link>
                <Link href='/somehwere' color='blue' fontFamily={'mono'} fontSize='2xl'px='40px'>Buy &#62;</Link>
            </Flex>
        </Stack>
    )
}