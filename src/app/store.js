import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    }
});