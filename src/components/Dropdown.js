import React from 'react' 

import {DropdownButton, Dropdown, Container} from 'react-bootstrap'
import About from '../pages/About'
function Drop () {
  return (
      <Container fluid={true}>
        <DropdownButton title={"ADITYA"} drop={"up"}>
          <Dropdown.Item><About /></Dropdown.Item>
        </DropdownButton>
      </Container>
   );
}

export default Drop