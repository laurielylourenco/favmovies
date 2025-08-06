# Fav movies
Esta é uma aplicação de catálogo de filmes que permite buscar filmes na API do The Movie Database (TMDB) e gerenciar uma lista local de favoritos.

## Tecnologias Utilizadas

  * **Backend:** Laravel
  * **Frontend:** React.js
  * **Banco de Dados:** MySQL
  * **Ambiente:** Docker

## Como Rodar o Projeto 

Para rodar este projeto localmente, você precisará ter o Docker e o Docker Compose instalados.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/laurielylourenco/favmovies.git
    cd favmovies
    ```
## API Endpoints

  * `GET /api/movies/search?query={nome_do_filme}`: Busca filmes no TMDB.
  * `GET /api/favorites`: Lista os filmes favoritados.
  * `POST /api/favorites`: Adiciona um filme aos favoritos.
  * `DELETE /api/favorites/{tmdb_id}`: Remove um filme dos favoritos.