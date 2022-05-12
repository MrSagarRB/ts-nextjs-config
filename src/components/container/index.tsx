import React from "react";
import { AppProps } from "next/app";

export const Container: React.FC<AppProps> = ({ children }) => {
    return <div className="flex flex-col min-h-screen">{children}</div>;
};
