import React, {Component} from 'react';
import SearchHeader from '../searchHeader/searchHeader';

class resultPage extends Component {
    render() {
        return (
            <div className={"search-result"}>
               <SearchHeader sortBy={"sortBy"}/>
                <div className="search-result__grid clearfix">
                    <div className={"search-result__grid-item"}>
                        <div className="img-wrapper"><img
                            src="https://images-na.ssl-images-amazon.com/images/I/41CAtQyKWLL._SY445_.jpg" alt=""/>
                        </div>
                        <div className={"item-wrapper"}>
                            <div className="text">
                                <div className={"item-title"}>Kill Bill: Vol.2</div>
                                <span>Action & Adventure</span>
                            </div>
                            <div className={"year"}>2004</div>
                        </div>
                    </div>
                    <div className={"search-result__grid-item"}>
                        <div className="img-wrapper"><img
                            src="https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
                            alt=""/></div>
                        <div className={"item-wrapper"}>
                            <div className="text">
                                <div className={"item-title"}>Oscar-winning movies</div>
                                <span>Action & Adventure</span>
                            </div>
                            <div className={"year"}>1994</div>
                        </div>
                    </div>
                    <div className={"search-result__grid-item"}>
                        <div className="img-wrapper"><img
                            src="https://images-na.ssl-images-amazon.com/images/I/41CAtQyKWLL._SY445_.jpg" alt=""/>
                        </div>
                        <div className={"item-wrapper"}>
                            <div className="text">
                                <div className={"item-title"}>Kill Bill: Vol.2</div>
                                <span>Action & Adventure</span>
                            </div>
                            <div className={"year"}>2004</div>
                        </div>
                    </div>
                    <div className={"search-result__grid-item"}>
                        <div className="img-wrapper"><img
                            src="https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
                            alt=""/></div>
                        <div className={"item-wrapper"}>
                            <div className="text">
                                <div className={"item-title"}>Oscar-winning movies</div>
                                <span>Action & Adventure</span>
                            </div>
                            <div className={"year"}>1994</div>
                        </div>
                    </div>
                    <div className={"search-result__grid-item"}>
                        <div className="img-wrapper"><img
                            src="https://images-na.ssl-images-amazon.com/images/I/41CAtQyKWLL._SY445_.jpg" alt=""/>
                        </div>
                        <div className={"item-wrapper"}>
                            <div className="text">
                                <div className={"item-title"}>Kill Bill: Vol.2</div>
                                <span>Action & Adventure</span>
                            </div>
                            <div className={"year"}>2004</div>
                        </div>
                    </div>
                    <div className={"search-result__grid-item"}>
                        <div className="img-wrapper"><img
                            src="https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg"
                            alt=""/></div>
                        <div className={"item-wrapper"}>
                            <div className="text">
                                <div className={"item-title"}>Oscar-winning movies</div>
                                <span>Action & Adventure</span>
                            </div>
                            <div className={"year"}>1994</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default resultPage;
