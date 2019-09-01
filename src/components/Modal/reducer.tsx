import React from "react";

export interface IModalReducer {
    isOpen: boolean;
    component: React.FC;
    title?: string;
    onClose?: () => void;
}

const dummyComp = () => <div />;

const initialModalState: IModalReducer = {
    isOpen: false,
    component: dummyComp
};

export default (state: IModalReducer = initialModalState, action: any) => {
    switch (action.type) {
        case "MODAL_CLOSE": {
            state.isOpen = false;
            return { ...state };
        }
        case "MODAL_OPEN_SIMPLE": {
            state.isOpen = true;
            state.component = action.component;
            state.onClose = action.onClose;
            return { ...state };
        }
        default: {
            return initialModalState as IModalReducer;
        }
    }
};
