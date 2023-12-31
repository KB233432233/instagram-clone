import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react"
import ProfilePost from "./ProfilePost"
import { useEffect, useState } from "react"

function ProfilePosts() {
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000)
    }, [])



    return (
        <Grid
            templateColumns={{
                sm: 'repeat(1,1fr)',
                md: 'repeat(3,1fr)',
            }}
            gap={1}
            columnGap={1}
        >
            {isLoading && [1, 2, 3, 4, 5, 6].map((_, idx) => {
                return (
                    <VStack key={idx} alignItems={'flex-start'} gap={4}>
                        <Skeleton w={'full'}>
                            <Box h={'300px'}>content wrapped</Box>
                        </Skeleton>
                    </VStack>
                );
            })}
            {!isLoading && (
                <>
                    <ProfilePost img='/img1.png' />
                    <ProfilePost img='/img2.png' />
                    <ProfilePost img='/img3.png' />
                    <ProfilePost img='/img4.png' />
                </>
            )}
        </Grid>
    )
}

export default ProfilePosts
