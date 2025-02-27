import type {
	APIMessageComponentDMInteraction,
	APIMessageComponentGuildInteraction,
	APIMessageComponentInteraction,
} from './_interactions/messageComponents';
import type { APIPingInteraction } from './_interactions/ping';
import type {
	APIApplicationCommandDMInteraction,
	APIApplicationCommandGuildInteraction,
	APIApplicationCommandInteraction,
} from './_interactions/applicationCommands';
import type {
	APIApplicationCommandAutocompleteDMInteraction,
	APIApplicationCommandAutocompleteGuildInteraction,
	APIApplicationCommandAutocompleteInteraction,
} from './_interactions/autocomplete';
import type {
	APIModalSubmitDMInteraction,
	APIModalSubmitGuildInteraction,
	APIModalSubmitInteraction,
} from './_interactions/modalSubmit';

export * from './_interactions/base';
export * from './_interactions/messageComponents';
export * from './_interactions/ping';
export * from './_interactions/responses';
export * from './_interactions/applicationCommands';
export * from './_interactions/modalSubmit';
export * from './_interactions/autocomplete';

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIInteraction =
	| APIPingInteraction
	| APIApplicationCommandInteraction
	| APIMessageComponentInteraction
	| APIApplicationCommandAutocompleteInteraction
	| APIModalSubmitInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIDMInteraction =
	| APIApplicationCommandDMInteraction
	| APIMessageComponentDMInteraction
	| APIApplicationCommandAutocompleteDMInteraction
	| APIModalSubmitDMInteraction;

/**
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
export type APIGuildInteraction =
	| APIApplicationCommandGuildInteraction
	| APIMessageComponentGuildInteraction
	| APIApplicationCommandAutocompleteGuildInteraction
	| APIModalSubmitGuildInteraction;
