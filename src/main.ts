import Group from './types/Group';
import Person from './types/Person';
import { Logger } from './utils/logger';

const pluses = "++++++++++++++++++++++++";
const logger = new Logger('main');

let json = {
    "groupName": "Some name",
    "groupId" : "someId",
    "nestedObj" : {
        "nestedName" : "Some nested name"
    },
    "persons" : [
        {
            personId : "pId0",
            name : "Hannah"
        },
        {
            personId : "pId1",
            name : "Dieter"
        },
        {
            personId : "pId2",
            name : "Alfred"
        },
        {
            personId : "pId3",
            name : "Margret"
        }
    ]
}


logger.log(pluses)
logger.log("Json is a notation which is used in javascript to manage objects. Our 'json' object above is such a js object")
logger.log("If you receive JSON objects via a network you normally parse them to JavaScript objects (Javascript object == JSON) and then convert them to typescript object.")
logger.log("The alternativ is to use the JSON as showen below without parsing it to a dedicated typescript object by just accessing the data.")
logger.log(pluses + "\n")



logger.log(pluses)
logger.log("First we look at how to convert a json object to a string (to send it over the network for example)")
let jsonAsString : string = JSON.stringify(json)
logger.log(jsonAsString)
logger.log(pluses + "\n")


logger.log(pluses)
logger.log("Next we look how to convert the json string back to a javascript object (remember, typescript is compiled to javascript!)")
let jsonAsTypelessJsObject = JSON.parse(jsonAsString)
logger.log(JSON.stringify(jsonAsTypelessJsObject))
logger.log("You need to stringify it for a console output")
logger.log(pluses + "\n")


logger.log(pluses)
logger.log("Simple adding value via key name")
json["notYetSetKey"] = "New not yet set value"
logger.log("not yet set value: " + json['notYetSetKey'])
logger.log(pluses + "\n")

logger.log(pluses)
logger.log("Simple adding a new array and adding values to it:")
json["unknownKeyForArray"] = []
for (var _i = 0; _i < 4; _i++) {
    json["unknownKeyForArray"].push("ValueNr: " + _i)
}
//This stringify prints the output with a 2 space indent (einrückung) to improve readability
logger.log(JSON.stringify(json, null, 2))
logger.log(pluses + "\n")


// How to extract values
logger.log(pluses)
logger.log("Simple extraction of parameter via key name")
logger.log("Groupname: " + json['groupName'])
logger.log(pluses + "\n")


//How to extract nested values/objects
logger.log(pluses)
logger.log("Simple extraction of nested parameter via key names")
logger.log("NestedName: " + json['nestedObj']["nestedName"])
logger.log(pluses+ "\n")

//Extracting and iterating arrays
logger.log(pluses)
logger.log("Simple extraction of array via key names")
logger.log("Array:")
json["persons"].forEach(e => {
    logger.log("Element: " + JSON.stringify(e))
})
logger.log(pluses+ "\n")

//Extracting and reading arrays based on index
logger.log(pluses)
logger.log("Simple extraction of array element by array index (watch out for array bounds!)")
logger.log("Array:")
logger.log("Element at index: 1 (second position): " + json["persons"][1]);
logger.log(pluses + "\n")

//Dynamic type conversion (bad for the beginning)
logger.log(pluses)
logger.log("There are approaches to automatically transfer json data into TypeScript objects, but they are quiet bad in dealing with nested objects.")
logger.log("If you still want to dive into that watch here:\n\nhttps://stackoverflow.com/questions/38688822/how-to-parse-json-string-in-typescript\n")
logger.log(pluses + "\n")

//Parsing to objects by hand
logger.log(pluses)
logger.log("Jsons have, other strikt typed languages, a dynamic type. So you need a translator/parser. The simplest method is shown below (check out the called method in src/types/Group.ts)")
logger.log("Simple conversion via factory method in object:")
logger.log("Group object from json: ")
logger.log("Is type Group: " + (Group.getGroupFromJson(json) instanceof Group))
logger.log(JSON.stringify(Group.getGroupFromJson(json)) + "\n")

logger.log("Only parsing the persons array")
logger.log(JSON.stringify(json["persons"].map(e => Person.getPersonFromJson(e))))
logger.log(pluses + "\n")
