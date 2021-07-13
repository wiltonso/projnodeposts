



// rotas
const router = express.Router();
router.get('/', (reg, res)=>{
    let obj = {
        nome: 'Wilton',
        idade: 60,
        mostrar: true,
        ingredientes: [
            nome:'Arroz', qtd: '100g',
            nome:'Feijao', qtd: '10g'

        ];
    };
    res.rennder('sobre',obj)
});
