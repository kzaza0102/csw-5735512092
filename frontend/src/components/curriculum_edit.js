import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchCurriculums, updateCurriculum} from "../actions/index";

class CurriculumEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        console.log("name:" + this.state.name);
    }

    componentWillReceiveProps(nextProps) {
        console.log('next: ', nextProps);
        if (nextProps)
            this.setState( {id: nextProps.id, name: nextProps.name} )
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name]: value});
    }

    handlerUpdateCurriculum = (e) => {
        e.preventDefault();
        this.props.updateCurriculum(this.state.id,
            this.state.name,
            (item) => {
                // console.log('item' + item)
                this.props.fetchCurriculums();
            });
    }

    render() {
        console.log('yyy', this.state)
        if ( this.state.name ) {
            return (
                <div>
                    <header className="App-header Space">
                        <h1 className="App-title">Edit</h1>
                    </header>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input className="form-control" type="text" name="name"
                                   onChange={this.handleChange}
                                   value={this.state.name}/>
                        </div>
                        <button onClick={this.handlerUpdateCurriculum}>Update</button>
                    </form>
                </div>
            )
        }
        else {
            return (<div></div>);
        }
    }
}


function mapStateToProps(state) {
    console.log(state.name);
    return {id: state.editCurriculum.id, name: state.editCurriculum.name};
}

export default connect(mapStateToProps, {updateCurriculum, fetchCurriculums})(CurriculumEdit);