let baseUrl = 'http://localhost:3300/'
const APIEndPoints = {
    user: {
        addUser: baseUrl + '/user',
        editUser: baseUrl + '/user/{userId}',
        deleteUser: baseUrl + '/user/{userId}',
        getAll: baseUrl + '/users',
        getUserById: baseUrl + '/user/{userId}'
    }
}
export default APIEndPoints