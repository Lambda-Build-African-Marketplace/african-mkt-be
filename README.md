 # baseurl: `https://sauti-mkt.herokuapp.com`


 ## **Get User w/their ID: baseurl/api/users/:id**
 Notes              | Require a body?|
 -------------------|----------------|
 id is the user's id|No
 
 If successful, recieve:

  - Status Code: **200**
  - Object of the user info
    ```
    {
    "id": 1,
    "username": "Jane",
    "email": "Jane@gmail.com",
    "about": "Selling all kinds of corn, grown locally.",
    "store_name": "Jane and the Corn Farm"
    }
    ```


 ## **Get user's items that they posted: baseurl/api/users/:id/items**
 Notes              | Require a body?|
 -------------------|----------------|
 id is the user's id|No
 
 If successful, recieve:

  - Status Code: **200**
  - Array of the user info
    ```
    [
        {
            "id": 2,
            "name": "cracked corn",
            "description": "Sweet yellow cracked corn",
            "city": "Nairobi",
            "country": "Kenya",
            "price": 10.5,
            "photo_url": "https://um-insight.net/downloads/2294/download/africa-outline-hi.png?cb=c3ae26612c9e50a57beca7f3ed64950a&w=540&h=",
            "type": "grain"
        }
    ]
    ```
