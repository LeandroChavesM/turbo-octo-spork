# UserData

## Princípio

Dados do usuário são **completamente separados** dos dados do jogo.  
Contêm apenas progresso, configurações e informações pessoais.

## Localização

```
js/data/userData.js          → estrutura e helpers
LocalStorage                 → persistência real
```

## Estrutura Recomendada

```js
const UserData = {
  version: "1.0.0",
  activeProfileId: "profile-1",

  profiles: {
    "profile-1": {
      id: "profile-1",
      name: "Meu Personagem",
      createdAt: "2026-01-15T10:00:00.000Z",

      // Progresso por objetivo
      objectives: {
        "obj-001": {
          status: "completed",      // "pending" | "in_progress" | "completed"
          notes: "Feito com grupo",
          completedAt: "2026-01-20",
          isFavorite: false
        },
        "obj-002": {
          status: "in_progress",
          notes: "",
          completedAt: null,
          isFavorite: true
        }
      },

      // Favoritos de sucessos (opcional, se quiser favoritar o sucesso inteiro)
      favoriteAchievements: ["ach-001", "ach-015"],

      // Configurações do perfil (futuro)
      settings: {}
    }
  }
};
```

## Campos por Objetivo

| Campo         | Tipo     | Valores possíveis                  | Padrão     |
|---------------|----------|------------------------------------|------------|
| `status`      | string   | `pending`, `in_progress`, `completed` | `pending` |
| `notes`       | string   | qualquer texto                     | `""`       |
| `completedAt` | string \| null | data ISO ou `YYYY-MM-DD`      | `null`     |
| `isFavorite`  | boolean  | `true` / `false`                   | `false`    |

## Regras Importantes

1. **Chaves são os IDs do GameData**  
   O progresso de um objetivo usa exatamente o mesmo `id` definido no GameData.

2. **Só existe entrada se o usuário interagiu**  
   Não é necessário criar todos os objetivos antecipadamente.  
   Criar a entrada sob demanda (lazy).

3. **Nunca modificar GameData**  
   UserData apenas referencia os IDs.

4. **Um perfil ativo por vez**  
   `activeProfileId` indica qual perfil está sendo usado.

## Helpers Recomendados (em `userData.js`)

- `getObjectiveProgress(profileId, objectiveId)`
- `setObjectiveStatus(profileId, objectiveId, status)`
- `setObjectiveNotes(profileId, objectiveId, notes)`
- `toggleFavorite(profileId, objectiveId)`
- `getOrCreateObjectiveEntry(profileId, objectiveId)`

## Inicialização

Ao criar um novo perfil:

```js
{
  id: "profile-xxx",
  name: "Nome escolhido",
  createdAt: new Date().toISOString(),
  objectives: {},
  favoriteAchievements: [],
  settings: {}
}
```

## Versionamento

O campo `version` permite futuras migrações de estrutura.

Exemplo de migração futura:
- Se a estrutura mudar, verificar a versão salva e transformar os dados antigos.

## O que NÃO deve existir no UserData

- Nomes de sucessos ou categorias (sempre buscar no GameData)
- Descrições
- Recompensas
- Qualquer dado que já exista no GameData
