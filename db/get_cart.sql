SELECT * FROM cart
JOIN products ON products.product_id = cart.product_id
WHERE cart.user_id = $1;