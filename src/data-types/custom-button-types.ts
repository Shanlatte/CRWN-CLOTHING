export interface ICustomButtonProps {
    type?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isGoogleSignIn?: boolean;
}