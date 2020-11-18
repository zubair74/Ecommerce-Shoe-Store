# Ecommerce Shoe Store


Ecommerce Shoe Store app with React JS on the front end (client folder) and Express as server. MongoDB atlas is used as database
Project Description: 
1.Products have been stored in the database and fetched through rest api
2. As users sign up their username and passwords are saved in the database and are used authenticate users when they login later
3. As users add products to cart their products are saved in the database with their username and password and can be fetched when user login from another device
4. Users who are not logged in and add products to cart, their products are saved in database with a unique id and that id is saved in the user's browser. When user reopen browser their cart products are fetched with the help of the stored unique id and displayed
Steps:
1. Clone this repository
2. Create a .env file and insert mongoDb url in it (DB_CONNECT = your mongodb atlas database url)
3. cd Ecommerce-Shoe-Store and npm i
4. Node app.js
5. cd client and npm i
6. npm start

 
