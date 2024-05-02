import React, {useState} from 'react'

const Search = () => {

    const [searchInput, setSearchInput] = useState("");

    //Static DB, plant holds plant names table holds classname of table
    //!!! ALL PLANT NAMES NEED TO BE LOWERCASE AND WITHOUT SPACES
    const tableArray = [
        { plant: ["dustymiller","dianthus","marigold","petunia","celosia","vinca","salvia","seedgeranium"], table: "TableOne" },
        { plant: ["cobelia","pansy","begonia","coleus","impatients","seedgeranium"], table: "TableTwo" },
        { plant: ["spike","asparagusfern","setcreasea","swedishivy","creepingjenny","artemisia","englishivy","helichrysam","dichondea","vincavine","bostonfern","petunia","fern"], table: "TableThree" },
        { plant: ["pansy","solenia","supertunia","snowprincess","sweetalyssum","flossflower","calibrachoa","begonia","petunia","fushia","bidensferulifolia","dahlia","coleus","osteospermum","kalanchoe","nemesia"], table: "TableFour" },
        { plant: ["lily","coralbells","viola","scabiosa","veronica","veronicaroyalcandles","digitaliscamelotlavender","lavender","salvialyricalblues","salvia","festuca","liriope","juncusbigtwister","juncus","twister","liriopevariegata","hen","chicks","ajugablackscallop","ajuga","bellis","bellisgalaxy","bellisgalaxymixed","sedum","achillea","cadmium","chick","hens"], table: "TableFive" },
        { plant: ["dianthus","lillium","heuchera","veronica","hosta","lilly","stonecrop","pachysandra","creepingjenny","leptinella","salvia","daisy","carnation","chick","hen","chicks","hens"], table: "TableSix" },
        { plant: ["carnations","carnation","blueeyedgrass","coralbells","chicks","lilly","heartleafbrunnera","chick","chicks","daisy","lewisia","peony"], table: "TableSeven" },
        { plant: ["hydrangea"], table: "TableEight" }
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
        <>
            <form onChange={handleChange} value={searchInput}>
                <input type="text" placeholder="Enter Plant Name:"/>
            </form>
        </>
    );
}

export default Search