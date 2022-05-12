function Card(props) {
    return (
        <div className="card my-3">
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                {props.children}
            </div>

        </div>
    )
}

export default Card;