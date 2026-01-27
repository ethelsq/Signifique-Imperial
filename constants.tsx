
import React from 'react';
import { Pillar, RitualPhase } from './types';

export const INCAS_PILLARS: Pillar[] = [
  {
    id: 'I',
    title: 'Arquétipos Imperiais',
    concept: 'Escavação do DNA de soberania (Arqueologia de Marca).',
    integration: 'Aplicação da Brand Essence (Aaker) para definir o propósito central e o arquétipo regente.',
    icon: '👑',
    color: '#bf953f'
  },
  {
    id: 'N',
    title: 'Distintividade Nobre',
    concept: 'Transformação de valores éticos (Ama Llulla, Ama Suwa, Ama Quella) em ativos de poder.',
    integration: 'Foco em Ativos Distintivos (Byron Sharp). Criação de códigos visuais e sensoriais únicos.',
    icon: '💎',
    color: '#d4af37'
  },
  {
    id: 'C',
    title: 'Ressonância Coletiva',
    concept: 'Ativação do princípio Ayni (Reciprocidade Sagrada).',
    integration: 'Uso de Signature Stories (Aaker) para converter clientes em fiéis súditos da marca.',
    icon: '🔥',
    color: '#8b0000'
  },
  {
    id: 'A',
    title: 'Arquitetura Ancestral',
    concept: 'Mapeamento dos Ceques mentais (Caminhos de memória).',
    integration: 'Estruturação nos Três Mundos (Hanan, Kay, Uku Pacha) para garantir Disponibilidade Mental.',
    icon: '🏔️',
    color: '#4a3728'
  },
  {
    id: 'S',
    title: 'Significado Sagrado',
    concept: 'Tangibilização em Amuletos de Conversão.',
    integration: 'Design de alta performance que une estética hipnótica à estratégia funcional de luxo.',
    icon: '📜',
    color: '#fcf6ba'
  }
];

export const RITUAL_CYCLES: RitualPhase[] = [
  { name: 'Tarpuy', translation: 'Semear', action: 'Teste de novos formatos assistidos por IA e validação de hipóteses.', status: 'completed' },
  { name: 'Poqoy', translation: 'Crescer', action: 'Monitoramento de engajamento qualitativo e expansão de autoridade.', status: 'active' },
  { name: 'Aymuray', translation: 'Colher', action: 'Análise profunda de conversão, ROI e ROAS imperial.', status: 'pending' },
  { name: 'Samay', translation: 'Descansar', action: 'Integração de insights, refinamento estratégico e repouso criativo.', status: 'pending' },
  { name: 'Muyu', translation: 'Reiniciar', action: 'Evolução constante da alma da marca para um novo ciclo de poder.', status: 'pending' }
];
