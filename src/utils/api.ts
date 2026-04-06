export const generateSystemPrompt = async (prompt: string): Promise<string> => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) throw new Error('Failed to generate system prompt');

  const data = await response.json();

  console.log('ChatGPT response data: ', data);

  return data.choices[0].message.content;
};

export const createTavusPersona = async (personaName: string, systemPrompt: string): Promise<void> => {
  const response = await fetch('https://tavusapi.com/v2/personas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_TAVUS_API_KEY,
    },
    body: JSON.stringify({
      persona_name: personaName,
      system_prompt: systemPrompt,
    }),
  });

  if (!response.ok) throw new Error('Failed to create Tavus persona');
};
