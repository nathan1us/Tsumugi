 /**
  * Generate a random integer between a given range
  * @param start Start of the range
  * @param end End of the range
  * @returns number - Integer between 'start' (inclusive) and 'end' (inclusive).
  *
  * @example const generated = getNumInRange(1, 6);
  */
export default function getNumInRange(start: number, end: number): number {
	start = Math.ceil(start);
	end = Math.floor(end);

	return Math.floor(Math.random() * (start - end + 1)) + end;
}
