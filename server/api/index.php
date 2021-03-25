<?php 

/*
Reaching out the api address resource should be identified so slug should be parsed into parts
For now Business and Product slugs are defined

GET/business/businessID -> returns <business object> about business or false
POST/business/businessID <business object> -> adds or updates business in db
GET/user/userID -> returns <user object> about user or false
POST/user/userID <user object> -> adds or updates user in db
GET/report/businessID/report?type=pieChart -> returns report on all business'es FBSs as "type" chart
GET/fbs/businessID/fbsID -> returns <feedback subject object> or false, if none
POST/fbs/businessID/fbsID <feedback subject object> -> adds or updates <feedback subject object> in db
GET/fbs/businessID/fbsID/report?type=pieChart -> returns report on FBS as "type" chart

GET/product/productID -> returns <product feedback object> about product or false
POST/product/productID <product feedback object> -> adds or updates feedback on product in db

www.star.it/silpo/cashier

www.star.it/api/business/silpo -> GET -> name, address, logo
www.star.it/api/fbs/silpo/cashier -> POST -> rate, date, 0/1 -> POST endpoint -> save text and picture

*/
require 'classes/Request.php';

$request = new classes\Request;
$request->printRequest();
