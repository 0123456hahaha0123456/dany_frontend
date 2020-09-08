import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap'

import { Control, Form, Errors} from 'react-redux-form'

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            value: '',
            summaryText: 'hahaha'

        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit =  event => {
        event.preventDefault();
        let api = 'http://localhost:8080/summary';
        fetch(api,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: this.state.value
        }).then(res => {
            return res.blob()
        }).then(blob => {return blob.text()})
        .then(text => {
            this.setState({summaryText: text})
        })        
        .catch(err => console.log(err))      
        
    }


    render(){

        return(
            <div className="container">
                <div className="row ">
                    <form className="col-12" onSubmit={this.handleSubmit}>
                        <div className="col-12">
                            <h3>Text to summary</h3>
                        </div>
                        <div className="col-12">
                            <textarea className="col-12" value={this.state.value} onChange={this.handleChange} />

                            <input type="submit" value="Submit" />

                        </div>
                        <div className="col-12">
                            {this.state.summaryText}
                        </div>
                        
                    </form>
                </div>
            </div>       
                   

            
            
        )
    }
}
export default Home;