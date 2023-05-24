import { writable } from "svelte/store";
import type { Trail, LoggedInUser } from "./services/trail-types";
import type { MarkerSpec } from "./services/markers";

export const loggedInUser = writable<LoggedInUser>();
export const latestTrail = writable<Trail>();
export const markerSelected = writable<MarkerSpec>();
