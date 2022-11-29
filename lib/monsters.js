import axios from 'axios';

export async function getAllMonsters(){

    var config = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/queryApi`,
        headers: {  
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({query: "/monsters"})
    };

    let res = axios(config).then(function (response) {
        return response?.data;
    }).catch(function (error) {
        return error?.responses;
    });
    return res;
}

export async function getMonster(index){

    var config = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/queryApi`,
        headers: {  
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({query: `/monsters/${index}`})
    };

    let res = axios(config).then(function (response) {
        return response?.data;
    }).catch(function (error) {
        return error?.responses;
    });
    return res;
}
