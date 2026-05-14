---
name: dogfooding
description: '**WORKFLOW SKILL** — Executa testes internos (dogfooding) no jogo bingo, validando builds, testes unitários e execução do jogo. USE PARA: testar funcionalidades do bingo-copilot2 internamente; validar mudanças no código; simular gameplay básico. NÃO USE PARA: desenvolvimento geral (use agente padrão); debugging em tempo real; configuração de agentes externos.'
---

# Dogfooding do Jogo Bingo

Esta habilidade executa um fluxo de trabalho completo para testar internamente o projeto bingo-copilot2, simulando o uso real do jogo.

## Fluxo de Trabalho

1. **Instalar dependências**: Executa `npm install` para garantir que todas as dependências estejam atualizadas.

2. **Executar testes**: Roda `npm test` para validar a lógica do bingo e componentes.

3. **Construir o projeto**: Executa `npm run build` para verificar se o build de produção funciona.

4. **Iniciar servidor de desenvolvimento**: Executa `npm run dev` em background para testar o jogo em execução.

5. **Simular gameplay**: (Opcional) Interage com o jogo para validar funcionalidades básicas, como iniciar um jogo e marcar quadrados.

6. **Validar saída**: Verifica logs e possíveis erros durante a execução.

## Critérios de Qualidade

- Todos os testes devem passar.
- O build deve ser bem-sucedido sem erros.
- O servidor deve iniciar sem falhas.
- O jogo deve carregar e permitir interações básicas.

## Ramificações

- Se testes falharem: Pare e reporte erros específicos.
- Se build falhar: Identifique problemas de compilação.
- Se servidor não iniciar: Verifique dependências e configuração.

## Verificações de Conclusão

- Status dos testes: Passaram?
- Build concluído: Sim/Não
- Servidor rodando: Sim/Não
- Gameplay testado: Sim/Não

Esta habilidade ajuda a garantir que o jogo esteja pronto para uso interno antes de releases ou mudanças maiores.