import UIProps from "./IUIProps";


export default function Header(props: UIProps)
{

    return (
        
        <h1 className={props.className ?? 'text-3xl font-bold'}>
            {props.content}
        </h1>
    );
}