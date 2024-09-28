import { DTOEntity } from "../../dto/DTOEntity";



export default class TransformableSize extends DTOEntity<{ width: number, height: number}>
{
    
    private width: number = 0;
    private height: number = 0;

    
    public get Width(): number
    {
        return this.width; 
    }

    public get Height(): number
    {
        return this.height
    }


    public set Width(w: number)
    {
        this.width = w;
    }

    public set Height(h: number)
    {
        this.height = h;
    }

    public copy(o: Readonly<TransformableSize>)
    {
        this.width  = o.Width;
        this.height = o.Height;
    }


    public createDTO(): { width: number; height: number; } 
    {    
        return {
            width : this.width,
            height: this.height,
        }
    }
}