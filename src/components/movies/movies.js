import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesFetchData } from '../../store/actions/movies'
import { selectMovies } from '../../store/selectors/selectMovies'
import Movie1 from '../../components/movie/movie'

class Movies extends Component {
    constructor (props) {
        super(props);
        this.state = {
            items: [],
        };
    };

    fetchData(url) {
        this.setState({ isLoading: true });
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                this.setState({ isLoading: false });
                return response;
            })
            .then((response) => response.json())
            .then((items) => this.setState({ items }))
            .catch(() => this.setState({ hasErrored: true }));
    }
    componentDidMount() {
        this.fetchData('https://reactjs-cdp.herokuapp.com/movies');
    }

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
                <ul className="movies-list">
                    {console.log(this.state.items)}
                    {Object.keys(this.state.items) && Object.keys(this.state.items).map((item, i) => <Movie1 {...item} key={i} />)}
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

const mapDispatchToProps = () => {
    return {
        fetchData: moviesFetchData,
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Movies);

