function Insult(props){

    const {insult, play}=props;
    return(
        <article>
            <p>{ insult } - { play }</p>
        </article>

    );
}
export default Insult;