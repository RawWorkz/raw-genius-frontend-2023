export interface Timeline {
	start_date: string
	end_date: string
	description: string
	description2: string
	schedule: Schedule[]
}

export interface Schedule {
	start_time: string
	end_time: string
	description: string
	speakers?: string
	location?: string;
}
