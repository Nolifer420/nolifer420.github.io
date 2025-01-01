/**
    * This class will create a new StoreManager with an appended prefix to it. The generic is there to tell you what that prefix ***is***
    *
    * **Note: there is already a defaultStore available! In most situations, you'll want to use that.**
    *
    * <code> 
    * const newStore = new StoreManager("incog");
    * 
    * // Appends the prefix to the key passed. (EX: "incog||test")
    * // Will return a string.
    * newStore.getVal("test") 
    * 
    * // As stated above the prefix will automatically be appended to the key param (EX: "incog||test")
    * newStore.setVal("test", "newVal");
    * </code>
*/
class StoreManager<Prefix extends string /* This is here so I know what prefix is appended. It's inferred from the constructor */> {
    prefix: Prefix;
    constructor(pref: Prefix) {
        this.prefix = pref;
    }
    getVal(key: string): string {
        return localStorage.getItem(`${this.prefix}||${key}`) as string;
    }
    setVal(key: string, val: string): void {
        localStorage.setItem(key, val);
    }
}

//this is done so I can see the prefix used.
const defaultStore = new StoreManager("nebula");

export { StoreManager, defaultStore };
