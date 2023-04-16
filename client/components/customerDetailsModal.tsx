import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

interface Props {
  show: boolean
  setShowCustomerDetailsModal: React.Dispatch<React.SetStateAction<boolean>>
}

interface CustomerDetails {
  name: string
  email: string
}

export default function CustomerDetailsModal(props: Props) {
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
  } as CustomerDetails)
  const [customerEmail, setCustomerEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // collect user information
    // ...
    props.setShowCustomerDetailsModal(() => false)
  }
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Your Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label htmlFor={'name'}>Enter Your Name</label>
          <input
            type="text"
            onChange={}
            name="name"
            value={customerDetails.name}
          />

          <Form.Group>
            <Form.Label>Enter Your Email</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              name="email"
              value={customerDetails.email}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  )
}
