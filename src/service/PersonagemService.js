import axios from 'axios';

const BASE_URL = "http://localhost:8080/api/personagens";

class PersonagemService {

    getPersonagens(){
       
        return axios.get(BASE_URL);
           
}

    createPersonagem(personagem){
        return axios.post(BASE_URL, personagem);
    }

    getPersonagemById(personagemId){
        return axios.get(BASE_URL + '/' + personagemId);
    }

    updatePersonagem(personagemId, personagem){
        return axios.put(BASE_URL + '/' + personagemId, personagem);
    }

    deletePersonagem(personagemId){
        return axios.delete(BASE_URL + '/' + personagemId);
    }
}

export default new PersonagemService();