import express from 'express';
const app = express();


app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));


app.listen(4000, ()=> {
    console.log(" JE SUIS MIGUEL ANGEL OLIVARES HERNADEZ ET LE DEPOT  EST  DEMARRE")
})
export default app;
