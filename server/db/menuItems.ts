import connection from './connection'
import { MenuItemDb, MenuItem } from '../../models/MenuItem'

export async function getAllMenuItems(db = connection) {
  return await db('menu_items')
    .join('categories', 'menu_items.category_id', '=', 'categories.id')
    .select('menu_items.*', 'category_name')
}

export async function addMenuItem(newMenuItem: MenuItemDb, db = connection) {
  const result = await db('menu_items').insert(newMenuItem)
  return result
}

export async function getMenuItemById(menuItemId: number, db = connection) {
  const fetchedItem = await db('menu_items')
    .join('categories', 'menu_items.category_id', '=', 'categories.id')
    .select('menu_items.*', 'category_name')
    .where('menu_items.id', '=', menuItemId)
    .first()

  return fetchedItem
}

export async function updateMenuItem(newMenuItem: MenuItem, db = connection) {
  const result = await db('menu_Items')
    .where('id', newMenuItem.id)
    .update(newMenuItem)
  return result
}

export async function deleteMenuItem(menuItemId: number, db = connection) {
  console.log('in DB: ', menuItemId)
  const result = await db('menu_items').where('id', menuItemId).delete()
  return result
}
