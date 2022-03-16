import {Alert} from 'react-bootstrap'


const WarningSign = (props) => (
            <Alert variant={'danger'}>
              {props.message}
            </Alert>
)

export default WarningSign
