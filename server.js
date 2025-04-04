import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
const upload = multer();

app.use(cors());
app.use(express.json());

app.post("/api/generate-prompt", upload.single("photo"), async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded." });

  // Aqui você pode trocar pelo seu modelo real
  const fakePrompt = `Imagine uma boneca com cabelo castanho, vestida com um vestido azul, segurando um violão.`;
  res.json({ prompt: fakePrompt });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API online na porta", PORT);
});
