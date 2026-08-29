# 🚀 Devlog #1 [v0.1] - Estrutura Inicial do Projeto

> **Data:** 01/08/2026  
> **Horário:** 16:12  
> **Status:** 🟢 Concluído

---

## 🎯 Objetivo

Criar a base do projeto e preparar o ambiente para iniciar o desenvolvimento das funcionalidades.

---

## ✨ O que foi implementado

- [x] **[SETUP]** Configuração do arquivo `index.html` base.
- [x] **[SETUP]** Criação do diretório `/css` e do arquivo `main.css`.
- [x] **[SETUP]** Criação do diretório `/js` e do arquivo `app.js`.
- [x] **[SETUP]** Conexão do CSS ao HTML e vinculação do script JavaScript configurado como módulo (`type="module"`).
- [x] **[SETUP]** Criação do diretório `/docs` e dos arquivos `CHANGELOG.md`,`DEVLOG.md` e `padroes.md`.

---

## 🧠 Decisões de Arquitetura & Design

- **Uso de Módulos ES6:** Optei por utilizar `type="module"` no JavaScript desde o início para evitar poluição do escopo global e facilitar a modularização e separação de responsabilidades à medida que o código crescer.
  > _Nota: Embora o conceito e o funcionamento interno de módulos ainda não estejam totalmente claros no momento, aprofundarei o aprendizado ao longo do desenvolvimento._

---

## 🐛 Desafios & Soluções

_Nenhum problema encontrado nesta etapa inicial._

---

## 💡 Lições Aprendidas

- Definir uma estrutura básica limpa desde o primeiro dia facilita a organização dos arquivos de documentação, estilos e scripts.

---

## 🔮 Próximos Passos

- [ ] Validar o funcionamento das conexões dos arquivos.
- [ ] Realizar o commit das alterações iniciais.
- [ ] Iniciar o planejamento e implementação dos requisitos da v0.2.

---

<details>
<summary>🔍 Detalhes Técnicos / Árvore de Arquivos</summary>

### Estrutura de Diretórios Inicial

```text

│   index.html
│   README.md
│
├───css
│       main.css
│
├───docs
│       CHANGELOG.md
│       DEVLOG.md
│       padroes.md
│
└───js
        app.js
```

</details>
<br>
=====================================

# Devlog #2 [v0.2] - Lista de Categorias

> **Data:** 01/08/2026  
> **Horário:** 17:45  
> **Status:** 🟡 Em andamento

---

## 🎯 Objetivo

Exibir a lista de categorias na tela usando JavaScript.

## ✨ O que foi implementado

- [x] **[SETUP]** Criação do diretório `/js/data` e do arquivo `gameData.js`.
- [x] **[SETUP]** Criação do diretório `/js/UI` e do arquivo `renderCategories.js`.
- [x] **[FEATURE]** Criado função para desenhar as regiões em lista no `renderCategories.js`

## 🧠 Decisões de Arquitetura & Design

- **Arquivos com somente uma responsabilidade:** Isso facilita na hora de manutenção.

## 🐛 Desafios & Soluções

**Problema Encontrado**

    Uma pequena dificuldade em pegar o elemento do objeto inves da chave

**Causa Raiz**

    Não estava entendo o funcionamento do for

**Como foi Resolvido**

    Pesquisei como funcionavam o for in e for of e no que se aplicavam, decidindo usar o for of

## 💡 Lições Aprendidas

- Principalmente como usar for in e for of, e estrutura do gameData

## 🔮 Próximos Passos

- [ ] Continuação do desenvolvimento da v0.2

---

<details>
<summary>🔍 Detalhes Técnicos / Trechos de Código / Logs</summary>

### Código de Exemplo / Snippets Principais

```csharp
// Cole aqui trechos de código relevantes, logs ou configs
```

</details>
<br>
=====================================

# Devlog #3 [v0.2] - Lista de Categorias

> **Data:** 02/08/2026  
> **Horário:** 8:00  
> **Status:** 🟢 Concluído

---

## 🎯 Objetivo

Exibir a lista de "categorias" na tela usando JavaScript.

## ✨ O que foi implementado

- [x] **[REFACTOR]** Refatorando a função do `renderCategories.js` para deixar mais genérica.

## 🧠 Decisões de Arquitetura & Design

- **Função genérica:** Isso facilita na hora de manutenção, e posso usar futuramente em outro lugar.

## 🐛 Desafios & Soluções

**Problema Encontrado**

    Nenhum problema encontrado nesta etapa

**Causa Raiz**

**Como foi Resolvido**

## 💡 Lições Aprendidas

- Usar funções genéricas ajudam no decorrer do projeto, evita redundancia e mantém a lógica em um lugar só.

## 🔮 Próximos Passos

- [ ] desenvolvimento da v0.3

---

<details>
<summary>🔍 Detalhes Técnicos / Trechos de Código / Logs</summary>

### Código de Exemplo / Snippets Principais

```csharp
// Cole aqui trechos de código relevantes, logs ou configs
```

</details>
<br>
=====================================

# Devlog #4 [v0.3] - Navegação Categoria → Sucesso

> **Data:** 05/08/2026  
> **Horário:** 8:20  
> **Status:** 🟡 Em andamento

---

## 🎯 Objetivo

Permitir clicar em uma "categoria" e ver a lista de sucessos.

## ✨ O que foi implementado

- [x] **[SETUP]** Introduzido um gerenciador de estados `state.js`.
- [x] **[SETUP]** Inicio da renderização de achievements `renderAchievements.js`.
- [x] **[SETUP]** Criação da camada de `handlers`.
- [x] **[SETUP]** Introduzido um handle para pegar região atual `selectedRegion.js`.

## 🧠 Decisões de Arquitetura & Design

- **Evento na hora da criação:** O evento de clique é registrado durante a criação dos elementos da lista, pois é nesse momento que a associação entre elemento e região já é conhecida

## 🐛 Desafios & Soluções

**Problema Encontrado**

    Dificuldade em fazer a ''aplicação'' atualizar conforme o estado muda, como atualizar os achievements após alterar a região selecionada.

**Causa Raiz**

    Inicialmente foi assumido que mudar o state faria outras partes da aplicação perceberem a mudança automaticamente, mas não é assim que funciona o JS vanilla.

**Como foi Resolvido**

    Investigação em andamento. A principal hipótese é criar um fluxo onde a aplicação coordene a atualização da interface após mudanças no estado.

## 💡 Lições Aprendidas

- Ter uma variavel que guarda os estados da aplicação ajuda a escalar o projeto.
- Alterar uma propriedade do state não atualiza a interface.
- Responsabilidades dos arquivos/funções são importantes de se pensar. No fim ficou claro que vale a pena pensar em perguntas como "Quem conhece o DOM? Quem conhece o estado? Quem apenas renderiza? Quem coordena a aplicação?
- Não procurar uma informação que já possuo

## 🔮 Próximos Passos

- Definir o fluxo de atualização da interface após mudanças no state.
- Conectar renderAchievements ao fluxo da aplicação.
- Finalizar a navegação entre regiões e achievements.

---

<details>
<summary>🔍 Detalhes Técnicos / Trechos de Código / Logs</summary>

### Código de Exemplo / Snippets Principais

```csharp
// Cole aqui trechos de código relevantes, logs ou configs
```

</details>
<br>
=====================================

# Devlog #5 [v0.3] - Navegação Categoria → Sucesso

> **Data:** 06/08/2026  
> **Horário:** 9:00  
> **Status:** 🟡 Em andamento

---

## 🎯 Objetivo

Permitir clicar em uma "categoria" e ver a lista de sucessos.

## ✨ O que foi implementado

- [x] **[SETUP]** Introduzido um gerenciador de estados `state.js`.

## 🧠 Decisões de Arquitetura & Design

- **Evento na hora da criação:** O evento de clique é registrado durante a criação dos elementos da lista, pois é nesse momento que a associação entre elemento e região já é conhecida

## 🐛 Desafios & Soluções

**Problema Encontrado**

    Dificuldade em fazer a ''aplicação'' atualizar conforme o estado muda, como atualizar os achievements após alterar a região selecionada.

**Causa Raiz**

    Inicialmente foi assumido que mudar o state faria outras partes da aplicação perceberem a mudança automaticamente, mas não é assim que funciona o JS vanilla.

**Como foi Resolvido**

    Investigação em andamento. A principal hipótese é criar um fluxo onde a aplicação coordene a atualização da interface após mudanças no estado.

## 💡 Lições Aprendidas

- Ter uma variavel que guarda os estados da aplicação ajuda a escalar o projeto.
- Alterar uma propriedade do state não atualiza a interface.
- Responsabilidades dos arquivos/funções são importantes de se pensar. No fim ficou claro que vale a pena pensar em perguntas como "Quem conhece o DOM? Quem conhece o estado? Quem apenas renderiza? Quem coordena a aplicação?
- Não procurar uma informação que já possuo

## 🔮 Próximos Passos

- Definir o fluxo de atualização da interface após mudanças no state.
- Conectar renderAchievements ao fluxo da aplicação.
- Finalizar a navegação entre regiões e achievements.

---

<details>
<summary>🔍 Detalhes Técnicos / Trechos de Código / Logs</summary>

### Código de Exemplo / Snippets Principais

```csharp
// Cole aqui trechos de código relevantes, logs ou configs
```

</details>
<br>
=====================================

# Devlog #6 [v0.3] - Navegação Categoria → Sucesso

> **Data:** 07/08/2026  
> **Horário:** 9:00  
> **Status:** 🟢 Concluído

---

## 🎯 Objetivo

Permitir clicar em uma "categoria" e visualizar a lista de sucessos correspondente à região selecionada.

Além da implementação da navegação, foi realizada uma pequena refatoração para melhorar a separação de responsabilidades entre renderização, eventos, estado e coordenação da aplicação.

## ✨ O que foi implementado

- [x] **[SETUP]** Criado o `state.js` para armazenar o estado atual da aplicação.
- [x] **[SETUP]** Criado o `renderAchievements.js` para renderizar os sucessos da região selecionada.
- [x] **[SETUP]** Criada a pasta `handlers` para separar a lógica de interação dos elementos.
- [x] **[FEATURE]** Criado o `selectedItem.js` para tratar a seleção de um item.
- [x] **[FEATURE]** Implementado o armazenamento do `id` da região selecionada em `state.currentRegion`.
- [x] **[FEATURE]** Implementado o fluxo de atualização da interface após a seleção de uma região.
- [x] **[FEATURE]** Ao clicar em uma região, seus respectivos sucessos são renderizados no `main-container`.
- [x] **[REFACTOR]** Transformado o `renderList()` em uma função genérica, recebendo os dados e o callback como parâmetros.
- [x] **[REFACTOR]** Criado o `renderRegions()` como uma função específica para preparar os dados das regiões e utilizar o `renderList()`.
- [x] **[REFACTOR]** Removida a dependência direta do handler em relação ao `app.js`.
- [x] **[REFACTOR]** Utilizado callback para permitir que o handler execute a ação definida pelo módulo que o chamou.

## 🧠 Decisões de Arquitetura & Design

- **Estado separado dos dados:** O `state` armazena informações que representam o estado atual da aplicação, enquanto os dados das regiões e seus sucessos permanecem no `gameData`.

- **Identificação por `id`:** O `state.currentRegion` armazena apenas o `id` da região selecionada em vez de guardar o objeto completo. Dessa forma, o `gameData` continua sendo a fonte dos dados da região.

- **Evento na criação:** O evento de clique é registrado durante a criação de cada elemento da lista, pois nesse momento a associação entre o elemento e a região já é conhecida.

- **Atualização explícita da interface:** Como o JavaScript Vanilla não possui reatividade automática, a alteração do `state` é seguida explicitamente pela atualização da interface.

- **`app.js` como coordenador:** O `app.js` continua responsável por coordenar a atualização da interface e definir quais renderizações devem ocorrer.

- **`renderList()` como função genérica:** A função foi mantida responsável pela criação da lista e dos seus itens, sem assumir que os dados representam necessariamente regiões. O comportamento após a seleção é recebido através de um callback.

- **`renderRegions()` como camada específica:** Foi criada uma função específica para regiões. Ela conhece a localização dos dados (`gameData.regions`) e utiliza o `renderList()` para realizar a criação da interface.

- **Callback no handler:** O handler não precisa conhecer `renderAchievements()` ou `app.js`. Ele apenas atualiza o estado e executa a função recebida como callback. Isso reduz o acoplamento entre os módulos.

## 🐛 Desafios & Soluções

### Problema Encontrado 1

Dificuldade em fazer a aplicação atualizar os achievements após a alteração da região selecionada.

### Causa Raiz

Foi assumido inicialmente que, ao alterar uma propriedade do `state`, o JavaScript perceberia automaticamente a mudança e executaria novamente as funções que dependiam daquele valor.

No JavaScript Vanilla isso não acontece. Alterar o estado apenas altera o valor armazenado; as funções que utilizam esse valor precisam ser executadas novamente de forma explícita.

### Como foi Resolvido

Foi criado no `app.js` um ponto de coordenação para atualização da interface.

O fluxo passou a ser:

1. O usuário clica em uma região.
2. O handler identifica a região selecionada.
3. `state.currentRegion` recebe o `id` da região.
4. Uma função de atualização é executada.
5. `renderAchievements()` consulta o novo `state.currentRegion`.
6. Os achievements correspondentes são renderizados no `main-container`.

---

### Problema Encontrado 2

O handler precisava solicitar a atualização da interface após alterar o estado, mas importar diretamente o `app.js` criava uma dependência circular entre os módulos.

### Causa Raiz

O handler conhecia diretamente o módulo responsável por coordenar a aplicação. Isso fazia com que a estrutura de dependências se aproximasse de um ciclo entre `app.js`, renderizadores e handlers.

Além disso, o handler não precisava saber especificamente qual render deveria ser executado após o clique.

### Como foi Resolvido

Foi utilizado um **callback**.

O `app.js` fornece a função que deve ser executada, passando-a através dos renderizadores até o handler.

O handler passou a ter uma responsabilidade mais simples:

1. receber o item e o objeto correspondente;
2. registrar o evento de clique;
3. atualizar o `state`;
4. executar o callback recebido.

Dessa forma, o handler não precisa importar o `app.js` nem conhecer `renderAchievements()`.

---

### Problema Encontrado 3

O `renderList()` começou a ficar associado especificamente ao comportamento das regiões.

### Causa Raiz

A função inicialmente era utilizada para criar listas de forma genérica, mas passou a associar diretamente um handler específico de regiões aos elementos criados.

Isso faria com que uma função que deveria ser reutilizável começasse a depender do tipo de dado que estava renderizando.

### Como foi Resolvido

O comportamento foi transformado em um parâmetro da função.

O `renderList()` passou a receber:

```js
renderList(lugar, data, callback);
```

Assim, a função continua responsável por criar a lista, enquanto quem a utiliza define o comportamento que deve acontecer quando um item for selecionado.

Foi criada a função `renderRegions()` para fornecer ao `renderList()` os dados e o comportamento específicos das regiões.

## 💡 Lições Aprendidas

- Ter uma variável que representa o estado da aplicação ajuda a separar o estado atual dos dados permanentes do projeto.
- Alterar uma propriedade do `state` não atualiza a interface automaticamente.
- Em JavaScript Vanilla, a atualização da interface precisa ser coordenada e executada explicitamente.
- Estado e interface são responsabilidades diferentes: o `state` armazena informações, enquanto as funções de renderização utilizam essas informações para atualizar o DOM.
- O local onde uma informação já está disponível deve ser considerado ao definir responsabilidades.
- Separar a lógica de interação em handlers ajuda a evitar que toda a lógica fique concentrada nas funções de renderização.
- Um callback permite passar uma função para ser executada posteriormente, sem que o módulo que recebe essa função precise conhecer sua implementação.
- Passar uma função e executar uma função são coisas diferentes. `minhaFuncao` passa a função, enquanto `minhaFuncao()` executa a função imediatamente.
- Uma função genérica deve possuir uma responsabilidade realmente genérica. Quando uma parte do comportamento varia conforme o contexto, ela pode ser recebida através de parâmetros.
- Ao organizar os módulos, é importante observar não apenas se o código funciona, mas também quais módulos dependem uns dos outros e quem deve coordenar o fluxo da aplicação.

## ⚠️ Dívidas Técnicas / Pontos para Revisar

- Avaliar futuramente se o nome e a organização dos arquivos de renderização continuam representando bem suas responsabilidades conforme novas telas e listas forem adicionadas.
- Verificar se o `renderList()` continua sendo uma abstração adequada conforme novos tipos de dados forem adicionados ao projeto.
- Manter atenção às dependências entre `app.js`, handlers e funções de renderização para evitar o retorno de dependências circulares.
- A interface inicial ainda será refinada posteriormente com a implementação da categoria/região **Geral**.

## 🔮 Próximos Passos

- Iniciar a próxima versão do roadmap.
- Continuar expandindo a estrutura de `gameData` conforme novos conteúdos forem adicionados.
- Avaliar a arquitetura atual durante a implementação da próxima versão, evitando abstrações antes que sejam necessárias.
- Implementar futuramente a categoria/região **Geral**, que funcionará como a página inicial da interface de sucessos.

---

<details>
<summary> 🔍 Detalhes Técnicos / Trechos de Código / Logs </summary>

### Código de Exemplo / Snippets Principais

**Handler utilizando callback:**

```js
function handleSelectedItem(item, object, callback) {
  item.addEventListener("click", () => {
    state.currentRegion = object.id;
    callback();
  });
}
```

**Renderer genérico:**

```js
function renderList(lugar, data, callback) {
  const lista = document.createElement("ul");
  lugar.appendChild(lista);

  for (let i of data) {
    let item = document.createElement("li");

    handleSelectedItem(item, i, callback);

    item.textContent = i.name;
    lista.appendChild(item);
  }
}
```

**Renderer específico para regiões:**

```js
function renderRegions(lugar, callback) {
  const data = gameData.regions;

  renderList(lugar, data, callback);
}
```

**Coordenação no `app.js`:**

```js
renderRegions(sidebar, updateInterface);

function updateInterface() {
  renderAchievements(mainContainer);
}
```

</details>
<br>

# Devlog #7 [v0.4] - Navegação Sucesso → Objetivo + Status do Objetivo

> **Data:** 18/08/2026  
> **Status:** 🟡 Em andamento

---

## 🎯 Objetivo

Permitir clicar em um "sucesso" (achievement) e visualizar seus objetivos correspondentes. Iniciar o rascunho de um `userData`, separado do `gameData`, para armazenar o progresso do jogador (status de cada objetivo).

## ✨ O que foi implementado

- [x] **[FEATURE]** Criado `renderObjectives.js` para renderizar os objetivos do sucesso selecionado, em um container próprio (`#obj-container`), separado do `#main-container`.
- [x] **[FEATURE]** Criado `onSelectedAchievement.js`, handler específico para a seleção de um sucesso, seguindo o mesmo padrão de callback já usado em `onSelectedRegion.js`.
- [x] **[FEATURE]** Implementado o armazenamento do `id` do sucesso selecionado em `state.currentAchievement`.
- [x] **[FEATURE]** Ao trocar de região, `state.currentAchievement` é resetado antes do callback, evitando que objetivos de uma região antiga permaneçam visíveis.
- [x] **[REFACTOR]** `renderList()` passou a aceitar um segundo callback (`callback2`), repassado a cada handler, permitindo que o item selecionado (região ou sucesso) dispare a atualização da interface.
- [x] **[DRAFT]** Rascunho inicial de `userData.js`, para representar o progresso do jogador separado dos dados fixos do jogo.

## 🧠 Decisões de Arquitetura & Design

- **Container próprio para objetivos:** Optado por renderizar objetivos em um elemento separado do `main-container`, evitando sobreposição visual com a lista de sucessos.

- **`renderList()` continua genérica de propósito:** Ao surgir a necessidade de um checkbox por objetivo (elemento que região e sucesso não precisam), foi decidido **não** forçar essa necessidade dentro de `renderList()` com condicionais internas. Em vez disso, planeja-se um renderer específico para objetivos, mantendo `renderList()` livre de `if`s sobre o tipo de dado.

- **Handler genérico rejeitado, por ora:** Foi cogitado tornar `handleSelectedItem` totalmente genérico (recebendo qual propriedade do `state` atualizar). Decisão: manter handlers específicos (`onSelectedRegion`, `onSelectedAchievement`), pequenos e duplicados, por serem mais simples e legíveis do que uma abstração genérica prematura para funções de 1-2 linhas.

- **`state` não deveria "vazar" para os handlers via parâmetro:** Foi cogitado passar `state` como parâmetro (em vez de importar) para tornar o handler mais genérico. Concluído que isso não resolve o problema real (o acoplamento está em _qual propriedade_ é alterada, não em _como_ o `state` chega até a função) — mantido o `import` direto.

- **Reset de estado em vez de limpeza manual do DOM:** Ao invés de propagar uma referência do elemento HTML (`objContainer`) por múltiplas camadas (`renderRegions` → `renderList` → `onSelectedRegion`) só para limpá-lo manualmente ao trocar de região, resolvido resetando `state.currentAchievement = ""` no próprio handler. Como `renderObjectives()` já limpa e redesenha a cada `updateInterface()`, o container passa a esvaziar "sozinho" quando nenhum sucesso corresponde ao estado atual.

- **`userData` separado do `gameData`:** Confirmada a decisão (alinhada à documentação) de nunca gravar progresso do jogador dentro dos objetos do `gameData`. Rascunho inicial optou por objeto indexado por `id` (`userData.objectives[id] = status`) em vez de array de objetos, por permitir acesso direto (`userData.objectives[algumId]`) sem precisar percorrer uma lista inteira a cada consulta.

- **Escopo reduzido do `userData` por enquanto:** A documentação (`10-userdata.md`) descreve uma estrutura completa (perfis, notas, favoritos, timestamps). Decisão consciente de **não** implementar tudo de uma vez — começar só com o essencial para o checkbox funcionar, e expandir quando a persistência (localStorage) e perfis forem de fato implementados.

## 🐛 Desafios & Soluções

### Problema Encontrado 1

Ao clicar em um objetivo, a aplicação quebrava com `TypeError: data is not iterable`.

### Causa Raiz

Dentro de `renderObjectives()`, o código já percorria manualmente a lista de objetivos (`for (let k of obj)`) e, dentro desse loop, chamava `renderList(lugar, k, ...)` passando um **item único** (`k`) no lugar da **lista inteira** (`obj`) que `renderList()` espera para fazer seu próprio `for...of` interno.

### Como foi Resolvido

Removido o loop manual redundante; `renderList()` passou a receber a lista `obj` diretamente, já que ela mesma é responsável por iterar sobre os itens.

---

### Problema Encontrado 2

Clicar em um sucesso (achievement) não atualizava a interface para mostrar os objetivos.

### Causa Raiz

`renderAchievements()` chamava `renderList(lugar, ach, onSelectedAchievement, () => {})`, passando uma função vazia como segundo callback, em vez de repassar a função que de fato atualiza a interface (`updateInterface`).

### Como foi Resolvido

O callback vazio foi substituído pela referência correta, permitindo que `onSelectedAchievement` dispare a atualização da interface após alterar `state.currentAchievement`, no mesmo padrão já usado para regiões.

---

### Problema Encontrado 3

`renderObjectives()` estava desenhando os objetivos de **todos** os sucessos de **todas** as regiões, mesmo sem nenhum sucesso selecionado — e, pior, alterando `state.currentAchievement` sozinha durante a renderização.

### Causa Raiz

A condição de filtro estava escrita como atribuição, não comparação:

```js
if ((state.currentAchievement = j.id)) {
```

Um único `=` atribui `j.id` a `state.currentAchievement` e retorna esse valor como resultado da expressão. Como o `id` é sempre uma string não vazia (truthy), a condição era sempre verdadeira — independente de qual sucesso estava selecionado — e ainda corrompia o `state` a cada execução.

### Como foi Resolvido

Corrigido para comparação estrita:

```js
if (state.currentAchievement === j.id) {
```

---

### Problema Encontrado 4

Ao trocar de região, o container de objetivos mantinha o conteúdo do sucesso selecionado anteriormente (de outra região).

### Causa Raiz

`state.currentAchievement` não era resetado ao selecionar uma nova região, então `renderObjectives()` continuava encontrando correspondência com um sucesso que não pertencia mais à região atual.

### Como foi Resolvido

`onSelectedRegion` passou a resetar `state.currentAchievement = ""` antes de disparar o callback de atualização, eliminando a necessidade de limpar o DOM manualmente por fora.

## 💡 Lições Aprendidas

- Um único `=` dentro de um `if` é sintaticamente válido em JavaScript (atribuição, não comparação) e não gera erro — o bug fica silencioso e só aparece pelo comportamento incorreto.
- "Onde" um dado chega (import vs. parâmetro) não é o mesmo eixo de "quão genérica" uma função é — o que importa é o que a função faz com o dado, não como ele chegou até ela.
- Passar referências de elementos do DOM através de múltiplas camadas de funções para resolver um problema de exibição costuma ser sintoma de um problema de estado não resolvido na origem.
- Nem toda duplicação (dois handlers pequenos parecidos) precisa virar abstração — abstrair uma função de 1-2 linhas pode custar mais em complexidade do que economiza em repetição.
- Dado de progresso do jogador (`userData`) e dado fixo do jogo (`gameData`) devem permanecer em estruturas completamente separadas, mesmo quando é tentador gravar direto no objeto que já está "na mão".

## ⚠️ Dívidas Técnicas / Pontos para Revisar

- Finalizar o handler do checkbox (`onCheckboxCheck`) para gravar o status no `userData` (por `id`), em vez de mutar o objeto do `gameData`.
- Definir os valores possíveis de status agora usados (ex.: `"pendente"` / `"concluido"`) e manter consistência com a documentação (`pending` / `in_progress` / `completed`) — decidir se simplifica para dois estados ou adota os três.
- `userData` ainda não persiste (localStorage) nem tem estrutura de perfis — implementar quando essas features entrarem no roadmap.
- Reavaliar, conforme novos tipos de item apareçam (ex.: quests), se o padrão de handlers específicos + `renderList()` genérica continua escalando bem, ou se em algum ponto compensa introduzir alguma generalização.

## 🔮 Próximos Passos

- Finalizar a lógica do checkbox e ligação com `userData`.
- Fazer o checkbox nascer já marcado/desmarcado de acordo com o status salvo no `userData`.
- Continuar o roadmap da v0.4 conforme `docs/docsProjeto/03-roadmap.md`.

---

<details>
<summary> 🔍 Detalhes Técnicos / Trechos de Código / Logs </summary>

### Código de Exemplo / Snippets Principais

**Bug de atribuição vs. comparação:**

```js
// Antes (bug)
if ((state.currentAchievement = j.id)) { ... }

// Depois
if (state.currentAchievement === j.id) { ... }
```

**Reset de estado ao trocar de região:**

```js
function onSelectedRegion(item, object, callback) {
  item.addEventListener("click", () => {
    state.currentRegion = object.id;
    state.currentAchievement = "";
    callback();
  });
}
```

**Rascunho de `userData.js`:**

```js
export const userData = {
  objectives: {
    // "obj_inc_001": "pendente"
  },
};
```

</details>
<br>

# Devlog #8 [v0.4] - Navegação Sucesso → Objetivo + Status do Objetivo

> **Data:** 29/08/2026  
> **Status:** 🟢 Concluído

---

## 🎯 Objetivo

Permitir clicar em um sucesso e visualizar seus objetivos. Marcar cada objetivo como pendente/concluído através de um checkbox, com o progresso armazenado em memória, separado do `gameData`.

## ✨ O que foi implementado

- [x] **[FEATURE]** Criado `renderObjectives.js`: renderiza os objetivos do sucesso selecionado em um container próprio (`#obj-container`).
- [x] **[FEATURE]** Criado `onSelectedAchievement.js`, handler específico para seleção de sucesso, no mesmo padrão de `onSelectedRegion.js`.
- [x] **[FEATURE]** Implementado `state.currentAchievement`, armazenando o `id` do sucesso selecionado.
- [x] **[FEATURE]** Criado `userData.js`, separado do `gameData`, para armazenar o progresso do jogador: `{ objectives: { [id]: { status } } }`.
- [x] **[FEATURE]** Criado `renderCheckbox.js` (`renderCheckboxItem`), responsável por desenhar cada objetivo com nome + checkbox.
- [x] **[FEATURE]** Criado `onCheckboxCheck.js`: liga o checkbox ao `userData`, lendo o status ao renderizar (checkbox nasce marcado se já estiver `completed`) e gravando o novo status no evento `change`.
- [x] **[FEATURE]** Adicionado CSS (`li:has(input[type="checkbox"]:checked)`) para feedback visual de conclusão (`line-through` + cor), sem precisar de JS adicional.
- [x] **[REFACTOR]** `renderList()` passou a aceitar um segundo callback, permitindo que a seleção de um item dispare a atualização da interface.
- [x] **[REFACTOR]** `onSelectedRegion` reseta `state.currentAchievement` ao selecionar uma nova região.

## 🧠 Decisões de Arquitetura & Design

- **Renderer específico para objetivos:** `renderList()` (genérica, feita para itens com `name`) não foi reaproveitada para objetivos, já que estes precisam de um elemento a mais (checkbox). Optado por um renderer próprio (`renderCheckboxItem`) em vez de forçar `if`s de tipo dentro de `renderList()`.

- **`userData` indexado diretamente por `id`:** Cogitada uma estrutura aninhada por achievement (`achievements: [{ id, objectives: [...] }]`), pensando em manter os dados "organizados por dono". Decisão revertida em favor de `objectives: { [id]: { status } }` plano — o uso real é sempre "sei o `id`, quero o status", e a estrutura plana resolve isso com acesso direto, sem loops aninhados.

- **`id` como elo entre `gameData` e `userData`:** O vínculo entre um objetivo do `gameData` e sua entrada no `userData` é o próprio `id` do objetivo (lido dinamicamente do `gameData` ao renderizar), nunca um valor reescrito manualmente à mão em `userData.js`.

- **`userData` não precisa ser pré-populado:** Entradas em `userData.objectives` só são criadas na primeira interação com aquele objetivo (`if (!userData.objectives[objective]) { ... }`). Isso permite adicionar objetivos novos em `gameData` sem precisar lembrar de duplicar a entrada em `userData.js` manualmente.

- **`onCheckboxCheck` é o único ponto que conhece `userData`:** A inicialização de uma entrada nova em `userData.objectives` foi colocada dentro do próprio `onCheckboxCheck`, já que ele já era o único responsável por ler/escrever ali. Considerado que isso não é acúmulo de função, pois é a mesma responsabilidade já existente sendo tratada com mais cuidado (diferente do caso do handler genérico, onde a regra pertencia a outra camada).

- **Clique na área do item também marca o checkbox:** Em vez de duplicar a lógica de toggle em dois listeners (um no `<li>`, outro no `change` do checkbox), o clique no item apenas simula um clique no checkbox (`checkbox.click()`), reaproveitando o mesmo `change` já registrado. Verificado `event.target !== checkbox` para não disparar duas vezes quando o clique já for direto no checkbox (efeito de bubbling).

## 🐛 Desafios & Soluções

### Problema Encontrado 1

Ao clicar em um objetivo, a aplicação quebrava com `TypeError: data is not iterable`.

### Causa Raiz

`renderObjectives()` já percorria manualmente a lista de objetivos (`for (let k of obj)`) e, dentro do loop, chamava `renderList(lugar, k, ...)` passando um **item único** (`k`) no lugar da **lista inteira** que a função espera para seu próprio `for...of` interno.

### Como foi Resolvido

Removido o loop manual redundante, passando a lista inteira diretamente.

---

### Problema Encontrado 2

Clicar em um sucesso não atualizava a interface para mostrar os objetivos.

### Causa Raiz

`renderAchievements()` passava uma função vazia (`() => {}`) no lugar do callback real de atualização da interface.

### Como foi Resolvido

Substituído pela referência correta (`updateInterface`), no mesmo padrão já usado para regiões.

---

### Problema Encontrado 3

`renderObjectives()` desenhava os objetivos de **todos** os sucessos de **todas** as regiões, e corrompia `state.currentAchievement` sozinha durante a renderização.

### Causa Raiz

Condição de filtro escrita como atribuição, não comparação:

```js
if ((state.currentAchievement = j.id)) {
```

Um único `=` atribui e retorna o valor atribuído; como `j.id` é sempre uma string não vazia (truthy), a condição era sempre verdadeira, e o `state` era sobrescrito a cada iteração do loop.

### Como foi Resolvido

Corrigido para comparação estrita: `if (state.currentAchievement === j.id)`.

---

### Problema Encontrado 4

Ao trocar de região, o container de objetivos mantinha conteúdo do sucesso selecionado na região anterior.

### Causa Raiz

`state.currentAchievement` não era resetado ao selecionar uma nova região.

### Como foi Resolvido

`onSelectedRegion` passou a resetar `state.currentAchievement = ""` antes do callback, dispensando qualquer limpeza manual de DOM por fora (`renderObjectives()` já limpa e redesenha a cada `updateInterface()`).

---

### Problema Encontrado 5

Ao marcar um objetivo que ainda não tinha entrada em `userData.objectives`, a aplicação quebrava com `TypeError: Cannot read properties of undefined (reading 'status')`.

### Causa Raiz

`userData.objectives[objective].status` era acessado antes de garantir que `userData.objectives[objective]` existia.

### Como foi Resolvido

Adicionada checagem antes de qualquer leitura/escrita:

```js
if (!userData.objectives[objective]) {
  userData.objectives[objective] = { status: "pending" };
}
```

---

### Problema Encontrado 6

Uma tentativa de inicializar a entrada no `userData` acabou sobrescrevendo entradas já marcadas como `"completed"`, resetando-as para `"pending"` toda vez que o objetivo era renderizado.

### Causa Raiz

A atribuição `userData.objectives[objective] = { status: "pending" }` rodava incondicionalmente, fora de qualquer verificação de existência.

### Como foi Resolvido

Condicionada à ausência da entrada (ver Problema 5), garantindo que status já salvo nunca é sobrescrito por engano.

## 💡 Lições Aprendidas

- Um único `=` dentro de um `if` é sintaticamente válido (atribuição, não comparação) e não gera erro — o bug fica silencioso, só percebido pelo comportamento incorreto.
- Estrutura de dados deveria ser pensada a partir de "como vou ler isso depois", não só de "como fica organizado escrever isso agora" — uma estrutura aninhada pode parecer mais organizada e custar acesso mais caro (loops aninhados) sem necessidade real.
- Dado de progresso do jogador (`userData`) não precisa (e não deve) ser pré-populado manualmente espelhando o `gameData` — nasce vazio e ganha entradas sob demanda, tratando a ausência como valor padrão.
- Nem toda responsabilidade nova é acúmulo de função: tratar melhor um caso de borda (entrada inexistente) dentro de uma função que já era dona daquele dado é diferente de uma função absorver uma decisão que pertence a outra camada.
- Eventos disparados em elementos filhos também contam como disparados nos elementos pais (bubbling) — dois listeners parecidos em pai e filho podem rodar em duplicidade se não houver checagem de `event.target`.
- `elemento.click()` simula um clique real e dispara os listeners já registrados naquele elemento — não é o mesmo que chamar uma função manualmente, e evita duplicar lógica.
- CSS reage a mudanças de estado nativo do elemento (`:checked`) automaticamente via `:has()`, sem necessidade de JS adicional para refletir status visualmente.

## ⚠️ Dívidas Técnicas / Pontos para Revisar

- Organizar os commits acumulados (vários dias de mudanças não commitadas/pushed) antes de iniciar a v0.5.
- Estilização mais completa do checkbox (esconder input nativo, usar `label` customizada) adiada de propósito para a v0.13 (Polimento de UI), quando houver mais elementos de interface para pensar em conjunto.
- Reavaliar, conforme surgirem novos tipos de item clicável, se o padrão de handlers específicos + renderers específicos continua escalando bem.

## 🔮 Próximos Passos

- Iniciar V0.5 – Persistência com LocalStorage: `userData` já está em estrutura plana adequada para `JSON.stringify`/`JSON.parse`.
- Organizar histórico de commits pendentes antes de seguir.

---

<details>
<summary> 🔍 Detalhes Técnicos / Trechos de Código / Logs </summary>

### Código de Exemplo / Snippets Principais

**Bug de atribuição vs. comparação:**

```js
// Antes (bug)
if ((state.currentAchievement = j.id)) { ... }

// Depois
if (state.currentAchievement === j.id) { ... }
```

**Inicialização segura de entrada no `userData`:**

```js
function onCheckboxCheck(checkbox, objective) {
  if (!userData.objectives[objective]) {
    userData.objectives[objective] = { status: "pending" };
  }
  if (userData.objectives[objective].status === "completed") {
    checkbox.checked = true;
  }
  checkbox.addEventListener("change", () => {
    userData.objectives[objective] = checkbox.checked
      ? { status: "completed" }
      : { status: "pending" };
  });
}
```

**Clique no item simulando clique no checkbox:**

```js
item.addEventListener("click", (event) => {
  if (event.target !== checkbox) {
    checkbox.click();
  }
});
```

**CSS reagindo ao estado do checkbox:**

```css
li:has(input[type="checkbox"]:checked) {
  text-decoration: line-through;
  color: #ffffff9c;
}
```

</details>
<br>

# Devlog #9 [v0.5] - Persistência com LocalStorage

> **Data:** 29/08/2026  
> **Status:** 🟢 Concluído

---

## 🎯 Objetivo

Fazer o progresso do jogador (`userData`) sobreviver a um reload da página, usando `localStorage`.

## ✨ O que foi implementado

- [x] **[SETUP]** Criada a pasta `js/services/`, para infraestrutura da aplicação (diferente de `js/data/`, reservada para os dados em si).
- [x] **[FEATURE]** Criado `services/storage.js`, com `saveUserData()` e `loadUserData()`.
- [x] **[FEATURE]** `saveUserData()` serializa `userData` com `JSON.stringify` e grava em `localStorage`.
- [x] **[FEATURE]** `loadUserData()` lê e faz `JSON.parse` do que estiver salvo, substituindo `userData.objectives` quando existir algo salvo.
- [x] **[FEATURE]** `saveUserData()` conectado ao `change` do checkbox, em `onCheckboxCheck.js`.
- [x] **[FEATURE]** `loadUserData()` chamado uma vez, na inicialização, em `app.js`.

## 🧠 Decisões de Arquitetura & Design

- **`storage.js` não sabe de UI:** a função não conhece checkbox, achievement ou região — só sabe ler/escrever `userData` no `localStorage`. Quem decide _quando_ chamar `saveUserData()` é quem já é dono da mudança (`onCheckboxCheck`), no mesmo padrão de responsabilidade usado até aqui.

- **Substituir propriedade, não o objeto inteiro:** como `userData` é `export const`, não é possível reatribuir o objeto inteiro. `loadUserData()` substitui `userData.objectives` (uma propriedade dele), do mesmo jeito que já se faz com `state.currentRegion = x`.

- **Não sobrescrever quando não há nada salvo:** `loadUserData()` só substitui `userData.objectives` se `localStorage` de fato tiver algo salvo (`JSON.parse` retorna `null` na primeira vez). Caso contrário, o `userData` inicial do próprio arquivo é mantido como está.

- **`storage.js` em `services/`, não em `data/`:** seguida a sugestão do roadmap de separar dados (`gameData`, `userData`) de infraestrutura (leitura/escrita em `localStorage`), já pensando na v0.6 (perfis), que também vai precisar de uma camada de serviço própria.

## 🐛 Desafios & Soluções

Nenhum bug relevante nessa versão — a implementação seguiu direto a partir das decisões já consolidadas nas versões anteriores (separação `gameData`/`userData`, estrutura plana indexada por `id`).

## 💡 Lições Aprendidas

- `localStorage` só armazena texto (string); qualquer objeto precisa passar por `JSON.stringify` antes de salvar e `JSON.parse` ao carregar.
- `getItem` retorna `null` quando a chave nunca foi salva — precisa ser tratado antes de tentar usar o resultado como objeto.
- Persistência não é automática: `save`/`load` só rodam nos momentos em que são explicitamente chamados, não existe sincronização "por trás dos panos".
- Uma versão do roadmap ser rápida de implementar não significa tempo perdido nas versões anteriores — construir o `userData` do jeito certo na v0.4 foi o que tornou essa v0.5 quase trivial.

## ⚠️ Dívidas Técnicas / Pontos para Revisar

- `loadUserData()` hoje só lida com `objectives`; ao crescer o `userData` (perfis, notas, favoritos), revisar se a substituição por propriedade continua suficiente ou se precisa de algo mais estruturado.

## 🔮 Próximos Passos

- Iniciar V0.6 – Sistema de Perfis.

---

<details>
<summary> 🔍 Detalhes Técnicos / Trechos de Código / Logs </summary>

### Código de Exemplo / Snippets Principais

**`services/storage.js`:**

```js
import { userData } from "../data/userData.js";

export function saveUserData() {
  localStorage.setItem("userData", JSON.stringify(userData));
}

export function loadUserData() {
  const salvo = JSON.parse(localStorage.getItem("userData"));
  if (salvo) {
    userData.objectives = salvo.objectives;
  }
}
```

</details>
<br>
