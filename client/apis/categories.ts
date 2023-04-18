import request from 'superagent'
import { CategoryMutation } from '../../models/Category'

const rootUrl = '/api/v1'

export async function getAllCategories() {
  const res = await request.get(rootUrl + '/categories')
  return res.body.categories as CategoryMutation[]
}
