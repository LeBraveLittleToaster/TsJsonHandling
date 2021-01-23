export default class Person {


    private personId:string;
    private name:string;

    constructor(groupId: string, groupName:string){
        this.personId = groupId;
        this.name = groupName;
    }

    public static getPersonFromJson(json) : Person | undefined{
        if(json["personId"] !== undefined && json["name"] !== undefined){
            return new Person(json["personId"], json["name"])
        }
        return undefined;
    }

    /**
     * Getter $groupId
     * @return {string}
     */
	public get $groupId(): string {
		return this.personId;
	}

    /**
     * Getter $groupName
     * @return {string}
     */
	public get $groupName(): string {
		return this.name;
	}

    /**
     * Setter $groupId
     * @param {string} value
     */
	public set $groupId(value: string) {
		this.personId = value;
	}

    /**
     * Setter $groupName
     * @param {string} value
     */
	public set $groupName(value: string) {
		this.name = value;
	}
    
}