# Perfis

## Objetivo

Permitir que o usuário gerencie múltiplos personagens com progresso completamente isolado.

## Conceitos

- **Perfil** = um personagem
- **Perfil ativo** = o personagem cujo progresso está sendo visualizado e editado no momento
- Progresso de um perfil nunca afeta outro

## Estrutura de um Perfil

```js
{
  id: "profile-xxxxxxxx",
  name: "Nome do Personagem",
  createdAt: "2026-01-15T10:00:00.000Z",
  objectives: { ... },
  favoriteAchievements: [],
  settings: {}
}
```

## Funcionalidades

| Ação              | Descrição                                      |
|-------------------|------------------------------------------------|
| Criar perfil      | Gera novo ID e estrutura limpa                 |
| Selecionar perfil | Define como `activeProfileId` e recarrega UI   |
| Renomear perfil   | Altera apenas o `name`                         |
| Excluir perfil    | Remove o perfil e todo o seu progresso         |

## Regras

1. Sempre deve existir pelo menos um perfil.
2. Ao excluir o perfil ativo, automaticamente selecionar outro (ou criar um novo se for o último).
3. IDs de perfil devem ser únicos (usar timestamp + random ou UUID simples).
4. Nome do perfil é livre (pode repetir).

## Fluxo de Troca de Perfil

```
Usuário escolhe outro perfil
        ↓
Atualiza activeProfileId
        ↓
Salva UserData
        ↓
Re-renderiza a interface com os dados do novo perfil
```

## UI Recomendada

- Lista de perfis (nome + indicador de ativo)
- Botão “Novo personagem”
- Opção de editar nome
- Opção de excluir (com confirmação)

## O que NÃO fazer

- Compartilhar progresso entre perfis
- Ter mais de um perfil ativo ao mesmo tempo
- Salvar o nome do personagem dentro dos objetivos

## Integração com LocalStorage

Todo o objeto `profiles` fica dentro do UserData.  
Não é necessário criar chaves separadas por perfil.

## Critérios de Aceitação

- [ ] Criar perfil gera progresso zerado
- [ ] Trocar de perfil mostra o progresso correto
- [ ] Excluir perfil remove apenas aquele progresso
- [ ] Após reload, o último perfil ativo continua selecionado
