import { PrismaClient } from "@prisma/client";

export const getPrisma = () => {
  return {
    chat: {
      findFirst: async (args: any) => {
        return {
          id: "1",
          model: "test-model",
          quality: "high",
          prompt: "test-prompt",
          title: "test-title",
          llamaCoderVersion: "v2",
          shadcn: false,
          messages: [],
          createdAt: new Date(),
        };
      },
    },
    message: {
      create: async (args: any) => {
        return {
          id: "1",
          role: "assistant",
          content: "test-content",
          chatId: "1",
          position: 0,
          createdAt: new Date(),
        };
      },
    },
  } as unknown as PrismaClient;
};
