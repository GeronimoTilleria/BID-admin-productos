const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;



// Configuraciones
require('./server/config/mongoose.config');

app.use(cors());
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );


// Rutas
app.use(require('./server/routes/product.routes'));

app.listen(port, () => console.log(`Listening on port: ${port}`));