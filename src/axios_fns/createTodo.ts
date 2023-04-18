import axios from 'axios';

export const createTodo = async (todo: string) => {
  const access_token = localStorage.getItem('access_token');
  try {
    const { data, status } = await axios.request({
      url: '/todos',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      data: {
        todo,
      },
    });

    if (status !== 201) {
      throw new Error('네트워크가 불안정합니다');
    }
    return data;
  } catch (e) {
    alert(e.response.data.message);
    throw e;
  }
};
