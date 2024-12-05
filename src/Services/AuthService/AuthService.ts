import axios from 'axios';

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const AUTH0_RECOVERY_CODE = process.env.REACT_APP_AUTH0_RECOVERY_CODE;

export const signupWithAuth0 = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post(
      `https://${AUTH0_DOMAIN}/dbconnections/signup`,
      {
        client_id: AUTH0_CLIENT_ID,
        email,
        password,
        connection: 'Username-Password-Authentication',
        username,
      }
    );
    return response.data;
  } catch (error) {
    if ((error as any).response) {
      console.error('Error Response:', (error as any).response.data);
      throw new Error(`Signup failed: ${(error as any).response.data.error_description || 'Unknown error'}`);
    } else if ((error as any).request) {
      console.error('Error Request:', (error as any).request); 
      throw new Error('Signup failed: No response from the server.');
    } else {
      console.error('Error Message:', (error as any).message);
      throw new Error('Unable to sign up. Please try again later.');
    }
  }
};
export const loginWithAuth0 = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      `https://${AUTH0_DOMAIN}/oauth/token`,
      {
        client_id: AUTH0_CLIENT_ID,
        grant_type: 'password',
        username: email,
        password: password,
        connection: 'Username-Password-Authentication',
        audience: `https://${AUTH0_DOMAIN}/api/v2/`,
        scope: 'openid profile email',
      }
    );
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response || error.message);
    throw new Error(error.response?.data?.error_description || error.message || 'Unable to log in');
  }
};

export const resetPasswordWithAuth0 = async (email: string) => {
  try {
    const response = await axios.post(
      `https://${AUTH0_DOMAIN}/api/v2/tickets/password-change`,
      {
        user_id: email,
      },
      {
        headers: {
          Authorization: `Bearer ${AUTH0_RECOVERY_CODE}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Password reset failed:', error);
    throw new Error('Unable to reset password');
  }
};
