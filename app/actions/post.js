import { createMarker } from 'APP/app/main';

const POST_TO_MAP = 'POST_TO_MAP'

export const postToMap = (pack) {
	// receive the pack with marker data from a form in Post compononent
	const coords = pack[0];
	const msg = pack[1];
	createMarker(coords, msg);
}


