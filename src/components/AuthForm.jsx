import { Box, Input, VStack, Button, Image, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import google from '../images/google.png'
import instagram from '../images/logo.png'


function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const navigate = useNavigate();

    const handleAuth = () => {
        if (!(inputs.email || inputs.password)) {
            alert("fill all the fields bitch");
            return;
        }
        navigate('/')
    }




    return (
        <>
            <Box border={"1px solid gray"} borderRaduis={4} padding={5}>
                <VStack spacing={4}>
                    <Image src={instagram} cursor={"pointer"} alt="Instagram" />
                    <Input
                        placeholder='Email'
                        fontSize={14}
                        type='email'
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                    <Input
                        placeholder='Password'
                        fontSize={14}
                        type='password'
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                    {!isLogin ? <Input placeholder="Confirm Password" fontSize={14} type='password'
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                    /> : null}

                    <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
                        {isLogin ? " Log in" : "Sign up"}
                    </Button>

                    {/* OR text */}
                    <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text mx={1} color={"white"} >OR</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>

                    <Flex>
                        <Image src={google} w={5} alt='Google logo' cursor={"pointer"} />
                        <Text mx="2" color={"blue.500"} cursor={"pointer"}>
                            Log in with Google
                        </Text>
                    </Flex>
                </VStack>
            </Box>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
                    <Box>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
                        {isLogin ? "Sign Up" : "Log In"}
                    </Box>
                </Flex>

            </Box>
        </>
    )
}

export default AuthForm
