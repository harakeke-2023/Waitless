import { Category, CategoryDb } from '../../models/Category'
import connection from './connection'

export async function getAllCategories(db = connection) {
  return await db('categories').select()
}

export async function addCategory(newCategory: CategoryDb, db = connection) {
  const result = await db('categories').insert(newCategory)
  return result
}

export async function deleteCategory(categoryId: number, db = connection) {
  const result = await db('categories').where('id', categoryId).delete()
  return result
}

export async function updateCategory(
  newCategoryItem: Category,
  db = connection
) {
  const result = await db('categories')
    .where('id', newCategoryItem.id)
    .update(newCategoryItem)
  return result
}

export async function getCategoryById(categoryId: number, db = connection) {
  const fetchedCategory = await db('categories')
    .select()
    .where('id', categoryId)
    .first()

  return fetchedCategory
}
