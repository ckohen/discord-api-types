/**
 * Types extracted from https://discord.com/developers/docs/resources/application
 */

import type { Snowflake } from '../../globals.ts';
import type { APITeam } from './teams.ts';
import type { APIUser } from './user.ts';

/**
 * https://discord.com/developers/docs/resources/application#application-object
 */
export interface APIApplication {
	/**
	 * The id of the app
	 */
	id: Snowflake;
	/**
	 * The name of the app
	 */
	name: string;
	/**
	 * The icon hash of the app
	 */
	icon: string | null;
	/**
	 * The description of the app
	 */
	description: string;
	/**
	 * An array of rpc origin urls, if rpc is enabled
	 */
	rpc_origins?: string[];
	/**
	 * When `false` only app owner can join the app's bot to guilds
	 */
	bot_public: boolean;
	/**
	 * When `true` the app's bot will only join upon completion of the full oauth2 code grant flow
	 */
	bot_require_code_grant: boolean;
	/**
	 * The url of the application's terms of service
	 */
	terms_of_service_url?: string;
	/**
	 * The url of the application's privacy policy
	 */
	privacy_policy_url?: string;
	/**
	 * Partial user object containing info on the owner of the application
	 *
	 * See https://discord.com/developers/docs/resources/user#user-object
	 */
	owner?: APIUser;
	/**
	 * If this application is a game sold on Discord, this field will be the summary field for the store page
	 * of its primary sku
	 */
	summary: string;
	/**
	 * The hexadecimal encoded key for verification in interactions and the GameSDK's GetTicket function
	 *
	 * See https://discord.com/developers/docs/game-sdk/applications#get-ticket
	 */
	verify_key: string;
	/**
	 * The team this application belongs to
	 *
	 * See https://discord.com/developers/docs/topics/teams#data-models-team-object
	 */
	team: APITeam | null;
	/**
	 * If this application is a game sold on Discord, this field will be the guild to which it has been linked
	 */
	guild_id?: Snowflake;
	/**
	 * If this application is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
	 */
	primary_sku_id?: Snowflake;
	/**
	 * If this application is a game sold on Discord, this field will be the URL slug that links to the store page
	 */
	slug?: string;
	/**
	 * If this application is a game sold on Discord, this field will be the hash of the image on store embeds
	 */
	cover_image?: string;
	/**
	 * The application's public flags
	 *
	 * See https://discord.com/developers/docs/resources/application#application-object-application-flags
	 */
	flags: ApplicationFlags;
}

/**
 * https://discord.com/developers/docs/resources/application#application-object-application-flags
 */
export enum ApplicationFlags {
	EmbeddedReleased = 1 << 1,
	ManagedEmoji = 1 << 2,
	GroupDMCreate = 1 << 4,
	RPCHasConnected = 1 << 11,
	GatewayPresence = 1 << 12,
	GatewayPresenceLimited = 1 << 13,
	GatewayGuildMembers = 1 << 14,
	GatewayGuildMembersLimited = 1 << 15,
	VerificationPendingGuildLimit = 1 << 16,
	Embedded = 1 << 17,
	GatewayMessageContent = 1 << 18,
	GatewayMessageContentLimited = 1 << 19,
	EmbeddedFirstParty = 1 << 20,
}
