import { MenuItemMutation } from "../../../../models/MenuItem"
import AdminMenuItem from "./AdminMenuItem"

interface Props{
    category: MenuItemMutation[]
}

export default function AdminCategories( props: Props){
  
    return (
    <>
        <section className="flex flex-col items-center">
          {props.category.map((item: MenuItemMutation) => {
            return (
              <AdminMenuItem
                item={item}
                key={item.id}
              />
            )
            })}
        </section>
      </>
)}