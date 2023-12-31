import { Box, Flex, Link, Text, Avatar } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaInstagram, FaSearch, FaRegHeart } from 'react-icons/fa';
import { FaRegSquarePlus } from 'react-icons/fa6';
import profile from '../images/profilepic.png'
import { BiLogOut } from 'react-icons/bi';

function SideBar() {
    return (
        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={"whiteAlpha.300"}
            py={8}
            position={"sticky"}
            top={0}
            left={0}
            px={{ base: 2, md: 4 }}>
            <Flex
                direction={"column"} gap={10} w={"full"} height={"full"}>
                <Link to='/' as={RouterLink} pl={2} display={{ base: "none", md: 'block' }} cursor="pointer">
                    <Text fontSize={20} fontStyle='italic'>Instagram</Text>
                </Link>
                <Link to='/' as={RouterLink} pl={2} display={{ base: "block", md: 'none' }} cursor="pointer" borderRaduis={6}
                    _hover={{
                        bg: 'whiteAlpha.200'
                    }}
                    w={{ base: 10 }}
                >
                    <FaInstagram fontSize={'25px'} />
                </Link>

                <Flex direction={'column'} pl={2} gap={5} cursor={'pointer'}>
                    <Link to='/' as={RouterLink} display={'flex'} flexDirection={'row'} gap={5}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        borderRadius={6}
                        h={'35px'}
                        alignItems={'center'}
                    >
                        <FaHome fontSize={'25px'} /> <Text display={{ base: 'none', md: 'block' }}>Home</Text>
                    </Link>
                    <Link to='/searh' as={RouterLink} display={'flex'} flexDirection={'row'} gap={5}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        borderRadius={6}
                        h={'35px'}
                        alignItems={'center'}
                    >
                        <FaSearch fontSize={'25px'} /> <Text display={{ base: 'none', md: 'block' }}>Search</Text>
                    </Link>
                    <Link to='/nofications' as={RouterLink} display={'flex'} flexDirection={'row'} gap={5}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        borderRadius={6}
                        h={'35px'}
                        alignItems={'center'}
                    >
                        <FaRegHeart fontSize={'25px'} /> <Text display={{ base: 'none', md: 'block' }}>Nofications</Text>
                    </Link>
                    <Link to='/createpost' as={RouterLink} display={'flex'} flexDirection={'row'} gap={5}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        borderRadius={6}
                        h={'35px'}
                        alignItems={'center'}
                    >
                        <FaRegSquarePlus fontSize={'25px'} /> <Text display={{ base: 'none', md: 'block' }}>Create</Text>
                    </Link>
                    <Link to='/profile' as={RouterLink} display={'flex'} flexDirection={'row'} gap={4}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        alignItems={'center'}
                        borderRadius={6}
                        h={'35px'}
                    >
                        <Avatar src={profile} w={'35px'} h={'35px'} /> <Text display={{ base: 'none', md: 'block' }}>Profile</Text>
                    </Link>
                </Flex>

                <Box marginTop={'auto'}>
                    <Link to='/auth'
                        as={RouterLink}
                        alignItems={'center'}
                        gap={4}
                        _hover={{ bg: 'whiteAlpha.400' }}
                        borderRadius={6}
                        p={2}
                        w={{ base: 10, md: 'full' }}
                        display={'flex'}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        flexDirection={'row'}
                        h={'35px'}
                    >
                        <BiLogOut size={25} />
                        <Text display={{ base: 'none', md: 'block' }}>Logout</Text>
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default SideBar
