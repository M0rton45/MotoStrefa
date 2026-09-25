
    export const List = ({list, ItemComponent, onClose}) => (
        // console.log(list),
        <ul>
            {list.map((item) =>(
                    <ItemComponent 
                        key={item.id}
                        item={item}
                        onClose={onClose}
                    />
            ))}
        </ul>
    )
    export const ItemOffer = ({item}) => (
        console.log(item.icon),
        <li 
        className="
            bg-[#171717]
            border-2
            border-[#2a2a2a]
            rounded-lg
            p-2
            my-4
        ">
            <div className="flex p-1">
                <span className="pr-3">{item.icon}</span>
                <h3>{item.title}</h3>
            </div>
            <p
            className="text-[#909088]"
            >{item.description}</p>
        </li>
    )
    
    export const ItemContact = ({item}) => (
        <li className="flex pb-2">
            <span className="pr-2">{item.icon}</span>
            <p>{item.description}</p>
        </li>
    )
    export const ItemLinks = ({item, onClose}) => {
        return(
        <li className="p-1 m-1 text-3xl mb-8 text-center md:bg-[green]">
            <span>
                <a href={item.href} onClick={(e) => {
                    // e.preventDefault();
                    onClose();
                    // console.log("click");
                }}    
                >    
                    {item.label}
                </a>
            </span>
        </li>
        );
    }
