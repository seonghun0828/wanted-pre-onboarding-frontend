import axios from 'axios';
import { InputsType } from '../pages/SignUp';

export const postSignUp = async (inputs: InputsType) => {
  try {
    const result = await axios.request({
      url: '/auth/signup',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: inputs,
    });
    if (result.status !== 201) {
      throw new Error('네트워크가 불안정합니다');
    }
  } catch (e) {
    alert(e.response.data.message);
    throw e;
  }
};
