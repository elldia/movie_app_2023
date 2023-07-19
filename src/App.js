import './styles/style.css';
import React from "react";
import PropTypes from 'prop-types';

function Movie(mov){
  return (
    <div className="movielist">
      <h3>I Love {mov.title}</h3>
      <h3>{mov.rating}</h3>
      <img src={mov.poster} />
      {/* <h3>{mov.desc}</h3> */}
    </div>
  )
}

//  객체배열
const movieLike = [
  {
    id:1, 
    title:'디어 마이 러브',
    poster:'https://image.cine21.com/resize/cine21/poster/2023/0615/16_54_19__648ac3abdc38e[X230,330].jpg',
    // desc:'너무슬픔'
    // rating:5,
},
  {
    id:2, 
    title:'비밀의 언덕',
    poster:'https://image.cine21.com/resize/cine21/poster/2023/0703/13_29_38__64a24eb25f51f[X230,330].jpg',
    rating:4.9,
  },
  {id:3, title:'작은 정원',poster:'https://image.cine21.com/resize/cine21/poster/2023/0622/16_02_30__6493f206cab15[X230,330].jpg',rating:3,},
  {id:4, title:'미션 임파서블',poster:'https://image.cine21.com/resize/cine21/poster/2023/0703/14_02_31__64a25667b02c6[X230,330].jpg',rating:4.5,},
  {id:5, title:'슬기로운 아내 수업',poster:'https://image.cine21.com/resize/cine21/poster/2023/0616/11_02_38__648bc2be60edf[X230,330].jpg',rating:3.8,}
]

// function renderMovie(mov){
//   return (
//     <Movie rating={mov.rating} key={mov.id} title={mov.title} poster={mov.poster} />
//   )
// }
// console.log(movieLike.map(renderMovie));

function App() {
  return (
    <>
      {movieLike.map((mov)=>(
        <Movie 
          key={mov.id} 
          title={mov.title} 
          poster={mov.poster} 
          rating={mov.rating} 
        />
      ))}
    </>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
