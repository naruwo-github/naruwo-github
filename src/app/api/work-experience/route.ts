import { notion, workExperiencePageId } from '@/lib/cmsClient'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title')
  if (!title) return Response.redirect('/')

  const res = await notion.databases.query({
    database_id: workExperiencePageId!,
    filter: {
      property: 'section',
      rich_text: {
        equals: title
      }
    }
  })
  const properties = await res.results[0].properties
  return Response.json(properties)
}
