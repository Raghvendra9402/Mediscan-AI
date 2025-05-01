import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export const generateEmbedding = async (input: string) => {
  if (!input) {
    throw new Error("Input is required to generate an embedding");
  }
  const embeddingResponse = await ai.models.embedContent({
    model: "gemini-embedding-exp-03-07",
    contents: input,
  });

  const embeddings = embeddingResponse?.embeddings?.[0]?.values;

  if (!embeddings || !Array.isArray(embeddings)) {
    throw new Error("Failed to generate valid embedding vector");
  }

  return embeddings;
};
