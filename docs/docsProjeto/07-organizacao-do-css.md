# Organização do CSS

## Filosofia

CSS simples, organizado e legível.  
Prioridade para Desktop.  
Evitar complexidade desnecessária.

## Estrutura de Arquivos

```
css/
├── main.css          # Reset, variáveis, tipografia, estilos globais
├── layout.css        # Estrutura de páginas e containers
├── components.css    # Componentes reutilizáveis (cards, botões, barras...)
└── utilities.css     # Classes utilitárias (opcional)
```

## Responsabilidades

| Arquivo          | Conteúdo                                      |
|------------------|-----------------------------------------------|
| `main.css`       | Reset, variáveis CSS, fontes, body, #app      |
| `layout.css`     | Grid/flex de páginas, header, sidebar, main   |
| `components.css` | `.card`, `.btn`, `.progress-bar`, `.badge`... |
| `utilities.css`  | `.hidden`, `.text-center`, `.mt-1`...         |

## Convenções de Nomenclatura

- Classes em **kebab-case**: `.progress-bar`, `.achievement-card`
- Prefixo de componente quando necessário: `.card`, `.card-title`, `.card-body`
- Estados: `.is-active`, `.is-completed`, `.is-favorite`
- Evitar IDs para estilo (reservar IDs para JavaScript)

## Variáveis CSS (em `main.css`)

```css
:root {
  --color-bg: #1a1a2e;
  --color-surface: #16213e;
  --color-primary: #0f3460;
  --color-accent: #e94560;
  --color-text: #eee;
  --color-text-muted: #aaa;

  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;

  --radius: 8px;
  --font-main: system-ui, sans-serif;
}
```

## Regras Importantes

1. **Mobile não é prioridade**  
   Layout pensado para ≥ 1024px. Media queries apenas se realmente necessário.

2. **Sem pré-processadores**  
   CSS puro.

3. **Evitar `!important`**  
   Usar apenas em casos extremos.

4. **Classes semânticas**  
   Preferir `.achievement-card` em vez de `.box-blue-large`.

5. **Componentes isolados**  
   Estilos de um componente não devem “vazar” para outros.

## Estados Visuais Obrigatórios

- Hover em elementos clicáveis
- Estado ativo (filtro selecionado, perfil ativo)
- Objetivo concluído (diferenciação visual clara)
- Favorito marcado
- Barra de progresso com preenchimento visual

## O que evitar

- Estilos inline gerados pelo JS (exceto valores dinâmicos de progresso)
- Animações complexas
- Frameworks CSS (Bootstrap, Tailwind, etc.)
- Seletores muito específicos ou profundos (`div > ul > li > span`)

## Ordem de Importação no HTML

```html
<link rel="stylesheet" href="css/main.css" />
<link rel="stylesheet" href="css/layout.css" />
<link rel="stylesheet" href="css/components.css" />
<link rel="stylesheet" href="css/utilities.css" />
```
