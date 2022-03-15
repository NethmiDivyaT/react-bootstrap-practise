import React from 'react';
import '../Styles/typehead.css'
import { Container, FormGroup, Form, Spinner} from 'react-bootstrap';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead, ClearButton } from 'react-bootstrap-typeahead';

import options from './data';

const BasicExample = () => {
    return (
      <Container className='container'>
              <Typeahead
                id="service"
                options={options}
                placeholder="Choose a Language........">
                {({ onClear, selected }) => (
                        <div className="rbt-aux">
                            {!!selected.length && <ClearButton onClick={onClear} size="lg" className='clear'/>}
                            {!selected.length && <Spinner animation="grow" size="sm" />}
                        </div>
                        )}
               </Typeahead>
        </Container>
    );
  };

export default BasicExample;