// --create database Systemrepositories

// --create table ITEMS (
// --Code int primary key not null,
// --[Desc] varchar(50),
// --UnitPrice int,
// --Available varchar(10),
// --Saved int, Waiting int,
// --Subscript int,
// --Freq int,
// --[date] date,
// --OrderPercnt decimal(5, 2))
// --insert into items
// --values (2, 'hummer', 61, 20, 10, 12, 50, 5, '2024-04-06', 20),
// --(3, 'pen', 10, 23, 42, 12, 14, 7, '2024-04-06', 20),
// --(4, 'chair', 120, 64, 20, 15, 100, 9, '2024-04-06', 20),
// --(5, 'table', 170, 34, 42, 24, 100, 4, '2024-04-06', 20),
// --(6, 'bottle', 17, 34, 20, 14, 100, 71, '2024-04-06', 20);

// --select  *
// --from costumers

// --create table costumers (
// --custID int primary key,
// --custType varchar(25),
// --freezcode varchar(50),
// --overCount int,
// --custname varchar(20),
// --delivAdress varchar(30),
// --mailaddress varchar(15),
// --creditCars varchar(30),
// --custstatus varchar(20)
// --)

// --SELECT *
// --from costumers

// --insert into costumers
// --values
// -- (123456789, 'Regular', 'None', 0, 'John Doe', '123 Elm St, Springfield', 'john.doe@example.com', '1234-5678-9876-5432', 'Active'),
// --    (999974999, 'Premium', 'Active', 1, 'Jane Smith', '456 Oak St, Springfield', 'jane.smith@example.com', '2345-6789-8765-4321', 'None'),
// --    (987654321, 'Regular', 'Inactive', 2, 'Alice Johnson', '789 Pine St, Springfield', 'alice.johnson@example.com', '3456-7890-7654-3210', 'Expired Membership'),
// --    (999999999, 'VIP', 'Active', 0, 'Bob Brown', '321 Maple St, Springfield', 'bob.brown@example.com', '4567-8901-6543-2109', 'None'),
// --    (125456789, 'Regular', 'Active', 3, 'Charlie Davis', '654 Birch St, Springfield', 'charlie.davis@example.com', '5678-9012-5432-1098', 'Pending Payment'),
// --    (222333444, 'Premium', 'Inactive', 4, 'Diana Green', '987 Cedar St, Springfield', 'diana.green@example.com', '6789-0123-4321-0987', 'Account Suspended'),
// --    (999935999, 'Regular', 'Active', 0, 'Eve White', '135 Spruce St, Springfield', 'eve.white@example.com', '7890-1234-3210-9876', 'None'),
// --    (555666777, 'VIP', 'Active', 1, 'Frank Black', '246 Walnut St, Springfield', 'frank.black@example.com', '8901-2345-2109-8765', 'None'),
// --    (113465789, 'Premium', 'Active', 2, 'Grace Blue', '357 Cherry St, Springfield', 'grace.blue@example.com', '9012-3456-1098-7654', 'None')

// --create table ExOrders (
// --[Date] date,
// --OrderNo int primary key,
// --CustID int ,
// --Code int ,
// --Quant int,
// --Delivery int ,
// --[Address] varchar(20),
// --[Status] varchar(20),
// --SuppDate date,
// --FOREIGN KEY (CustID) REFERENCES costumers(CustID),
// --FOREIGN KEY (Code) REFERENCES ITEMS(Code),
// --FOREIGN KEY (Delivery) REFERENCES DeliveryFees(Delivery)
// --);
// --insert into ExOrders
// --values
// --  ('2024-08-01', 1, 123456789, 1, 10, 1, '123 Elm St', 'P', '2024-08-10'),
// --    ('2024-08-02', 2, 999974999, 2, 5, 3, '456 Oak St', 'C', '2024-08-12'),
// --    ('2024-08-03', 3, 987654321, 3, 15, 4, '789 Pne St', 'P', '2024-08-15'),
// --    ('2024-08-04', 4, 999999999, 4, 7, 4, '321 ple St', 'P', '2024-08-20'),
// --    ('2024-08-05', 5, 125456789, 5, 20, 3, '654 rch St', 'C', '2024-08-22'),
// --    ('2024-08-06', 6, 222333444, 6, 12, 2, '987 Cdar St', 'P', '2024-08-25'),
// --    ('2024-08-07', 7, 999935999, 1, 30, 1, '135 Suce St', 'C', '2024-08-30'),
// --    ('2024-08-08', 8, 555666777, 2, 8, 3, '246 Wnut St', 'P', '2024-09-01'),
// --    ('2024-08-09', 9, 113465789, 3, 14, 4, '357 Cry St', 'C', '2024-09-05')

// 	--select *
// 	--from ExOrders

// --create table invoices(
// --[date] date,
// --orderno int,
// --unitdesc varchar (50),
// --nounits int,
// --unitprice int,
// --invno int primary key,
// --totamount int,
// --FOREIGN KEY (orderno) REFERENCES ExOrders(orderno)
// --)
// --INSERT INTO Invoices
// --VALUES
// --    ('2024-08-01', 1, 'Item A', 10, 20.00, 1, 200.00),
// --    ('2024-08-02', 1, 'Item B', 5, 15.00, 2, 75.00),
// --    ('2024-08-03', 5, 'Item C', 15, 7.50, 3, 112.50),
// --    ('2024-08-04', 4, 'Item D', 7, 25.00, 4, 175.00),
// --    ('2024-08-05', 5, 'Item E', 20, 12.00, 5, 240.00),
// --    ('2024-08-06', 6, 'Item F', 8, 30.00, 6, 240.00),
// --    ('2024-08-07', 2, 'Item G', 12, 22.00, 7, 264.00),
// --    ('2024-08-08', 8, 'Item H', 6, 18.00, 8, 108.00),
// --    ('2024-08-09', 9, 'Item I', 14, 9.00, 9, 126.00);

// --create table Subscription (
// --OrderNo int,
// --[Status] varchar(10),
// --CustID int ,
// --Code int,
// --Quant int,
// --Freq int,
// --Delivery int,
// --NextOrder date,
// --Expiration date,
// --FOREIGN KEY (orderno) REFERENCES ExOrders(orderno),
// --FOREIGN KEY (CustID) REFERENCES costumers(CustID),
// --FOREIGN KEY (Code) REFERENCES items(Code),
// --FOREIGN KEY (delivery) REFERENCES DeliveryFees(delivery)
// ----)
// --INSERT INTO Subscription
// --values
// --    (1, 'Active', 123456789, 1, 10, 1, 1, '2024-08-15', '2024-12-31'),
// --    (2, 'Active', 999974999, 2, 5, 2, 2, '2024-08-20', '2024-11-30'),
// --    (3, 'Expired', 987654321, 3, 15, 3, 3, '2024-09-01', '2024-10-15'),
// --    (4, 'Active', 999999999, 4, 7, 1, 4, '2024-09-10', '2025-01-15'),
// --    (5, 'Pending', 125456789, 5, 20, 2, 5, '2024-09-15', '2024-12-20'),
// --    (6, 'Active', 222333444, 6, 12, 3, 1, '2024-10-01', '2025-02-28'),
// --    (7, 'Cancelled', 999935999, 1, 30, 1, 2, '2024-10-05', '2024-11-30'),
// --    (8, 'Active', 555666777, 2, 8, 2, 3, '2024-10-10', '2025-01-15'),
// --    (9, 'Expired', 113465789, 3, 14, 1, 4, '2024-10-20', '2024-12-15');

// --	select
// --	from

// --create table receipt (
// --pymtDate date,
// --recNo int primary key,
// --invno int,
// --orderNo int,
// --paidAmt int,
// --FOREIGN KEY (invno) REFERENCES invoices(invno),
// --FOREIGN KEY (orderNo) REFERENCES ExOrders(orderNo),
// --INSERT INTO Receipt
// --VALUES
// --    ('2024-08-01', 1, 1, 3, 100.00),
// --    ('2024-08-02', 2, 2, 2, 75.00),
// --    ('2024-08-03', 3, 1, 2, 150.00),
// --    ('2024-08-04', 4, 2, 7, 50.00),
// --    ('2024-08-05', 5, 2, 4, 200.00),
// --    ('2024-08-06', 6, 3, 6, 120.00),
// --    ('2024-08-07', 7, 7, 8, 80.00),
// --    ('2024-08-08', 8, 7, 9, 90.00);

// --create table Accounting(
// --[date] date,
// --amount int,
// --CrdtDebt varchar(20),
// --invno int,
// --orderno int,
// --recNo int,
// --foreign key (invno) references invoices(invno),
// --foreign key (orderno ) references ExOrders(orderno),
// --foreign key (recNo) references receipt(recNo)
// --)
// --INSERT INTO Accounting
// --values
// --    ('2024-08-06', 350.00, 'Debit', 6, 6, 6),
// --    ('2024-08-07', 400.00, 'Credit', 7, 7, 7),
// --    ('2024-08-08', 450.00, 'Debit', 8, 8, 8),
// --    ('2024-08-09', 500.00, 'Credit', 9, 9, 1),
// --    ('2024-08-10', 550.00, 'Debit', 1, 2, 2),
// --    ('2024-08-11', 600.00, 'Credit', 2, 3, 3),
// --    ('2024-08-12', 650.00, 'Debit', 3, 4, 4),
// --    ('2024-08-13', 700.00, 'Credit', 4, 5, 5),
// --    ('2024-08-14', 750.00, 'Debit', 5, 6, 6),
// --    ('2024-08-15', 800.00, 'Credit', 6, 7, 7),
// --    ('2024-08-16', 850.00, 'Debit', 7, 8, 8),
// --    ('2024-08-17', 900.00, 'Credit', 8, 9, 1)

// --create table StockOrder(
// --OrderNo int,
// --StockDate date,
// --Code int,
// --Descr varchar(44),
// --Quant int,
// --foreign key (OrderNo) references ExOrders(OrderNo),
// --foreign key (Code) references items(Code)
// --)
// --INSERT INTO StockOrder
// --values
// --    (6, '2024-08-06', 6, 'Widget F', 350),
// --    (7, '2024-08-07', 1, 'Widget A', 400),
// --    (8, '2024-08-08', 2, 'Widget B', 450),
// --    (9, '2024-08-09', 3, 'Widget C', 500),
// --    (1, '2024-08-10', 4, 'Widget D', 550),
// --    (2, '2024-08-11', 5, 'Widget E', 600),
// --    (3, '2024-08-12', 6, 'Widget F', 650),
// --    (4, '2024-08-13', 1, 'Widget A', 700)

// --create table DeliveryFees (
// --delivery int primary key,
// --[desc] varchar(50),
// --delFee int
// --)
// --insert into DeliveryFees
// --values
// --(1, 'Standard Shipping', 5.99),
// --    (2, 'Express Shipping', 12.99),
// --    (3, 'Overnight Shipping', 19.99),
// --    (4, 'Same Day Delivery', 29.99),
// --    (5, 'Two Day Delivery', 14.99);

// --create table Discounts (
// --custType varchar(20),
// --discnt  decimal(5, 2)
// --)
// --INSERT INTO Discounts
// --VALUES
// --    ('Regular', 5.00),
// --    ('Premium', 10.00),
// --    ('VIP', 15.00),
// --    ('Wholesale', 20.00);

// --create table Numbers(
// --LastOrder int,
// --LastSubsc int,
// --LastStock int,
// --LastReciept int,
// --LastInvoice int
// --)
// --INSERT INTO Numbers
// --VALUES
// --  (30, 25, 19, 15, 17),
// --    (35, 30, 21, 18, 20),
// --    (40, 35, 24, 20, 22),
// --    (45, 40, 27, 23, 25),
// --    (50, 45, 30, 25, 28),
// --    (55, 50, 32, 28, 30)

// --create table Users(
// --userName varchar(20),
// --profilr varchar(15)
// --)
// --INSERT INTO Users
// --VALUES
// -- ('john_doe', 'Admin'),
// --    ('jane_smith', 'User'),
// --    ('alice_johnson', 'Manager'),
// --    ('bob_brown', 'User'),
// --    ('charlie_davis', 'Support')

// --create table Profiles(
// --profile varchar(20),
// --act varchar(130)
// --)
// --ALTER TABLE profiles
// --ALTER COLUMN [profile] varchar(30);

// --INSERT INTO Profiles
// --VALUES
// --    ('Admin', 'Full access to all system functions, including user management and system settings'),
// --    ('Sales', 'Access to sales and order management, limited access to financial reports'),
// --    ('Support', 'Access to customer support tools and issue tracking, view-only access to orders'),
// --    ('Manager', 'Access to managerial reports, ability to oversee sales and support activities'),
// --    ('HR', 'Access to employee records, payroll, and HR-related reports'),
// --    ('Finance', 'Access to financial records, accounting functions, and invoicing')

//----------------------query

// --
// --
// --------------6.1
// select *
// from items

// create procedure allDetailsPerCodeItem
// @input_code int = null
// AS
// begin
// select
// code ,
// [desc] ,
// available ,
// waiting ,
// saved ,
// Subscript,
// freq ,
// UnitPrice ,
// SuppDate
// from items
// where code = @input_code or @input_code is null
// order by code;
// END

// exec allDetailsPerCodeItem @input_code = null;

// ---------6.2

// select *
// from ExOrders

// create procedure ordersNeedToDoneTOW
// @input_status varchar(5) = NULL,
// @input_DATE_FROM date = NULL ,
// @INPUT_suppdate_to date = NULL,
// @input_orderNo int = NULL
// as
// begin
// select
// [Date],
// paidAmt,
// Quant,
// [Status]
// from ExOrders ex
// join receipt rec
// on ex.OrderNo = rec.orderNo
// where
// ([status] = @input_status or @input_status is null)
// and ([date] >= @input_DATE_from or @input_DATE_from is null)
// and (suppdate <= @INPUT_suppdate_to or @INPUT_suppdate_to is null)
// and (ex.orderNo = @input_orderNo OR @input_orderNo IS NULL)
// order by [Date]
//  end

//  exec ordersNeedToDoneTOW @input_status= 'p';

//  ---------6.3
//  SELECT *
//  FROM costumers

//  create procedure customerDetailsPerID
//  @input_custid int
//  as
//  begin
//  select
//  cost.custID,
//  cost.custname,
//  cost.CustStatus,
//  sub.OrderNo,
//  [Status],
//  sub.Quant,
//  sub.Freq
//  from costumers cost
//  join Subscription sub
//  on cost.custID = sub.CustID
//  where cost.custid = @input_custid
//  end
//  go;

// EXEC customerDetailsPerID @input_custid = 125456789;
// EXEC customerDetailsPerID @input_custid = 555666777;

// ------6.4
// I used help

// CREATE procedure profit2 (@date1 date)
//  as
//   SELECT a.OrderNo,RecNo,a.[date],amount,
//   CASE WHEN a.CrdtDebt = 'credit' THEN a.Amount ELSE NULL END AS Income,
//   CASE WHEN a.CrdtDebt = 'debit' THEN a.Amount ELSE NULL END AS Expense
//   FROM Accounting a
//   WHERE  a.Date > = @Date1
//   ORDER BY a.Date;

//   SELECT
//     SUM(CASE WHEN CrdtDebt = 'credit' THEN Amount ELSE 0 END) AS TotalIncome,
//     SUM(CASE WHEN CrdtDebt = 'debit' THEN Amount ELSE 0 END) AS TotalExpense,
//     SUM(CASE WHEN CrdtDebt = 'credit' THEN Amount ELSE 0 END)
//      - SUM(CASE WHEN CrdtDebt = 'debit' THEN Amount ELSE 0 END) AS Balance
//   FROM Accounting
//   WHERE Date >= @Date1;

//  go

// exec profit2 @date1 ='2020-01-01'

// --6.5
// select *
// from ExOrders

// create procedure ordersNeedToDone
// @input_status varchar(5)
// as
// begin
// select
// ex.[Date] [order date],
// ex.SuppDate,
// inv.totamount,
// ex.[Status]
// from ExOrders ex
// join invoices inv
// on ex.OrderNo = inv.orderno
// where ex.[Status] = @input_status
// order by SuppDate
// end
// go

// exec ordersNeedToDone @input_status = 'P';
// exec ordersNeedToDone @input_status = 'c';
