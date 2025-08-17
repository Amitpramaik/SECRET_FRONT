export interface AddSecretResponse {
    "id": string,
    "createdAt": string,
    "updatedAt": string,
    "active": boolean,
    "title": string,
    "Value": string,
    "createdBy": {
        "id": string,
        "firstName": string,
        "lastName": string,
        "email": string
    }
}