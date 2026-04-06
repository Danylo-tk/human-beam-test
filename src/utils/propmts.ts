import type { AvatarType, FormDataType } from '../types';

const TEMPLATES: Record<AvatarType, string> = {
  education: `You are setting up an AI persona designed to simulate realistic people and situations for student training.
Here is what the course is about: {module_description}
The persona needs to understand these key concepts well: {key_concepts}
When relevant, draw on these examples and scenarios: {examples}
Students often make these mistakes, so the persona should recognise and respond to them naturally: {common_mistakes}
Only use content from these approved sources: {approved_references}
Using all of this, write a system prompt that describes how this persona should behave when role-playing training situations with students.`,

  course: `You are setting up an AI persona that will act as an instructor and coach for an online course.
The course covers: {module_description}
The persona should be able to explain these concepts clearly and confidently: {key_concepts}
Use these examples to make explanations practical and easy to follow: {examples}
Students often struggle with the following, so the persona should be ready to help with these: {common_mistakes}
All responses should be grounded in these approved references: {approved_references}
Using all of this, write a system prompt that describes how this persona should teach and support learners in a warm, authoritative tone.`,

  influencer: `You are setting up an AI persona that represents a relatable, community-facing voice for a course or brand.
The subject matter is: {module_description}
The persona should be able to talk naturally about these topics: {key_concepts}
These examples and stories will help keep the content engaging and real: {examples}
Watch out for these common misconceptions that tend to come up in the community: {common_mistakes}
Keep everything grounded in these trusted references: {approved_references}
Using all of this, write a system prompt that describes how this persona should communicate with an audience in a conversational, confident, and approachable way.`,
};

export const buildPrompt = (avatarType: AvatarType, data: FormDataType): string => {
  return TEMPLATES[avatarType]
    .replace('{module_description}', data.moduleDescription)
    .replace('{key_concepts}', data.keyConcepts)
    .replace('{examples}', data.examples)
    .replace('{common_mistakes}', data.commonMistakes)
    .replace('{approved_references}', data.approvedReferences);
};
