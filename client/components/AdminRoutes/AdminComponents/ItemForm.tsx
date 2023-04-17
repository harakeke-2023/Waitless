import { useFormik } from 'formik'
import * as Yup from 'yup'
import moment from 'moment'

export const menuItemSchema = Yup.object({
  name: Yup.string(),
  description: Yup.string(),
  price: Yup.number(),
  stock: Yup.number(),
  image_url: Yup.string(),
  category_id: Yup.number(),
})

export default function ItemForm() {
  return <div>ItemForm</div>
}
