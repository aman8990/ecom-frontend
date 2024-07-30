import axios from 'axios';
import { baseURL } from './base';

export async function signup(userData) {
  try {
    const response = await axios.post(`${baseURL}/api/users/signup`, userData);

    return response;
  } catch (error) {
    throw error;
  }
}

export async function login({ email, password }) {
  try {
    const response = await axios.post(
      `${baseURL}/api/users/login`,
      {
        email,
        password,
      },
      { withCredentials: true },
    );

    return response;
  } catch (error) {
    throw error;
  }
}

export async function forgotPassword({ email }) {
  try {
    const response = await axios.post(`${baseURL}/api/users/forgotPassword`, {
      email,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function checkAuth() {
  try {
    const response = await axios.get(`${baseURL}/api/users/checkAuth`, {
      withCredentials: true,
    });

    if (response.status !== 200) {
      throw new Error(response.data.message || 'Failed to authenticate');
    }

    return response.data.currentUser;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    const response = await axios.get(`${baseURL}/api/users/logout`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function verifyEmail({ token }) {
  try {
    const response = await axios.patch(`${baseURL}/api/users/verifyEmail`, {
      token,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function verifyToken({ token }) {
  try {
    const response = await axios.post(`${baseURL}/api/users/resetPassword`, {
      token,
    });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function resetPassword({ token, password }) {
  try {
    const response = await axios.patch(`${baseURL}/api/users/resetPassword`, {
      token,
      password,
    });

    return response;
  } catch (error) {
    throw error;
  }
}
