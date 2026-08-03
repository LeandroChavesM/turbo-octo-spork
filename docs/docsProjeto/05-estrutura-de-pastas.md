# Estrutura de Pastas

```
dofus-tracker/
│
├── index.html
│
├── css/
│   ├── main.css              # Estilos globais e reset
│   ├── layout.css            # Estrutura de páginas
│   ├── components.css        # Cards, botões, barras, inputs
│   └── utilities.css         # Classes auxiliares (opcional)
│
├── js/
│   ├── app.js                # Ponto de entrada e orquestração
│   │
│   ├── data/
│   │   ├── gameData.js       # Dados imutáveis do jogo
│   │   └── userData.js       # Estrutura e helpers do UserData
│   │
│   ├── state/
│   │   └── state.js          # Estado de navegação e UI
│   │
│   ├── services/
│   │   ├── storage.js        # LocalStorage (save/load)
│   │   ├── profiles.js       # CRUD de perfis
│   │   └── exportImport.js   # Exportar / importar JSON
│   │
│   ├── ui/
│   │   ├── renderHome.js
│   │   ├── renderCategories.js
│   │   ├── renderAchievements.js
│   │   ├── renderObjectives.js
│   │   ├── renderProfiles.js
│   │   ├── renderSearch.js
│   │   ├── renderFilters.js
│   │   └── renderSettings.js
│   │
│   └── utils/
│       ├── progress.js       # Cálculos de progresso
│       ├── search.js         # Lógica de busca
│       ├── filters.js        # Lógica de filtros
│       └── helpers.js        # Funções genéricas
│
└── docs/                     # Esta documentação
    ├── 01-constituicao-do-projeto.md
    ├── 02-prd.md
    ├── 03-roadmap.md
    └── ...
```

## Responsabilidade de Cada Pasta

| Pasta          | Responsabilidade                                      |
|----------------|-------------------------------------------------------|
| `/`            | Apenas `index.html`                                   |
| `css/`         | Todos os estilos. Sem lógica.                         |
| `js/data/`     | Dados estáticos (jogo) e estrutura do UserData        |
| `js/state/`    | Estado volátil da aplicação (navegação, filtros...)   |
| `js/services/` | Lógica de negócio e persistência                      |
| `js/ui/`       | Criação e atualização do DOM                          |
| `js/utils/`    | Funções puras e helpers reutilizáveis                 |
| `docs/`        | Documentação oficial do projeto                       |

## Regras

- Não criar arquivos soltos na raiz além de `index.html`
- Cada arquivo deve ter responsabilidade única
- Preferir mais arquivos pequenos a poucos arquivos grandes
- Nomes de arquivos em camelCase ou kebab-case (escolher um e manter)
- Evitar pastas vazias no repositório final

## Evolução

À medida que o projeto cresce:

- Novos renderers vão para `js/ui/`
- Novos utilitários vão para `js/utils/`
- Novos serviços vão para `js/services/`
- Dados do jogo podem ser divididos em vários arquivos dentro de `js/data/` se necessário (ex: `categories.js`, `achievements.js`)
