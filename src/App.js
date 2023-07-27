import axios from 'axios';//axios 라이브러리 연결
import React from "react";
class App extends React.Component{

  state={
    isLoading: true,
    movie:[], //YTS API
  }
  componentDidMount(){
    axios.get('http://yts-proxy.now.sh/list_movies.json');
    //axios는 리액트에서 API를 연동하는 라이브러리다.
    //axios.get() 메서드는 값을 출력할 때 사용한다.
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
