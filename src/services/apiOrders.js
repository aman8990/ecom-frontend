import axios from 'axios';
import { baseURL } from './base';

export async function getPendingOrders() {
  try {
    const response = await axios.get(`${baseURL}/api/admin/getPendingOrders`, {
      withCredentials: true,
    });

    if (response.data.message === 'No orders found') {
      return [];
    }

    return response.data.pendingOrders;
  } catch (error) {
    throw error;
  }
}

export async function getAcceptedOrders() {
  try {
    const response = await axios.get(`${baseURL}/api/admin/getAcceptedOrders`, {
      withCredentials: true,
    });

    if (response.data.message === 'No accepted order Found') {
      return [];
    }

    return response.data.acceptedOrders;
  } catch (error) {
    throw error;
  }
}

export async function getInTransitOrders() {
  try {
    const response = await axios.get(
      `${baseURL}/api/admin/getInTransitOrders`,
      {
        withCredentials: true,
      },
    );

    if (response.data.message === 'No InTransit orders Found') {
      return [];
    }

    return response.data.inTransitOrders;
  } catch (error) {
    throw error;
  }
}

export async function getCancelledOrders() {
  try {
    const response = await axios.get(
      `${baseURL}/api/admin/getCancelledOrders`,
      {
        withCredentials: true,
      },
    );

    if (response.data.message === 'No cancelled orders found') {
      return [];
    }

    return response.data.cancelledOrders;
  } catch (error) {
    throw error;
  }
}

export async function getAllOrders() {
  try {
    const response = await axios.get(`${baseURL}/api/admin/getAllOrders`, {
      withCredentials: true,
    });

    if (response.data.message === 'No orders found') {
      return [];
    }

    return response.data.allOrders;
  } catch (error) {
    throw error;
  }
}

export async function getOrder(data) {
  try {
    const response = await axios.post(`${baseURL}/api/admin/order`, data, {
      withCredentials: true,
    });

    return response.data.order[0];
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateOrder(data) {
  try {
    const response = await axios.patch(`${baseURL}/api/admin/order`, data, {
      withCredentials: true,
    });

    return response.data.order;
  } catch (error) {
    throw error;
  }
}

export async function getUserOrders() {
  try {
    const response = await axios.get(`${baseURL}/api/users/userOrders`, {
      withCredentials: true,
    });

    return response.data.orders;
  } catch (error) {
    throw error;
  }
}

export async function getUserOrder({ id }) {
  try {
    const response = await axios.post(
      `${baseURL}/api/users/userOrder`,
      { _id: id },
      {
        withCredentials: true,
      },
    );

    return response.data.userOrder;
  } catch (error) {
    throw error;
  }
}
