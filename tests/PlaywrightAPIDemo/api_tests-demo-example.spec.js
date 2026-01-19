import { test, expect } from '@playwright/test'

// created this demo using tutorial from https://www.youtube.com/watch?v=EEjyLfp6DoQ&list=PLhW3qG5bs-L9sJKoT1LC5grGT77sfW0Z8&index=15

// of note I had to deviate from the tutorial by adding a header, since they were not previously required

//COMMENTING THIS OUT. reques has changed the API key requirements.. 
// A PUT request is an HTTP method used to create or replace a resource on a server with new data
// test('API DELETE Request', async ({ request }) => {
//     const response = await request.delete('https://reqres.in/api/users/2', {
//         headers: {
//             'x-api-key': 'reqres-free-v1',
//         },

//         data: {
//             "name": "Thomas",
//             "job": "QA Manager"
//         }
//     })
//     expect(response.status()).toBe(204)
// })


//COMMENTING THIS OUT. reques has changed the API key requirements.. 
// A PUT request is an HTTP method used to create or replace a resource on a server with new data
// test('API Put Request', async ({ request }) => {

//     const response = await request.put('https://reqres.in/api/users/2', {
//         headers: {
//             'x-api-key': 'reqres-free-v1',
//         },

//         data: {
//             "name": "Thomas",
//             "job": "QA Manager"
//         }
//     })
//     expect(response.status()).toBe(200)
//     const text = await response.text();
//     expect(text).toContain('QA Manager')
//     expect(text).toContain('Thomas')

//     console.log(await response.json());
// })


//COMMENTING THIS OUT. reques has changed the API key requirements.. 
// A POST request is an HTTP request method used to send data to a server to create or update a resource.
// Data in the body: The data being sent is contained within the body of the HTTP request, not in the URL. This allows for sending larger amounts of data and more sensitive information, as it's not exposed in the URL.

// test('API Post Request', async ({ request }) => {

//     const response = await request.post('https://reqres.in/api/users', {
//         headers: {
//             'x-api-key': 'reqres-free-v1',
//         },

//         data: {
//             "name": "Thomas",
//             "job": "QA Lead"
//         }
//     })

//     expect(response.status()).toBe(201)
//     const text = await response.text();
//     expect(text).toContain('QA Lead')
//     expect(text).toContain('Thomas')

//     console.log(await response.json());
// })

// GET request is an HTTP method used to request data from a specified resource on a web server. 
// It is one of the most common HTTP methods and is primarily used for retrieving information.
// test('API GET Request', async ({ request }) => {
//     const response = await request.get('https://reqres.in/api/users/2', {
//         headers: {
//             'x-api-key': 'reqres-free-v1',
//         },

//         data: {
//             "name": "Thomas",
//             "job": "QA Lead"
//         }
//     })
//     expect(response.status()).toBe(200)
//     const text = await response.text();
//     expect(text).toContain('Janet')

//     console.log(await response.json());
// })

