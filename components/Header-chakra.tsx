import { Box, Flex, Link, Image, IconButton } from "@chakra-ui/react";
import { FaSearch, FaShoppingBag } from "react-icons/fa";

const AppleHeader = () => {
  return (
    <Box bg="white" py={4}>
      <Flex alignItems="center" justifyContent="space-between" px={4}>
        <Box>
          <Image src="/clipboard.png" color={'black'} alt="Apple logo" width={30} height={30} />
        </Box>
        <Flex>
          <AppleHeaderLink href="/mac">Mac</AppleHeaderLink>
          <AppleHeaderLink href="/ipad">iPad</AppleHeaderLink>
          <AppleHeaderLink href="/iphone">iPhone</AppleHeaderLink>
          <AppleHeaderLink href="/watch">Watch</AppleHeaderLink>
          <AppleHeaderLink href="/tv">TV</AppleHeaderLink>
          <AppleHeaderLink href="/music">Music</AppleHeaderLink>
          <IconButton
            ml={4}
            aria-label="Search"
            icon={<FaSearch />}
            variant="ghost"
            color="gray.500"
          />
          <IconButton
            ml={4}
            aria-label="Shopping bag"
            icon={<FaShoppingBag />}
            variant="ghost"
            color="gray.500"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

const AppleHeaderLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      mr={4}
      fontSize="sm"
      fontWeight="medium"
      color="gray.500"
      _hover={{ color: "gray.700" }}
    >
      {children}
    </Link>
  );
};

export default AppleHeader;