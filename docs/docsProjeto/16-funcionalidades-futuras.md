# Funcionalidades Futuras

Ideias que podem ser implementadas após a versão 1 estar estável.  
Não fazem parte do escopo atual.

---

## Curto Prazo (após V0.14)

| Funcionalidade                    | Descrição                                      | Complexidade |
|-----------------------------------|------------------------------------------------|--------------|
| Tema claro / escuro               | Alternância de tema                            | Baixa        |
| Ordenação de listas               | Por nome, progresso, favoritos                 | Baixa        |
| Contador de objetivos restantes   | “X objetivos restantes nesta categoria”        | Baixa        |
| Confirmação ao excluir perfil     | Modal simples de confirmação                   | Baixa        |
| Debounce na busca e nas notas     | Melhor performance em digitação                | Baixa        |

---

## Médio Prazo

| Funcionalidade                    | Descrição                                      | Complexidade |
|-----------------------------------|------------------------------------------------|--------------|
| Links úteis por objetivo          | Campo de URLs (guias, vídeos)                  | Média        |
| Tags personalizadas               | Usuário cria tags e associa a sucessos         | Média        |
| Histórico de conclusão            | Lista de objetivos concluídos por data         | Média        |
| Estatísticas avançadas            | Gráficos simples de progresso ao longo do tempo| Média        |
| Importação parcial                | Escolher quais perfis importar                 | Média        |
| Backup automático periódico       | Salvar versões anteriores no LocalStorage      | Média        |

---

## Longo Prazo / Ideias Avançadas

| Funcionalidade                    | Descrição                                      | Complexidade |
|-----------------------------------|------------------------------------------------|--------------|
| Sincronização entre dispositivos  | Via arquivo ou serviço externo                 | Alta         |
| Modo offline com Service Worker   | Cache completo da aplicação                    | Alta         |
| Integração com dados oficiais     | Atualização automática de GameData             | Alta         |
| Sistema de metas                  | “Concluir X sucessos esta semana”              | Média-Alta   |
| Compartilhamento de progresso     | Gerar imagem ou link de resumo                 | Alta         |
| Suporte a missões (além de sucessos)| Expandir o modelo de dados                   | Alta         |
| Versão mobile otimizada           | Layout adaptado para telas menores             | Alta         |

---

## Ideias de Qualidade de Vida

- Atalhos de teclado (ex: `/` para focar a busca)
- Modo “foco” (esconder itens concluídos)
- Exportação em CSV além de JSON
- Contador de dias desde a última conclusão
- Notas por sucesso (além de por objetivo)

---

## Como adicionar uma nova funcionalidade

1. Avaliar se ela respeita a Constituição do Projeto
2. Decidir se afeta GameData, UserData ou apenas UI
3. Adicionar uma nova versão no Roadmap (V0.15, V0.16...)
4. Documentar objetivo, o que implementar e o que não implementar
5. Atualizar Checklist e, se necessário, os documentos de dados
6. Implementar de forma incremental

---

## Priorização Sugerida

1. Qualidade de vida simples (tema, ordenação, confirmações)
2. Links úteis e tags
3. Estatísticas e histórico
4. Qualquer coisa que envolva rede ou sincronização

Manter o projeto simples deve continuar sendo a prioridade.
