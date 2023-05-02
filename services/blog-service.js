
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1';

export const getAllBlogs = async () => {
  const res = await axios.get(`${BASE_URL}/blogs`);
  return res.data;
};

export const getBlog = async (slug) => {
  const res = await axios.get(`${BASE_URL}/blogs?slug=${slug}`);

  return res.data.data;
};