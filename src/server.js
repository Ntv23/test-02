const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    title: "NYLON ZIPPER",
    description: "Biểu tượng của sự dẻo dai, bền bỉ.",
    image: "./assets/1.png"
  },
  {
    id: 2,
    title: "PLASTIC ZIPPER",
    description: "Biểu tượng của sự dẻo dai, bền bỉ.",
    image: "./assets/2.png"
  },
  {
    id: 3,
    title: "METAL ZIPPER",
    description: "Biểu tượng của sự dẻo dai, bền bỉ.",
    image: "./assets/3.png"
  },
  {
    id: 4,
    title: "ZIPPER CHAIN",
    description: "Biểu tượng của sự dẻo dai, bền bỉ.",
    image: "./assets/4.png"
  },
  {
    id: 5,
    title: "PULLER",
    description: "Biểu tượng của sự dẻo dai, bền bỉ.",
    image: "./assets/5.png"
  },
  {
    id: 6,
    title: "SẢN PHẨM KHÁC",
    description: "Biểu tượng của sự dẻo dai, bền bỉ.",
    image: "./assets/6.png"
  },
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
