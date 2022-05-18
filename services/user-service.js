import axios from 'axios'
import APIEndPoints from '../constants/api-endpoints'
const UserService = {
    addUser(reqObj) {
        let url = APIEndPoints.user.addUser
        return axios.post(url, reqObj)
            .then(res => {
                console.log(res)
                return res
            })
            .catch(err => {
                console.log(err)
                return err
            })
    },
    editUser(id, reqObj) {
        let url = APIEndPoints.user.editUser.replace("{userId}", id)
        return axios.put(url, reqObj)
            .then(res => {
                console.log(res)
                return res
            })
            .catch(err => {
                console.log(err)
                return err
            })
    },
    getUserById(id) {
        let url = APIEndPoints.user.getUserById.replace("{userId}", id)
        return axios.get(url)
            .then(res => {
                console.log(res)
                return res
            })
            .catch(err => {
                console.log(err)
                return err
            })
    },
    deleteUser(id) {
        let url = APIEndPoints.user.deleteUser.replace("{userId}", id)
        return axios.delete(url)
            .then(res => {
                console.log(res)
                return res
            })
            .catch(err => {
                console.log(err)
                return err
            })
    },
    getAll() {
        let url = APIEndPoints.user.getAll
        return axios.get(url)
            .then(res => {
                console.log(res)
                return res
            })
            .catch(err => {
                console.log(err)
                return err
            })
    }
}
export default UserService