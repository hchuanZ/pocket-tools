import axios from 'axios'

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
        const res = await axios.post(url, body, {
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