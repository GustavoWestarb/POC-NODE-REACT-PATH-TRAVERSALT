import React, { useEffect, useState } from 'react';

import './Main.css';

import api from '../services/api';
import $ from 'jquery';

export default function Mian({ history }){
    const [file, setFile] = useState('');
    const [fileList, setFileList] = useState('');

    useEffect(() => {
        (async function loadFiles() {
            const response = await api.get('/findDocuments');
            if (response.data) {
                setFileList(response.data);
            }
        })();
    })

    async function handleSubmit(e){
        e.preventDefault();
        
        console.log(file)

        const response = await api.get('/downloadDocument', {
            headers: {
                file: file,
            }
        });

        console.log(response);
        var data = "text/json;charset=utf-8," + encodeURIComponent(response.data);

        $('<a id="arquivo" href="data:' + data + '" download="Arquivo.json"></a>').appendTo('#container');
        document.getElementById('arquivo').click();
    }

    return (
        <div className="container-form">
            <div id="container"></div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Digite o caminho do arquivo" 
                    value={file}
                    onChange={e => setFile(e.target.value)}
                />
                <button type="submit">Download</button>
            </form>

            <div>
                {fileList.length > 0 ? (
                <ul>
                    {fileList.map(file => 
                        <li>{file}</li>
                    )}
                </ul>
                ) : ''}
            </div>
        </div>
        
    );
}