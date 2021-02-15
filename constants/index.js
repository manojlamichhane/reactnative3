const Foods = [
  {
    title: "Burger",
    description: "This is a burger",
    duration: "20m",
    image:
      "data:image/jpeg;base64,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",
    rating: "4",
    price: "$20",
  },
  {
    title: "Momo",
    description: "This is a Momo",
    duration: "24m",
    image:
      "data:image/jpeg;base64,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",
    rating: "3",
    price: "$25",
  },
  {
    title: "Sausage",
    description: "This is a Sausage",
    duration: "42m",
    image:
      "data:image/jpeg;base64,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",
    rating: "5",
    price: "$28",
  },
];

export { Foods };
