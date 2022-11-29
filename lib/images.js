import axios from 'axios';

export async function getImage(query){

    var config = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/queryApi`,
        headers: {  
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({query: `/images/${query}`})
    };

    let res = axios(config).then(function (response) {
        return response?.data;
    }).catch(function (error) {
        return error?.responses;
    });
    return res;
}