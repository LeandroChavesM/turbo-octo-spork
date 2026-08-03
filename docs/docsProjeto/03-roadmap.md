# Roadmap

Desenvolvimento dividido em versões pequenas (1–2 dias cada).  
Cada versão entrega algo funcional e ensina conceitos específicos.

---

## Visão Geral das Versões

| Versão | Foco Principal                          | Conceitos Principais                     |
|--------|-----------------------------------------|------------------------------------------|
| V0.1   | Estrutura base + HTML mínimo            | Organização de pastas, módulos           |
| V0.2   | Renderização de categorias              | DOM, createElement, arrays               |
| V0.3   | Navegação Categoria → Sucesso           | Eventos, estado simples                  |
| V0.4   | Objetivos + status básico               | Objetos, manipulação de estado           |
| V0.5   | Persistência com LocalStorage           | LocalStorage, JSON                       |
| V0.6   | Sistema de Perfis                       | Múltiplos estados, troca de contexto     |
| V0.7   | Observações e data de conclusão         | Inputs, eventos de formulário            |
| V0.8   | Barra de progresso e estatísticas       | Cálculos, renderização condicional       |
| V0.9   | Busca                                   | Filtros em arrays, eventos de input      |
| V0.10  | Filtros (pendente / concluído / etc.)   | Lógica de filtragem                      |
| V0.11  | Favoritos                               | Toggle de estado                         |
| V0.12  | Exportar / Importar JSON                | FileReader, Blob, download               |
| V0.13  | Polimento de UI e CSS                   | CSS modular, responsividade básica       |
| V0.14  | Refatoração e limpeza                   | Organização final, convenções            |

---

## V0.1 – Fundação do Projeto

**Objetivo**  
Criar a estrutura de pastas, arquivos base e o HTML mínimo.

**Funcionalidades**
- Estrutura de pastas definida
- Arquivo `index.html` com container raiz
- Arquivos CSS e JS vazios organizados
- Mensagem de “App carregado” no console

**Arquivos envolvidos**
- `index.html`
- `css/main.css`
- `js/app.js`
- Estrutura de pastas completa

**O que implementar**
- HTML com `<div id="app"></div>`
- Importação dos arquivos CSS e JS
- `console.log` de inicialização

**O que NÃO implementar**
- Qualquer renderização de interface
- Dados do jogo
- LocalStorage

**Critério de conclusão**
- Página abre sem erros
- Console mostra mensagem de inicialização
- Estrutura de pastas está correta

**Checklist**
- [ ] Pastas criadas conforme documentação
- [ ] `index.html` contém apenas a estrutura base
- [ ] CSS e JS linkados corretamente
- [ ] Console limpo (sem erros)

**Aprendizados esperados**
- Organização de projeto frontend
- Estrutura mínima de uma SPA simples

**Próximos passos**  
V0.2 – Renderizar a lista de categorias

---

## V0.2 – Lista de Categorias

**Objetivo**  
Exibir a lista de categorias na tela usando JavaScript.

**Funcionalidades**
- Carregar GameData de categorias
- Renderizar cards de categoria
- Mostrar nome e quantidade de sucessos

**Arquivos envolvidos**
- `js/data/gameData.js`
- `js/ui/renderCategories.js`
- `js/app.js`

**O que implementar**
- Objeto/array de categorias em `gameData.js`
- Função que cria elementos DOM para cada categoria
- Inserção no container `#app`

**O que NÃO implementar**
- Clique nas categorias
- Progresso
- Navegação

**Critério de conclusão**
- Lista de categorias aparece na tela
- Dados vêm exclusivamente do GameData

**Checklist**
- [ ] GameData de categorias criado
- [ ] Função de renderização isolada
- [ ] Elementos criados com `createElement`
- [ ] Nenhum HTML hard-coded de categorias

**Aprendizados esperados**
- Arrays e objetos
- `document.createElement`
- `appendChild`
- Separação entre dados e apresentação

**Próximos passos**  
V0.3 – Navegação para a página de Sucessos

---

## V0.3 – Navegação Categoria → Sucesso

**Objetivo**  
Permitir clicar em uma categoria e ver a lista de sucessos.

**Funcionalidades**
- Clique em categoria
- Renderização da lista de sucessos da categoria
- Botão “Voltar”

**Arquivos envolvidos**
- `js/ui/renderCategories.js`
- `js/ui/renderAchievements.js`
- `js/app.js`
- `js/state.js` (estado simples de navegação)

**O que implementar**
- Event listener nos cards de categoria
- Função de renderização de sucessos
- Controle de “tela atual”

**O que NÃO implementar**
- Progresso
- Objetivos
- Status

**Critério de conclusão**
- É possível navegar Categoria ↔ Sucessos
- Botão voltar funciona

**Checklist**
- [ ] Eventos de clique funcionando
- [ ] Renderização limpa a tela anterior
- [ ] Estado de navegação simples implementado

**Aprendizados esperados**
- Eventos (`addEventListener`)
- Gerenciamento de estado mínimo
- Limpeza e re-renderização do DOM

**Próximos passos**  
V0.4 – Objetivos e status básico

---

## V0.4 – Objetivos + Status Básico

**Objetivo**  
Exibir objetivos de um sucesso e permitir marcar como concluído.

**Funcionalidades**
- Clique em sucesso → lista de objetivos
- Checkbox ou botão para marcar status
- Status: pendente / concluído

**Arquivos envolvidos**
- `js/ui/renderObjectives.js`
- `js/state.js`
- `js/data/userData.js` (estrutura inicial)

**O que implementar**
- Renderização de objetivos
- Toggle de status
- Armazenamento temporário em memória

**O que NÃO implementar**
- Persistência (LocalStorage)
- Observações
- Datas

**Critério de conclusão**
- Status muda visualmente ao clicar
- Estado é mantido enquanto a página não recarrega

**Checklist**
- [ ] Objetivos renderizados dinamicamente
- [ ] Status atualiza o estado em memória
- [ ] Re-renderização reflete o novo status

**Aprendizados esperados**
- Manipulação de objetos aninhados
- Atualização de estado + re-render

**Próximos passos**  
V0.5 – Persistência com LocalStorage

---

## V0.5 – LocalStorage

**Objetivo**  
Salvar e carregar o progresso do usuário automaticamente.

**Funcionalidades**
- Salvar status no LocalStorage
- Carregar progresso ao iniciar a aplicação
- Dados do usuário separados dos dados do jogo

**Arquivos envolvidos**
- `js/services/storage.js`
- `js/data/userData.js`
- `js/app.js`

**O que implementar**
- Funções `saveUserData()` e `loadUserData()`
- Serialização com `JSON.stringify` / `JSON.parse`
- Integração com o estado atual

**O que NÃO implementar**
- Múltiplos perfis
- Exportação manual

**Critério de conclusão**
- Progresso permanece após recarregar a página

**Checklist**
- [ ] Dados salvos corretamente
- [ ] Dados carregados na inicialização
- [ ] GameData permanece intacto

**Aprendizados esperados**
- LocalStorage
- JSON
- Separação GameData × UserData

**Próximos passos**  
V0.6 – Sistema de Perfis

---

## V0.6 – Sistema de Perfis

**Objetivo**  
Permitir múltiplos personagens com progresso isolado.

**Funcionalidades**
- Criar perfil
- Selecionar perfil ativo
- Progresso independente por perfil
- Excluir perfil

**Arquivos envolvidos**
- `js/services/profiles.js`
- `js/ui/renderProfiles.js`
- `js/state.js`
- `js/services/storage.js`

**O que implementar**
- Estrutura de perfis no UserData
- Troca de perfil ativo
- Persistência por perfil

**O que NÃO implementar**
- Edição avançada de perfil
- Avatar / imagem

**Critério de conclusão**
- Dois perfis diferentes mantêm progressos separados

**Checklist**
- [ ] Criar perfil funciona
- [ ] Trocar perfil carrega o progresso correto
- [ ] Excluir perfil remove apenas aquele progresso

**Aprendizados esperados**
- Estruturas de dados mais complexas
- Isolamento de estado

**Próximos passos**  
V0.7 – Observações e data de conclusão

---

## V0.7 – Observações e Data

**Objetivo**  
Permitir anotar observações e registrar data de conclusão em cada objetivo.

**Funcionalidades**
- Campo de texto para observações
- Campo de data
- Salvamento automático ou por botão

**Arquivos envolvidos**
- `js/ui/renderObjectives.js`
- `js/services/storage.js`

**O que implementar**
- Inputs controlados
- Atualização do UserData
- Persistência

**O que NÃO implementar**
- Editor rico
- Histórico de alterações

**Critério de conclusão**
- Observações e datas são salvas e restauradas

**Checklist**
- [ ] Input de observação funciona
- [ ] Data é salva corretamente
- [ ] Dados persistem após reload

**Aprendizados esperados**
- Eventos de formulário (`input`, `change`)
- Controle de inputs

**Próximos passos**  
V0.8 – Barras de progresso e estatísticas

---

## V0.8 – Progresso e Estatísticas

**Objetivo**  
Calcular e exibir progresso visual.

**Funcionalidades**
- Barra de progresso por sucesso
- Barra de progresso por categoria
- Estatísticas na página inicial (total concluído, etc.)

**Arquivos envolvidos**
- `js/utils/progress.js`
- `js/ui/render*.js`

**O que implementar**
- Funções de cálculo de progresso
- Renderização de barras
- Contadores na home

**O que NÃO implementar**
- Gráficos avançados
- Histórico de progresso

**Critério de conclusão**
- Barras refletem corretamente o status dos objetivos

**Checklist**
- [ ] Cálculo de % correto
- [ ] Barras atualizam ao mudar status
- [ ] Estatísticas gerais funcionam

**Aprendizados esperados**
- Funções de cálculo
- Renderização condicional / baseada em dados

**Próximos passos**  
V0.9 – Busca

---

## V0.9 – Busca

**Objetivo**  
Permitir pesquisar categorias, sucessos e objetivos.

**Funcionalidades**
- Campo de busca global
- Resultados filtrados em tempo real
- Navegação a partir dos resultados

**Arquivos envolvidos**
- `js/ui/renderSearch.js`
- `js/utils/search.js`

**O que implementar**
- Filtro por nome (case-insensitive)
- Renderização dos resultados
- Limpeza de resultados

**O que NÃO implementar**
- Busca por descrição completa
- Sugestões avançadas

**Critério de conclusão**
- Digitar no campo filtra corretamente os itens

**Checklist**
- [ ] Busca em categorias
- [ ] Busca em sucessos
- [ ] Busca em objetivos
- [ ] Resultados clicáveis

**Aprendizados esperados**
- `Array.filter`
- Eventos de `input`
- Debounce simples (opcional)

**Próximos passos**  
V0.10 – Filtros

---

## V0.10 – Filtros

**Objetivo**  
Filtrar sucessos e objetivos por status.

**Funcionalidades**
- Filtros: Pendentes, Em andamento, Concluídos, Todos
- Aplicação de filtros na listagem

**Arquivos envolvidos**
- `js/ui/renderFilters.js`
- `js/utils/filters.js`

**O que implementar**
- Botões/toggle de filtro
- Lógica de filtragem combinada com busca

**O que NÃO implementar**
- Filtros salvos por perfil
- Filtros compostos complexos

**Critério de conclusão**
- Filtros alteram a lista exibida corretamente

**Checklist**
- [ ] Filtro por status funciona
- [ ] Combinação com busca funciona
- [ ] Estado visual do filtro ativo

**Aprendizados esperados**
- Combinação de filtros
- Estado de UI

**Próximos passos**  
V0.11 – Favoritos

---

## V0.11 – Favoritos

**Objetivo**  
Permitir marcar sucessos ou objetivos como favoritos.

**Funcionalidades**
- Botão de favorito (estrela)
- Filtro de favoritos
- Persistência

**Arquivos envolvidos**
- `js/ui/renderObjectives.js` / `renderAchievements.js`
- `js/services/storage.js`

**O que implementar**
- Toggle de favorito
- Filtro “Favoritos”
- Salvamento no UserData

**O que NÃO implementar**
- Ordenação por favoritos
- Favoritos globais entre perfis

**Critério de conclusão**
- Favoritos são salvos e filtráveis

**Checklist**
- [ ] Toggle funciona
- [ ] Filtro de favoritos funciona
- [ ] Persistência ok

**Aprendizados esperados**
- Toggle de estado booleano
- Integração com sistema de filtros

**Próximos passos**  
V0.12 – Exportar / Importar

---

## V0.12 – Exportar e Importar JSON

**Objetivo**  
Permitir backup e restauração do progresso.

**Funcionalidades**
- Botão “Exportar progresso”
- Download de arquivo `.json`
- Botão “Importar progresso”
- Leitura de arquivo e atualização do estado

**Arquivos envolvidos**
- `js/services/exportImport.js`
- `js/ui/renderSettings.js` (ou similar)

**O que implementar**
- `Blob` + `URL.createObjectURL` para download
- `FileReader` para importação
- Validação básica do JSON

**O que NÃO implementar**
- Sincronização automática
- Histórico de backups

**Critério de conclusão**
- Exportar gera arquivo válido
- Importar restaura o progresso corretamente

**Checklist**
- [ ] Exportação funciona
- [ ] Importação funciona
- [ ] Validação básica de estrutura

**Aprendizados esperados**
- Blob e download de arquivos
- FileReader
- Tratamento de erros simples

**Próximos passos**  
V0.13 – Polimento de UI

---

## V0.13 – Polimento de UI e CSS

**Objetivo**  
Melhorar aparência e usabilidade.

**Funcionalidades**
- Layout limpo e consistente
- Barras de progresso estilizadas
- Estados visuais (hover, active, concluído)
- Espaçamentos e tipografia

**Arquivos envolvidos**
- Todos os arquivos CSS
- Classes nos elementos gerados

**O que implementar**
- Sistema de classes organizado
- Variáveis CSS básicas
- Feedback visual claro

**O que NÃO implementar**
- Animações complexas
- Tema escuro/claro completo
- Design system avançado

**Critério de conclusão**
- Interface agradável e legível em Desktop

**Checklist**
- [ ] Layout estável
- [ ] Contraste adequado
- [ ] Feedback visual em interações

**Aprendizados esperados**
- Organização de CSS
- Boas práticas de UI básica

**Próximos passos**  
V0.14 – Refatoração final

---

## V0.14 – Refatoração e Limpeza

**Objetivo**  
Organizar o código final, remover duplicações e garantir consistência.

**Funcionalidades**
- Nenhuma nova feature
- Código limpo e documentado

**O que implementar**
- Revisão de nomes
- Extração de funções repetidas
- Comentários apenas onde necessário
- Verificação de todas as convenções

**Critério de conclusão**
- Código passa no Checklist geral
- Fácil de entender e expandir

**Checklist**
- [ ] Convenções seguidas
- [ ] Sem código morto
- [ ] Separação de responsabilidades clara
- [ ] Documentação atualizada

**Aprendizados esperados**
- Refatoração
- Manutenção de código

**Próximos passos**  
Funcionalidades futuras (ver documento específico)
