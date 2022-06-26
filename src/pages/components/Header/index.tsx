import { Flex, Grid, Icon, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiArrowLeftSLine } from "react-icons/ri";

export function Header() {

  const { asPath } = useRouter()

  const isHomePage = asPath !== "/"

  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      h="100px"
      align="center"
    >
      <Grid
        w="100%"
        h="100%"
        templateColumns="repeat(3, 1fr)"
        alignItems="center"
        maxW="1440px"
        mx="auto"
      >
        {
          isHomePage && (
            <Link href="/">
              <a>
                <Icon
                  as={RiArrowLeftSLine}
                  fontSize={[20, 40]}
                  justifySelf="start"
                />
              </a>
            </Link>
          )
        }
        <Image 
          w={["81px", "184px"]}
          src="/images/logo.png"
          alt="Avião voando sobre a palavra Word Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}