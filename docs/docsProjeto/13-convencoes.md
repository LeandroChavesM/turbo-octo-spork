# Convenções

## Nomenclatura

### Arquivos e Pastas
- Pastas: `kebab-case` ou minúsculo (`js/ui`, `css`)
- Arquivos JS: `camelCase.js` (`renderCategories.js`, `gameData.js`)
- Arquivos CSS: `kebab-case.css` (`main.css`, `components.css`)

### JavaScript
- Variáveis e funções: `camelCase`
- Constantes: `UPPER_SNAKE_CASE` (quando realmente constantes)
- IDs de dados: `kebab-case` ou prefixo + número (`ach-001`, `obj-014`)

### CSS
- Classes: `kebab-case`
- Estados: `.is-active`, `.is-completed`, `.is-favorite`
- Evitar IDs para estilo

## Organização de Código

- Uma responsabilidade por arquivo
- Funções pequenas e com nome descritivo
- Ordem preferencial dentro de um arquivo:
  1. Constantes
  2. Funções auxiliares
  3. Funções principais / exportadas

## Comentários

- Usar apenas quando a intenção não for clara pelo nome
- Preferir nomes bons a comentários explicativos
- Evitar comentários de código comentado

## Dados

- GameData → apenas dados do jogo
- UserData → apenas progresso e configurações do usuário
- IDs sempre strings estáveis

## DOM

- Preferir `document.createElement` + `textContent` / `classList`
- Evitar `innerHTML` com dados dinâmicos do usuário
- Limpar containers com `innerHTML = ''` antes de re-renderizar listas

## Eventos

- Adicionar listeners de forma organizada
- Preferir delegação quando houver muitos elementos dinâmicos
- Remover listeners apenas se realmente necessário (na maioria dos casos a re-renderização resolve)

## Commits (recomendação)

Se o projeto for versionado:

```
V0.2 - Renderização básica de categorias
V0.5 - Persistência com LocalStorage
fix: cálculo de progresso por categoria
```

## Idioma

- Código (variáveis, funções, comentários técnicos): **inglês**
- Interface do usuário e documentação: **português**

## Indentação e Formatação

- 2 espaços
- Ponto e vírgula no final das statements (recomendado)
- Aspas simples ou duplas: escolher uma e manter consistência
