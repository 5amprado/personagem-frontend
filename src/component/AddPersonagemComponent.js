import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import PersonagemService from '../service/PersonagemService';

const AddPersonagemComponent = () => {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [ocupacao, setOcupacao] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    const saveOrUpdatePersonagem = (e) => {
        e.preventDefault();

        const personagem = {nome, sobrenome, ocupacao};

        if(id){
            PersonagemService.updatePersonagem(id, personagem).then((response) =>{
                navigate('/personagens')
            }).catch(e => console.log(e))
        } else {
            PersonagemService.createPersonagem(personagem).then((response) => {
                console.log(response.data)
                navigate('/personagens')
                
            }).catch(e => console.log(e))
        }
    }

    useEffect(() =>{
        PersonagemService.getPersonagemById(id).then((response) => 
        {
            setNome(response.data.nome)
            setSobrenome(response.data.sobrenome)
            setOcupacao(response.data.ocupacao)
        }).catch(e => console.log(e))
    }, [])

    const titulo = () =>{
        if(id){
            return <h2 className = "text-center">Update Personagem</h2>
        }else{
            return <h2 className = "text-center">Add Personagem</h2>
        }
    }

    return(
        <div>
            <div className = "container">
                <div className="row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       { titulo() }
                       <div className="card-body">
                            <form> 
                                <div className = "form-group mb-2">
                                <label className = "form-label"> Nome :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter sobrenome"
                                        name = "nome"
                                        className = "form-control"
                                        value = {nome}
                                        onChange = {(e) => setNome(e.target.value)}
                                    >
                                    </input>

                                </div>

                                <div className = "form-group mb-2">
                                <label className = "form-label"> Sobrenome :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter sobrenome"
                                        name = "sobrenome"
                                        className = "form-control"
                                        value = {sobrenome}
                                        onChange = {(e) => setSobrenome(e.target.value)}
                                    >
                                    </input>

                                </div>

                                <div className = "form-group mb-2">
                                <label className = "form-label"> Ocupacao :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter ocupacao"
                                        name = "ocupacao"
                                        className = "form-control"
                                        value = {ocupacao}
                                        onChange = {(e) => setOcupacao(e.target.value)}
                                    >
                                    </input>

                                </div>

                                <button className='btn btn-success' onClick={(e) => saveOrUpdatePersonagem(e)}>Submit</button>

                                <Link to="/personagens" className=' btn btn-danger'>Cancel</Link>
                            </form>
                       </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AddPersonagemComponent;