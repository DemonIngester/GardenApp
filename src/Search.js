import React, {useState} from 'react'

const Search = () => {

    const [searchInput, setSearchInput] = useState("");

    //Static DB, plant holds plant names table holds classname of table
    //!!! ALL PLANT NAMES NEED TO BE LOWERCASE AND WITHOUT SPACES
    const tableArray = [
        { plant: ["rose"], table: "TableOne" },
        { plant: ["tulip"], table: "TableTwo" },
        { plant: ["kolton"], table: "TableThree" },
        { plant: ["daisy"], table: "TableFour" },
        { plant: ["sunflower"], table: "TableFive" },
        { plant: ["bush"], table: "TableSix" },
        { plant: ["tomato"], table: "TableSeven" },
        { plant: ["cucumber"], table: "TableEight" }
    ];

    //Sets input to lowercase and removes spaces
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(((e.target.value).toLowerCase()).split(" ").join(""));
    };

    //If input matches plant/s within table, background is changed to green, otherwise is set to grey
    if (searchInput.length > 0) {
        for(let i = 0; i < tableArray.length; i++){
            if (tableArray[i].plant.includes(searchInput)) {
                document.getElementById(tableArray[i].table).style.backgroundColor = "#66a253";
            } else {
                document.getElementById(tableArray[i].table).style.backgroundColor = "#a5a5a5";
            }
        }
    }

    //Checks DB as user types
    return (
        <form onChange={handleChange} value={searchInput}>
            <input type="text" placeholder="Enter Plant Name:"/>
        </form>
    );
}

export default Search