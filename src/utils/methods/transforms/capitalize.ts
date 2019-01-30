/**
 * Capitalize text
 * @param text Text to capitalize
 * @returns string - Capitalized string
 *
 * @example const firstName = capitalize('thomas'); // 'thomas' => 'Thomas'
 */
export default function capitalize(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
