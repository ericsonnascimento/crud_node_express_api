import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  return res.json({mensagem: "Ola Mundo"});
});

app.post('/users', (req, res) => {
  return res.json({mensagem: "Usuário cadastrado com sucesso!"})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});