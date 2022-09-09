import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

import DocumentGrid from '../components/DocumentGrid'
import TC from '../assets/pdf/Table Content.pdf'
import YN22 from '../assets/pdf/YN22.pdf'
import YNProposed22 from '../assets/pdf/YNProposed22.pdf'
import YN21WL from '../assets/pdf/YN21WL.pdf'
import YOLANORTH2022 from '../assets/pdf/YOLA NORTH 2022.pdf'

function Budgets() {
    React.useEffect(()=> {
        document.title = "Budgets | FollowTaxes"
      }, [])
    
  return (
    <Container className="pt-5">
        <Row className="g-5">
            <h1 className="mb-0 pb-0">{[TC, YN22, YNProposed22, YN21WL, YOLANORTH2022].length} Documents</h1>
            <hr className="mt-0 pt-0"/>
            {[TC, YN22, YNProposed22, YN21WL, YOLANORTH2022].map((document, idx) => <DocumentGrid document={document} key={document}/>)}
        </Row>
    </Container>
  )
}

export default Budgets