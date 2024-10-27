import React from "react";
import {Provider} from "react-redux";
import {render} from "@testing-library/react-native";
import {configureStore} from "@reduxjs/toolkit";
import {themeReducer} from "@/state";

export const renderWithStoreProvider = (children: React.ReactNode, { store }: { store: any }) => {
    return render(<Provider store={store}>{children}</Provider>);
}

export function configureStoreWithTheme() {
    return configureStore({
        reducer: { theme: themeReducer },
        preloadedState: { theme: { theme: 'light' } },
    });
}