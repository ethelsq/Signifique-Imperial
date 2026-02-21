---
task: Onboarding de Novo Cliente
responsavel: "@pricing-strategist"
responsavel_type: agent
atomic_layer: task
elicit: true
Entrada: |
  - nome_cliente: Nome do cliente/empresa
  - projeto: Descrição do projeto
  - servicos: Serviços contratados
  - contato: Dados de contato
Saida: |
  - client_yaml: Arquivo client.yaml gerado
  - project_yaml: Arquivo project.yaml gerado
  - briefing_md: Template de briefing preenchido
  - proposta: Proposta gerada (se não existir)
  - estrutura: Diretórios criados
Checklist:
  - "[ ] Coletar dados do cliente"
  - "[ ] Criar pasta em clients/"
  - "[ ] Gerar client.yaml"
  - "[ ] Gerar project.yaml"
  - "[ ] Criar briefing.md"
  - "[ ] Rodar *calcular-preco se necessário"
  - "[ ] Gerar *proposta-comercial se necessário"
  - "[ ] Informar próximos passos"
---

# *onboard-cliente

Workflow completo de onboarding de novo cliente na estrutura Signifique.

## Elicitação

```
? Nome do cliente/empresa?
  > [texto]

? Descreva o projeto em 1-2 frases:
  > [texto]

? Quais serviços?
  1. Branding (posicionamento, identidade, brand book)
  2. Marketing digital (tráfego, campanhas, LPs)
  3. Consultoria AI (automações, agentes)
  4. Pacote combinado
  > [seleção]

? Contato (nome, email, telefone):
  > [texto]

? Já tem proposta/preço definido?
  1. Sim
  2. Não, preciso calcular
  > [seleção]
```

## Workflow

1. Criar `clients/{slug}/` com estrutura padrão (copiar de _template)
2. Preencher `client.yaml` com dados coletados
3. Criar `projects/{project-slug}/` com project.yaml e briefing.md
4. Se não tem preço → rodar `*calcular-preco`
5. Se não tem proposta → rodar `*proposta-comercial`
6. Exibir resumo e próximos passos

## Output

```
✅ Cliente onboardado!

📁 Estrutura: clients/{slug}/
📋 Client.yaml: ✓
📋 Project.yaml: ✓
📋 Briefing: ✓ (preencher com cliente)

Próximos passos:
1. Preencher briefing.md com o cliente
2. Definir squads do projeto
3. Começar execução
```

## Related
- **Agent:** @pricing-strategist
- **Next:** `*calcular-preco`, `*proposta-comercial`
- **Template:** clients/_template/
