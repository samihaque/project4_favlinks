import { useState } from 'react'
import '../App.css'

const Form = (props) => {
  
    /*
            TODO - Logic for changing state based on form changes
        */
    const [formData, setFormData] = useState({ name: '', url: '' })
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
     }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    props.handleSubmit(formData)
    setFormData({ name: '', url: '' })
  }

  return (
    <div className='left-align'>
      <form onSubmit={onFormSubmit} >
        <label>
          Name:<br/>
          <div className='padding-10'>
            <input
              className=' border width padding-5'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </label>
        <br />
        <label>
          url:<br/>
          <div className='padding-10'>
            <input
              className=' border padding-5 width '
              type="text"
              name="url"
              value={formData.url}
              onChange={handleChange}
            />
          </div>
        </label>
        <br />
        <button type="submit" className='button left-align' >Submit</button>
      </form>
    </div>
  )
}


export default Form
