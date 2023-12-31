import { Box, Flex, VStack, Text, Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"

function SuggestedUsers() {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
                <Text fontSize={12} fontWeight={'bold'}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
                    see All
                </Text>
            </Flex>
            <SuggestedUser name='Dan Abrahmov' avatar='https://bit.ly/dan-abramov' followers={1392} />
            <SuggestedUser name='Ryan Florence' avatar='https://bit.ly/ryan-florence' followers={567} />
            <SuggestedUser name='Christine Nwamba' avatar='https://bit.ly/code-beast' followers={759} />

            <Box
                fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}
            >
                &copy; 2023 Built By_ Big Boss {'    '}
                <Link href='https://www.BigBoss.com' target='_blanck' color='blue.500' fontSize={14}>
                    Big Boss
                </Link>
            </Box>
        </VStack>
    )
}

export default SuggestedUsers
