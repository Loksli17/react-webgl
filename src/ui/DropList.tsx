import UIProps from "./IUIProps";


export interface ListItem
{
    content: string;
    
}


export interface DropListProps extends UIProps
{
    items: Array<ListItem>; 
} 



export default function DropList ()
{

    return (

        <div>

            list
        
        </div>
    );
}