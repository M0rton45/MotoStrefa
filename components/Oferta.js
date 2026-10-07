
    export const List = ({list, ItemComponent, onClose, className}) => (
        // console.log(list),
        <ul className={`${className}`}>
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
            w-80
            h-35
            bg-[#171717]
            border-2
            border-[#2a2a2a]
            rounded-lg
            p-4
            my-4
            mx-2
        ">
            <div className="flex p-1">
                <span className="pr-3">{item.icon}</span>
                <h3>{item.title}</h3>
            </div>
            <p
            className="text-[#909088] mt-2"
            >{item.description}</p>
        </li>
    )
    
    export const ItemContact = ({item}) => (
        <li className="flex pb-2 my-3">
            <span className="pr-2">{item.icon}</span>
            <p>{item.description}</p>
        </li>
    )
    export const ItemLinks = ({item, onClose}) => {
        return(
        <li className="p-1 m-1 text-3xl mb-8 text-center md:mb-1 md:bg-[backdrop-blur-sm] md:text-xl ">
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
