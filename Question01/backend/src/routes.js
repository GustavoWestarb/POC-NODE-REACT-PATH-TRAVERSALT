const express = require('express');
const documentsController = require('./controllers/FindDocumentsControlers');
const downloadDocumentsController = require('./controllers/DownloadDocumentsControlers')

const routes = express.Router();

routes.get('/findDocuments', documentsController.findDocument);
routes.get('/downloadDocument', downloadDocumentsController.downloadFile);

module.exports = routes;