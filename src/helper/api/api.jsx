import axios from 'axios';
import { urls } from '../../component/Constant';


export const getUserAccount =({url})=> {
    axios({
        method: 'post',
        url: `${urls}/${url}`,
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      });
  }
  
//   export const getUserPermissions =()=> {
//     return axios.get('/user/12345/permissions');
//   }