
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function performBrandArcheology(brandName: string, niche: string, values: string) {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Você é o estrategista sênior da Signifique, especialista no Sistema Imperial INCAS.
    Analise a marca abaixo sob a metodologia INCAS (Inspiração, Nobreza, Conexão, Ancestralidade, Significado).
    
    Nome da Marca: ${brandName}
    Nicho: ${niche}
    Valores e Palavras-chave: ${values}
    
    Incorpore os conceitos de Soberania, Arqueologia de Marca, Brand Equity (Aaker) e Disponibilidade Mental (Byron Sharp).
    O tom de resposta deve ser sofisticado, autoritário, evocativo e preciso.
    Identifique o Arquétipo Soberano, a Essência, o Tom de Voz ideal, Atributos de Luxo, Ativos Distintivos e uma Narrativa Assinatura poderosa.`,
    config: {
      thinkingConfig: { thinkingBudget: 4000 },
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          archetype: { type: Type.STRING, description: 'O Arquétipo Soberano identificado (ex: O Governante, O Sábio Ancestral).' },
          essence: { type: Type.STRING, description: 'A Essência da Marca (definição de Aaker adaptada ao luxo).' },
          toneOfVoice: { type: Type.STRING, description: 'Descrição do Tom de Voz (como a marca deve soar).' },
          attributes: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: '3-4 Atributos principais da marca (ex: Atemporal, Distinta, Alta Costura).'
          },
          distinctiveAssets: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: '3 Ativos distintivos principais para garantir disponibilidade mental.'
          },
          signatureStory: { type: Type.STRING, description: 'Uma semente narrativa poderosa para o storytelling da marca.' },
          sovereigntyIndex: { type: Type.NUMBER, description: 'Pontuação de 1-100 do potencial de soberania no mercado atual.' }
        },
        required: ['archetype', 'essence', 'toneOfVoice', 'attributes', 'distinctiveAssets', 'signatureStory', 'sovereigntyIndex']
      }
    }
  });

  return JSON.parse(response.text.trim());
}
