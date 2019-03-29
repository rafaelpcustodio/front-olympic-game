import { List } from 'immutable'

import { http, httpMock } from '@http'

import { handleError, responseWasOK } from '@utils/http'

import OlympicModel from './OlympicModel'

const ROOT_API = '/olympic'

const getAllAPI = () => http.get(ROOT_API)
    .then(({ data, status }) => {
        let response = List()
        if (responseWasOK(status)) {
            data.forEach(item => response = response.push(new TrainModel(item)))
        }
        return response
    }).catch(error => {
        handleError(error)
        throw new Error(error.response.data)
    })

    const saveAPI = payload => {
        const { id } = payload
        if (id) {
            return http.put(ROOT_API, payload)
                .then(({ data, status }) => {
                    if (responseWasOK(status)) {
                        return new OlympicModel(data)
                    }
                    return null
                })
                .catch(error => {
                    handleError(error)
                    throw new Error(error.response.data)
                })
        }
        return http.post(ROOT_API, payload)
            .then(({ data, status }) => {
                if (responseWasOK(status)) {
                    return new OlympicModel(data)
                }
                return null
            })
            .catch(error => {
                handleError(error)
                throw new Error(error.response.data)
            })
    }

    const getAllApiMock = () => {
            let response = List()
            httpMock.forEach(item => response = response.push(new TrainModel(item)))
            console.log('chamou API mockada', response)
            return response
        }



export { getAllAPI, saveAPI, getAllApiMock }