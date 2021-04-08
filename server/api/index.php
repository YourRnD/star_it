<?php 

/*
Reaching out the api address resource should be identified so slug should be parsed into parts
For now Business and Product slugs are defined

GET/business/businessID -> returns <business object> about business or false
POST/business/businessID <business object> -> adds or updates business in db
GET/user/userID -> returns <user object> about user or false
POST/user/userID <user object> -> adds or updates user in db
GET/report/businessID/report?type=pieChart -> returns report on all business'es FBOs as "type" chart
GET/fbo/businessID/fboID -> returns <feedback object object> or false, if none
POST/fbo/businessID/fboID <feedback object object> -> adds or updates <feedback object object> in db
GET/fbo/businessID/fboID/report?type=pieChart -> returns report on FBO as "type" chart

GET/product/productID -> returns <product feedback object> about product or false
POST/product/productID <product feedback object> -> adds or updates feedback on product in db

www.star.it/api/business/silpo -> GET -> name, address, logo
www.star.it/api/fbo/silpo/cashier -> POST -> rate, date, 0/1 -> POST endpoint -> save text and picture

*/
require 'classes/Request.php';

$request = new classes\Request;
$request->printRequest();
