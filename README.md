 # Baseurl: `https://sauti-mkt.herokuapp.com`


 ## **baseurl/api/users/:id**
 Notes              | Description       | Requires a body?| CRUD Operation |
 -------------------|-------------------|-----------------|----------------|
 id is the user's id|Get User w/their ID|      No         |     GET        |
 

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


 ## **baseurl/api/users/:id/items**

  Notes              | Description                      | Requires a body?| CRUD Operation |
 --------------------|----------------------------------|-----------------|----------------|
 id is the user's id |Get user's items that they posted |      No         |      GET       |
 
 

 If successful, recieve:

  - Status Code: **200**
  - Array of the user's items 
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

 ## **baseurl/api/users/:id**
  Notes              | Description                      | Requires a body?| CRUD Operation |
 --------------------|----------------------------------|-----------------|----------------|
 id is the user's id |Update any field in user table    |      Yes        |      PUT      |         
 

 *Example of Body (for user with id of 4):*
   - ```
    {
        "store_name": "Lambda's Lammas",
        "about": "A South African native raising llamas for making textiles"
    }
    ```

 If successful, recieve:

  - Status Code: **200**
  - Object of the updated user's info
    ```
    {
    "id": 4,
    "username": null,
    "email": "Lambda@gmail.com",
    "about": "A South African native raising llamas for making textiles",
    "store_name": "Lambda's Lammas"
    }
    ```


     ## **baseurl/api/items**
  Notes              | Description                      | Requires a body?| CRUD Operation |
 --------------------|----------------------------------|-----------------|----------------|
                     |Get all items in the database     |         No      |      GET      |         
 


 If successful, recieve:

  - Status Code: **200**
  - Arrray of objects of all the items
    ```
    [
        {
            "id": 1,
            "name": "honey",
            "description": "USDA Organic honey",
            "city": "Nairobi",
            "country": "Kenya",
            "price": 10.5,
            "photo_url": "https://um-insight.net/downloads/2294/download/africa-outline-hi.png?cb=c3ae26612c9e50a57beca7f3ed64950a&w=540&h=",
            "created_at": "2020-05-27 03:46:23",
            "category_id": 2
        },
        {
            "id": 2,
            "name": "cracked corn",
            "description": "Sweet yellow cracked corn",
            "city": "Nairobi",
            "country": "Kenya",
            "price": 10.5,
            "photo_url": "https://um-insight.net/downloads/2294/download/africa-outline-hi.png?cb=c3ae26612c9e50a57beca7f3ed64950a&w=540&h=",
            "created_at": "2020-05-27 03:46:23",
            "category_id": 1
        }
    ]
    ```