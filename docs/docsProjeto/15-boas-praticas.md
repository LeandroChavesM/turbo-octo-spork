# Boas Práticas

## 1. Separação Rígida de Responsabilidades

- Dados do jogo ≠ Dados do usuário
- Lógica de negócio ≠ Renderização
- Persistência ≠ Estado de UI

Nunca misture essas camadas.

## 2. UI sempre a partir dos dados

A tela deve ser um reflexo do estado atual.  
Evite “guardar” informação só no DOM.

```
Estado / UserData  →  Render  →  DOM
```

## 3. Funções pequenas

Se uma função faz mais de uma coisa, divida.  
Nomes devem dizer exatamente o que a função faz.

## 4. Preferir createElement

```js
// Preferido
const el = document.createElement('div');
el.textContent = nome;
el.classList.add('card');

// Evitar quando possível
container.innerHTML = `<div class="card">${nome}</div>`;
```

`innerHTML` é aceitável para limpar containers (`innerHTML = ''`).

## 5. IDs estáveis

Nunca use o índice do array como identificador de um sucesso ou objetivo.  
IDs devem sobreviver a reordenações e atualizações dos dados.

## 6. Lazy creation de progresso

Só crie a entrada no UserData quando o usuário interagir com o objetivo.  
Não pré-popule todos os objetivos.

## 7. Um perfil ativo

Simplifica enormemente o estado.  
Toda a UI trabalha com o perfil ativo.

## 8. Salvar com consciência

- Salve após mudanças importantes
- Evite salvar a cada tecla (use debounce em campos de texto longos)
- Sempre salve o objeto completo do UserData

## 9. Validação defensiva

Ao carregar do LocalStorage:

- Verifique se o objeto existe
- Verifique a versão
- Tenha um fallback limpo

## 10. Re-renderização completa de listas

Para listas dinâmicas, a abordagem mais simples e confiável é:

1. Limpar o container
2. Criar todos os elementos novamente a partir dos dados atuais

Otimizações prematuras (diffing manual) não são necessárias neste projeto.

## 11. Comentários

Comente a intenção, não o óbvio.

```js
// Ruim
// Incrementa o contador
count++;

// Bom
// Precisamos recalcular porque o status de um objetivo mudou
updateCategoryProgress(categoryId);
```

## 12. Consistência

Escolha um padrão e mantenha até o final:

- camelCase vs kebab-case
- Aspas simples vs duplas
- Ponto e vírgula
- Ordem dos scripts

## 13. Não otimize cedo

Foque em clareza e funcionamento correto.  
Performance só se tornar um problema real (improvável neste escopo).

## 14. Documente decisões importantes

Se uma decisão arquitetural mudar, atualize a documentação correspondente.  
A documentação é a fonte da verdade do projeto.
