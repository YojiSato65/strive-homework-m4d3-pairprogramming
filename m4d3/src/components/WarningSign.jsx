import {Alert} from 'react-bootstrap'


const WarningSign = (props) => {


  return (
        [
           
            'danger'
          
          ].map((variant, idx) => (
            <Alert key={idx} variant={'danger'}>
              {props.message}
            </Alert>
          ))
 )
  
      }

export default WarningSign
