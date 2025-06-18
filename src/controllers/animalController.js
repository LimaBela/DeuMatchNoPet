const animalRepo = require('../repositories/Animal');
const especieRepo = require('../repositories/Especie');
const racaRepo = require('../repositories/Raca');
const { safe } = require('../utils');

exports.create = async (req, res) => 
{
    const {nome, data_nasc, comportamento, estado_saude, porte, status, descricao, /*foto, */ especie, raca} = req.body;

    if (!nome || !data_nasc || !comportamento || !estado_saude || !porte || !status || !descricao || /*!foto ||*/ !especie || !raca)
        return res.status(400).send('Campos obrigatórios ausentes');

    const id_doador = req.session.userID;

    const [racaReadErr, racaReadRes] = await safe(racaRepo.readByName({nome_raca: raca}));

    if(racaReadErr)
    {
        console.error('Erro na leitura da raca:', racaReadErr);
        return res.redirect('/animal/create?erro=racaRead');
    }

    let racaCreate;

    if(!racaReadRes)
    {
        console.log('Criando nova raca ', racaReadRes);

        racaCreate = await safe(racaRepo.create({nome_raca: raca}));
        if(racaCreate[0])
        {
            console.error('Erro na criação da raca:', racaCreate[0]);
            return res.redirect('/animal/create?erro=racaRead');
        }

        if(!racaCreate[1] || racaCreate[1].length === 0)
        {
            console.error('Erro na criação da raca:', racaCreate[1]);
            return res.redirect('/animal/create?erro=racaRead');
        }
    }

    const [especieReadErr, especieReadRes] = await safe(especieRepo.readByName({nome_especie: especie}));

    if(especieReadErr)
    {
        console.error('Erro na leitura da especie:', especieReadErr);
        return res.redirect('/animal/create?erro=especieRead');
    }


    let especieCreate;

    if(!especieReadRes || especieReadRes.length === 0)
    {
        console.log('criando nova especie ', especieReadRes);
        
        especieCreate = await safe(especieRepo.create({nome_especie: especie}));

        if(especieCreate[0])
        {
            console.error('Erro na criação da especie:',especieCreate[0]);
            return res.redirect('/animal/create?erro=especieRead');
        }

        if(!especieCreate[1] || especieCreate[1].length === 0)
        {
            console.error('Erro na criação da esécie:', especieCreate[1]);
            return res.redirect('/animal/create?erro=especieRead');
        }
    }

    const id_raca = (racaCreate?.[1]?.id_raca) ?? racaReadRes?.id_raca;
    const id_especie = (especieCreate?.[1]?.id_especie) ?? especieReadRes?.id_especie;

    const [animalErr] = await safe(animalRepo.create({nome, data_nasc, comportamento, estado_saude, porte, status, descricao, foto: null, id_doador, id_especie, id_raca}))

    if(animalErr)
    {
        console.error('Erro no cadastro do animal:', animalErr);
        return res.status(400).send('Erro no cadastro do animal');
    }

    return res.redirect('/meu_perfil');
}

exports.read = async (req, res) => 
{
}

exports.readRacas = async (_, res) => 
{
    const [racaReadErr, racaReadRes] = await safe(racaRepo.read());
    
    if(racaReadErr)
    {
        console.error('Erro na leitura da raca:', racaReadErr);
        return res.status(500).json({ error: 'Erro no servidor ao buscar racas' });
    }

    if(!racaReadRes || racaReadRes.length === 0)
    {
        console.log('Nenhuma raca encontrada: ', racaReadRes);
        return res.json([]);
    }
    
    return res.json(racaReadRes);
}

exports.readEspecies = async (_, res) => 
{
    console.log('>>> [readEspecies] Requisição recebida!');
    const [especieReadErr, especieReadRes] = await safe(especieRepo.read());

    if(especieReadErr)
    {
        console.error('Erro na leitura da especie:', especieReadErr);
        return res.status(500).json({ error: 'Erro no servidor ao buscar espécies' });
    }

    if(!especieReadRes || especieReadRes.length === 0)
    {
        console.log('Nenhuma especie encontrada: ', especieReadRes);
        return res.json([]);
    }

    return res.json(especieReadRes);
}

exports.update = async (req, res) => 
{
}

exports.delete = async (req, res) => 
{
}