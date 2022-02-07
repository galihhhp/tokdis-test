import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

const Search = () => {
  return (
    <InputGroup size="lg" py={6}>
      <Input
        pr="4.5rem"
        placeholder="Search for products, brands and more"
      />
      <InputRightElement width="4.5rem" pt={12} pr={2}>
        <Button h="1.75rem" size="sm">
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default Search;