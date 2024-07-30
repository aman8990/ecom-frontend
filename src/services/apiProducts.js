import axios from 'axios';
import { baseURL } from './base';

export async function getProducts() {
  try {
    const response = await axios.get(`${baseURL}/api/users/getAllProducts`);

    return response.data.products;
  } catch (error) {
    throw error;
  }
}

export async function getProduct({ id }) {
  try {
    const response = await axios.post(`${baseURL}/api/users/getProduct`, {
      id,
    });

    return response.data.doc;
  } catch (error) {
    throw error;
  }
}

export async function createNewProduct(data) {
  try {
    const response = await axios.post(
      `${baseURL}/api/admin/createNewProduct`,
      data,
      { withCredentials: true },
    );

    return response.data.newProduct;
  } catch (error) {
    throw error;
  }
}

export async function updateProduct({ id, data }) {
  try {
    const response = await axios.patch(
      `${baseURL}/api/admin/product`,
      {
        id,
        data,
      },
      { withCredentials: true },
    );

    return response.data.doc;
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct({ id }) {
  try {
    const response = await axios.delete(`${baseURL}/api/admin/product`, {
      withCredentials: true,
      data: { id },
    });

    return response;
  } catch (error) {
    throw error;
  }
}
