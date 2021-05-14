CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(60),
    hash VARCHAR(500)
)

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    price INT,
    img VARCHAR(300)
)

CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    product_id INT REFERENCES products(product_id)
)
