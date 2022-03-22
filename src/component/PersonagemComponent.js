
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PersonagemService from '../service/PersonagemService';

function PersonagemComponent(){
    const [ personagens, setPersonagens] = useState([]);
    

    
    useEffect(() => { 
        getPersonagens()
    }, []) 

    const getPersonagens = async () => {

            await PersonagemService.getPersonagens().then((response) => 
            {setPersonagens(response.data)
            console.log(response.data)}
            ).catch(e => console.log(e))
        }   
        
    const deletePersonagem = async (personagemId) =>
{
    await PersonagemService.deletePersonagem(personagemId)
    .then((response) => {
        getPersonagens();
    }).catch(e => {
        console.log(e);
    })
}

    return (       
               
        <div className='container'>
            <h1 className='text-center'>Lista de Personagens</h1>
            <Link to = "/add-personagem" className = "btn btn-primary mb-2">Add Personagem</Link>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Personagem Id</th>
                        <th>Personagem Nome</th>
                        <th>Personagem Sobrenome</th>
                        <th>Personagem Ocupacao</th>
                        <th>Action</th>
                    </tr>
                    
                </thead>

                <tbody>
                    {
                        personagens.map(
                                (p) =>
                                <tr key = {p.id}>
                                    <td> {p.id}</td>
                                    <td> {p.nome}</td>
                                    <td> {p.sobrenome}</td>    
                                    <td> {p.ocupacao}</td>
                                    <td>
                                    <Link className="btn btn-info" to={`/edit-personagem/${p.id}`} >Update</Link>
                                        <button className='btn btn-danger' onClick={() => deletePersonagem(p.id)} style = {{marginLeft:"10px"}}>Delete</button>
                                    </td>

                                </tr>

                        )
                    }

                </tbody>
            </table>            

        </div>
    )
}

export default PersonagemComponent;