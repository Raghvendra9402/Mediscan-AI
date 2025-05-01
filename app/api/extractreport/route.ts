import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { pcIndex } from "@/lib/pinecone";
import { generateEmbedding } from "@/lib/generateEmbedding";
import { auth } from "@clerk/nextjs/server";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }
    const { base64 } = await req.json();
    if (!base64) {
      return new NextResponse("Base64 data is required", {
        status: 400,
      });
    }
    const contents = [
      {
        inlineData: {
          mimeType: base64.substring(
            base64.indexOf(":") + 1,
            base64.indexOf(";")
          ),
          data: base64.split(",")[1],
        },
      },
      {
        text: "You are a skilled and experienced medical doctor. Carefully examine the contents of this image and summarize the medical information.Use clear, professional language. Format the output into well-structured bullet points or sections so it is easy to understand by healthcare providers and patients alike.",
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: contents,
    });

    if (!response.text) {
      throw new Error("Response text is undefined");
    }
    const embedding = await generateEmbedding(response.text);
    if (!embedding) {
      throw new Error("Failed to generate embeddings");
    }
    await pcIndex.namespace("ns1").upsert([
      {
        id: `${userId}-${Date.now()}`,
        values: embedding,
        metadata: {
          userId,
          chunk: response.text,
        },
      },
    ]);

    return NextResponse.json({
      text: response.text,
    });
  } catch (error) {
    console.log("[EXTRACT_REPORT_ERROR]", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
