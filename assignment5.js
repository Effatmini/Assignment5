//1-------------------------------------------------
// CREATE TABLE Musician (
//     MusicianID INT PRIMARY KEY AUTO_INCREMENT,
//     Name VARCHAR(100) NOT NULL,
//     Street VARCHAR(100),
//     City VARCHAR(50),
//     Phone VARCHAR(20)
// );


// CREATE TABLE Instrument (
//     InstrumentName VARCHAR(50) PRIMARY KEY,
//     MusicalKey VARCHAR(5) NOT NULL
// );



// CREATE TABLE Album (
//     AlbumID INT PRIMARY KEY AUTO_INCREMENT,
//     Title VARCHAR(100) UNIQUE NOT NULL,
//     CopyrightDate DATE,
//     ProducerID INT,
//     FOREIGN KEY (ProducerID) REFERENCES Musician(MusicianID)
// );



// CREATE TABLE Song (
//     SongTitle VARCHAR(100) PRIMARY KEY,
//     Author VARCHAR(100),
//     AlbumID INT,
//     FOREIGN KEY (AlbumID) REFERENCES Album(AlbumID)
// );



// CREATE TABLE Musician_Instrument (
//     MusicianID INT,
//     InstrumentName VARCHAR(50),
//     PRIMARY KEY (MusicianID, InstrumentName),
//     FOREIGN KEY (MusicianID) REFERENCES Musician(MusicianID),
//     FOREIGN KEY (InstrumentName) REFERENCES Instrument(InstrumentName)
// );



// CREATE TABLE Musician_Song (
//     MusicianID INT,
//     SongTitle VARCHAR(100),
//     PRIMARY KEY (MusicianID, SongTitle),
//     FOREIGN KEY (MusicianID) REFERENCES Musician(MusicianID),
//     FOREIGN KEY (SongTitle) REFERENCES Song(SongTitle)
// );





// Relationship

// Musician  Instrument	(Many To Many)	Musician_Instrument table
// Musician  Song	(Many To Many)	Musician_Song table
// Album     Song	(One To Many)	AlbumID FK in Song
// Musician  Album	(One To Many)	ProducerID FK in Album


//2--------------------------------------------------------------------------------


// 1- CREATE TABLE Suppliers (
//     SupplierID INT PRIMARY KEY AUTO_INCREMENT,
//     SupplierName VARCHAR(100),
//     ContactNumber VARCHAR(20)
// );

//  2-CREATE TABLE Products (
//     ProductID INT PRIMARY KEY AUTO_INCREMENT,
//     ProductName VARCHAR(100),
//     Price DECIMAL(10,2),
//     StockQuantity INT,
//     SupplierID INT,
//     FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
// );

// 3-CREATE TABLE Sales (
//     SaleID INT PRIMARY KEY AUTO_INCREMENT,
//     ProductID INT,
//     QuantitySold INT,
//     SaleDate DATE,
//     FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
// );



// 4-ALTER TABLE Products
// ADD Category VARCHAR(50);




// 5-ALTER TABLE Products
// DROP COLUMN Category;




// 6-ALTER TABLE Suppliers
// MODIFY ContactNumber VARCHAR(15);




// 7-ALTER TABLE Products
// MODIFY ProductName VARCHAR(100) NOT NULL;




// 8-INSERT INTO Suppliers (SupplierName, ContactNumber)
// VALUES ('FreshFoods', '01001234567');



// 9-INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID)
// VALUES
// ('Milk', 15.00, 50, 1),
// ('Bread', 10.00, 30, 1),
// ('Eggs', 20.00, 40, 1);



// 10-INSERT INTO Sales (ProductID, QuantitySold, SaleDate)
// VALUES (1, 2, '2025-05-20');



// 11-UPDATE Products
// SET Price = 25.00
// WHERE ProductName = 'Bread';



// 12-DELETE FROM Products
// WHERE ProductName = 'Eggs';



// 13-SELECT p.ProductName, SUM(s.QuantitySold) AS TotalSold
// FROM Products p
// LEFT JOIN Sales s ON p.ProductID = s.ProductID
// GROUP BY p.ProductName;



// 14-SELECT ProductName, StockQuantity
// FROM Products
// ORDER BY StockQuantity DESC
// LIMIT 1;



// 15-SELECT *
// FROM Suppliers
// WHERE SupplierName LIKE 'F%';



// 16-SELECT p.ProductName
// FROM Products p
// LEFT JOIN Sales s ON p.ProductID = s.ProductID
// WHERE s.ProductID IS NULL;



// 17-SELECT p.ProductName, s.SaleDate, s.QuantitySold
// FROM Sales s
// JOIN Products p ON s.ProductID = p.ProductID;



// 18-CREATE USER 'store_manager'@'%' IDENTIFIED BY 'password123';

// GRANT SELECT, INSERT, UPDATE
// ON *.*
// TO 'store_manager'@'%';



// 19-REVOKE UPDATE
// ON *.*
// FROM 'store_manager'@'%';



// 20-GRANT DELETE
// ON Sales
// TO 'store_manager'@'%';
