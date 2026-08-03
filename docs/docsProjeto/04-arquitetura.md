# Arquitetura

## Visão Geral

Aplicação Single Page (SPA) simples, 100% client-side, sem build step.

```
┌─────────────────────────────────────────────┐
│                  index.html                 │
│         (apenas estrutura base)             │
└─────────────────────┬───────────────────────┘
                      │
        ┌─────────────▼─────────────┐
        │         app.js            │
        │   (ponto de entrada)      │
        └─────────────┬─────────────┘
                      │
     ┌────────────────┼────────────────┐
     │                │                │
┌────▼────┐    ┌──────▼──────┐   ┌─────▼─────┐
│ GameData│    │  UserData   │   │   State   │
│ (fixo)│    │ (mutável)   │   │ (navegação│
└────┬────┘    └──────┬──────┘   │  + UI)    │
     │                │          └─────┬─────┘
     │                │                │
     └────────┬───────┴────────────────┘
              │
       ┌──────▼──────┐
       │     UI      │
       │ (renderers) │
       └──────┬──────┘
              │
       ┌──────▼──────┐
       │   DOM (#app)│
       └─────────────┘
```

## Camadas

### 1. Dados do Jogo (GameData)
- Arquivos estáticos em `js/data/`
- Contêm categorias, sucessos, objetivos e recompensas
- **Imutáveis** durante a execução
- Nunca armazenam progresso

### 2. Dados do Usuário (UserData)
- Progresso, status, observações, datas, favoritos, perfis
- Persistidos no LocalStorage
- Estrutura isolada por perfil

### 3. Estado da Aplicação (State)
- Tela atual (home, categoria, sucesso)
- Perfil ativo
- Filtros e busca ativos
- Não é persistido (exceto o que vai para UserData)

### 4. Serviços
- `storage.js` → LocalStorage
- `profiles.js` → gerenciamento de perfis
- `exportImport.js` → backup/restauração
- `progress.js` → cálculos de progresso
- `search.js` / `filters.js` → utilitários

### 5. UI (Renderers)
- Funções responsáveis por criar e atualizar o DOM
- Recebem dados + estado e devolvem elementos
- Não conhecem LocalStorage diretamente

### 6. App (Orquestrador)
- Inicializa a aplicação
- Carrega dados
- Configura listeners globais
- Coordena navegação entre telas

## Fluxo de Dados

```
Usuário interage
      ↓
Evento (click, input...)
      ↓
Atualiza State / UserData
      ↓
Salva no LocalStorage (quando necessário)
      ↓
Chama função de render correspondente
      ↓
DOM é atualizado
```

## Regras de Dependência

- UI pode depender de State e de dados
- Serviços não dependem de UI
- GameData não depende de nada
- UserData só é modificado pelos serviços e pelo State
- Nenhum módulo de UI deve escrever diretamente no LocalStorage

## Princípios de Design

| Princípio              | Aplicação no projeto                          |
|------------------------|-----------------------------------------------|
| Separação de concerns  | Dados × Estado × UI × Serviços                |
| Single Responsibility  | Cada arquivo tem uma função clara             |
| Imutabilidade          | GameData nunca muda                           |
| Unidirectional flow    | Evento → Estado → Render                      |
| Minimal abstraction    | Sem classes complexas, preferir funções       |

## Persistência

- Apenas UserData é salvo
- Chave principal no LocalStorage: `dofus-tracker-userdata`
- Estrutura versionada para facilitar migrações futuras

## Extensibilidade

Para adicionar uma nova funcionalidade:

1. Definir se afeta GameData, UserData ou apenas UI
2. Criar utilitário/serviço se necessário
3. Atualizar o renderer correspondente
4. Atualizar o State se houver novo estado de UI
5. Documentar no Roadmap e Checklist
