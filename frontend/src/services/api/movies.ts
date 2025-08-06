import axios from "axios";


const instance = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        "Content-Type": "application/json",
    },
})


export async function fetchMoviesDiscover() {

    try {
        const response = await instance.get('/api/movies/discover');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};


export async function fetchMoviesSearchName(nome: string) {

    try { 
        const response = await instance.get('/api/movies/search?query='+nome);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};