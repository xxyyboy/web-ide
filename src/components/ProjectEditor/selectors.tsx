import * as firebase from "firebase/app";
import { IStore } from "@store/types";
import { curry, equals, pathOr } from "ramda";

export const selectIsOwner = curry(
    (projectUid: string, store: IStore): boolean => {
        const currentUser = firebase.auth().currentUser;
        if (typeof currentUser !== "object") return false;
        const owner = pathOr(
            "",
            ["ProjectsReducer", "projects", projectUid, "userUid"],
            store
        );
        return equals(owner, (currentUser && currentUser.uid) || -1);
    }
);