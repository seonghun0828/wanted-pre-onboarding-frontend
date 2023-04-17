import axios from 'axios';
import { TodoType } from '../pages/Todo';

export const updateTodo = async ({
  id,
  todo,
  isCompleted,
}: TodoType): Promise<TodoType> => {
  const access_token = localStorage.getItem('access_token');
  try {
    const { data, status } = await axios.request({
      url: `/todos/${id}`,
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      data: {
        todo,
        isCompleted,
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
