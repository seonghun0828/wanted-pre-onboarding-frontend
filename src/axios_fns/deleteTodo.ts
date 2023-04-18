import axios from 'axios';

export const deleteTodo = async (id: number) => {
  const access_token = localStorage.getItem('access_token');
  try {
    const { status } = await axios.request({
      url: `/todos/${id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (status !== 204) {
      throw new Error('네트워크가 불안정합니다');
    }
  } catch (e) {
    alert(e.response.data.message);
    throw e;
  }
};
