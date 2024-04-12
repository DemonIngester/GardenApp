import Table from "./Table";
import Search from "./Search";
import "./Layout.css";

//The Table component has two props, name and displayName.
//name is used to set the tables classname and id for CSS/DOM
//displayName is simply the name rendered above the table

const Layout = () => {
    return (
        <>
            <div className="layoutDiv" id="layoutDiv">
                <Table name="TableOne" displayName={"Table One"}/>
                <Table name="TableTwo" displayName={"Table Two"}/>
                <Table name="TableThree" displayName={"Table Three"}/>
                <Table name="TableFour" displayName={"Table Four"}/>
                <Table name="TableFive" displayName={"Table Five"}/>
                <Table name="TableSix" displayName={"Table Six"}/>
                <Table name="TableSeven" displayName={"Table Seven"}/>
                <Table name="TableEight" displayName={"Table Eight"}/>
            </div>
                <Search/>
        </>
    )
}

export default Layout;