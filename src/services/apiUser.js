import axios from 'axios';
import { baseURL } from './base';

export async function updateMe(userData) {
  try {
    const response = await axios.patch(
      `${baseURL}/api/users/updateMe`,
      userData,
      {
        withCredentials: true,
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export async function updatePassword({ passwordCurrent, password }) {
  try {
    const response = await axios.patch(
      `${baseURL}/api/users/updateMyPassword`,
      { passwordCurrent, password },
      {
        withCredentials: true,
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export async function contactUs(data) {
  try {
    const response = await axios.post(`${baseURL}/api/users/contactUs`, data);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getAllUsers(page = 1, limit = 10) {
  try {
    const response = await axios.get(`${baseURL}/api/admin/getAllUsers`, {
      params: {
        page,
        limit,
      },
      withCredentials: true,
    });

    return response.data.users;
  } catch (error) {
    throw error;
  }
}

export async function getUser({ id }) {
  try {
    const response = await axios.post(
      `${baseURL}/api/admin/getUser`,
      { id },
      { withCredentials: true },
    );

    return response.data.user;
  } catch (error) {
    throw error;
  }
}

export async function getUsersQueries() {
  try {
    const response = await axios.get(`${baseURL}/api/admin/queries`, {
      withCredentials: true,
    });

    return response.data.usersQueries;
  } catch (error) {
    throw error;
  }
}

export async function deleteUserQuery({ id }) {
  try {
    const response = await axios.delete(`${baseURL}/api/admin/queries`, {
      withCredentials: true,
      data: { _id: id },
    });

    return response;
  } catch (error) {
    throw error;
  }
}
