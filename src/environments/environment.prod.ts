export const environment = {
    production: false
  };

export const SpotifyConfiguration = {
    clientId: '8bb1344b2aca4cdb9aba116eb0a9f414',
    authEndPoint: 'https://accounts.spotify.com/authorize',
    redirectUrl: 'https://localhost:4200/login/',
    scopes: [
        "user-read-currently-playing", // musica tocando agora.
        "user-read-recently-played", // ler musicas tocadas recentemente
        "user-read-playback-state", // ler estado do player do usuario
        "user-top-read", // top artistas e musicas do usuario
        "user-modify-playback-state", // alterar do player do usuario.
        "user-library-read", // ler biblioteca dos usuarios
        "playlist-read-private", // ler playlists privads
        "playlist-read-collaborative" // ler playlists colaborativas
    ]
};

//caso vá usar o ambiente prod, trocar o localhost para o de produção