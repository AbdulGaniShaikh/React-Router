import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Contact = ({cards}) => {
    return (
        <div>
            {
                cards.map(card => {
                    return (
                        <div
                            key={card.id}
                            className="ui raised very padded text container segment"
                            style={{ marginTop: '80px' }}>
                            <Link className="ui header" to={`/contact/${card.title}`}>{card.title}</Link>
                            <p>{card.body}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        users: state.users
    }
}

export default connect(mapStateToProps)(Contact);