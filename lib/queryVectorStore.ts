import { GoogleGenAI } from "@google/genai";
import { pcIndex } from "./pinecone";
import { generateEmbedding } from "./generateEmbedding";

export async function queryVectorStore(searchQuery: string): Promise<string> {
  const embeddings = await generateEmbedding(searchQuery);
  if (!embeddings) {
    throw new Error("Failed to generate embeddings");
  }
  const queryResponse = await pcIndex.namespace("ns1").query({
    topK: 5,
    vector: embeddings,
    includeMetadata: true,
    includeValues: false,
  });

  if (queryResponse.matches.length > 0) {
    const matchedDocuments = queryResponse.matches
      .map((match, idx) => {
        return `\n Clinical finding ${idx + 1} : ${match.metadata?.chunk}`;
      })
      .join("\n\n");

    return matchedDocuments;
  } else {
    return "No relevant documents found.";
  }
}
