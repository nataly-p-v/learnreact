import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesFetchData } from '../../store/actions/movies'
import { selectCources } from '../../store/selectors/selectMovies'
import Movie1 from '../../components/movie/movie'

class Movies extends Component {
    constructor (props) {
        super(props);

        this.addMovie = this.addMovie.bind(this);
    };

    componentDidMount() {
        this.props.fetchData('https://reactjs-cdp.herokuapp.com/movies?sortBy=desc&searchBy=title')
    };

    addMovie = ({ target: { value } }) => {
        console.log(value)
    };

    render() {
        const {
            movies,
        } = this.props;

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <h1>movies</h1>
                <div className="button-wrapper">
                    <button className={"btn btn-primary"} onClick={this.addMovies}>Add movie</button>
                </div>
                <ul className="courses-list">
                    {movies && movies.map((item, i) => <Movie1 {...item} key={i} />)}
                </ul>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        movies: selectMovies(state),
        hasErrored: state.moviesHasErrored,
        isLoading: state.moviesIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(moviesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

