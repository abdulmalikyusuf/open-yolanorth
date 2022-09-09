import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

import PhotoGrid from '../components/PhotoGrid'
import Scan13 from "../assets/cdp/Scan13.jpg"
import Scan14 from "../assets/cdp/Scan14.jpg"
import Scan15 from "../assets/cdp/Scan15.jpg"
import Scan16 from "../assets/cdp/Scan16.jpg"
import Scan17 from "../assets/cdp/Scan17.jpg"
import Scan18 from "../assets/cdp/Scan18.jpg"
import Scan19 from "../assets/cdp/Scan19.jpg"
import Scan20 from "../assets/cdp/Scan20.jpg"
import Scan21 from "../assets/cdp/Scan21.jpg"
import Scan22 from "../assets/cdp/Scan22.jpg"
import Scan23 from "../assets/cdp/Scan23.jpg"
import Scan24 from "../assets/cdp/Scan24.jpg"
import Scan25 from "../assets/cdp/Scan25.jpg"
import Scan26 from "../assets/cdp/Scan26.jpg"
import Scan27 from "../assets/cdp/Scan27.jpg"
import Scan28 from "../assets/cdp/Scan28.jpg"
import Scan29 from "../assets/cdp/Scan29.jpg"
import Scan30 from "../assets/cdp/Scan30.jpg"


function Community() {
    React.useEffect(()=> {
        document.title = "Community Dev. Plan | FollowTaxes"
      }, [])
      const photos = [Scan13, Scan14, Scan15, Scan16, Scan17, Scan18, Scan19, Scan20, Scan21, Scan22, Scan23,
        Scan24, Scan25, Scan26, Scan27, Scan28, Scan29, Scan30]

    
      
  return (
    <Container className="pt-5">
        
        <Row className="g-5">
            <h1 className="mb-0 pb-0">{photos.length} Photos</h1>
            <hr className="mt-0 pt-0"/>
            {photos.map((photo, idx) => <PhotoGrid photo={photo} key={photo}/>)}
        </Row>
    </Container>
  )
}

export default Community