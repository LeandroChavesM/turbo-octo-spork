# Organização do HTML

## Princípio

O HTML contém **apenas a estrutura base** da aplicação.  
Toda a interface é gerada dinamicamente pelo JavaScript.

## Conteúdo Esperado do `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dofus 3.0 Achievement & Quest Tracker</title>
  <link rel="stylesheet" href="css/main.css" />
  <!-- outros CSS se necessário -->
</head>
<body>
  <div id="app"></div>

  <!-- Scripts no final, na ordem correta de dependência -->
  <script src="js/data/gameData.js"></script>
  <script src="js/data/userData.js"></script>
  <script src="js/state/state.js"></script>
  <script src="js/services/storage.js"></script>
  <!-- ... outros scripts ... -->
  <script src="js/app.js"></script>
</body>
</html>
```

## Regras

1. **Nenhum conteúdo de interface** dentro do HTML  
   (sem listas de categorias, cards, formulários, etc.)

2. **Um único ponto de montagem**  
   `<div id="app"></div>`

3. **Scripts no final do body**  
   Ordem de carregamento importa (dados → serviços → UI → app)

4. **Sem lógica inline**  
   Nenhum `onclick`, `onload` ou `<script>` com código no HTML

5. **Sem estilos inline**  
   Todo estilo fica nos arquivos CSS

## Por que essa abordagem?

- Separação clara entre estrutura e comportamento
- Facilita a criação de múltiplas “telas” sem páginas extras
- Treina manipulação de DOM e criação dinâmica de elementos
- Mantém o HTML extremamente simples e legível

## O que NÃO fazer

- Criar várias páginas HTML (`categoria.html`, `sucesso.html`...)
- Colocar dados do jogo dentro do HTML
- Usar templates HTML com `display: none` para simular telas
- Adicionar bibliotecas via CDN

## Evolução Futura

Se no futuro for necessário:

- Adicionar um `<header>` fixo ou `<nav>` global → pode ser colocado no HTML base ou gerado pelo JS
- Preferir sempre gerar pelo JavaScript para manter consistência
