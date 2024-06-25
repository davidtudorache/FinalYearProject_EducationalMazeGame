const getAll = () => {
    return fetch("http://localhost:3333/results", {
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        },
    })
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else{
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

const add = (user_id, score) => {
    return fetch("http://localhost:3333/results", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": localStorage.getItem("session_token")
        },
        body: JSON.stringify({
            "user_id": user_id,
            "score": score,
        })
    })
    .then((response) => {
        if(response.status === 201){
            return response.json();
        }else if(response.status === 400){
            throw "Bad request"
        }else if(response.status === 401){
            throw "Not logged in"
        }else {
            throw "something went wrong"
        }
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    })
}

export const resultService = {
    getAll,
    add
}