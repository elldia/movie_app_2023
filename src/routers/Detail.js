import React from "react";

function Detail({title,summary}) {
    console.log(title);
    return (
        <div className="detail_container">
            <h1>Movie details</h1>
            <span>{title}</span>
            <span>{summary}</span>
        </div>
    )
}

/* class Detail extends React.Component{

    state = {
        isLoading:true,
        movies:[],
    }
    componentDidMount(){
        const {location,history} = this.props;
        if(location.state === undefined) {
            history.push('/')
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        }
    }
} */

export default Detail;