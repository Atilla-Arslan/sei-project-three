import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getTokenFromLocalStorage } from '../../../helpers/auth'
// import { ImageUploadField } from '../../ImageUploadField'

const EditProfile = () => {
  const { userID } = useParams()

  const history = useHistory()
  //prettier-ignore
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
    profileImage: '',
  })

  // const handleImageUrl = url => {
  //   setFormData({ ...formData, profileImage: url })
  // }

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.put(`/api/users/${userID}`, formData, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    })
    // handleImageUrl()
    history.push(`/profile/${userID}`)
  }
  const handleCancel = () => {
    history.push(`/profile/${userID}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username: </label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input "
            type="text"
            placeholder="Enter the same or different username"
            name="username"
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>
      <div className="field">
        <label className="label">Email: </label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="email"
            placeholder="Enter your new email"
            name="email"
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        {/* <p className="help is-danger">This email is invalid</p> */}
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="password"
            placeholder="Enter your new password"
            name="password"
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        {/* <p className="help is-danger">Must enter password</p> */}
      </div>
      <div className="field">
        <label className="label">Confirm Password</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input"
            type="password"
            placeholder="Passwords must match"
            name="passwordConfirmation"
            onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        {/* <p className="help is-danger">Must enter password</p> */}
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button " type="submit">
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button " type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  )
}

export default EditProfile

{
  /* <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div> */
}
