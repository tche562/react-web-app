import store, { reducer } from "../redux/store";

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
