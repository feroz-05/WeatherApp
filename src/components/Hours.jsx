function Hours(props){
    return(
        <>
            <div className="hours">
                <center>
                <p>{props.hour}</p>
                <p> &#x2601;{props.celcius}&deg; </p>
                </center>
            </div>
        </>
    )
}

export default Hours