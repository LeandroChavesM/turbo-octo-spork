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

- **Arquivos com somente uma responsabilidade:** Isso facilita na hora de manutenção, e deixa tudo organizado além de limpo.

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

Exibir a lista de categorias na tela usando JavaScript.

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
