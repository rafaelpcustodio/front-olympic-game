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

export { http }