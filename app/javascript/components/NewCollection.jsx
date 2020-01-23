import React from 'react';
import { Link } from 'react-router-dom';

export default class NewCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }
}