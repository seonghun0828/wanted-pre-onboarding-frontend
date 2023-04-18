import axios from 'axios';
import { TodoType } from '../pages/Todo';

export const getTodos = async (): Promise<TodoType[]> => {
  const access_token = localStorage.getItem('access_token');
  try {
    const { data, status } = await axios.request({
      url: '/todos',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (status !== 200) {
      throw new Error('네트워크가 불안정합니다');
    }
    return data;
  } catch (e) {
    alert(e.response.data.message);
    throw e;
  }
};
