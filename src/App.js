import axios from 'axios';//axios 라이브러리 연결
import React from "react";
import Movie from './Movie';
import './styles/App.css';

class App extends React.Component{

  state={
    isLoading: true,
    movies:[], //YTS API
  }

// async(비동기) getMovies()가 비동기이니 좀 기다려 달라고 자바스크립트에게 명령함.
// await는 axios.get()이 실행이 끝날때까지 기다렸다가 다음을 실행해달라는 명령어.
// 자바스크립트가 단일스레드로 동기식방식이므로 비동기식으로 변경해주는 작업.

  getMovies = async() => {
    const {
      data:{
        data:{movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading:false});
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className='container'>
        {isLoading? <div className='loader'><span>'Loading...'</span></div> 
        : <div className='movies'>
        { movies.map(movie=>{
          // console.log(movie);
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          )
        })}
        </div>}
      </section>
    )
  }
}

export default App;
