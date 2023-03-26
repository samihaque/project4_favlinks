import { useState } from 'react'
import Table from './Table';
import Form from './Form';
import '../App.css'

const LinkContainer = (props) => {
  //const [buttonClicked, setButtonClicked] = useState(null)
  const [favLinks, setFavLinks]= useState([])
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    const newLinks = [...favLinks]
    newLinks.splice(index, 1)
    setFavLinks(newLinks)

  }

  const handleSubmit = (newLinks) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
    const newLink = { name: newLinks.name, URL: newLinks.URL }
    setFavLinks([...favLinks, newLink])

  }

  return (
    <div >
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}
      <Table linkData={favLinks} removeLink={handleRemove} />
      
      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default LinkContainer
