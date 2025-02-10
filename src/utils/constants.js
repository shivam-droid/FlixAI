export const TMDB_API_URL = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POSTER_URL = "https://image.tmdb.org/t/p/w780";

export const TMDB_OPTIONS = {
    method: "GET",
    headers: {
    accept: "application/json",
    Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDdmZDYxNGJkYzFiYjU1NWEyZWY3NjUyZDBmNmNkYyIsIm5iZiI6MTczOTAxMTc0Ny41NTAwMDAyLCJzdWIiOiI2N2E3MzZhMzFjMGYzYWJmODdlMDY2ZTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xoXXRmBvDs43Y1VANY23uiwFFKdxPjXejUWL8OBRBDc",
    },
};