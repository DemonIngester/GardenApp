import React, {useState} from 'react'

const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    var currTable = [];

    //Static DB, plant holds plant names table holds classname of table
    const tableArray = [
        { plant: ["Dusty Miller","Dianthus","Marigold","Petunia","Celosia","Vinca","Salvia","Seed Geranium"], table: "TableOne" },
        { plant: ["Cobelia","Pansy","Begonia","Coleus","Impatients","Seed Geranium"], table: "TableTwo" },
        { plant: ["Spike","Asparagus Fern","Setcreasea","Swedish Ivy","Creeping Jenny","Artemisia","English Ivy","Helichrysam","Dichondea","Vinca Vine","Boston Fern","Petunia","Fern"], table: "TableThree" },
        { plant: ["Pansy","Solenia","Supertunia","Snow Princess","Sweetalyssum","Floss Flower","Calibrachoa","Begonia","Petunia","Fushia","Bidens Ferulifolia","Dahlia","Coleus","Osteospermum","Kalanchoe","Nemesia"], table: "TableFour" },
        { plant: ["Lily","Coral Bells","Viola","Scabiosa","Veronica","Veronica Royal Candles","Digitalis Camelot Lavender","Lavender","Salvia Lyrical Blues","Salvia","Festuca","Liriope","Juncus Big Twister","Juncus","Twister","Liriope Variegata","Hen","Chicks","Ajuga Black Scallop","Ajuga","Bellis","Bellis Galaxy","Bellis Galaxy Mixed","Sedum","Achillea","Cadmium","Chick","Hens"], table: "TableFive" },
        { plant: ["Dianthus","Lillium","Heuchera","Veronica","Hosta","Lilly","Stone Crop","Pachy Sandra","Creeping Jenny","Leptinella","Salvia","Daisy","Carnation","Chick","Hen","Chicks","Hens"], table: "TableSix" },
        { plant: ["Carnations","Carnation","Blue Eyed Grass","Coral Bells","Chicks","Lilly","Heart Leaf Brunnera","Chick","Chicks","Daisy","Lewisia","Peony"], table: "TableSeven" },
        { plant: ["Hydrangea"], table: "TableEight" }
    ];

    //Sets input to lowercase and removes spaces
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(((e.target.value).toLowerCase()).split(" ").join(""));
    };

    const ModifyTable = () => {
        for(let i = 0; i < currTable.length; i++){
            currTable[i] = currTable[i].toLowerCase().split(" ").join("");
        }
    }

    const FilterSearch = () => {
        const ul = document.getElementById("filteredUl");
        
        
    }

    //If input matches plant/s within table, background is changed to green, otherwise is set to grey
    if (searchInput.length > 0) {
        for(let i = 0; i < tableArray.length; i++){
            currTable = tableArray[i].plant;
            ModifyTable();
            if (currTable.includes(searchInput)) {
                document.getElementById(tableArray[i].table).style.backgroundColor = "#66a253";
            } else {
                document.getElementById(tableArray[i].table).style.backgroundColor = "#a5a5a5";
            }
        }
    }

    //Checks DB as user types
    return (
        <>
            <form onChange={handleChange} value={searchInput}>
                <input type="text" placeholder="Enter Plant Name:"/>
            </form>
        </>
    );
}

export default Search