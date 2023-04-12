import express from 'express'
import { join } from 'node:path'

import menuItemRoutes from './routes/menuItems'
import categoryRoutes from './routes/categories'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/menuitems', menuItemRoutes)
server.use('/api/v1/categories', categoryRoutes)

export default server
