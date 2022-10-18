import express from "express";
import bodyParser from 'body-parser';

import productRoutes from './routes/produtos.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/produtos', productRoutes);

app.get('/', (req, res) => res.send('Homepage'));

app.listen(PORT, () => console.log(`Server rodando na porta: ${PORT}`));
