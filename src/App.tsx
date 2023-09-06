import React from "react";
import "./main.global.css";
import {hot} from "react-hot-loader/root";
import {Header} from "./shared/Header";
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import Icon from "./utils/react/Icon";

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
            {/*<Icon name="mail" />*/}
        </Layout>
    );
}

export const App = hot(AppComponent);