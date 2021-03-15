import React, { Component } from 'react';

export default class Section extends Component
{
    static displayName = Section.name;
  render() {
    return (
        <section>
            {this.props.children}
        </section>
    )
  }
};