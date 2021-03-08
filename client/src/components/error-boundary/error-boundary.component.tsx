import React from 'react';
import './error-boundary.styles.scss';

interface ErrorProps{

}

interface ErrorState{
    hasErrored: boolean
}
class ErrorBoundary extends React.Component<ErrorProps,ErrorState> {
    constructor(props: ErrorProps) {
        super(props);
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error:any){

        return { hasErrored: true}
    }

    componentDidCatch(error:any, info:any){
        console.log(error)
    }

    render() {
        if(this.state.hasErrored){
            return (
                <div className="ErrorImageOverlay">
                    <div 
                        className="ErrorImageContainer"
                        style={{
                            backgroundImage: `url(${require("../../assets/errorImg.png")})`
                        }}/>
                    <div className="ErrorImageText">Sorry this page is broken</div>
                </div>
                );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;