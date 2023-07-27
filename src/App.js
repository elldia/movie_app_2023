import React from "react";
class App extends React.Component{

  state={
    isLoading: true,
    movie:[], //YTS API
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading:false}); //6초 후 we are Ready
    },6000)
  }
  render(){
    const {isLoading} = this.state;
    return (
      <>
        {isLoading?'Loading...':'We are Ready'}
      </>
    )
  }
}


export default App;
