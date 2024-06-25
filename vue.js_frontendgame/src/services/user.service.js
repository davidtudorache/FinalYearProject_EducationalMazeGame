const login = (username, password) => {
    return fetch("http://localhost:3333/login",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else if(response.status === 400){
            throw "Bad Request"
        }else{
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        localStorage.setItem("user_id",resJson.user_id);
        localStorage.setItem("session_token", resJson.session_token);
        localStorage.setItem("username", username);
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

const logOut = () => {
    return fetch("http://localhost:3333/logout",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        }
    })
    .then((response) => {
        if(response.status === 200){
            localStorage.removeItem("user_id")
            localStorage.removeItem("session_token")
            return
        }else if(response.status === 401){
            throw "Not logged in"
        }else if(response.status === 404){
            throw "Not Found"
        }else{
            throw "Something went wrong"
        }
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

const addNewUser = (username, password) => {
    return fetch("http://localhost:3333/users",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    .then(response => {
        if(response.status === 201){
            return response.json();
        }else if(response.status === 400){
            throw "User already exists";
        }else{
            throw "something went wrong"
        }
    })
    .catch(err => {
        console.log(err);
        return Promise.reject(err)
    })
}

export const usersService = {
    login,
    logOut,
    addNewUser,
}