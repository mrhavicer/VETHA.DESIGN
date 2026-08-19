const products = {
    flex: {
        name: "Flex Printing",
        description: "High-quality flex printing for shops, events and advertisements.",
        sizes: ["3 × 2 ft", "4 × 3 ft", "6 × 4 ft", "8 × 4 ft", "Custom"]
    },

    frame: {
        name: "Photo Frames",
        description: "Beautiful custom photo frames for your favourite memories.",
        sizes: ["8 × 10 in", "12 × 18 in", "16 × 24 in", "20 × 30 in", "Custom"]
    },

    photo: {
        name: "Photo Printing",
        description: "Sharp and vibrant photo printing in multiple sizes.",
        sizes: ["4 × 6 in", "5 × 7 in", "8 × 10 in", "12 × 18 in", "Custom"]
    },

    banner: {
        name: "Banners & Posters",
        description: "Professional banners and posters for businesses and events.",
        sizes: ["4 × 2 ft", "6 × 3 ft", "8 × 4 ft", "10 × 4 ft", "Custom"]
    },

    design: {
        name: "Graphic Design",
        description: "Professional posters, invitations and custom designs.",
        sizes: ["Poster", "Invitation", "Advertisement", "Banner Design", "Custom"]
    },

    custom: {
        name: "Custom Work",
        description: "Have a special idea? Tell us what you need.",
        sizes: ["Custom Size", "Custom Design"]
    }
};


let currentProduct = "flex";
let currentQuantity = 1;


function openProduct(productKey) {

    const product = products[productKey];

    if (!product) return;

    currentProduct = productKey;

    document.getElementById("product-title").textContent =
        product.name;

    document.getElementById("product-name").textContent =
        product.name;

    document.getElementById("product-description").textContent =
        product.description;

    document.getElementById("product-info").textContent =
        product.description;


    const sizeContainer =
        document.getElementById("size-options");

    sizeContainer.innerHTML = "";


    product.sizes.forEach((size, index) => {

        const button = document.createElement("button");

        button.className = "size";

        if (index === 0) {
            button.classList.add("active");
        }

        button.textContent = size;

        button.onclick = function () {

            document
                .querySelectorAll(".size")
                .forEach(item => {
                    item.classList.remove("active");
                });

            button.classList.add("active");

        };

        sizeContainer.appendChild(button);

    });


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function changeQuantity(amount) {

    currentQuantity += amount;

    if (currentQuantity < 1) {
        currentQuantity = 1;
    }

    document.getElementById("quantity").textContent =
        currentQuantity;
}


function openOrderForm() {

    const modal =
        document.getElementById("order-modal");

    modal.classList.add("active");


    document.getElementById("order-product").value =
        products[currentProduct].name;

    document.getElementById("order-quantity").value =
        currentQuantity;


    const selectedSize =
        document.querySelector(".size.active");

    if (selectedSize) {

        document.getElementById("order-size").value =
            selectedSize.textContent;

    }
}


function closeOrderForm() {

    document
        .getElementById("order-modal")
        .classList.remove("active");
}


/* Close modal when clicking outside */

document
    .getElementById("order-modal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeOrderForm();
        }

    });


/* Order form */

document
    .getElementById("order-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you! Your order request has been received."
        );

        closeOrderForm();

    });