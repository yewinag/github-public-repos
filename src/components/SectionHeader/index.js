import React from 'react'
import '../../styles/section-header.scss';

function SectionHeader() {
    return (
        <div className="container-header">
            <h3>37 repositories</h3>
            <div>
                <button>Gallery</button>
                <button>List</button>
            </div>
        </div>
    )
}

export default SectionHeader
