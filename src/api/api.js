import * as axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0e5dc50f-7e9f-4eda-9157-a63c5026aaad'
    }
})

export const usersAPI= {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
  follow(userId){
      return instance.post(`follow/${userId}`)
  },
   unfollow(userId){
       return instance.delete(`follow/${userId}`)
    },
    getprofile(userId){
        return  profileAPI.getprofile(userId)
    }
}

export const profileAPI= {
    getprofile(userId){
        return  instance.get(`profile/`+userId);
    },
    getStatus(userId){
        return  instance.get(`profile/status/`+userId);
    },
    updateStatus(status){
        return  instance.put(`profile/status`,{status:status});
    }
}


export const authAPI= {
    me() {
        return instance.get(`auth/me`)
    }
}


