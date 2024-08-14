--q1
select *
from Orders

--q2
select *
from Employees

--q3
select
Region,
HireDate, 
FirstName,
Country
from Employees

--q4
select
OrderDate,
OrderID,
CustomerID
from Orders

--q5
select
ProductID as prold,
ProductName as prodname,
UnitPrice as untpr
from Products

--q6
select
Address as city,
Region as reg
from Employees

--q7
select 
CustomerID,
Address + ' ' + city as fulladdress 
from Customers

--q8
select
FirstName + ' ' + LastName as fullname,
BirthDate + 8 as birthdate,
ReportsTo as #manager
from Employees

--q9
select distinct City
from Employees

--q10
select distinct Country
from Employees

--q11

select distinct Title
from Employees

--q12
select 
country, 
city
from Customers

select distinct country + ' ' + city as new
from Customers

--q13
select
FirstName,
BirthDate,
BirthDate + 5 as newdate
from Employees

--q14
select
ProductName,
UnitPrice,
UnitPrice + 5 as newprice
from Products

--q15
select
ProductID,
ProductName,
UnitPrice,
UnitPrice * 1.165 as upddateprice,
UnitsInStock,
UnitsOnOrder,
UnitsInStock - UnitsOnOrder as rest
from Products

--q16
select
ProductID,
ProductName,
(UnitsInStock - UnitsOnOrder) * UnitPrice as rreststockprice

from Products