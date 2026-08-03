# Organização do JavaScript

## Princípio

Código modular, legível e fácil de expandir.  
Funções pequenas.  
Responsabilidade única por arquivo.

## Ordem de Carregamento (scripts no HTML)

1. Dados (`gameData.js`, `userData.js`)
2. Estado (`state.js`)
3. Serviços (`storage.js`, `profiles.js`, ...)
4. Utils (`progress.js`, `search.js`, ...)
5. UI (todos os `render*.js`)
6. App (`app.js`) — sempre por último

## Responsabilidade por Pasta

### `js/data/`
- `gameData.js` → dados imutáveis do jogo
- `userData.js` → estrutura inicial e helpers de UserData

### `js/state/`
- `state.js` → objeto de estado da aplicação (tela atual, perfil ativo, filtros, busca)

### `js/services/`
- Lógica de negócio e efeitos colaterais (LocalStorage, export, perfis)

### `js/ui/`
- Apenas criação e atualização do DOM
- Recebem dados e devolvem ou inserem elementos
- Não salvam no LocalStorage diretamente

### `js/utils/`
- Funções puras (cálculos, filtros, buscas, helpers)

### `js/app.js`
- Inicialização
- Ligação entre módulos
- Event listeners globais
- Coordenação de navegação

## Padrões de Código

### 1. Funções pequenas
```js
// Bom
function createCategoryCard(category) { ... }
function renderCategoryList(categories) { ... }

// Evitar
function doEverything() { ... }
```

### 2. Nomes claros
- Verbos para funções: `render`, `create`, `update`, `save`, `load`, `calculate`
- Substantivos para dados: `categories`, `achievements`, `currentProfile`

### 3. Evitar variáveis globais desnecessárias
- Expor apenas o necessário via objetos ou funções
- Preferir módulos simples (objetos com métodos) em vez de muitas variáveis soltas

### 4. Comentários
- Apenas quando a intenção não for óbvia
- Evitar comentários que apenas repetem o código

### 5. Tratamento de erros
- Validar dados ao carregar do LocalStorage
- Fallbacks simples quando algo estiver ausente

## Fluxo Típico de uma Interação

```
1. Usuário clica em um elemento
2. Event listener captura o evento
3. Atualiza o State e/ou UserData
4. Chama serviço de storage (se necessário)
5. Chama a função de render correspondente
6. DOM é atualizado
```

## Exemplo de Estrutura de um Renderer

```js
// js/ui/renderCategories.js

function createCategoryCard(category) {
  // cria e retorna o elemento
}

function renderCategories(categories, container) {
  container.innerHTML = '';
  categories.forEach(cat => {
    const card = createCategoryCard(cat);
    container.appendChild(card);
  });
}
```

## Regras de Dependência

- UI pode usar State, GameData e Utils
- UI **não** deve chamar LocalStorage diretamente
- Serviços podem usar UserData e State
- Utils devem ser o mais puros possível (sem efeitos colaterais)

## O que evitar

- Código monolítico em `app.js`
- Manipulação de DOM espalhada por vários arquivos sem padrão
- Duplicação de lógica de criação de elementos
- Uso de `innerHTML` com dados do usuário sem cuidado (preferir `createElement` + `textContent`)

## Evolução

Quando um arquivo de UI ficar muito grande:

1. Extrair funções auxiliares para o próprio arquivo
2. Se ainda estiver grande, dividir em arquivos menores (ex: `renderAchievementCard.js`)
3. Manter a pasta `ui/` organizada
