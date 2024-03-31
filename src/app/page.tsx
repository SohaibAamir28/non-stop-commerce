import { VStack, StackDivider, Link, Box, Stack, Button, Image, Heading, Card, Text, CardBody, CardFooter } from '@chakra-ui/react'


export default function Home() {
  return (
    <>

      <VStack bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
        align='center'
      >
        <Heading as='h2' size='xl' noOfLines={1} bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
          PT-1: First Personal Web Page
        </Heading>
        <Box >

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='/sohaib-aamir.jpeg'
              alt='Sohaib Aamir'
            />

            <Stack bgGradient='linear(to-r, green.200, pink.500)'>
              <CardBody>
                <Heading size='md'>Name: Sohaib Aamir</Heading>

                <Text py='2'>
                  Registration Number: 4493-FBAS/BSCS4/F21-B
                </Text>
              </CardBody>

              <CardFooter>

                <Button variant='solid' colorScheme=' linkedin'p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, teal.500, green.500)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>
                  <Link href='https://www.linkedin.com/in/sohaib-aamir'>
                    LinkedIn Profile
                  </Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
        <Box bg='tomato'>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src ='/moeez-abdullah.jpeg'
              alt='Caffe Latte'
            />

            <Stack bgGradient='linear(to-r, green.200, pink.500)'>
              <CardBody>
                <Heading size='md'>Name: Moeez Abdullah</Heading>

                <Text py='2'>
                  Registration Number: 4477-FBAS/BSCS4/F21-B
                </Text>

              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='linkedin' p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, teal.500, green.500)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>
                <Link href='https://www.linkedin.com/in/moeez-abdullah-02098829b'>
                    LinkedIn Profile
                  </Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
        <Box bg='pink.100'>

          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src='/muhammad-ali.jpg'
              alt='Caffe Latte'
            />

            <Stack bgGradient='linear(to-r, green.200, pink.500)'>
              <CardBody >
                <Heading size='md'>Name: Muhammad Ali</Heading>

                <Text py='2'>
                  Registration Number: 4490-FBAS/BSCS4/F21-B
                </Text>
              </CardBody>

              <CardFooter>
                <Button variant='solid' colorScheme='linkedin' p={4}
  color='white'
  fontWeight='bold'
  borderRadius='md'
  bgGradient='linear(to-r, teal.500, green.500)'
  _hover={{
    bgGradient: 'linear(to-r, red.500, yellow.500)',
  }}>
                <Link href='https://www.linkedin.com'>
                    LinkedIn Profile
                  </Link>
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Box>
      </VStack >
    </>
  );
}
