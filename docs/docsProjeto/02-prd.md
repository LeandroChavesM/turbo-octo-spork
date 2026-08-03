# PRD – Product Requirements Document

## 1. Resumo do Produto

Aplicação web para tracking de sucessos e missões do Dofus 3.0.

Funciona como um bloco de notas inteligente local, com suporte a múltiplos personagens, progresso independente, anotações e exportação de dados.

## 2. Problema

A interface oficial do Dofus dificulta:

- Visualizar progresso geral de forma clara
- Organizar sucessos por categoria de maneira prática
- Registrar anotações e datas de conclusão
- Gerenciar vários personagens simultaneamente
- Filtrar e buscar rapidamente

## 3. Objetivos

| Objetivo                         | Prioridade |
|----------------------------------|------------|
| Acompanhar progresso de sucessos | Alta       |
| Gerenciar múltiplos perfis       | Alta       |
| Registrar status e notas         | Alta       |
| Busca e filtros                  | Média      |
| Exportar/importar progresso      | Média      |
| Interface rápida e limpa         | Alta       |

## 4. Público-Alvo

Jogadores de Dofus 3.0 que:

- Querem controle detalhado do progresso
- Jogam com mais de um personagem
- Preferem ferramentas simples e offline

## 5. Funcionalidades Principais

### 5.1 Página Inicial
- Lista de categorias
- Barra de pesquisa global
- Estatísticas de progresso geral
- Progresso por perfil ativo

### 5.2 Categoria
- Nome da categoria
- Quantidade total de sucessos
- Barra de progresso da categoria
- Lista de sucessos da categoria

### 5.3 Sucesso
- Nome e descrição
- Recompensas
- Lista de objetivos
- Barra de progresso do sucesso
- Status geral (pendente / em andamento / concluído)

### 5.4 Objetivo
- Nome
- Status (pendente / em andamento / concluído)
- Campo de observações
- Data de conclusão
- Links úteis (futuro)

### 5.5 Perfis
- Criar, editar e excluir personagens
- Progresso completamente isolado por perfil
- Um perfil ativo por vez

### 5.6 Busca
- Pesquisa por nome de categoria, sucesso ou objetivo
- Resultados em tempo real

### 5.7 Filtros
- Pendentes
- Em andamento
- Concluídos
- Favoritos

### 5.8 Exportação / Importação
- Exportar progresso do perfil ativo em JSON
- Importar progresso de arquivo JSON

## 6. Fluxo Principal de Navegação

```
Página Inicial
    ↓
Categoria
    ↓
Sucesso
    ↓
Objetivos (com status, notas e data)
```

## 7. Requisitos Não-Funcionais

- Funciona 100% offline após carregamento
- Performance rápida mesmo com muitos sucessos
- Interface priorizada para Desktop (≥ 1024px)
- Código modular e fácil de manter
- Sem dependências externas

## 8. Critérios de Aceitação Gerais

- [ ] Todos os dados do jogo permanecem imutáveis
- [ ] Progresso nunca é gravado nos dados do jogo
- [ ] Interface é gerada dinamicamente
- [ ] Múltiplos perfis funcionam de forma isolada
- [ ] Dados persistem após recarregar a página
- [ ] Exportação e importação funcionam corretamente

## 9. Métricas de Sucesso (internas)

- Tempo para localizar um sucesso específico < 5 segundos
- Tempo de carregamento inicial < 1 segundo
- Código legível por outro desenvolvedor em menos de 30 minutos

## 10. Fora de Escopo da Versão 1

- Sincronização entre dispositivos
- Conta de usuário / login
- Notificações
- Tema claro/escuro avançado
- Versão mobile otimizada
- Integração com API do jogo
