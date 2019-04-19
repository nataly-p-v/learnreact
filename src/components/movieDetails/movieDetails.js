import React, { Component } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Link } from 'react-router-dom';

class movieDetails extends Component {
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
        const id = this.props.location.pathname.split('/')[2];
        this.fetchData(`https://reactjs-cdp.herokuapp.com/movies/${id}`);
    }
    render () {
        {console.log(this.state.items)}
        return (
            <div className={"main-wrapper"}>
                <Header/>
                <div className={"content"}>
                    <Link to="/" className={"backToResult-btn"}>Search</Link>
                    <div className={"result-description"}>
                        <div className={"result-description__img"}>
                            <img src={this.state.items.poster_path} alt=""/>
                        </div>
                        <div className={"result-description__text"}>
                            <div className="result-description__title">{this.state.items.title} <div className="result-description__estimate">{this.state.items.vote_count}</div></div>
                            <div className="result-description__sub">Oscar-winning Movies</div>
                            <div className="result-description__year">1994</div>
                            <div className="result-description__duration">124 min</div>
                            <div className={"result-description__descr"}>
                                {this.state.items.overview}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default movieDetails;
