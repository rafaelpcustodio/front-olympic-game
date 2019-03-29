import { times } from '@constants/times'

import axios from 'axios'

import { config } from '@config'

const API_URL = config.api.url

const http = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: times.THIRDSECONDS
})

const httpMock = [
    {
        id:'1',
        olympic:{'a':'a'},
        olympics:{'b':'b'},
        date: '1'
    },
    {
        id:'2',
        olympic:{},
        olympics:{},
        date: '1'
    }
]


export { http, httpMock }