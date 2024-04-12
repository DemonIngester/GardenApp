const Table = ({name, displayName}) => {

    //Name from App.js is used to set table display name as well as classname AND id
    return(
        <div className={name} id={name}>
            <h4>{displayName}</h4>
        </div>
    );
}

export default Table