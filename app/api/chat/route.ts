import { NextResponse } from "next/server";
import { Message } from "@ai-sdk/react";
import { queryVectorStore } from "@/lib/queryVectorStore";
import { auth } from "@clerk/nextjs/server";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { streamText } from "ai";
const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY!,
});
const model = google("gemini-2.0-flash");

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }
    const reqBody = await req.json();
    const messages: Message[] = reqBody.messages;
    const userQuestion = messages[messages.length - 1].content;
    const reportData = reqBody.data.reportData;
    console.log("Report data: ", reportData);
    if (!reportData) {
      return new NextResponse("Report data is required", {
        status: 400,
      });
    }
    const searchQuery = `Patient medical report is :\n ${reportData} \n\n and the user question is :\n ${userQuestion} \n\n Answer the question based on the report.`;
    console.log("Search query: ", searchQuery);
    const reterivals = await queryVectorStore(searchQuery);

    const prompt = `
        You are a helpful medical assistant analyzing patient reports. 
        Based on the following patient medical report and the user's question, provide a clear and accurate response.

        Patient Report:
        ${reportData}

        User Question:
        ${userQuestion}

        Retrieved Context from Vector Database:
        ${reterivals}

        Answer the question based solely on the information in the report and the retrieved context.
        If the information needed to answer the question is not in the report or retrieved context, state this clearly.
        Do not make up or infer information that isn't present in the provided materials.
        if the user greets then you also greet the user.
        talk like a real doctor to the user.
        provide the best possible answer to the user.
    `;

    const result = await streamText({
      model,
      prompt,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.log("[CHAT_ERROR]", error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
