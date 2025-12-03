import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json'
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


// Documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Usar as rotas que criamos
app.use(routes);

app.get('/', (req, res) => {
  res.send('🚀 API Helping Hands Online!');
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando em http://localhost:${PORT}`);
});