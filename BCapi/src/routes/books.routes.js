import {Router} from 'express';

const router = Router();

router.get("/books",(req,res)=>{
    res.send("obteniedno libros");
});

router.post("/books",(req,res)=>{
    res.send("creando un libro");
});

router.get ("/books/:id",(req,res)=>{
    const {id} = req.params;
    res.send(`obteniendo libro con id ${id}`);
});

router.delete("/books/:id",(req,res)=>{
    const {id} = req.params;
    res.send(`eliminando libro con id ${id}`);
});
router.put("/books/:id",(req,res)=>{
    const {id} = req.params;
    res.send(`actualizando libro con id ${id}`);
});
export default router;
