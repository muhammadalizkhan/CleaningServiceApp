import Auth0 from 'react-native-auth0';
import axios from 'axios';

const auth0 = new Auth0({
  domain: 'dev-76hncaire75fhgh0.us.auth0.com',
  clientId: '4QxlWsDGbFVtEPVmNJyVQaXEVmLlFBEl',
});

export const loginWithAuth0 = async (username: string, password: string) => {
  try {
    const credentials = await auth0.auth.passwordRealm({
      username,
      password,
      realm: 'Username-Password-Authentication',
    });
    console.log('Credentials:', credentials);
    return credentials;
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error('Login failed. Please check your credentials or try again later.');
  }
};

export const signupWithAuth0 = async (username: string, email: string, password: string) => {
  try {
    const response = await auth0.auth.createUser({
      connection: 'Username-Password-Authentication',
      email,
      username,
      password,
    });
    console.log('User created successfully', response);
    return response;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

export const resetPasswordWithAuth0 = async (email: string) => {
  try {
    await axios.post('https://csa-rnapp-be-auth-o.vercel.app/api/reset-password', {
      email,
    });
    console.log('Password reset email sent successfully');
  } catch (error) {
    console.error('Password reset failed:', error);
    throw new Error('Password reset failed. Please try again later.');
  }
};


export const verifyCode = async (code: string, anotherCode: string) => {
  try {
    const response = await fetch('https://csa-rnapp-be-auth-o.vercel.app/api/verify-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const data = await response.json();
    if (data.success) {
      console.log('Verification successful');
    } else {
      throw new Error('Verification failed');
    }
  } catch (error) {
    console.error('Error during verification:', error);
    throw error;
  }
};




export const logoutFromAuth0 = async () => {
  try {
    await auth0.webAuth.clearSession();
    console.log('Logged out');
  } catch (error) {
    console.error('Logout failed:', error);
    throw error;
  }
};

export default auth0;
