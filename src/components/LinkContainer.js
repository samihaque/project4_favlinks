import { useState, useEffect } from 'react'
import Table from './Table';
import Form from './Form';
import '../App.css'

const LinkContainer = (props) => {
  //const [buttonClicked, setButtonClicked] = useState(null)
  const [favLinks, setFavLinks]= useState([])
  
  const fetchLinks = async () =>{
    try {
      let res = await fetch('/links')
      console.log(res)
      let data = await res.json()
      setFavLinks(data)
      console.log(data)
    } catch (error){
      console.log(error)
    }
  }

  const postLink = async(addedLink)=>{
    // let testLinks={
    //   name: "Test",
    //   url: "test.com"
    // }

    try{
      // making API call
      let res = await fetch('/links',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(addedLink)
      })
      console.log(res)

      // add awaits
      let message= await res.text()
      console.log(message)
    }
    catch(error){
      console.log(error)
    }
    fetchLinks()
  }

  useEffect (()=>{
    if (favLinks.length <1){
      fetchLinks()
    }
    //postLink()
  },[])


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
    const newLink = { name: newLinks.name, url: newLinks.url }

    // client side show
    setFavLinks([...favLinks, newLink])

    // save data on postgres
    postLink(newLinks)

    // pull latest data from postgres
    fetchLinks()

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
