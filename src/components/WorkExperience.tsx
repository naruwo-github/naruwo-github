import { getWorkExperienceData } from "@/lib/cmsClient";
import {
	DatabaseObjectResponse,
	PageObjectResponse,
	PartialDatabaseObjectResponse,
	PartialPageObjectResponse,
	QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { WorkExperienceCard } from "./WorkExperienceCard";

type RichText = {
	plain_text: string;
	[key: string]: unknown;
};
type DateObject = {
	start: string | null;
	end: string | null;
	time_zone: string | null;
};
type RichTextProperty = {
	id: string;
	type: "rich_text";
	rich_text: RichText[];
};
type DateProperty = {
	id: string;
	type: "date";
	date: DateObject;
};
type TitleProperty = {
	id: string;
	type: "title";
	title: RichText[];
};
type PropertiesObject = {
	role: RichTextProperty;
	endedAt: DateProperty;
	startedAt: DateProperty;
	description: RichTextProperty;
	section: TitleProperty;
};

export const WorkExperience = async (): Promise<React.JSX.Element> => {
	const data: QueryDatabaseResponse | null = await getWorkExperienceData();

	if (data === null) return <p>Failed to fetch work experience data</p>;

	return (
		<React.Fragment>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{data.results.map(
					(
						result:
							| PageObjectResponse
							| PartialPageObjectResponse
							| PartialDatabaseObjectResponse
							| DatabaseObjectResponse,
					) => {
						const properties = (
							result as PageObjectResponse | DatabaseObjectResponse
						).properties as unknown as PropertiesObject;
						const section = properties.section.title[0].plain_text;
						const startedAt = properties.startedAt.date?.start ?? "-";
						const endedAt = properties.endedAt.date?.start ?? "Present";
						const role = properties.role.rich_text[0].plain_text;
						return (
							<WorkExperienceCard
								key={section}
								title={section}
								startedAt={startedAt}
								endedAt={endedAt}
								role={role}
							/>
						);
					},
				)}
			</div>
		</React.Fragment>
	);
};
