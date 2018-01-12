import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
    state = { }

    componentDidMount(){
        console.log('컴포넌트 마운트 된당 ㅇㅅㅇ')
        this._getMovies();
    }

    _renderMovies = () => {
        const movies = this.state.movies.map(movie =>{
            console.log(movie)
            return <Movie
                title= {movie.title_english}
                poster={movie.medium_cover_image}
                key={movie.id}
                genres={movie.genres}
                synopsis={movie.synopsis}
            />
        })
        return movies
    }
    _getMovies = async () => {
        console.log('겟무비 된당 ㅇㅅㅇ')
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }
    _callApi = () =>{
        console.log('콜api 된당 ㅇㅅㅇ')
        return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
            .then(Response => Response.json())
            .then(json => json.data.movies)
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="App">
                { this.state.movies ? this._renderMovies() : '로딩중... ㅇㅅㅇ'}
            </div>
        );
    }

}

export default App;
