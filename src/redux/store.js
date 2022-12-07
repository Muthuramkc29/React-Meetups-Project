import { createStore } from "redux";
import { allMeetups } from "./reducers/allMeetups.reducer";

export const store = createStore(allMeetups);
