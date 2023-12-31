import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react"
import AuthForm from "./AuthForm"
import auth from '../images/auth.png'
import playstore from '../images/playstore.png'
import microsoft from '../images/microsoft.png'


function AuthPage() {
    return (
        <Flex minH={'100vh'} justifyContent={"center"} alignItems={"center"}>
            <Container maxW={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                    {/* left hand side */}
                    <Box display={{ base: "none", md: "block" }}>
                        <Image src={auth} h={650} alt='Phone img' />
                    </Box>

                    {/* right hand side */}
                    <VStack spacing={4} align={"stretch"}>
                        <AuthForm />
                        <Box textAlign={"center"}>
                            Get the app.
                        </Box>
                        <Flex gap={5} justifyContent={"center"}>
                            <Image src={playstore} h={"10"} alt="PlayStore logo" />
                            <Image src={microsoft} h={"10"} alt="Microsoft logo" />
                        </Flex>
                    </VStack>
                </Flex>
            </Container>

        </Flex>
    )
}

export default AuthPage
