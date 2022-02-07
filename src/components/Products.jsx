import { useEffect, useState } from 'react';
import {
  Image,
  Flex,
  Text,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import services from '../services';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const getProducts = async () => {
    try {
      const res = await services.getProducts(page)
      setProducts(res);
      setNewProducts([...newProducts, ...res]);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(page);

  const getMoreProducts = () => {
    setPage(page + 1);
    getProducts();
  };

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setIsFetching(true);
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    if (products.length > 0) {
      getMoreProducts();
    }
  }, [isFetching]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <SimpleGrid columns={[2, 2]} spacing="15px" w="100%">
        {products.map((product) => {
          return (
            <Flex flexDir="column">
              <Flex
                d="flex"
                flexDir="column"
                justifyContent="space-around"
                height="400px"
                p={2}>
                <Image src={product.image_uri} h="300px" w="400px" />
                <Flex flexDir="column">
                  <Text pt="2" fontWeight="bold" fontSize={16}>
                    {product.product_name}
                  </Text>
                  <Text
                    pt="2"
                    fontSize={16}>{`Rp. ${product.normal_price}`}</Text>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </SimpleGrid>
      {isFetching && newProducts.length > 0 && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </>
  );
};

export default Products;
