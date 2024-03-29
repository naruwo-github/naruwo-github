import useSWR from 'swr';
import { fetcher } from './fetcher';

type WorkExperience = {
	section: Record<string, never>;
	role: Record<string, never>;
	description: Record<string, never>;
	startedAt: Record<string, never>;
	endedAt: Record<string, never>;
};

export const useWorkExperience = (title: string) => {
	const { data, error, isLoading } = useSWR(
		`/api/work-experience?title=${encodeURIComponent(title)}`,
		fetcher
	);

	return {
		workExperience: data as WorkExperience,
		isLoading,
		isError: error
	};
};
