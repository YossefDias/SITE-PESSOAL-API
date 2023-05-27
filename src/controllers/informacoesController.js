const informacoesRepository = require('../repositories/informacoesRepository');

exports.getInformacoes = async (req, res) => {
    const informacoes = await informacoesRepository.getInformacoes();
    res.json(informacoes);
}

exports.createInformacoes = async (req, res) => {
    const informacoes = req.body;
    const newInformacoes = await informacoesRepository.createInformacoes(informacoes);
    res.json(newInformacoes);
}

exports.deleteInformacoes = async (req, res) => {
    // const id = parseInt(req.params.id);
    await informacoesRepository.deleteInformacoes();
    res.json({message: `Informacoes deleted`});
}