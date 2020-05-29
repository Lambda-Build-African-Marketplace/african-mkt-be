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
## **baseurl/api/users/:id**
  Notes              | Description                      | Requires a body?| CRUD Operation |
 --------------------|----------------------------------|-----------------|----------------|
 id is the user's id |Deletes a user                    |      No         |      DELETE    |         
 

 If successful, recieve:

  - Status Code: **204**





## **baseurl/api/items/:user_id**

  Notes                   | Description                      | Requires a body?| CRUD Operation |
 -------------------------|----------------------------------|-----------------|----------------|
 user_id is the user's id |User posts an item                |      Yes        |      POST      |
 
 

  *Example of Body (for user with id of 3):*
   - ```
        {
            "name":"hay",
            "description": "Organic hay from bermuda grass",
            "city": "Nairobi",
            "country": "Kenya",
            "price": 20
        }
     ```


 If successful, recieve:

  - Status Code: **201**
  - An object of the updated item (note the id here is the item ID)
    ```
    {
        "id": 5,
        "name": "hay",
        "description": "Organic hay from bermuda grass",
        "city": "Nairobi",
        "country": "Kenya",
        "price": 20,
        "photo_url": "https://um-insight.net/downloads/2294/download/africa-outline-hi.png?cb=c3ae26612c9e50a57beca7f3ed64950a&w=540&h=",
        "created_at": "2020-05-27 17:27:00",
        "category_id": null
    }
    ```


## **baseurl/api/items**
  Notes              | Description                      | Requires a body?| CRUD Operation |
 --------------------|----------------------------------|-----------------|----------------|
 None                |Get all items in the database     |         No      |      GET       |         

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


## **baseurl/api/items/:id**
  Notes              | Description                       | Requires a body?| CRUD Operation |
 --------------------|-----------------------------------|-----------------|----------------|
 id is the item id   |Get a specific item in the database|         No      |      GET       |         
 


 If successful, recieve:

  - Status Code: **200**
  - Object of the item
    ```
    {
        "id": 5,
        "name": "hay",
        "description": "Organic hay from bermuda grass",
        "city": "Nairobi",
        "country": "Kenya",
        "price": 20,
        "photo_url": "https://um-insight.net/downloads/2294/download/africa-outline-hi.png?cb=c3ae26612c9e50a57beca7f3ed64950a&w=540&h=",
        "created_at": "2020-05-27 17:27:00",
        "category_id": null
    }

    ```


## **baseurl/api/categories**
 Notes              | Description       | Requires a body?| CRUD Operation |
 -------------------|-------------------|-----------------|----------------|
 None               |Get all categories |      No         |     GET        |
 

 If successful, recieve:

  - Status Code: **200**
  - An array of objects of the categories within the database
    ```
    [
        {
            "id": 1,
            "type": "grain"
        },
        {
            "id": 2,
            "type": "sugar"
        }
    ]
    ```


## **baseurl/api/categories/:id**
 Notes                  | Description       | Requires a body?| CRUD Operation |
 -----------------------|-------------------|-----------------|----------------|
 id is the category id  |Get category by id |      No         |     GET        |
 

 If successful, recieve:

  - Status Code: **200**
  - An object of the category
    ```
    {
        "id": 1,
        "type": "grain"
    }
    ```

## **baseurl/api/categories**
 Notes                  | Description        | Requires a body?| CRUD Operation |
 -----------------------|--------------------|-----------------|----------------|
 Requires a 'type' field|Post a new category |      Yes        |     POST       |
 

 If successful, recieve:

  - Status Code: **200**
  - An object of the new category
    ```
    {
        "id": 4,
        "type": "candy"
    }
    ```

## **baseurl/api/categories/:id**
 Notes                  | Description          | Requires a body?| CRUD Operation |
 -----------------------|----------------------|-----------------|----------------|
 id is the category id  |Delete category by id |      No         |     DELETE     |
 

 If successful, recieve:

  - Status Code: **200**
   

