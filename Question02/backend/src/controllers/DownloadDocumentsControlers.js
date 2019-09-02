const fs = require('fs');

module.exports = {
    async downloadFile(request, response){

        const { file } = request.headers;   

        if (!file.startsWith('/Users/Bruno/Desktop')) {
            return response.json({"erro": "Não é possível realizar o download de um arquivo deste diretório."});
        }

        try {
            if (fs.existsSync(file)) {
                return response.download(file);
            }else{
                return response.json({"erro": "Não foi possível encontrar o arquivo"});
            }
        } catch (err) {
            return response.json({"erro": err});
        }
    }
}