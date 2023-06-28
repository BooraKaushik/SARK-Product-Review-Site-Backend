# SARK Product Review Site - Backend

This Project is Developed as a part of course CS5610. It is Developed by Kaushik Boora, Rahul Reddy Baddam, Sai Sriker Reddy Vootukuri and Abhishek Kumar.
This Repository contains the code for the Backend of SARK Product review site.

## About

SARK Product review site is a website where users can lookup for products and rate them, developed using NodeJS, ExpressJS, JWT, MongoDB technologies on the Backend.
The site essentially uses a Free Open API service that provides product information. This product Information can be stored on Database. This site assumes there are 3 types of users, Customer, Dealer and Admin.
For the Frontend Code of this project Please visit [SARK Product Review Site - Frontend](https://github.com/BooraKaushik/SARK-Product-Review-Site-Frontend)

## Features

This Project Provides the following RESTful APIs,
| API Name | Path | HTTP Verb | Description |
| -------- | ---- | --------- | :---------- |
| Create User | /api/users | Post | Creates a User by taking in info such as first name, last name, email etc. Example body: <pre>{<br>"confirmPassword": "Kaushik@123",<br>"dateOfBirth": "2022-04-11",<br>"email": "kaushik.boo97@gmail.com",<br>"firstName": "Kaushik",<br>"lastName": "Boora",<br>"password": "Kaushik@123",<br>"phone": "(857) 230-5227",<br>"type": "Customer",<br>"address":{<br>"addressLine": "10 Buckley Ave Apt 1",<br>"addressLine2": " mnbh",<br>"city": "Jamaica Plain",<br>"state": "Massachusetts",<br>"zipcode": "02130-2293"}<br>}</pre> |
| -------- | ---- | --------- | ----------- |
| -------- | ---- | --------- | ----------- |
| -------- | ---- | --------- | ----------- |
| -------- | ---- | --------- | ----------- |
| -------- | ---- | --------- | ----------- |
| -------- | ---- | --------- | ----------- |
| -------- | ---- | --------- | ----------- |

## Running the project

Follow the below steps to run the project

1. Clone the Directory.
2. Make sure the MongoDB instance is running.
3. In a terminal move to the cloned directory. Execute the following command `npm start`. This will start the Backend on port 4300.
