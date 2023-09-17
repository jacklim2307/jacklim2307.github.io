let products = {
    data: [{
            productName: "High Quality Jaket Men Windproof Jacket and ...",
            category: "Fashion",
            price: "19.49",
            image: "image/Fashion1.jpg",
            url: "Fashion1.html"
        },
        {
            productName: "1.8L Mini Rice Cooker Multifunction Pot ...",
            category: "HomeAppliances",
            price: "15.74",
            image: "image/HomeAppliances1.jpg",
            url: "HomeAppliances1.html"
        },
        {
            productName: "skinny fit denims jeans",
            category: "Fashion",
            price: "19.99",
            image: "image/Fashion2.jpg",
            url: "Fashion2.html"
        },
        {
            productName: "Basic Knitted Top",
            category: "Watch",
            price: "7.30",
            image: "image/Watch1.jpg",
            url: "Watch1.html"
        },
        {
            productName: "Apple iPhone 14 Pro Max",
            category: "MobileGadget",
            price: "4,949.00 - RM7,449.00",
            image: "image/Mobile1.jpg",
            url: "Mobile1.html"
        },
        {
            productName: "Korean Vest Men Trend Sport Vest Tactical ...",
            category: "Fashion",
            price: "14.81",
            image: "image/Fashion3.jpg",
            url: "Fashion3.html"
        },
        {
            productName: "Xiaomi 11 Lite 5G NE(8GB+128GB/256GB)",
            category: "MobileGadget",
            price: "1599.0",
            image: "image/Mobile2.jpg",
            url: "Mobile2.html"
        },
        {
            productName: "Fashion Men Jogger Pants Plus Size ...",
            category: "Fashion",
            price: "14.95",
            image: "image/Fashion4.jpg",
            url: "Fashion4.html"
        },
        {
            productName: "FRESHAIR Mini Air Humidifier Air Diffuser ...",
            category: "HomeAppliances",
            price: "5.90",
            image: "image/HomeAppliances2.jpg",
            url: "HomeAppliances2.html"
        },
        {
            productName: "M4 Smart Bracelet Sport Fitness Tracker ...",
            category: "Watch",
            price: "13.50 - RM19.99",
            image: "image/Watch2.jpg",
            url: "Watch2.html"
        }, {
            productName: "Mini Fan Kipas Small Cooling Handy Desk ...",
            category: "HomeAppliances",
            price: "9.50",
            image: "image/HomeAppliances3.jpg",
            url: "HomeAppliances3.html"
        },
        {
            productName: "POCO F5(8/12+256GB) Smartphone/SD ...",
            category: "MobileGadget",
            price: "1,699.00 - RM1,799.00",
            image: "image/Mobile3.jpg",
            url: "Mobile3.html"
        },

    ],
};

for (let i of products.data) {
    // Create Card
    let card = document.createElement("div");
    // Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");

    // Anchor element
    let anchor = document.createElement("a");
    anchor.setAttribute("href", i.url);

    // Image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // Image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);

    // Append the imgContainer to the anchor
    anchor.appendChild(imgContainer);

    // Container
    let container = document.createElement("div");
    container.classList.add("container");

    // Product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    // Price
    let price = document.createElement("h6");
    price.innerText = "RM" + i.price;
    container.appendChild(price);

    // Append the container to the anchor
    anchor.appendChild(container);

    // Append the anchor to the card
    card.appendChild(anchor);

    // Append the card to the products container
    document.getElementById("products").appendChild(card);
}



//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        //check if value equals innerText
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
        //display all cards on 'all' button click
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //Check if element contains category class
            if (element.classList.contains(value)) {
                //display element based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    filterProduct("all");
    
    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //display matching card
            cards[index].classList.remove("hide");
        } else {
            //hide others
            cards[index].classList.add("hide");
        }
    });
});

//Initially display all products
window.onload = () => {
    filterProduct("all");
};

// Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const categoryParam = urlParams.get('category');

// Filter products based on the query parameter
window.onload = () => {
    if (categoryParam) {
        filterProduct(categoryParam);
    } else {
        filterProduct('all'); // Default to showing all products if no category parameter is provided
    }
};
