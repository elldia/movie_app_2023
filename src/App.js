import React from "react";
class App extends React.Component{
  //react.component의 기능들을 App이 상속받아 사용할 수 있다.
  //function == Components 많은 function이 모인 Component개념
  //부모React의 값을 APp자식이 상속받는다.
  //function에서는 return을 할 수 있다.
  //function밖에선 return이 안된다.
  //render가 함수(function) 개념으로 그 안에 return을 작성한다. 
  state = {
    count:0,
  };

  constructor(props){ //컴포넌트가 생성될 때 호출하는 메서드 컨스트럭트(가장 먼저 생성)!!
    super(props);
    console.log('hello');
  }
  componentDidMount(){ //컴포넌트가 Dom에 삽입될 때 호출되는 메서드(클래스 내)
    console.log('componentDidmount');
  }
  componentDidUpdate(){ //컴포넌트가 업데이트(수정)된 직후 호출 메서드(클래스 내)
    console.log('i just update');
  }

  componentWillUnmount(){ //컴포넌트가 삭제되기 전에 호출 메서드(클래스 내)
    console.log('Good by~~');
  }

  add=()=>{
    //setState() => state 의 count 값을 변경함.
    //count = this.state.count+1
    
    this.setState((current)=>({count:current.count+1}));
    /* this.setState({count:this.state.count+1}); */
  }
  minus=()=>{
    this.setState((current)=>({count:current.count-1}))
    /* this.setState({count:this.state.count-1}); */
  }
  render(){
    console.log('I"m rendering'); //위  constrctor와 render 중 뭐가 먼저 실행되는지 테스트.
    return (
      <>
        {/* this는 cureent현재를 의미하며, 현재 state의 count변수값을 출력하라. */}
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </>
    )
  }
}


export default App;
