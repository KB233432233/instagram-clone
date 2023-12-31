import { Box, Flex, Input, InputGroup, InputRightElement, Text, Button } from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import { FaRegHeart } from 'react-icons/fa'


function PostFooter({ username, isProfilePage }) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        }
        else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }


    return (
        <Box mb={10} mt={'auto'}>
            <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
                <Box onClick={handleLike} cursor={'pointer'} fontSize={20}>
                    {!liked ? (<FaRegHeart />) : (<FcLike />)}
                </Box>
                <Box cursor={'pointer'} fontSize={20}>
                    <AiOutlineMessage />
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize={'small'}>
                {likes} likes
            </Text>
            {!isProfilePage && (
                <>
                    <Text fontWeight={700} fontSize={'small'} display={'inline'}>
                        {username}{'_ '}
                    </Text>
                    <Text as={'span'} fontWeight={400} fontSize={'small'}>
                        Feeling Good
                    </Text>
                    <Text fontSize='sm' color={'gray'}>
                        View all 1,000 comments
                    </Text>
                </>
            )}

            <Flex alignItems={'center'}
                gap={2}
                justifyContent={'space-between'}
            >
                <InputGroup>
                    <Input variant={'flushed'} placeholder={'place comment...'} fontSize={14} />
                    <InputRightElement>
                        <Button
                            fontSize={14}
                            color={'blue.500'}
                            fontWeight={600}
                            _hover={{
                                color: 'white'
                            }}
                            bg='transparent'
                        >Post</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default PostFooter
