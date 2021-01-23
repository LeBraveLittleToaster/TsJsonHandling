
import Person from 'src/types/Person';

export default class Group {

    private groupId: string;
    private groupName: string;
    private persons: Person[];

    constructor(groupId: string, groupName: string, persons: Person[]) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.persons = persons;
    }

    public static getGroupFromJson(json) : Group | undefined{
        if(json["groupId"] !== undefined && json["groupName"] && json["persons"]){
            let personL : Person[] = json["persons"].map(Person.getPersonFromJson).filter(e => e !== undefined);
            return new Group(json["groupId"], json["groupName"], personL);
        }
        return undefined;
    }

    public addPerson(person: Person) {
        this.persons.push(person);
    }

    /**
        * Getter $groupId
        * @return {string}
        */
    public get $groupId(): string {
        return this.groupId;
    }

    /**
     * Getter $groupName
     * @return {string}
     */
    public get $groupName(): string {
        return this.groupName;
    }

    /**
     * Getter $persons
     * @return {Person[]}
     */
    public get $persons(): Person[] {
        return this.persons;
    }

    /**
     * Setter $groupId
     * @param {string} value
     */
    public set $groupId(value: string) {
        this.groupId = value;
    }

    /**
     * Setter $groupName
     * @param {string} value
     */
    public set $groupName(value: string) {
        this.groupName = value;
    }

    /**
     * Setter $persons
     * @param {Person[]} value
     */
    public set $persons(value: Person[]) {
        this.persons = value;
    }
}