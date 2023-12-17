const express = require("express");
const app = express();
app.use(express.json());

const books = [
  { id: 1, name: "html-css" },
  { id: 2, name: "javascript" },
  { id: 3, name: "nodejs" },
  { id: 4, name: "express" },
];

app.get("/api/books",(req,res)=>{
  res.send(books)
})

app.delete("/api/books/:id", (req, res) => {
  //kitobni izlab topamiz
  // topilmasa 404 xatosi qaytaramiz
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book)
    return res.status(404).send("Berilgan IDga teng bolgan kitob topilmadi");

  // topilsa uni o'chirib taylaymiz
  const bookIndex = books.indexOf(book);
  books.splice(bookIndex, 1);
  // natijani qaytaramiz
  res.send(book);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port} portni eshitishni boshladim...`);
})