const Picture = require("../models/Picture")

const fs = require("fs")

exports.create = async (req, res) => {

    try {

        const { name } = req.body;

        const file = req.file

        const picture = new Picture(
            {
                name,
                src: file.path,
            }
        )

        await picture.save();

        res.json({ picture, msg: "Imagem salva com sucesso!" })

    } catch (error) {
        res.status(500).json({ message: "Erro ao salvar imagem." })
    }

};


exports.findAll = async (req, res) => {

    try {

        const pictures = await Picture.find()

        res.json(pictures);

    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar imagens!" })
    }
}


exports.remove = async (req, res) => {
    try {

        const picture = await Picture.findById(req.params.id)

        console.log("Tipo de picture:", typeof (picture))
        console.log(picture.id)
        // if (!picture) {
        //     return res.status(404).json({ message: "Imagem não encontrada!" })
        // }

        //fs.unlinkSync(picture.src) // e aqui remove o arquivo da pasta

        await picture.remove(); // remove do banco de dados o registro

        res.json({ message: "Imagem removida com sucesso!" })

    } catch (error) {

        // const picture = await Picture.findById(req.params.id)

        // picture.remove()

        // console.log("Tipo de picture:", typeof (picture))

        res.status(500).json({ message: `Erro ao excluir imagem erro ${error}!` })

    }
};

exports.deleteOne = async (req, res) => {
    const id = req.params.id
    const src = await Picture.findById(id).src

    try {

        const picture = await Picture.findByIdAndDelete(id)

        if (!picture) {
            return res.status(404).json({ message: "Imagem não encontrada!" })
        }

        res.json({ message: "Imagem removida com sucesso!" })

        fs.unlinkSync(src)

    } catch (error) {
        console.error("Erro ao excluir imagem: ", error)
        res.status(500).json({ message: "Erro ao excluir imagem!" })
    }


};