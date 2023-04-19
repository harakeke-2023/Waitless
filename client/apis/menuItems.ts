import request from 'superagent'
import { MenuItemDb, MenuItemMutation } from '../../models/MenuItem'

const rootUrl = '/api/v1'

export async function getAllMenuItems() {
  const res = await request.get(rootUrl + '/menuitems')
  return res.body as MenuItemMutation[]
}

export async function getMenuItemById(id: number) {
  const res = await request.get(rootUrl + '/menuitems/' + id)
  return res.body
}

export async function addMenuItem(newMenuItem: MenuItemDb) {
  const res = await request.post(rootUrl + '/menuitems').send(newMenuItem)
  return res.body
}

export async function editMenuItem(newMenuItem: MenuItemMutation) {
  const res = await request
    .patch(rootUrl + '/menuitems/' + newMenuItem.id)
    .send(newMenuItem)
  return res.body
}

export async function deleteMenuItem(id: number) {
  const res = await request.delete(rootUrl + '/menuitems/' + id).send({ id })
  return res.body
}
