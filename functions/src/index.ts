import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });

export const users = functions.https.onRequest((req, res) => {
    const init_users = [
        { "name": "홍길동", "email": "blabla@company.com" },
        { "name": "김길동", "email": "blabla@company.com" },
        { "name": "박길동", "email": "blabla@company.com" },
        { "name": "이길동", "email": "blabla@company.com" },
        { "name": "최길동", "email": "blabla@company.com" },
        { "name": "박세채", "email": "blabla@company.com" },
        { "name": "Liam", "email": "blabla@company.com" },
        { "name": "Noah", "email": "blabla@company.com" },
        { "name": "Logan", "email": "blabla@company.com" },
        { "name": "Lucas", "email": "blabla@company.com" },
        { "name": "Mason", "email": "blabla@company.com" },
        { "name": "Oliver", "email": "blabla@company.com" },
        { "name": "Elijah", "email": "blabla@company.com" },
        { "name": "Aiden", "email": "blabla@company.com" },
        { "name": "James", "email": "blabla@company.com" }

    ];

    let match_users = [];

    if ("all" === req.query.text.toString().toLowerCase()) {
        match_users = init_users;
    } else {
        match_users = init_users.filter(user => {
            return user["name"].indexOf(req.query.text) > -1
        });
    }

    let resText = "";

    for (const user of match_users) {
        resText += "Name : " + user["name"] + ", " + "Email : " + user["email"] + "\n"
    }

    if (resText.trim().length < 1) {
        resText += "Not Found (Search Keyword : " + req.query.text + ")\n";
        resText += "Type 'all' for all list"
    }

    const resData = {
        "text": resText
    };

    res.contentType('application/json');
    res.send(resData);
});

