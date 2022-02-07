import { useEffect, useState } from 'react';
import {
  Image,
  Text,
  Center,
  useMediaQuery,
  SimpleGrid,
} from '@chakra-ui/react';
import services from '../services';

const Category = () => {
  const [items, setItems] = useState([]);
  const [isMdScreen] = useMediaQuery('(min-width: 48em)');

  const getCategory = async () => {
    try {
      const res = await services.getCategory()
      console.log(res);
      setItems(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <SimpleGrid columns={[2, 7]} spacing="10px" w="100%" px={isMdScreen ? 8 : 0} mb={8}>
      {items.map((item) => {
        return (
          <>
            <Center d="flex" flexDir="column" cursor="pointer" height={isMdScreen ? "150px" : "120px"}>
              <Image src={item.icon} h={isMdScreen ? "80px" : "40px"} w={isMdScreen ? "80px" : "40px"} />
              <Text textAlign="center" pt="2" fontSize={12} >{item.category_name}</Text>
            </Center>
          </>
        );
      })}
    </SimpleGrid>
  )
};

export default Category;
