import {INVALIDATE_ELEMENTS, RECEIVE_ELEMENTS, REQUEST_ELEMENTS} from "../contsnts";

import {baseURL} from "../contsnts";
import {addData} from "./DataStoreManager";

export const requestLogin = element => ({
    type: REQUEST_ELEMENTS,
});

export const elementSuccess = element => ({
    type: RECEIVE_ELEMENTS,
    element
});

export const elementFailure = error => ({
    type: INVALIDATE_ELEMENTS,
    error
});


export const fetchElements = (input) => async (dispatch) => {
    dispatch(requestLogin(input));
    var uniqid = require('uniqid');

    await fetch(baseURL, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: input

    })
        .then(response => response.json())
        .then(json => {
            if (!!json && !!json.data && json.data.element !== "null") {
                addData({
                    collectionName: "documents", documentID: uniqid(), inputData: input,
                    identifiedUIElement: json.data.element, attributeName: json.data.attribute
                });
            }
            dispatch(elementSuccess(json))
        })
        .catch(error => dispatch(elementFailure(error)))


}




