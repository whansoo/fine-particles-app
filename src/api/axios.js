import axios from "axios"
import qs from 'qs'

// const getParameters = {
//     serviceKey: '9/Vc243KZHuIFi+JjHzMQjFpodJZohurjl8MM0IdBqgAe/eSJELcQfSopXf50XG6Vv3nkxmyQuhz5tainydZng==',
//     returnType:'json',
//     numOfRows:'100',
//     pageNo:'1',
//     sidoName: '인천',
//     ver:'1.0',
//     // paramsSerializer: (params) => qs.stringify(params, { encode: false })
//   }
  
//   export const fetchData = async () => {
//     const response = await axios.get(
//       '/api/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {params: getParameters}
//     )
//     const data = await response.data
//     //여기서 set 해주면 좋겠죠?
//     return data
//   }

  // const getAxiosInstance = () => {
  //   const instance = axios.create({
  //     headers: { // 필요한 경우 header 도 명시
  //       'Content-type': 'application/json',
  //     },
  //     withCredentials: true // 백엔드에서 쿠키를 설정해줄 수 있도록 명시
  //   });
  //   // token 의 경우 요청을 보낼 때마다 현재 토큰 값을 가져오도록 작성
  //   // (create 할때 넣어줄 경우 고정값으로 들어가게 되므로, 아래처럼 작성하는 방식이 타당함)
   
  //   return instance
  // }
  
  // export const axiosInstance = getAxiosInstance()