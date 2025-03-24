import express from 'express';
import router from './routes';
import { connectDB } from './config/db'; 

const PORT= 3000;
const app = express();

app.use(express.json()); //Middleware para procesar JSON en las solicitudes
app.use('/',router); //Configuracion de rutas

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀Servidor corriendo en el puerto ${PORT}`);
    });
}).catch(error => {
    console.error("No se pudo iniciar el servidor:", error);
});

export default app;