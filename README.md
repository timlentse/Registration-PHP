### Registration-PHP
This is a Registration System with PHP,JS,Mysql,for demonstrating how to use PDO to handle form data and
using ajax to send data to server.
##### I assume that your machine  meets the following requirements:

```py
 1. PHP5.3 or above
 2. Mysql(or other database)
 3. Apache2  
```

### How to use   
* Create a table   
We should create a table for storing the registration data,the following command is an example.

```sql
  CREATE TABLE IF NOT EXISTS `account` (
    `id` varchar(50) DEFAULT NULL,
    `passwd` varchar(32) DEFAULT NULL,
    `tw` varchar(32) DEFAULT NULL,
    `gplus` varchar(32) DEFAULT NULL,
    `fb` varchar(32) DEFAULT NULL,
    `firstname` varchar(15) DEFAULT NULL,
    `lastname` varchar(15) DEFAULT NULL,
    `phone` varchar(15) DEFAULT NULL,
    `address` varchar(100) DEFAULT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf-8;
```  

* Configure the dbinfo.php file(`srcipt/dbinfo.php`)

```php
   
   //The configuration info for PDO.
    $user   = 'your-database-username';
    $passwd = 'your-database-password';
   //change the following line if necessary
    $dsn    = 'mysql:host=localhost;dbname=registration;';

```

* Make a try   
Go to your browser and type `localhost/Registration-PHP` and you will see a registration form.
Notes: 
  1. You should put the `Registration-PHP` to your web document root folder

  2. Change the permisson of the file if meet 500 error.

### Licences 
Licensed under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0), Version 2.0 (the "License")
