# Checklist Geral do Projeto

Use este checklist ao final de cada versão e especialmente ao concluir o projeto.

---

## Estrutura e Organização

- [ ] Estrutura de pastas está conforme a documentação
- [ ] `index.html` contém apenas a estrutura base
- [ ] Todos os scripts estão na ordem correta de dependência
- [ ] Nenhum arquivo de código na raiz além de `index.html`
- [ ] Documentação está atualizada

---

## Separação de Dados

- [ ] GameData não contém nenhum campo de progresso
- [ ] UserData não contém nomes, descrições ou recompensas do jogo
- [ ] Progresso é referenciado apenas por IDs
- [ ] LocalStorage salva apenas UserData

---

## Funcionalidades Core

- [ ] Lista de categorias renderiza corretamente
- [ ] Navegação Categoria → Sucesso → Objetivos funciona
- [ ] Status de objetivo pode ser alterado
- [ ] Observações podem ser salvas
- [ ] Data de conclusão pode ser registrada
- [ ] Progresso persiste após recarregar a página

---

## Perfis

- [ ] É possível criar múltiplos perfis
- [ ] Progresso é isolado por perfil
- [ ] Troca de perfil carrega os dados corretos
- [ ] Exclusão de perfil funciona com segurança
- [ ] Sempre existe pelo menos um perfil

---

## Busca e Filtros

- [ ] Busca encontra categorias, sucessos e objetivos
- [ ] Filtros por status funcionam
- [ ] Filtro de favoritos funciona
- [ ] Busca + filtros podem ser combinados

---

## Exportação / Importação

- [ ] Exportar gera arquivo JSON válido
- [ ] Importar restaura o progresso corretamente
- [ ] Validação básica impede arquivos inválidos

---

## Interface

- [ ] Interface é gerada 100% pelo JavaScript
- [ ] Barras de progresso refletem o estado real
- [ ] Estados visuais claros (concluído, favorito, ativo)
- [ ] Layout utilizável em Desktop
- [ ] Feedback visual em interações

---

## Qualidade de Código

- [ ] Funções pequenas e com responsabilidade única
- [ ] Nomes claros e consistentes
- [ ] Sem código morto ou comentado
- [ ] Convenções de nomenclatura seguidas
- [ ] Sem variáveis globais desnecessárias
- [ ] Tratamento básico de erros no carregamento do LocalStorage

---

## Aprendizado

- [ ] Cada versão do Roadmap foi concluída com o checklist específico
- [ ] Conceitos de DOM, eventos, arrays, objetos e LocalStorage foram praticados

---

## Antes de Considerar o Projeto “Pronto”

- [ ] Todas as funcionalidades do PRD estão implementadas
- [ ] Roadmap até V0.14 concluído
- [ ] Checklist acima 100% marcado
- [ ] Código está legível para outra pessoa
- [ ] Documentação reflete o estado atual do código
