import React, { Component } from 'react';

export default class Single_Portfolio extends Component<any, any> {
    static displayName = Single_Portfolio.name;
    
    constructor(props:any) {
        super(props);
    }
    render() {
        const style ="single_features text-center "+ this.props.mt + " wow fadeInUp" ;
        return (
            <div className="single_portfolio wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.3s">
            <img src={process.env.PUBLIC_URL+`images/${this.props.image}`} alt="portfolio" />
            <div className="portfolio_content">
                <ul className="meta">
                <li><a href="#0"><i className="lni lni-link" /></a></li>
                </ul>
                <h5 className="portfolio_title">{this.props.title}</h5>
            </div> {/* Single portfolio */}
            </div>

        )
    }

}