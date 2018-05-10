import axios from 'axios';

export const ADD_CRCL = 'add_curriculum';
export const FETCH_CRCLS = 'fetch_curriculums';
export const GET_CRCL = 'get_curriculum';
export const DELETE_CRCL = 'delete_curriculum';
export const UPDATE_CRCL = 'update_curriculum';

const ROOT_URL = 'http://localhost:8080/api/curriculums';

export function fetchCurriculums() {
    const request = axios.get(ROOT_URL);
    return {
        type: FETCH_CRCLS,
        payload: request
    };
}

export function addCurriculum(name, callback) {
    const request = axios.post(ROOT_URL, {
        name: name
    }).then((res) => callback(res));
    return {type: ADD_CRCL, payload: request};
}

export function deleteCurriculum(id, callback) {
    const request = axios.delete(`${ROOT_URL}/${id}`)
        .then((res) => callback(res));
    return {
        type: DELETE_CRCL,
        payload: request
    }
}

export function getCurriculum(id, callback) {
    const request = axios.get(`${ROOT_URL}/${id}`)
    return {
        type: GET_CRCL,
        payload: request
    };
}

export function updateCurriculum(id, name,callback) {
    const request = axios.put(`${ROOT_URL}/${id}`, {
        name: name
    })
        .then((res) => callback(res))
    return {
        type: UPDATE_CRCL,
        payload: request
    };
}
