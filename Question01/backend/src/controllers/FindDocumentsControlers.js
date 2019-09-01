const fs = require('fs');


module.exports = {

    async findDocument(request, response){

        const folderDirectory = '/Users/gusta/Downloads'

        try {
            if (fs.existsSync(folderDirectory)) {
                return response.json(getFiles(folderDirectory));
            }else{
                return response.json({"erro": "Não foi possível encontrar o arquivo"});    
            }
        } catch (err) {
            return response.json({"erro": err});
        }


        function getFiles (dir, files_){
            files_ = files_ || [];
            var files = fs.readdirSync(dir);

            for (var i in files){
                var name = dir + '/' + files[i];

                if (fs.statSync(name).isDirectory()){
                    getFiles(name, files_);
                } else {
                    files_.push(name);
                }
            }

            return files_;
        }
    },

    async downloadFile(request, response){

        const { file } = request.params;

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