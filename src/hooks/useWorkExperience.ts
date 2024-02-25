import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useWorkExperience = (title: string) => {
	const { data, error, isLoading } = useSWR(
		`/api/work-experience?title=${encodeURIComponent(title)}`,
		fetcher,
	);

	return {
		workExperience: data,
		isLoading,
		isError: error,
	};
};
