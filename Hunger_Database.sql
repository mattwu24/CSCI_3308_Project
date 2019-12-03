DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS food;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS purchases;


--
-- Name: restaurants;
--

CREATE TABLE restaurants (
    id INT PRIMARY KEY,
    restaurant_name VARCHAR(30) NOT NULL,
    restaurant_type VARCHAR(30) NOT NULL,
    address VARCHAR(60),
	  lat DECIMAL(10, 6) NOT NULL,
  	lng DECIMAL(10, 6) NOT NULL,
    avg_price VARCHAR(5),
  	avg_rating FLOAT,
  	num_ratings int,
  	menu INT[] NOT NULL
);

--
-- Name: food;
--

CREATE TABLE food (
	  id INT PRIMARY KEY,
  	item_name VARCHAR(30),
  	price FLOAT
);


--
-- Name: purchases;
--

CREATE TABLE purchases (
    id INT PRIMARY KEY ,
    order_date DATE NOT NULL,
    tip FLOAT,
  	tax FLOAT,
  	delivery FLOAT,
  	order_rating int,
  	food_ids INT[]
);


--
-- Name: clients;
--

CREATE TABLE clients (
    id INT PRIMARY KEY,
  	first_name VARCHAR(30) NOT NULL,
  	last_name VARCHAR(30) NOT NULL,
  	username VARCHAR(30) NOT NULL,
  	hashed_password VARCHAR(50) NOT NULL,
  	purchase_ids INT[]
);



--
-- Data for Name: restaurants;
--

INSERT INTO restaurants VALUES (1, 'Chipotle', 'Mexican', '1650 28th St UNIT 1224, Boulder, CO 80301', 40.016040, -105.257160, '$', 4.2, 26, ARRAY [1, 2, 3, 4]),
                               (2, 'Illegal Pete''s', 'Mexican', '1124 13th St, Boulder, CO 80302', 40.007830, -105.275970, '$', 4.4, 40, ARRAY [5, 6, 7, 8]),
                               (3, 'Boss Lady Pizza', 'Pizza', '1129 13th St, Boulder, CO 80302', 40.007890, -105.276590, '$$', 4.4, 30, ARRAY [9, 10, 11, 12]),
                               (4, 'Thai Avenue', 'Thai', '1310 College Ave, Boulder, CO 80302', 40.007040, -105.275900, '$$', 4.4, 8, ARRAY [13, 14, 15, 16]),
                               (5, 'Pasta Jay''s', 'Italian', '1001 Pearl St, Boulder, CO 80302', 40.007040, -105.275900, '$$$', 4.3, 19, ARRAY [17, 18, 19, 20]);
--
-- Data for Name: food;
--

INSERT INTO food VALUES (1, 'Chicken Burrito', 6.5),
                        (2, 'Vegetarian Burrito', 6.5),
                        (3, 'Fountain Drink', 1.8),
                        (4, 'Salad', 6.0);

INSERT INTO food VALUES (5, 'Chicken Burrito', 6.79),
                        (6, 'Breakfast Burrito', 3.95),
                        (7, 'Cookie', 1.79),
                        (8, 'Fountain Drink', 1.79);

INSERT INTO food VALUES (9, 'The Caesar Salad', 5.0),
                        (10, 'Cheese Slice Pizza', 3.0),
                        (11, 'Pepperoni Slice Pizza', 3.0),
                        (12, 'Build Your Own Pie', 17);

INSERT INTO food VALUES (13, 'Pad Thai', 11.0),
                        (14, 'Green Curry', 11.0),
                        (15, 'Thai Spring Roll', 3.25),
                        (16, 'Entree', 14.89);

INSERT INTO food VALUES (17, 'Burrata Salad', 10.0),
                        (18, 'Marinara Pasta', 10.0),
                        (19, 'Fresh Eggplant Parmagania', 14.5),
                        (20, 'Alfredo Williams', 20.0);


--
-- Data for Name: purchases;
--

INSERT INTO purchases VALUES (1, to_date('20190819','YYYYMMDD'), 1.5, 0.99, 2.0, 5, ARRAY [1, 3]),
                             (2, to_date('20190825','YYYYMMDD'), 0.0, 1.32, 2.0, 4, ARRAY [9, 10, 11]),
                             (3, to_date('20190905','YYYYMMDD'), 2.0, 1.71, 3.0, 4, ARRAY [14, 15]),
                             (4, to_date('20191013','YYYYMMDD'), 4.0, 2.4, 3.0, 5, ARRAY [20]);
--
-- Data for Name: clients;
--

INSERT INTO clients VALUES (1, 'Jacob', 'Stewart', 'jstew554', '', ARRAY [2]),
                           (2, 'Samuel', 'Mitchell', 'burritoboy', '', ARRAY [1]),
                           (3, 'Kara', 'Edwards', 'kubrickwithtwobricks', '', ARRAY [4]),
                           (4, 'Caroline', 'Walker', 'xmascarol', '', ARRAY [3]);

--
--Queries
--

--Get order ids from client id

--WITH pid AS (SELECT purchase_ids FROM clients WHERE id = /*Client ID*/) SELECT food_ids FROM purchases WHERE id = ANY(SELECT unnest(purchase_ids) FROM pid);

--Get food items from order id

--WITH oid AS (SELECT food_ids FROM purchases WHERE id = /*Order ID*/) SELECT item_name FROM food WHERE id = ANY(SELECT unnest(food_ids) FROM oid);

--Get restaurant from order id

--SELECT id FROM restaurants WHERE (SELECT food_ids[1] FROM purchases WHERE id = /*Order ID*/) = ANY(menu);

--Get total cost from order id

--SELECT tip + tax + delivery + (WITH oid AS (SELECT food_ids FROM purchases WHERE id = /*Order ID*/) SELECT SUM(price) FROM food WHERE id = ANY(SELECT unnest(food_ids) FROM oid)) AS total_cost FROM purchases WHERE id = /*Order ID*/;
