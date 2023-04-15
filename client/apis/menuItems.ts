import request from 'superagent'
import { MenuItemDb } from '../../models/MenuItem'

const rootUrl = '/api/v1'

export async function getAllMenuItems() {
  const menuItems = await request.get(rootUrl + '/menuitems')
  return menuItems
}

export async function getMenuItemById(id: number) {
  const menuItem = await request.get(rootUrl + '/menuitems/' + id)
  return menuItem
}

export async function addMenuItem(newMenuItem: MenuItemDb) {
  const res = await request.post(rootUrl + '/menuitems').send(newMenuItem)
  return res
}





