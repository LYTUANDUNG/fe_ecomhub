import product1 from "@/assets/images/products/product1.jpg";
import product2 from "@/assets/images/products/product2.jpg";
import product3 from "@/assets/images/products/product3.jpg";
import product4 from "@/assets/images/products/product4.jpg";
import product5 from "@/assets/images/products/product5.jpg";

export class ProductData {
  static items = [
    {
      id: "1",
      name: "2025 New Wholesale Adjustable Portable Phone Strap",
      description: "A stylish and adjustable phone strap for 2025.",
      categoryId: "cat_accessories",
      price: 1.50,
      status: "available",
      images: [{ id: "img1", uri: product1, createdAt: new Date() }],
      reviews: [{ id: "rev1", userId: "user1", rating: 4, createdAt: new Date() }],
      variants: [
        {
          id: "var1",
          sku: "STRAP-2025-01",
          price: 1.50,
          stock: 100,
          variantStatus: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      name: "High Quality Design Metal Logo Plates for Handbags",
      description: "Durable metal logo plates for handbags.",
      categoryId: "cat_metal",
      price: 0.28,
      status: "available",
      images: [{ id: "img2", uri: product2, createdAt: new Date() }],
      reviews: [{ id: "rev2", userId: "user2", rating: 4, createdAt: new Date() }],
      variants: [
        {
          id: "var2",
          sku: "PLATE-2025-01",
          price: 0.28,
          stock: 500,
          variantStatus: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "3",
      name: "Manufacturer Handbag Engraved Customized Logo",
      description: "Custom engraved logos for handbags.",
      categoryId: "cat_accessories",
      price: 0.18,
      status: "available",
      images: [{ id: "img3", uri: product3, createdAt: new Date() }],
      reviews: [{ id: "rev3", userId: "user3", rating: 4, createdAt: new Date() }],
      variants: [
        {
          id: "var3",
          sku: "LOGO-2025-01",
          price: 0.18,
          stock: 300,
          variantStatus: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "4",
      name: "Wholesale New Style Waterproof Beach Bag",
      description: "Waterproof beach bag for outdoor use.",
      categoryId: "cat_bags",
      price: 2.50,
      status: "available",
      images: [{ id: "img4", uri: product4, createdAt: new Date() }],
      reviews: [{ id: "rev4", userId: "user4", rating: 4, createdAt: new Date() }],
      variants: [
        {
          id: "var4",
          sku: "BAG-2025-01",
          price: 2.50,
          stock: 200,
          variantStatus: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "5",
      name: "Factory Direct Supplier New Bogg Bag",
      description: "High-quality Bogg bag from factory.",
      categoryId: "cat_bags",
      price: 6.10,
      status: "available",
      images: [{ id: "img5", uri: product5, createdAt: new Date() }],
      reviews: [{ id: "rev5", userId: "user5", rating: 4, createdAt: new Date() }],
      variants: [
        {
          id: "var5",
          sku: "BOGG-2025-01",
          price: 6.10,
          stock: 150,
          variantStatus: "active",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
}