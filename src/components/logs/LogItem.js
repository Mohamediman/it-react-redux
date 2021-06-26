import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { deleteLog } from '../../actions/logActions'


import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog }) => {

    const onDelete = () => {
        console.log('log.id:', log.id)
        deleteLog(log.id);

        M.toast({html: 'Log successfully Deleted...'})
    }

    return (
        <li className="collection-item">
            <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 'red-text': 'blue-text'}`}>{log.message}</a>
            <a href="#">{log.Attention}</a>
            <br />
            <span className="grey-text">
                <span className="black-text">ID {log.id}</span> Last updated by {' '} <span className="black-text">{log.tech}</span>
                on {' '} <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
            </span>
            <a href="#!" onClick={onDelete} className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired
}

export default connect(
                null,
                deleteLog
                )(LogItem);
