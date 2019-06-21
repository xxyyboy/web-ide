import React, { Component } from "react";
import { connect, Provider } from "react-redux";
import { ITheme } from "../../db/interfaces";
import { IStore } from "../../db/interfaces";
import Editor from "../Editor/Editor";
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { store } from "../../store";
import PrivateRoute from "./PrivateRoute";
import { History } from "history";
import { layoutStylesHook } from "./styles";
import GoldenLayoutsMain from "../GoldenLayouts/GoldenLayoutsMain";

interface IRouterComponent {
    isAuthenticated: boolean;
    history: History;
    theme: ITheme;
}

const DefaultLayout = (args: any) => {
    const classes = layoutStylesHook(args.theme);
    const isAuthenticated = args.isAuthenticated;
    const renderMeth = (matchProps) => isAuthenticated ? (
        <main className={classes.content}>
            <GoldenLayoutsMain />
        </main>
    ) : (
        <main className={classes.content}>
            <Editor {...matchProps} />
        </main>
    );

    return (
        <Provider store={store}>
            <Route {... args} render={renderMeth} />
        </Provider>
    )
};


class RouterComponent extends Component<IRouterComponent, any> {

    // public componentDidMount() {}

    public render() {
        return (
            <ConnectedRouter history={this.props.history} {...this.props}>
                <Switch>
                    <DefaultLayout {...this.props} path="/" />
                    <PrivateRoute
                        {...this.props}
                        path="/dashboard"
                        component={Editor}
                    />
                </Switch>
            </ConnectedRouter>
        );
    }
}

const mapStateToProps = (store: IStore, ownProp: any): IRouterComponent => {
    return {
        isAuthenticated: store.LoginReducer.authenticated,
        history: ownProp.history,
        theme: store.theme,
    };
};


export default connect( mapStateToProps, {})(RouterComponent);
