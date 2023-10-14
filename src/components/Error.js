export default function Error(props){
    const disOpt = props.display
    return(
        <div className="error">
            <p style={{display: disOpt}}>Invalid Location</p>
        </div>
    )
}