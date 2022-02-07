import { Center } from '@chakra-ui/react';
import Banner from './components/Banner';
import Category from './components/Category';
import Products from './components/Products';
import Search from './components/Search';

function App() {
  return (
    <Center flexDir="column" px={{ base: "12", md: "96" }}>
      <Search />
      <Banner />
      <Category />
      <Products />
    </Center>
  );
}

export default App;
