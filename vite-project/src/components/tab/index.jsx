import Content from "./content"
import Item from "./item"
import Items from "./items"

export default function Tab({ children }) {
    return (
        <div className="">
            {console.log(children)}
            tab
        </div>
    )
}


Tab.Items = Items
Tab.Item = Item
Tab.Content = Content