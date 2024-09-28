import hotkeyJS, { HotkeysEvent } from 'hotkeys-js';




export default class KeydownManager<T extends HotkeysEvent>
{

    private context       : Set<string>                                 = new Set<string>();
    private eventsHandlers: Map<string, Map<string, (args: T) => void>> = new Map();

    private blockedEvents: Map<string, Set<string>> = new Map();

    private currentCtxName: string;
    private currentCtx    : string;



    constructor(currentCtxName: string = "default")
    {
        this.currentCtxName = currentCtxName;
        this.currentCtx     = this.currentCtxName;
    }


    /**
     * 
     * @param ctx 
     */
    public addContext(ctx: string): void
    {
        this.context.add(ctx);
        this.eventsHandlers.set(ctx, new Map());
    }


    /**
     * 
     * @param ctx 
     */
    public removeContext(ctx: string): boolean
    {
        this.context.delete(ctx);
        this.eventsHandlers.delete(ctx);
        return true;
    }


    /**
     * 
     * @param ctx 
     */
    public setCurrentContent(ctx: string): void
    {
        this.currentCtx = ctx;
    }

    public setToDefaultContext(): void
    {
        this.currentCtx = this.currentCtxName;
    }



    /**
     * 
     * @param hotkeys 
     * @param handler 
     * @param ctx 
     * @returns 
     */
    public addEvent(hotkeys: string, handler: (args: T) => void, ctx: string = 'default'): boolean
    {
        const ctxSet: Map<string, (args: T) => void> | undefined = this.eventsHandlers.get(ctx);
        if(ctxSet === undefined) return false;
        ctxSet.set(hotkeys, handler);
        return true;
    }


    /**
     * 
     * @param hotkeys 
     * @param ctx 
     * @returns 
     */
    public removeEvent(hotkeys: string, ctx: string = 'default'): boolean
    {
        const ctxSet: Map<string, (args: T) => void> | undefined = this.eventsHandlers.get(ctx);
        if(ctxSet === undefined) return false;
        return ctxSet.delete(hotkeys);
    }


    /**
     * 
     * @param hotkeys 
     * @param ctx 
     */
    public blockEvent(hotkeys: string, ctx: string = "default"): boolean
    {
        const ctxSet: Set<string> | undefined = this.blockedEvents.get(ctx);
        if(ctxSet === undefined) return false;
        ctxSet.add(hotkeys);
        return true;
    }


    /**
     * 
     * @param hotkeys 
     * @param ctx 
     * @returns 
     */
    public unBlockEvent(hotkeys: string, ctx: string = "default"): boolean
    {
        const ctxSet: Set<string> | undefined = this.blockedEvents.get(ctx);
        if(ctxSet === undefined) return false;
        ctxSet.delete(hotkeys);
        return true;
    }


}
