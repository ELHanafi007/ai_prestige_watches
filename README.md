# Responsive Watches Website ⌚
## [Watch it on youtube](https://youtu.be/QPxYdbbCjhQ)
### Responsive Watches Website ⌚

- Responsive Watches Website Using HTML CSS & JavaScript
- Smooth scrolling in each section.
- Includes a dark and light mode.
- Developed first with the Mobile First methodology, then for desktop.
- Compatible with all mobile devices and with a beautiful and pleasant user interface.

Join the channel to see more videos like this. [Bedimcode](https://www.youtube.com/c/Bedimcode)

![preview img](/preview.png)







<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rolex Brand Products</title>
    <link rel="stylesheet" href="../assets/css/styles.css"> <!-- Adjust the path as needed -->
</head>
<body>
    <!-- Header Section -->
    <header class="header">
        <div class="container">
            <nav class="navbar">
                <a href="../index.html" class="navbar__logo">Rolex</a> <!-- Adjusted link for relative path -->
                <ul class="navbar__menu">
                    <li><a href="../index.html">Home</a></li> <!-- Adjusted link for relative path -->
                    <li><a href="index.html">Brands</a></li>
                    <li><a href="../products.html">Products</a></li> <!-- Adjusted link for relative path -->
                    <li><a href="../contact.html">Contact</a></li> <!-- Adjusted link for relative path -->
                </ul>
            </nav>
        </div>
    </header>

    <!-- Main Content Section -->
    <main>
        <section class="brands-products section container">
            <h2 class="section__title">Rolex Brand Products</h2>
            <div class="brands-products__container grid">
                <!-- Product 1 -->
                <article class="product__card fancy-card">
                    <div class="product__image-container">
                        <img src="../assets/img/rolex-submariner.jpg" alt="Rolex Submariner" class="product__img">
                    </div>
                    <div class="product__details">
                        <h3 class="product__title">Rolex Submariner</h3>
                        <p class="product__description">
                            The Rolex Submariner is a line of sports watches designed for diving and known for their water resistance and durability. The Submariner has been part of expeditions and professional endeavors, both underwater and on land.
                        </p>
                        <span class="product__price">$10,000</span>
                        <a href="#" class="button product__button">Buy Now</a>
                    </div>
                </article>
                <!-- Product 2 -->
                <article class="product__card fancy-card">
                    <div class="product__image-container">
                        <img src="../assets/img/rolex-daytona.jpg" alt="Rolex Daytona" class="product__img">
                    </div>
                    <div class="product__details">
                        <h3 class="product__title">Rolex Daytona</h3>
                        <p class="product__description">
                            The Rolex Daytona is a high-performance chronograph designed for race car drivers. It is renowned for its precision, reliability, and sleek design, making it a favorite among collectors and enthusiasts.
                        </p>
                        <span class="product__price">$12,000</span>
                        <a href="#" class="button product__button">Buy Now</a>
                    </div>
                </article>
                <!-- Add more products as needed -->
            </div>
        </section>
    </main>

    <!-- Footer Section -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Rolex. All Rights Reserved.</p>
        </div>
    </footer>
</body>
</html>
