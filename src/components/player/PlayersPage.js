import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as playerActions from '../../actions/playerActions';
import PlayerList from './PlayerList';
import {browserHistory} from 'react-router';

class PlayersPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    /*this.state = {
      player : {name : ""}
    };*/

    // due to performance i am binding this in constructor, since a bind function inside render function would cause performance issue.
    // this.onNameChange = this.onNameChange.bind(this);
    // this.onClickSave = this.onClickSave.bind(this);
    this.redirectToAddPlayerPage = this.redirectToAddPlayerPage.bind(this);
  }

  /*onNameChange(event) {
    const player = this.state.player;
    player.name = event.target.value;
    this.setState({player: player});
  }*/

  /*onClickSave() {
    // this.props.dispatch(playerActions.createPlayer(this.state.player)); //first way to dispatch action using props.
    // this.props.createPlayer(this.state.player);
    this.props.actions.createPlayer(this.state.player);
  }*/

  playerRow(player, index) {
    return <div key={index}>{player.Name}</div>;
  }

  redirectToAddPlayerPage() {
    browserHistory.push('/player');
  }

  render() {
    const {players} = this.props;

    return (
      <div>
        <h1>Players</h1>
        <input type="submit"
        value="Add Player"
        className="btn btn-primary"
        onClick={this.redirectToAddPlayerPage}/>
        <PlayerList players={players}/>
        {/*<h2>Add Players</h2>
        <input type="text" onChange={this.onNameChange} value={this.state.player.name}/>
        <input type="submit" value="save" onClick={this.onClickSave}/>*/}
      </div>
    );
  }
}

PlayersPage.propTypes = {
  // dispatch: PropTypes.func.isRequired, // this is commented since we have included mapDispatchToProps to connect function.
  players: PropTypes.array.isRequired,
  // createPlayer: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    players: state.players
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // createPlayer: player => dispatch(playerActions.createPlayer(player)) // second way of dispatching actions.
    actions: bindActionCreators(playerActions, dispatch) // third way of dispatching actions
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (PlayersPage);
