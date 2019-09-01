import React, { useEffect, useState } from 'react'

import './Main.css'

import api from '../services/api';

export default function Mian({ history }){
    const [file, setFile] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        
        console.log(file)

        const response = await api.get('/downloadDocument', {
            headers: {
                file: file,
            }
        });

        console.log(response);
    }

    return (
        <div className="container-form">
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Digite o caminho do arquivo" 
                    value={file}
                    onChange={e => setFile(e.target.value)}
                />
                <button type="submit">Download</button>
            </form>
        </div>
    );
}