# 🚀 Devlog [v0.1] - Estrutura Inicial do Projeto

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

# Devlog [v0.2] - Lista de Categorias

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

# Devlog [v0.2] - Lista de Categorias

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

# Devlog [v0.3] - Navegação Categoria → Sucesso

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

# Devlog [v0.3] - Navegação Categoria → Sucesso

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

# Devlog [v0.3] - Navegação Categoria → Sucesso

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
