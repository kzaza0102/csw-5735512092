import React, {Component} from 'react';
import {fetchCurriculums} from '../actions';
import _ from 'lodash';
import {connect} from 'react-redux';
import {deleteCurriculum, getCurriculum} from "../actions/index";


class CurriculumShow extends Component {

    componentDidMount() {
        this.props.fetchCurriculums()
    }

    getCurriculum(id) {
        this.props.getCurriculum(id, (item) => {
                this.props.editCurriculum(item);
                // this.props.fetchCurriculums()
            }
        );
    }

    deleteCurriculum(id) {
        this.props.deleteCurriculum(id, (item) => {
            console.log('item' + item)
            this.props.fetchCurriculums();
        });

    }

    renderCurriculums() {
        return _.map(this.props.curriculums, curriculum => {
            if (curriculum !== null) {
                return (
                    <li className="list-group-item row" key={curriculum.id}>
                        <div className="col-md-2">
                            {curriculum.id + 1}. {curriculum.name}
                        </div>
                        <div className="col-md-10">
                            <button className="btn btn-sm btn-primary"
                                    onClick={() => this.getCurriculum(curriculum.id)}>
                                Edit
                            </button>
                            &nbsp;
                            <button className="btn btn-sm btn-primary"
                                    onClick={() => this.deleteCurriculum(curriculum.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                )
            }
            else {
                return ('')
            }

        })
    }


    // ===================  view ==================
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">College of Computing</h1>
                </header>
                <section>
                    <ul className="list-group">
                        {this.renderCurriculums()}
                    </ul>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {curriculums: state.curriculums};
}

export default connect(mapStateToProps,
    {deleteCurriculum, getCurriculum, fetchCurriculums})(CurriculumShow);