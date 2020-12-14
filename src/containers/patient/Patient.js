import React, {Component} from 'react';
import { Table, Form } from 'react-bootstrap';
import { connect } from 'react-redux';

import './style.scss'
import { getPatientAction, deletePatientAction } from './action/action';

class Patient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageSize: 8,
            pageIndex: 0,
            items: []
        }
    }

    componentDidMount = () => {
        this.props.getPatientAction();
        this.setState({
            ...this.state,
            items: this.props.patients
        });
    }

    handlePrevPageClick = e => {
        e.preventDefault();
        this.setState(prevState => ({
          pageIndex: prevState.pageIndex > 0 ? prevState.pageIndex - 1 : 0
        }));
      }
    
    handleNextPageClick = e => {
        e.preventDefault();
        this.setState(prevState => ({
          pageIndex:
            prevState.pageIndex <
            Math.floor(prevState.items.length / prevState.pageSize)
              ? prevState.pageIndex + 1
              : prevState.pageIndex
        }));
      }

    handleFilterChange = e => {
        const value = e.target.value || undefined;
        this.myFunction(value);
    };

    myFunction = (value) => {
        let filter, table, tr, td, i, txtValue;
        filter = value ? value.toUpperCase() : '';
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");

        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }       
        }
    }

    handleDeletePatient = (e, patientId) => {
        e.preventDefault();
        this.props.deletePatientAction(patientId);
    };

    handlePatientDetails = (e, item) => {
        e.preventDefault();
        this.props.history.push(`/patient-details/${item.id}`);
    };

    render() {
        return (
            <div className="container m-5">
                    {/* Search */}
                    <Form>
                        <Form.Group controlId="searchTerm">
                            <Form.Control
                                type="text"
                                placeholder="Search by name..."
                                onChange={(event) => this.handleFilterChange(event)}
                                value={this.props.searchTerm}
                            />
                        </Form.Group>
                    </Form>
    
                    {/* Table for post listing */}
                    <div className="buttonContainer">
                        <button className="btn btn-primary addButton" onClick={event => this.props.history.push('/add-patient')}>Add Patient</button>
                        <button className="btn btn-primary button" onClick={event => this.handlePrevPageClick(event)}>Prev page</button>
                        <button className="btn btn-warning button" onClick={event => this.handleNextPageClick(event)}>Next page</button>
                    </div>
                    <Table striped bordered hover id="myTable">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.items
                            .slice(
                            this.state.pageIndex * this.state.pageSize,
                            this.state.pageIndex * this.state.pageSize + this.state.pageSize
                            )
                            .map((item, index) => (
                                <tr className="rowData" key={index} onClick={event => this.handlePatientDetails(event, item)}>
                                    <td className="ctd">{item.id}</td>
                                    <td className="ctd">{item.name}</td>
                                    <td className="ctd">{item.email}</td>
                                    <td className="ctd">{item.mobile}</td>
                                    <td>
                                    <button className="btn btn-danger" onClick={event => this.handleDeletePatient(event, item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
        );
    }
};

const mapStateToProps = state => {
    const {
        patients,
    } = state.Patient;
    return {
        patients,
    }
};

const mapDispatchToProps = {
    getPatientAction,
    deletePatientAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Patient);