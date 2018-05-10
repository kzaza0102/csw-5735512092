import React, {Component} from 'react';
import CurriculumAdd from './curriculum_add';
import CurriculumShow from './curriculum_show';
import CurriculumEdit from './curriculum_edit';

class CurriculumIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {name: 'kevin'};
    }


    editCurriculum = (item) => {
        console.log(item.data.name);
        this.setState({name: item.data.name} );
    }

    render() {
        return (
            <div className="container">
                <CurriculumShow  editCurriculum={this.editCurriculum}/>

                <div className="row">
                    <div className="col-md-6">
                        <CurriculumAdd  />
                    </div>
                    <div className="col-md-6">
                        <CurriculumEdit />
                    </div>

                </div>
            </div>
        );
    }
}

export default CurriculumIndex;