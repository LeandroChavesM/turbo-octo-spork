# 29/8/2026 v0.5 - iniciada

- add pasta services e add storage.js para o controle de ''data'' da aplicação, salvando e carregando mudanças no userData

# 02/9/2026 v0.6 - quase finalizada
- add verificaçao se tem saved.profiles[state.currentProfile], se nao, faz com que o currentProfile seja o currentProfile que esta no state, resolvendo a quebra da mudança de perfil ativo
- add renderProfile para gerar a lista de perfis

# 03/9/2026 v0.6 - quase finalizada
- refactor no renderProfile, usando object.entries pegando a chave e valor com map, permitindo o uso da funçao generica renderList, e adicionado uma mudança no onSelectedProfile e uma verificaçao, fazendo com que pegue a 'key' mesmo que venha uma string ou um objeto de fato como parametro
- leve mudança no estilo adicionando uma margin e padding para desgrudar os nomes do container