import React from 'react'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import PropTypes from 'prop-types'


const TechItem = ({ tech, deleteTech }) => {
    return (
        <li className="collection-item">
            {tech.firstName} {tech.lastName}

            <a href="#!" className="secondary-content" onClick={()=> deleteTech(tech.id)}>
                <i className="material-icons grey-text">delete</i>
            </a>  
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null, { deleteTech })(TechItem)
