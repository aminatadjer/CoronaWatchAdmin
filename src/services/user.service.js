import axiosInstance from './axiosApi.jsx'
import authHeader from './auth-header';



class UserService {
  getPublicContent() {
    return axiosInstance.get('all');
  }

  
}

export default new UserService();