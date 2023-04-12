import * as z from 'zod'

export type MenuItem = z.infer<typeof menuItemSchema> & { id: number }

export const menuItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  image_url: z.string(),
  category_id: z.number(),
})

export type MenuItemDB = z.infer<typeof menuItemSchema>
