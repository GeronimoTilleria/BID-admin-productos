const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;



// Configuraciones
require('./config/mongoose.config');

app.use(cors());
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );


// Rutas
app.use(require('./routes/product.routes'));

app.listen(port, () => console.log(`Listening on port: ${port}`));