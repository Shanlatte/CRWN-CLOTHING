import firebase from "firebase";

export interface IHeaderProps {
    currentUser: firebase.User | null
}