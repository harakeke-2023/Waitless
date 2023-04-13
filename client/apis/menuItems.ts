import request from 'superagent'

const rootUrl = '/api/v1'

export async function getAllMenuItems() {
  const menuItems = await request.get(rootUrl + '/menuitems')
  return menuItems
}

