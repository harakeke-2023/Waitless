import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

interface Props {
  show: boolean
  setShowCustomOptions: React.Dispatch<React.SetStateAction<boolean>>
}

interface FoodOptions {
  spice: string
  notes: string
}

export default function CustomerDetailsModal(props: Props) {
  const [foodOptions, setFoodOptions] = useState({
    spice: '',
    notes: '',
  } as FoodOptions)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // collect user information
    // ...
    props.setShowCustomOptions(() => false)
  }
  return (
    <Modal show={props.show}>
      <Modal.Header closeButton>
        <Modal.Title>Select Extras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <label htmlFor={'spice'}>Enter Your Spice Level</label>
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFoodOptions({
                ...foodOptions,
                spice: event.target.value,
              })
            }}
            name="spice"
            value={foodOptions.spice}
          />

          <label htmlFor={'notes'}>Any Notes? Allergies? Last Requests?</label>
          <input
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFoodOptions({
                ...foodOptions,
                notes: event.target.value,
              })
            }}
            name="notes"
            value={foodOptions.spice}
          />

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  )
}
