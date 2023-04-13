import * as z from 'zod'

export type Category = z.infer<typeof categorySchema> & { id: number }

export const categorySchema = z.object({
  category_name: z.string(),
})

export const categoryMutationSchema = z.object({
  id: z.number(),
  category_name: z.string(),
})

export type CategoryDb = z.infer<typeof categorySchema>
export type CategoryMutation = z.infer<typeof categoryMutationSchema>
