import React, {Fragment, useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = useState(false)

    const { school, degree, fieldofstudy, from, to, current, description} = formData

    const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value})

    const handleSubmit = (e) => {
        e.preventDefault()
        addEducation(formData, history)
    }

    return (
        <Fragment>
            <h1 className="large text-primary">
       Add Your Education
      </h1>
      <p className="lead">
        <i className="fas fa-drum"></i> Add any school that you have attended
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="* School" name="school" 
          value={school} onChange={(e) => handleChange(e)}
          required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Degree or Certificate" name="degree" 
          value={degree} onChange={(e) => handleChange(e)}
          required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Field of Study" name="fieldofstudy" 
          value={fieldofstudy} onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" 
          value={from} onChange={(e) => handleChange(e)}
          />
        </div>
         <div className="form-group">
          <p><input type="checkbox" name="current" 
          checked={current}
          value={current} onChange={(e) => {
              setFormData({ ...formData, current: !current})
              toggleDisabled(!toDateDisabled)
          }}
          /> {' '}Current School</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" 
          value={to} onChange={(e) => handleChange(e)}
          disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Program Description"
            value={description} onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="dashboard">Go Back</Link>
      </form>
            
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(AddEducation))
