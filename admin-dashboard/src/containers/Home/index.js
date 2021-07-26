import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import Layout from '../../components/Layout'

/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <Layout>
        <Jumbotron style={{margin: '5rem', background: '#FFF'}} className="text-center">
            <h1>Welcome to Admin Dashboard</h1>
            <p>hahahahahahahaha</p>
        </Jumbotron>
    </Layout>
   )

 }

export default Home