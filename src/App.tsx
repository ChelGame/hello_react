import React from "react";
import "./main.global.css";
import {hot} from "react-hot-loader/root";
import {Header} from "./shared/Header";
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {CradsList} from "./shared/CardsList";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CradsList />
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent);