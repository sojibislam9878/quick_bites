// app/api/restaurants/route.js (for app directory routing)
// or
// pages/api/restaurants.js (for pages directory routing)

const restaurants =[
    {
      "name": "The Gourmet Kitchen",
      "about_us": "The Gourmet Kitchen offers a fine dining experience with a menu that blends global flavors with locally sourced ingredients. Our chefs are passionate about creating dishes that not only satisfy the palate but also tell a story through every bite.",
      "slug": "the-gourmet-kitchen",
      "banner_image": "https://example.com/images/gourmet-kitchen-banner.jpg",
      "address": {
        "street": "123 Fine Dine Street",
        "city": "San Francisco",
        "state": "CA",
        "zip_code": "94110",
        "country": "USA"
      },
      "working_hours": {
        "monday": "10:00 AM - 10:00 PM",
        "tuesday": "10:00 AM - 10:00 PM",
        "wednesday": "10:00 AM - 10:00 PM",
        "thursday": "10:00 AM - 10:00 PM",
        "friday": "10:00 AM - 11:00 PM",
        "saturday": "9:00 AM - 11:00 PM",
        "sunday": "9:00 AM - 9:00 PM"
      }
    },
    {
      "name": "Urban Eatery",
      "about_us": "Urban Eatery is a trendy, casual restaurant that specializes in serving comfort food with a modern twist. Our menu is designed to cater to foodies who enjoy trying unique flavors in a relaxed and urban environment.",
      "slug": "urban-eatery",
      "banner_image": "https://example.com/images/urban-eatery-banner.jpg",
      "address": {
        "street": "456 Downtown Ave",
        "city": "Los Angeles",
        "state": "CA",
        "zip_code": "90015",
        "country": "USA"
      },
      "working_hours": {
        "monday": "11:00 AM - 9:00 PM",
        "tuesday": "11:00 AM - 9:00 PM",
        "wednesday": "11:00 AM - 9:00 PM",
        "thursday": "11:00 AM - 10:00 PM",
        "friday": "11:00 AM - 11:00 PM",
        "saturday": "10:00 AM - 11:00 PM",
        "sunday": "10:00 AM - 8:00 PM"
      }
    },
    {
      "name": "Bella Italia",
      "about_us": "Bella Italia brings the authentic flavors of Italy to your table. We serve traditional Italian dishes made with the freshest ingredients and a whole lot of love. Join us for a cozy dining experience reminiscent of a trattoria in the heart of Italy.",
      "slug": "bella-italia",
      "banner_image": "https://example.com/images/bella-italia-banner.jpg",
      "address": {
        "street": "789 Pasta Lane",
        "city": "New York",
        "state": "NY",
        "zip_code": "10001",
        "country": "USA"
      },
      "working_hours": {
        "monday": "12:00 PM - 10:00 PM",
        "tuesday": "12:00 PM - 10:00 PM",
        "wednesday": "12:00 PM - 10:00 PM",
        "thursday": "12:00 PM - 10:00 PM",
        "friday": "12:00 PM - 11:00 PM",
        "saturday": "11:00 AM - 11:00 PM",
        "sunday": "11:00 AM - 9:00 PM"
      }
    },
    {
      "name": "Spice Route",
      "about_us": "Spice Route takes you on a culinary journey through the rich and diverse flavors of Asia. From bold curries to delicate dim sum, our menu showcases the best of Asian cuisine, expertly crafted by our team of experienced chefs.",
      "slug": "spice-route",
      "banner_image": "https://example.com/images/spice-route-banner.jpg",
      "address": {
        "street": "321 Flavor Blvd",
        "city": "Chicago",
        "state": "IL",
        "zip_code": "60605",
        "country": "USA"
      },
      "working_hours": {
        "monday": "11:30 AM - 9:30 PM",
        "tuesday": "11:30 AM - 9:30 PM",
        "wednesday": "11:30 AM - 9:30 PM",
        "thursday": "11:30 AM - 10:00 PM",
        "friday": "11:30 AM - 11:00 PM",
        "saturday": "11:00 AM - 11:00 PM",
        "sunday": "11:00 AM - 9:00 PM"
      }
    },
    {
      "name": "Green Leaf Café",
      "about_us": "Green Leaf Café is a vegan and vegetarian-friendly spot offering a menu filled with fresh, organic ingredients. Whether you're looking for a hearty salad, a wholesome grain bowl, or a delicious smoothie, we've got something for everyone.",
      "slug": "green-leaf-cafe",
      "banner_image": "https://example.com/images/green-leaf-cafe-banner.jpg",
      "address": {
        "street": "654 Eco Street",
        "city": "Portland",
        "state": "OR",
        "zip_code": "97201",
        "country": "USA"
      },
      "working_hours": {
        "monday": "9:00 AM - 8:00 PM",
        "tuesday": "9:00 AM - 8:00 PM",
        "wednesday": "9:00 AM - 8:00 PM",
        "thursday": "9:00 AM - 9:00 PM",
        "friday": "9:00 AM - 9:00 PM",
        "saturday": "9:00 AM - 9:00 PM",
        "sunday": "9:00 AM - 7:00 PM"
      }
    }
  ]
  
;
  
  export default function handler(req, res) {
    // Send the restaurants data as a JSON response
    res.status(200).json(restaurants);
  }
  