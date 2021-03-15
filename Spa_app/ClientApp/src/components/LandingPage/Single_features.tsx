import React, { Component } from 'react';

export default class SingleFeatures extends Component<any, any> {
    static displayName = SingleFeatures.name;
    
    constructor(props:any) {
        super(props);
    }
    render() {
        const icon = "lni " + this.props.icon;
        const style ="single_features text-center "+ this.props.mt + " wow fadeInUp" ;
        return (
            <div key = {this.props.test} className={style} data-wow-duration="1.3s" data-wow-delay="0.2s">
                <i  className={icon}></i>
                <h4 className="features_title"><a>{this.props.title}</a></h4>
                <p>{this.props.description}</p>
            </div>
        )
    }

}