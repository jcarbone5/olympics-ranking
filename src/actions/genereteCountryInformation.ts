"use server";

import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";

//Utils
import { prompt } from "@/utils/prompt";

//Interfaces
import { CountryAndMedals } from "@/interfaces/olympics";

export async function generateCountryInformation(data: CountryAndMedals) {
  const stream = createStreamableValue("");

  (async () => {
    const { textStream } = await streamText({
      model: openai("gpt-3.5-turbo"),
      prompt: prompt(data),
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return { output: stream.value };
}
