const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/database.config');
const productRoutes = require('./routes/product.routes');

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Server is running on port ' + PORT);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
