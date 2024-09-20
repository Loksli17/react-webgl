import UIProps from "./IUIProps";


export default function Button (props: UIProps)
{
    return (
        
        <button 
            className={props.className} 
            onClick={props.onClick}
        > 
            {props.content} 
        </button>
    );
}