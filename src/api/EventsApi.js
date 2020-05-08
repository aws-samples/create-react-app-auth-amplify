import {API, Auth} from "aws-amplify";
import config from './config';

// TODO Why this doesn't work?
// async function requestData() {
//     return { // OPTIONAL
//         headers: { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` },
//         response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
//         queryStringParameters: {}
//     }
// }

const EventsApi = {
    async getEvents()
    {
        return API.get(config.apiName, config.basePath, { // OPTIONAL
            headers: { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {from: "2000-01-01", to: "2020-12-31"}
        }).then(response => response).catch(error => {
            //TODO catch
        });
    },

    async getEvent(id)
    {
        let path = config.basePath + id;
        return API.get(config.apiName, path, { // OPTIONAL
            headers: { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {}
        }).then(response => response).catch(error => {
            console.log(error.response)
        });
    },

    async deleteEvent(id)
    {
        let path = config.basePath + id;
        return API.del(config.apiName, path, { // OPTIONAL
            headers: { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {}
        }).then(response => response).catch(error => {
            console.log(error.response)
        });
    },

    async updateEvent(currentEvent)
    {
        let path = config.basePath + currentEvent.id;
        let myInit = { // OPTIONAL
            headers: { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            body: currentEvent,

        };
        return API.put(config.apiName, path, myInit).then(response => response).catch(error => {
            console.log(error.response)
        }).catch(error => {
            //TODO catch
        });
    },

    async addEvent(newEvent)
    {
        let myInit = { // OPTIONAL
            headers: { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            body: newEvent,

        };
        return API.post(config.apiName, config.basePath, myInit).then(response => response).catch(error => {
            console.log(error.response)
        }).catch(error => {
            //TODO catch
        });
    }
}
export default EventsApi;