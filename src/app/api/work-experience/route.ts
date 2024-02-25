import { notion, workExperiencePageId } from '@/lib/cmsClient';
import {
	PageObjectResponse,
	QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints';

export async function GET(request: Request) {
	if (!workExperiencePageId) {
		return new Response('Work experience page id is not set', { status: 500 });
	}

	const { searchParams } = new URL(request.url);
	const title = searchParams.get('title');
	if (!title)
		return new Response('Title parameter is required', { status: 400 });

	try {
		const res: QueryDatabaseResponse = await notion.databases.query({
			database_id: workExperiencePageId,
			filter: {
				property: 'section',
				rich_text: {
					equals: title
				}
			}
		});
		if (res.results.length > 0) {
			const result = isPageObjectResponse(res.results[0])
				? res.results[0]
				: null;
			if (result === null) {
				// res.results[0] is not a PageObjectResponse
				return Response.json({});
			}
			const properties = result.properties;
			return Response.json(properties);
		}
		return new Response('No matching title found', { status: 404 });
	} catch (error) {
		// TODO: Introduce a mechanism to collect logs
		console.error(error);
		return new Response('Internal Server Error', { status: 500 });
	}
}

// Type guard function
function isPageObjectResponse(obj: unknown): obj is PageObjectResponse {
	if (typeof obj === 'undefined') return false;
	if (obj === null) return false;
	if (typeof obj !== 'object') return false;

	// Add necessary checks for properties in PageObjectResponse
	return Object.keys(obj).includes('properties');
}
