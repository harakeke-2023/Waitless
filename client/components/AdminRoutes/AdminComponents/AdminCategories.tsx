import { MenuItemMutation } from "../../../../models/MenuItem"
import { Props } from "../../Menu/Categories"
import AdminMenuItem from "./AdminMenuItem"


export default function AdminCategories( props: Props){
  
    return (
    <>
        <section className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 xl:px-16">
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