import UserList from '@/components/UserList'
import React from 'react'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const fetchData = async () => {
    await delay(2000)
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((json) => {
            return json
        })
}

const LoginPage = async () => {
    // const data = await fetchData();
    // console.log(data);
    return (
        <div>
            <UserList />
        </div>
    )
}

export default LoginPage
