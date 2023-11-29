import ItemCard from "./ItemCard";

function ListContainer({ items }) {
    return (!items || items.length == 0 ? 'No hay datos' :
        <ul className="flex justify-left flex-wrap gap-6">
            {items.map((item) => <ItemCard key={item.id} data={item} />)}
        </ul>
    )
}
export default ListContainer;