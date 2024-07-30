import axios from 'axios';
import { baseURL } from './base';

export async function getCart() {
  try {
    const response = await axios.get(`${baseURL}/api/users/getCart`, {
      withCredentials: true,
    });

    return response.data.cart;
  } catch (error) {
    throw error;
  }
}

export async function deleteCartItem({ productId }) {
  try {
    const response = await axios.delete(
      `${baseURL}/api/users/deleteItemFromCart`,
      {
        withCredentials: true,
        data: { productId },
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteLocalCartItem(productId) {
  try {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const index = cart.findIndex(
      (cartItem) => cartItem.productId._id === productId,
    );

    if (index !== -1) {
      cart.splice(index, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    return { success: true };
  } catch (error) {
    throw error;
  }
}

export async function addItemToCart({ id, quantity }) {
  try {
    const response = await axios.post(
      `${baseURL}/api/users/addItemToCart`,
      { productId: id, quantity },
      { withCredentials: true },
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export async function addItemToLocalCart(product) {
  try {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const index = cart.findIndex(
      (cartItem) => cartItem.productId._id === product._id,
    );

    if (index !== -1) {
      cart[index].quantity = product.quantity;
      localStorage.setItem('cart', JSON.stringify(cart));
      return { success: true, message: 'Item updated successfully' };
    } else {
      cart.push({
        productId: {
          _id: product._id,
          name: product.name,
          photo: product.photo,
          price: product.price,
        },
        quantity: product.quantity,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    return { success: true, message: 'Item added to cart' };
  } catch (error) {
    throw error;
  }
}

export async function updateCartItem({ productId, quantity }) {
  try {
    const response = await axios.patch(
      `${baseURL}/api/users/updateCartItem`,
      { productId, quantity },
      { withCredentials: true },
    );

    return response.data.updatedCart;
  } catch (error) {
    throw error;
  }
}
