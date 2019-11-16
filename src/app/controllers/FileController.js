import File from '../models/File';

class FileController {
  async store(req, res) {
    /**
     * originalname: nome do arq que o usuario tem salvo na sua maq
     * filename: nome do arq gerado atraves do multer
     */

    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
