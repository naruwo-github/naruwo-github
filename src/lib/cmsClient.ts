import { Client } from '@notionhq/client'
import {
  ListBlockChildrenResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'

const apiSecret = process.env.NOTION_API_SECRET
const authorPageId = process.env.NOTION_AUTHOR_PAGE_ID
const workExperiencePageId = process.env.NOTION_WORK_EXPERIENCE_PAGE_ID

const notion = new Client({
  auth: apiSecret
})

// TODO: Move to /app/api/author
export const getAuthorData =
  async (): Promise<ListBlockChildrenResponse | null> => {
    if (!authorPageId) return null

    try {
      const contents = await notion.blocks.children.list({
        block_id: authorPageId
      })
      return contents
    } catch (error) {
      // TODO: Introduce a mechanism to collect logs
      console.error('Failed to fetch author data: ', error)
      return null
    }
  }

// TODO: Move to /app/api/work-experience
export const getWorkExperienceData =
  async (): Promise<QueryDatabaseResponse | null> => {
    if (!workExperiencePageId) return null

    try {
      const contents = await notion.databases.query({
        database_id: workExperiencePageId
      })
      return contents
    } catch (error) {
      // TODO: Introduce a mechanism to collect logs
      console.error('Failed to fetch work experience data: ', error)
      return null
    }
  }
