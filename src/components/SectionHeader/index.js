import React from 'react'
import { connect } from 'react-redux';
import '../../styles/section-header.scss';

function SectionHeader(props) {
    const getFetchedRepo = () => props.repos.data.length
    return (
        <div className="container-header">
            <h3> {getFetchedRepo()} repositories</h3>
            <div>
                <button>Gallery</button>
                <button>List</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        repos: state.repos
    }
}
export default connect(mapStateToProps, null)(SectionHeader);
