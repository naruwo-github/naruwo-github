import {
  PageObjectResponse,
  QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints'
import { notion, workExperiencePageId } from '@/lib/cmsClient'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')
  if (!title)
    return new Response('Title parameter is required', { status: 400 })

  try {
    const res: QueryDatabaseResponse = await notion.databases.query({
      database_id: workExperiencePageId!,
      filter: {
        property: 'section',
        rich_text: {
          equals: title
        }
      }
    })
    if (res.results.length > 0) {
      const result = res.results[0] as unknown as PageObjectResponse
      const properties = result.properties
      return Response.json(properties)
    } else {
      return new Response('No matching title found', { status: 404 })
    }
  } catch (error) {
    // TODO: Introduce a mechanism to collect logs
    console.error(error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
