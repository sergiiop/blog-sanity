import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
// import { visionTool } from '@sanity/vision'
// import { schemaTypes } from './schemas'
import schemas from './sanity/schemas'

export default defineConfig({
  projectId: 'q394hn14',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-04-14',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas
  }
})
