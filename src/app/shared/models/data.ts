export interface Timeline {
	start_date: string;
	end_date: string;
	description: string;
	description2: string;
	schedule: Schedule[];
	sessions: Session[];
}

export interface Schedule {
	_id: string;
	start_time: string;
	end_time: string;
	type: string;
	tag: string[];
	description: string;
	speakers?: string;
	location?: string;
}

export interface Session {
	_id: string;
	description: string;
	speakers: string;
}
