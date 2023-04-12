import express from 'express'
import { join } from 'node:path'

import menuItemRoutes from './routes/menuItems'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1/menuitems', menuItemRoutes)

export default server
