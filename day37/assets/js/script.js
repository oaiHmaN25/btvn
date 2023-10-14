import { client } from "./client"
import { config } from "./config"





const { SERVER_AUTH_API } = config;
console.log(SERVER_AUTH_API);
client.setUrl(SERVER_AUTH_API);

const handleLogin = async (data) => {
  try {
    const response = await client.post('/login', data);
    const tokens = response.data;
    const { accessToken, refreshToken } = tokens;

    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    
    // Thực hiện một hội đồng render sau khi login (điều này cần được định nghĩa trong render())
    render();
  } catch (error) {
    console.error('Error during login:', error);
  }
};