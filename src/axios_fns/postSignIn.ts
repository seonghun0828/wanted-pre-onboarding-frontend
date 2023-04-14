import axios from 'axios';
import { InputsType } from '../pages/SignUp';

export const postSignIn = async (inputs: InputsType) => {
  try {
    const { data, status } = await axios.request({
      url: '/auth/signin',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: inputs,
    });

    localStorage.setItem('access_token', data.access_token);

    if (status !== 200) {
      throw new Error('네트워크가 불안정합니다');
    }
  } catch (e) {
    alert(e.response.data.message);
    throw e;
  }
};
