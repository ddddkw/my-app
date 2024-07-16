import {createAlova} from 'alova';
import GlobalFetch from 'alova/GlobalFetch';
import { message } from 'antd';
const headers = {'Content-Type': 'application/json;charset=UTF-8'};
const AlovaInstance = createAlova({
    baseURL: 'http://www.peaceandlove.asia',
    localCache: null,
    requestAdapter: GlobalFetch(),
    shareRequest: true,

    // 请求拦截器
    beforeRequest(method) {
        // 假设我们需要添加token到请求头
    },
    // 响应拦截器
    responded: {
        onSuccess: async (response,) => {
            if (response.status >= 400) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            if (json.code !== 200) {
                await message.error({
                    content: json.msg || '请求错误',
                    duration: 2000
                })
                // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
                throw new Error(json.message);
            }
            // 解析的响应数据将传给method实例的transformData钩子函数，这些函数将在后续讲解
            return json;
        },
        onError(error) {
            throw new Error(error)
        }
    }
})

const Alova = {
    // 封装的get请求
    get(url, params) {
        return AlovaInstance.Get(url, {
            headers,
            params,
            localCache: {
                mode: 'placeholder', // 设置缓存模式为持久化占位模式
                expire: 60 * 10 * 1000 // 缓存时间
            },
        })
    },
    // 封装的post请求
    post(url, params) {
        const defaultParams = {
            uuid: new Date().getTime(),
            ...params, // 合并传入的参数
        }
        return AlovaInstance.Post(url, defaultParams)
    },
}

export default Alova
