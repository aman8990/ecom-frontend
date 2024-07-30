import axios from 'axios';
import { baseURL } from './base';

export async function getPayment() {
  try {
    const response = await axios.post(
      `${baseURL}/api/users/stripe/pay`,
      {},
      {
        withCredentials: true,
      },
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCashfree() {
  try {
    const response = await axios.get(`${baseURL}/api/users/cashfree`, {
      withCredentials: true,
    });

    console.log('getCashfree:', response);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function verifyCashfree({ cashfreeOrderId, userOrderId }) {
  try {
    const response = await axios.post(
      `${baseURL}/api/users/cashfree/verify`,
      { cashfreeOrderId, userOrderId },
      {
        withCredentials: true,
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
}
