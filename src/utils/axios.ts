import axios, { AxiosRequestConfig } from 'axios'

//DEVELOPMENT
// const baseURL = 'http://localhost:5000/api/v1'

//PRODUCTION
const baseURL = 'https://campaign-server2022.herokuapp.com/'

const axiosFetch = axios.create({ baseURL })

export const handleFetch = async (
  url: string,
  path: 'get' | 'post' | 'patch' | 'put',
  data?: any,
  config?: AxiosRequestConfig<{}>
): Promise<any> => {
  try {
    const res = await axiosFetch[path](url, data, config)

    if (res.data.status !== 200) {
      throw Error(res.data?.message || 'Something went wrong!')
    }

    return res.data
  } catch (err: any) {
    throw Error(err.message)
  }
}