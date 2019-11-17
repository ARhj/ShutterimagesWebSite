export class header {
    items : Map<string,headerSchema>;   
}

export class headerSchema
{
    url : string;
    subitems : SubItems;
}

export class SubItems{
    items : Map<string,string>;
} 