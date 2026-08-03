# GameData

## Princípio

Dados do jogo são **imutáveis**.  
Nunca contêm progresso, status, notas ou qualquer informação do usuário.

## Localização

```
js/data/gameData.js
```

(Pode ser dividido em vários arquivos no futuro se o volume crescer.)

## Estrutura Recomendada

```js
const GameData = {
  categories: [
    {
      id: "cat-001",
      name: "Nome da Categoria",
      description: "Descrição opcional",
      achievements: ["ach-001", "ach-002"] // ou objetos embutidos
    }
  ],

  achievements: [
    {
      id: "ach-001",
      categoryId: "cat-001",
      name: "Nome do Sucesso",
      description: "Descrição completa",
      rewards: [
        { type: "kamas", amount: 10000 },
        { type: "item", name: "Item X" }
      ],
      objectives: [
        {
          id: "obj-001",
          name: "Nome do objetivo",
          description: "Detalhes se necessário"
        }
      ]
    }
  ]
};
```

## Regras de Design dos Dados

| Campo            | Tipo     | Obrigatório | Observação                          |
|------------------|----------|-------------|-------------------------------------|
| `id`             | string   | Sim         | Único e estável                     |
| `name`           | string   | Sim         | Nome exibido                        |
| `description`    | string   | Não         | Pode ser vazio                      |
| `categoryId`     | string   | Sim (sucesso) | Relação com categoria             |
| `rewards`        | array    | Não         | Lista de recompensas                |
| `objectives`     | array    | Sim         | Lista de objetivos do sucesso       |

## IDs

- Usar strings estáveis (`"ach-001"`, `"obj-014"`)
- Nunca usar índices de array como identificador
- IDs não devem mudar entre versões dos dados

## Relacionamentos

Duas abordagens possíveis (escolher uma e manter):

1. **IDs de referência** (recomendado para dados grandes)
   - Categorias têm array de `achievementIds`
   - Sucessos têm `categoryId`

2. **Objetos aninhados**
   - Categoria contém array completo de sucessos
   - Mais simples no início, menos flexível depois

**Recomendação para este projeto:** começar com objetos aninhados se o volume for pequeno. Migrar para IDs de referência se necessário.

## O que NUNCA deve existir no GameData

- `status`
- `completed`
- `notes`
- `completedAt`
- `isFavorite`
- Qualquer campo relacionado a progresso ou usuário

## Versionamento

Incluir no objeto raiz:

```js
const GameData = {
  version: "1.0.0",
  // ...
};
```

Isso facilita futuras migrações se a estrutura dos dados do jogo mudar.

## Fonte dos Dados

- Manualmente curados no início
- Podem ser atualizados conforme o jogo recebe novos sucessos
- Nunca dependem de API externa nesta versão do projeto

## Acesso no Código

```js
// Exemplo de uso
GameData.categories
GameData.achievements
```

Expor como objeto global simples (sem módulos ES6, pois estamos em Vanilla sem build).
