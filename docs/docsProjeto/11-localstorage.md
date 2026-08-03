# LocalStorage

## Princípio

Única forma de persistência da aplicação.  
Apenas **UserData** é salvo.

## Chave Principal

```js
const STORAGE_KEY = "dofus-tracker-userdata";
```

## Funções Obrigatórias

### `saveUserData(userData)`
- Recebe o objeto UserData completo
- Faz `JSON.stringify`
- Salva no LocalStorage
- Deve ser chamada após qualquer alteração relevante

### `loadUserData()`
- Lê do LocalStorage
- Faz `JSON.parse`
- Retorna o objeto ou a estrutura padrão se não existir / estiver inválido
- Deve validar a versão e a estrutura básica

## Fluxo Recomendado

```
Alteração no progresso
        ↓
Atualiza o objeto UserData em memória
        ↓
Chama saveUserData()
        ↓
LocalStorage atualizado
```

## Inicialização da Aplicação

```
1. loadUserData()
2. Se não existir → cria estrutura padrão + primeiro perfil
3. Define o perfil ativo
4. Continua a inicialização da UI
```

## Tratamento de Erros

- Se o JSON estiver corrompido → descartar e criar estrutura limpa
- Se a versão for antiga → aplicar migração (futuro) ou resetar com aviso
- Nunca deixar a aplicação quebrar por causa de dados inválidos

## O que NÃO salvar

- GameData
- Estado de navegação (tela atual)
- Filtros temporários
- Texto digitado em campos de busca

## Boas Práticas

1. **Salvar com frequência controlada**  
   Após mudanças importantes (status, notas, favorito, troca de perfil).  
   Evitar salvar a cada tecla digitada em observações (pode usar debounce).

2. **Sempre trabalhar com o objeto em memória**  
   LocalStorage é apenas a camada de persistência.

3. **Não misturar dados**  
   Uma única chave. Não criar várias chaves soltas.

4. **Tamanho**  
   LocalStorage tem limite (~5MB). Para este projeto é mais que suficiente.

## Exemplo de Estrutura Salva

```json
{
  "version": "1.0.0",
  "activeProfileId": "profile-1",
  "profiles": {
    "profile-1": {
      "id": "profile-1",
      "name": "Iop Principal",
      "createdAt": "2026-01-15T10:00:00.000Z",
      "objectives": {
        "obj-001": {
          "status": "completed",
          "notes": "Feito no grupo",
          "completedAt": "2026-01-20",
          "isFavorite": false
        }
      },
      "favoriteAchievements": [],
      "settings": {}
    }
  }
}
```

## Exportação vs LocalStorage

- LocalStorage = persistência automática do dia a dia
- Exportação JSON = backup manual controlado pelo usuário (ver documento de Exportação)
