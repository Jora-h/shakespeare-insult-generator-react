function AddNewInsult(props){
    let insultText = '';
    let playText = '';
    const { updateInsults } = props;

    function handleChangeInsult(event) {
        //console.log(event);
        insultText = event.target.value;

    }

    function handleChangePlay(event) {
        //console.log(event);
        playText = event.target.value;

    }

    function handleClick() {
        console.log(insultText);
        updateInsults(insultText, playText);
    }

    return(
        <div>
            <div>
                <input type="text" placeholder="Add new shakspear insult" id="insult"
                    onKeyUp={ handleChangeInsult }/>
                <input type="text" placeholder="Add name of the play" id="play"
                    onKeyUp={ handleChangePlay }/>
            </div>
            <button onClick={ handleClick }>Add</button>
        </div>
    )
}
export default AddNewInsult;