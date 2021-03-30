import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { getTokenFromLocalStorage } from '../../../helpers/auth'
import { ImageUploadField } from '../../ImageUploadField'

const EditProfile = () => {
  const { userID } = useParams()
  //prettier-ignore
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    profileImage: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    console.log(newFormData)
    setFormData(newFormData)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    await axios.put(`/api/users/${userID}`, formData, {
      headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
      },
    })
    history.push('/profile') 
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Username: </label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-success" type="text" placeholder="Text input" name="username" onChange={handleChange}/>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <p className="help is-success">This username is available</p>
      </div> 

      <div>
        <ImageUploadField name="profileImage" handleImageUrl={handleChange} />
      </div>

      <div className="field">
        <label className="label">Email: </label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-danger"
            type="email"
            placeholder="Enter your new email"
            name="email" onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">This email is invalid</p>
      </div>

      <div className="field">
        <label className="label">Password</label>
        <div className="control has-icons-left has-icons-right">
          <input
            className="input is-danger"
            type="text"
            placeholder="Enter your new password"
            name="password" onChange={handleChange}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p className="help is-danger">Must enter password</p>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">Submit</button>
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
