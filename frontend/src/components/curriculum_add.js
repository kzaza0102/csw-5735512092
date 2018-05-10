import React, {Component} from 'react';
import {fetchCurriculums, addCurriculum} from '../actions';
import {connect} from "react-redux";

class CurriculumAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    handlerUpdateCurriculum = (e) => {
        e.preventDefault();
        this.props.addCurriculum(
            this.state.name,
            (item) => {
                console.log('item: ' + item)
                this.props.fetchCurriculums();
            });
    }

    render() {
        return (
            <div>
                <header className="App-header Space">
                    <h1 className="App-title">Add Curriculum</h1>
                </header>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" onChange={this.handleChange}/>
                    </div>
                    <button onClick={this.handlerUpdateCurriculum}>Add</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('mystate:',state);
    return {curriculums: state.curriculums};
}

export default connect(mapStateToProps, {fetchCurriculums,addCurriculum})(CurriculumAdd);
