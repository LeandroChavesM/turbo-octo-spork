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

## ✨ O que foi implementado

- [x] **[SETUP]** Criado o `state.js` para armazenar o estado atual da aplicação.
- [x] **[SETUP]** Criado o `renderAchievements.js` para renderizar os sucessos da região selecionada.
- [x] **[SETUP]** Criada a pasta `handlers` para separar a lógica de interação dos elementos.
- [x] **[FEATURE]** Criado o `selectedRegion.js` para tratar a seleção de uma região.
- [x] **[FEATURE]** Implementado o armazenamento do `id` da região selecionada em `state.currentRegion`.
- [x] **[FEATURE]** Implementado o fluxo de atualização da interface após a seleção de uma região.
- [x] **[FEATURE]** Ao clicar em uma região, seus respectivos sucessos são renderizados no `main-container`.

## 🧠 Decisões de Arquitetura & Design

- **Estado separado dos dados:** O `state` armazena informações que representam o estado atual da aplicação, enquanto os dados das regiões e seus sucessos permanecem no `gameData`.

- **Identificação por \*\***`id`\***\*:** O `state.currentRegion` armazena apenas o `id` da região selecionada em vez de guardar o objeto completo. Dessa forma, o `gameData` continua sendo a fonte dos dados da região.

- **Evento na criação:** O evento de clique é registrado durante a criação de cada elemento da lista, pois nesse momento a associação entre o elemento e a região já é conhecida.

- **Atualização explícita da interface:** Como o JavaScript Vanilla não possui reatividade automática, a alteração do `state` é seguida explicitamente pela atualização da interface.

- **`app.js`\*\*** como coordenador:\*\* Foi criada uma função no `app.js` responsável por coordenar a atualização da interface e chamar os renders necessários.

## 🐛 Desafios & Soluções

### Problema Encontrado

Dificuldade em fazer a aplicação atualizar os achievements após a alteração da região selecionada.

Inicialmente, foi tentado utilizar uma condição que verificasse `state.currentRegion` para decidir quando renderizar os achievements.

### Causa Raiz

Foi assumido inicialmente que, ao alterar uma propriedade do `state`, o JavaScript perceberia automaticamente a mudança e executaria novamente as funções que dependiam daquele valor.

No JavaScript Vanilla isso não acontece. Alterar o estado apenas altera o valor armazenado; as funções que utilizam esse valor precisam ser executadas novamente de forma explícita.

### Como foi Resolvido

Foi criado no `app.js` um ponto de coordenação para atualização da interface.

O fluxo passou a ser:

1. O usuário clica em uma região.
2. `handleSelectedRegion` identifica a região selecionada.
3. `state.currentRegion` recebe o `id` da região.
4. `renderInterface()` é chamado.
5. `renderAchievements()` consulta o novo `state.currentRegion`.
6. Os achievements correspondentes são renderizados no `main-container`.

Dessa forma, não foi necessário utilizar `location.reload()` ou criar um sistema próprio de reatividade.

## 💡 Lições Aprendidas

- Ter uma variável que representa o estado da aplicação ajuda a separar o estado atual dos dados permanentes do projeto.
- Alterar uma propriedade do `state` não atualiza a interface automaticamente.
- Em JavaScript Vanilla, a atualização da interface precisa ser coordenada e executada explicitamente.
- Estado e interface são responsabilidades diferentes: o `state` armazena informações, enquanto as funções de renderização utilizam essas informações para atualizar o DOM.
- O local onde uma informação já está disponível deve ser considerado ao definir responsabilidades. Não é necessário procurar novamente uma região que já está associada ao elemento durante sua criação.
- Separar a lógica de interação em handlers ajuda a evitar que toda a lógica fique concentrada nas funções de renderização.
- Ao organizar os módulos, é importante observar não apenas se o código funciona, mas também quais módulos dependem uns dos outros e quem deve coordenar o fluxo da aplicação.

## ⚠️ Dívidas Técnicas / Pontos para Revisar

- `selectedRegion.js` atualmente depende de `app.js` para solicitar a atualização da interface. Essa relação funciona na V0.3, mas pode ser revisada conforme a aplicação crescer.
- `renderList()` atualmente também associa `handleSelectedRegion` aos itens que renderiza. Com a evolução do projeto, será necessário avaliar se essa função continua sendo genérica o suficiente para diferentes tipos de listas.
- Avaliar futuramente uma forma de organizar a atualização da interface que reduza o acoplamento entre handlers e `app.js`.

## 🔮 Próximos Passos

- Iniciar a próxima versão do roadmap.
- Avaliar a arquitetura atual após a implementação da V0.3.
- Revisar as dependências entre `app.js`, handlers e funções de renderização conforme novas funcionalidades forem adicionadas.

---

<details>
<summary>🔍 Detalhes Técnicos / Trechos de Código / Logs</summary>

### Código de Exemplo / Snippets Principais

```js
function handleSelectedRegion(item, region) {
  item.addEventListener("click", () => {
    state.currentRegion = region.id;
    renderInterface();
  });
}
```

```js
function renderInterface() {
  renderAchievements(mainContainer);
}
```

```js
function renderAchievements(lugar) {
  for (let i of data) {
    if (state.currentRegion === i.id) {
      let ach = i.achievements;
      lugar.innerHTML = "";

      if (ach) {
        renderList(lugar, ach);
      }
    }
  }
}
```

</details>

# <br>
