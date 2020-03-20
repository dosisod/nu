/*! MIT Licnse for nu available at -> https://github.com/dosisod/nu */
declare type AppendableBase = HTMLElement | string;
declare type Appendable = AppendableBase | AppendableBase[];
export declare function nu(name: string, attribs?: {
    [attrib: string]: any;
}, appendTo?: Appendable, returnOld?: boolean): HTMLElement;
export {};
