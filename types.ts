
export interface Pillar {
  id: string;
  title: string;
  concept: string;
  integration: string;
  icon: string;
  color: string;
}

export interface RitualPhase {
  name: string;
  translation: string;
  action: string;
  status: 'pending' | 'active' | 'completed';
}

export interface BrandArcheologyResult {
  archetype: string;
  essence: string;
  toneOfVoice: string;
  attributes: string[];
  distinctiveAssets: string[];
  signatureStory: string;
  sovereigntyIndex: number;
}
