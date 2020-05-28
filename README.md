# african-mkt-be



 baseurl: `https://sauti-mkt.herokuapp.com`


 **Get User w/their ID: baseurl/api/users/:id**
 Notes              | Require a body?|
 -------------------|----------------|
 id is the user's id|No
 
 If successful, recieve:

  - Status Code: **200**
  - Object of the user info
    ```{
    "id": 1,
    "username": "Jane",
    "email": "Jane@gmail.com",
    "about": "Selling all kinds of corn, grown locally.",
    "store_name": "Jane and the Corn Farm"
    }
    ```
