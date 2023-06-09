import * as z from 'zod'

export type MenuItem = z.infer<typeof menuItemSchema> & { id: number }

export const menuItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  image_url: z.string(),
  category_id: z.number(),
  active: z.boolean(),
})

export const menuItemMutationSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number(),
  image_url: z.string(),
  category_id: z.number(),
  active: z.boolean(),
})

export type MenuItemMutationWithQuantity = MenuItemMutation & {
  quantity: number
}

export type MenuItemDb = z.infer<typeof menuItemSchema>
export type MenuItemMutation = z.infer<typeof menuItemMutationSchema>
