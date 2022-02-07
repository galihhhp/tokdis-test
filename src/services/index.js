import instance from '../lib/axios';

const services = {
  getCategory: async () => {
    try {
      const res = await instance.get(
        'utility/home/box-category?with_staple=true'
      );
      return res.data.data;
    } catch (error) {
      throw error;
    }
  },
  getProducts: async (page) => {
    try {
      const res = await instance.get(
        'product-recommendation?page=' +
          page
      );
      return res.data.data;
    } catch (error) {
      throw error;
    }
  },
  getBanners: async () => {
    try {
      const res = await instance.get(
        'utility/home/banner-web'
      );
      return res.data.data;
    } catch (error) {
      throw error;
    }
  },
};

export default services;
