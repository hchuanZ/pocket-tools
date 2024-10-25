import axios from 'axios'
const instance = axios.create({
    timeout: 3000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
      // 定义需要排除的路径
      const excludedPaths = ['/login', '/register'];
  
      // 检查请求路径是否在排除列表中
      if (!excludedPaths.includes(config?.url || '')) {
        const token = localStorage.getItem('token');
  
        if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        } else {
          window.location.href = '/login';
          return Promise.reject(new Error('No token, redirecting to login.'));
        }
      }
  
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

type REQUEST_OPTION = {
    method: 'get' | 'post',
    url: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any,
    token: string
}
export const request_48 = async (option: REQUEST_OPTION) => {
    const {method, url, body, token} = option
    if (method === 'post') {
        const res = await instance.post(url, body, {
            headers: {
                token
            }
        })
        return res
    }
    if (method === 'get') {
        return {}
    }
    return {}
}