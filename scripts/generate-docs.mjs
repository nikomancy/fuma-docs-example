import { generateFiles } from 'fumadocs-openapi';
 
void generateFiles({
  input: ['./onboardingApi.yaml'], // the OpenAPI schemas
  output: './content/docs',
});