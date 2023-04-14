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

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  stock: number
  image_url: string
  category_id: number
}

interface Categories {
  [categoryName: string]: MenuItem[]
}

export interface MenuItemsSortedByCategory {
  categories: Categories
}

export async function getMenuItemsSortedByCategory(db = connection) {
  const menuItems = await db('menu_items')
    .select('*')
    .join('categories', 'menu_items.category_id', '=', 'categories.id')
    .orderBy('categories.category_name')

  const categories: Categories = {}

  menuItems.forEach((item) => {
    const categoryName = item.category_name
    if (!categories[categoryName]) {
      categories[categoryName] = []
    }

    const { id, name, description, price, stock, image_url, category_id } = item
    categories[categoryName].push({
      id,
      name,
      description,
      price,
      stock,
      image_url,
      category_id,
    })
  })

  return { categories } as MenuItemsSortedByCategory
}
