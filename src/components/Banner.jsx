import { useEffect, useState } from 'react';
import { Image, Flex } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import services from '../services';

const Banner = () => {
  const [images, setImages] = useState([]);

  const getBanners = async () => {
    try {
      const res = await services.getBanners()
      console.log(res);
      setImages(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBanners();
  }, []);

  return (
    <Flex mt={6}>
      <Carousel>
        {images.map((image) => {
          return <Image src={image.url_mobile} h={{base: "200px", md: "350px"}} width="600px" />;
        })}
      </Carousel>
    </Flex>
  );
};

export default Banner;
