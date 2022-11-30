import axios from 'axios';

export async function apiQuery(apiUrl){

    let url = apiUrl.replace("/api", "");

    var config = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/queryApi`,
        headers: {  
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({query: url})
    };

    let res = axios(config).then(function (response) {
        return response?.data;
    }).catch(function (error) {
        return error?.responses;
    });
    return res;
}