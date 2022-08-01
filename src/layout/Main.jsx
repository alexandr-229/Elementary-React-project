import React from 'react';
import { Cards } from '../components/Cards';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const KEY = process.env.REACT_APP_KEY;

export class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`http://www.omdbapi.com?apikey=${KEY}&s=matrix`)
            .then((res) => res.json())
            .then((res) =>
                this.setState({ movies: res.Search, loading: false })
            );
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com?apikey=${KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((res) => res.json())
            .then((res) =>
                this.setState({ movies: res.Search, loading: false })
            );
    };

    render() {
        const { movies, loading } = this.state;
        console.log(loading);
        return (
            <main className="container contet">
                <Search func={this.searchMovies} />
                {loading ? <Preloader /> : <Cards movies={movies} />}
            </main>
        );
    }
}
