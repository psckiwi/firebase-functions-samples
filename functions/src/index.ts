import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });

export const users = functions.https.onRequest((req, res) => {
        let init_users = [
            { "name": "홍길동", "email": "blabla@test.com" },
            { "name": "김길동", "email": "blabla@test.com" },
            { "name": "박길동", "email": "blabla@test.com" },
            { "name": "이길동", "email": "blabla@test.com" },
            { "name": "최길동", "email": "blabla@test.com" },
            { "name": "박세채", "email": "blabla@test.com" }
        ];

        let match_users = init_users.filter(user => {
            return user["name"].indexOf(req.query.name) > -1
        });

        let resData = {
            // "request method": req.method,
            // "request query": req.query,
            // "request body": req.body,
            "startAt": 0,
            "maxResults": 10,
            "total": match_users.length,
            "results": match_users
        };

        res.contentType('application/json')
        res.send(resData);
    })
;
