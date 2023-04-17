import express from 'express'
import { join } from 'node:path'

import menuItemRoutes from './routes/menuItems'
import categoryRoutes from './routes/categories'
import adminRoute from './routes/admin'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/menuitems', menuItemRoutes)
server.use('/api/v1/categories', categoryRoutes)
server.use('/api/v1/admin/', adminRoute)

server.get('*', (req, res) => {
  const appPath = join(__dirname, 'public', 'index.html')
  res.sendFile(appPath)
})
export default server
