import * as axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f1be7d7c-7b48-4fec-a5e8-15badd889c42'
    }
})

export const usersAPI= {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
  follow(userId){
      return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
   unfollow(userId){
       return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    getprofile(userId){
        return  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId);
    }
}

export const authAPI= {
    me() {
        return instance.get(`auth/me`)
    }
}


