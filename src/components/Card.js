import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCard, fetchUsers } from "../actions/cardActions";
// params={useParams()}
const withRouter = WrappedComponent => props => {
    const navigate  = useNavigate(); 
    const params = useParams();
    return (<WrappedComponent {...props} {...{navigate,params}} />);
}

class Card extends React.Component {
    
    componentDidMount(){
        this.props.fetchUsers();
    }

    onButtonClick = () => {
        this.props.deleteCard(this.props.card.id);
        const { navigate } = this.props;
        navigate('/contact');
    }
    
    render() {  
        const {users} = this.props;
        return (
            users.map((user) => {
                return(
                    <div className="ui raised very padded text container segment">
                <div className="card body">
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    {/* <button className="ui primary right floated button" onClick={this.onButtonClick}>Delete</button> */}
                </div>
            </div>
                )
            })
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let title = ownProps.params.title;
    return {
        card: state.cards.find(card => card.title === title),
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteCard: (id) => { dispatch(deleteCard(id)) },
        fetchUsers: () => { dispatch(fetchUsers())}
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Card));