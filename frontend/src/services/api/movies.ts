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
        console.log("fetchMoviesDiscover:  ",response.data)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};


export async function fetchMoviesSearchName(nome: string) {

    try {
        const response = await instance.get('/api/movies/search?query=' + nome);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};



export async function addFavoriteMovie(movieData: any) {
    try {

        const response = await instance.post("/api/favorites", movieData,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao adicionar os dados:", error);
        throw error;
    }
}


export async function removeFavoriteMovie(id: number) {
    try {

        const response = await instance.delete(`/api/favorites/${id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Erro ao remover os dados:", error);
        throw error;
    }
}



export async function fetchFavorites() {
    try {

        const response = await instance.get("/api/favorites", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return response.data;

    } catch (error) {
        console.error("Erro ao buscar os dados favoritos:", error);
        throw error;
    }
}