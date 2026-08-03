# Constituição do Projeto

## Nome Oficial

**Dofus 3.0 Achievement & Quest Tracker**

## Visão

Aplicação web local que funciona como bloco de notas inteligente para acompanhar sucessos e missões do Dofus 3.0 de forma mais organizada, rápida e personalizável que a interface oficial do jogo.

## Princípios Fundamentais

1. **Simplicidade primeiro**  
   Interface limpa, rápida e sem distrações. Prioridade absoluta para Desktop.

2. **Vanilla only**  
   Apenas HTML, CSS e JavaScript puro. Nenhum framework, biblioteca ou build tool.

3. **Separação total de dados**  
   - Dados do jogo (GameData) → imutáveis, nunca contêm progresso.  
   - Dados do usuário (UserData) → progressos, notas, datas, configurações.

4. **Interface gerada por JavaScript**  
   O HTML contém apenas a estrutura base. Toda a UI é criada dinamicamente.

5. **Modularidade**  
   Código organizado em módulos claros. Cada arquivo tem uma responsabilidade única.

6. **Evolução incremental**  
   Desenvolvimento em versões pequenas (V0.1, V0.2...). Cada versão entrega valor e ensina conceitos específicos.

7. **Aprendizado como objetivo**  
   O projeto serve tanto como ferramenta útil quanto como exercício prático dos fundamentos de JavaScript.

## Escopo Inicial

- Navegação: Categoria → Sucesso → Objetivos
- Progresso por personagem (múltiplos perfis)
- Status, observações e datas por objetivo
- Busca e filtros básicos
- Exportação/importação de progresso em JSON

## Fora de Escopo (v1)

- Backend / autenticação
- Sincronização em nuvem
- Mobile-first
- Integração direta com o cliente do jogo
- Sistema de conquistas da própria aplicação

## Decisões Arquiteturais Fixas

| Decisão                        | Justificativa                                      |
|--------------------------------|----------------------------------------------------|
| Vanilla JS                     | Foco em fundamentos e controle total               |
| LocalStorage                   | Persistência simples sem servidor                  |
| Dados do jogo em arquivos JS   | Fácil manutenção e versionamento                   |
| UI 100% dinâmica               | Separação clara entre estrutura e comportamento    |
| Um perfil ativo por vez        | Simplifica estado e evita complexidade desnecessária |

## Critérios de Qualidade

- Código legível e comentado quando necessário
- Funções pequenas e com responsabilidade única
- Nomes claros e consistentes
- Fácil de expandir sem quebrar o existente
- Funciona offline após o primeiro carregamento

## Responsabilidade deste Documento

Este arquivo define a identidade e os princípios imutáveis do projeto.  
Todas as demais documentações devem respeitar esta Constituição.
