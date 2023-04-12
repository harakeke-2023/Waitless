import connection from './connection'
import { MenuItemDB } from '../../models/MenuItem'

export async function getAllMenuItems(db = connection) {
  return await db('menu_items')
    .join('categories', 'menu_items.category_id', '=', 'categories.id')
    .select('menu_items.*', 'category_name')
}

export async function addMenuItem(newMenuItem: MenuItemDB, db = connection) {
  const result = await db('menu_items').insert(newMenuItem, ['id', 'name'])
  return result
}

export async function getMenuItemById(id: number, db = connection) {
  return await db('menu_items')
    .join('categories', 'menu_items.category_id', '=', 'categories.id')
    .select('menu_items.*', 'category_name').where('id', )
}
