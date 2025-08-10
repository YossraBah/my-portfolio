export const ProductService = {
  getProductsData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        title: "Professional Scrum Master™ (PMS 1)",
        date: "14 Juin 2024",
        description: "Product Description",
        image: "blog-1.PNG",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        title: "Microsoft Azure Fundamentals",
        date: " 26 Déc 2024",
        description: "Product Description",
        image: "blog-2.PNG",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
      },
    ];
  },

  getClientsData() {
    return [
      {
        id: "1",
        name: "Google",
        image: "google.svg",
      },
      {
        id: "2",
        name: "Dribbble",
        image: "dribbble.svg",
      },
      {
        id: "3",
        name: "LinkedIn",
        image: "linkedin.svg",
      },
      {
        id: "4",
        name: "Amazon",
        image: "amazon.svg",
      },
      {
        id: "5",
        name: "Medium",
        image: "medium.svg",
      },
      {
        id: "6",
        name: "Spotify",
        image: "spotify.svg",
      },
    ];
  },
  getTestimonialData() {
    return [
      {
        id: "1",
        text: "“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.Morbi ornare elit at libero suscipit porta.”",
        userName: "Esther Howard",
        userPost: "Managing Director",
        userCompany: "ABC Company",
      },
      {
        id: "2",
        text: "“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed.”",
        userName: "Esther Howard",
        userPost: "Managing Director",
        userCompany: "ABC Company",
      },
      {
        id: "3",
        text: "“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in.”",
        userName: "Esther Howard",
        userPost: "Managing Director",
        userCompany: "ABC Company",
      },
    ];
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },
  getClientsHome() {
    return Promise.resolve(this.getClientsData().slice(0, 6));
  },
  getTestimonials() {
    return Promise.resolve(this.getTestimonialData().slice(0, 3));
  },
};
