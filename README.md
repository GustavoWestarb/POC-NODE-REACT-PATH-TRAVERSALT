# POC-NODE-REACT-PATH-TRAVERSALT
Lista de Exercícios 04 da matéria de Desenvolvimento de Sistemas Seguros

Foram criados dois projetos contendo end-points para consulta de arquivos em determinado diretório e download de um arquivo.
O primeiro projeto mostra uma lista de arquivos em uma pasta e conta com um campo onde o usuário informa um desses arquivos e realiza o download.

![](https://github.com/GustavoWestarb/POC-NODE-REACT-PATH-TRAVERSALT/images/files.png)
![](https://github.com/GustavoWestarb/POC-NODE-REACT-PATH-TRAVERSALT/images/consultafiles.png)
![](https://github.com/GustavoWestarb/POC-NODE-REACT-PATH-TRAVERSALT/images/downloadCorreto.png)

Neste caso, o sistema não faz nenhuma validação do caminho do arquivo que foi passado para se fazer o download, então o usuário pode passar um caminho diferente do que os dos arquivos listados fazendo assim donwload de um arquivo que deveria estar inacessível.

![](https://github.com/GustavoWestarb/POC-NODE-REACT-PATH-TRAVERSALT/images/downloadErrado.png)


Já no segundo projeto, é feita uma validação de lista branca no caminho passado para fazer o download conferindo se a imagem é do diretório sendo listado. Caso não seja, uma mensagem de erro é retornada do end point.
![](/images/fileMessage.png)
