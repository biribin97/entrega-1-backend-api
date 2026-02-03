import { Router } from "express";

const router = Router();

const products = [];
let idCounter = 1;

// GET /api/products
router.get("/:pid", (req, res) => {
  const productId = Number(req.params.pid);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

// POST /api/products
router.post("/", (req, res) => {
  const { title, price } = req.body;

  // Validaciones
  if (!title || !price) {
    return res.status(400).json({
      error: "title y price son obligatorios"
    });
  }

  const newProduct = {
    id: idCounter++,
    title,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});


export default router;
