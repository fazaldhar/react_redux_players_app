import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as playerActions from '../../actions/playerActions';
import PlayerForm from './PlayerForm';

class ManagePlayerPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          player: Object.assign({}, this.props.player),
          errors: {}
        };

        this.updatePlayerState = this.updatePlayerState.bind(this);
        this.savePlayer = this.savePlayer.bind(this);
    }

    componentWillReceiveProps(nextProps) {
      if(this.props.player.id !== nextProps.player.id) {
        this.setState({player: Object.assign({}, nextProps.player)});
      }
    }

    updatePlayerState(event) {
      const field = event.target.name;
      let player = this.state.player;
      player[field] = event.target.value;
      return this.setState({player: player});
    }

    savePlayer(event) {
      event.preventDefault();
      this.props.actions.savePlayer(this.state.player);
      this.context.router.push('/players');
    }

    render() {
        return (
          <PlayerForm
            player={this.state.player}
            errors={this.state.errors}
            iplTeams={this.props.iplTeams}
            onChange={this.updatePlayerState}
            onSave={this.savePlayer}
          />
        );
    }
}

ManagePlayerPage.propTypes = {
  player: PropTypes.object.isRequired,
  iplTeams: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManagePlayerPage.contextTypes = {
  router: PropTypes.object
};

function getPlayerById(players, id) {
  const player = players.filter(player => player.id == id);
  if(player.length) return player[0];
  return null;
}

function mapStateToProps(state, ownProps) {
    let player={id:'',wiki:'',name:'',iplTeam:'',totalRuns:'',height:''};

    let playerId = ownProps.params.id;

    if(playerId && state.players.length) {
      player = getPlayerById(state.players, playerId);
    }

    const iplTeamsFormattedForDropDown = state.iplTeams.map(iplTeam => {
      return {
        value: iplTeam.firstName + ' ' + iplTeam.lastName,
        text: iplTeam.firstName + ' ' + iplTeam.lastName
      };
    });
    return {
        player: player,
        iplTeams: iplTeamsFormattedForDropDown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(playerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePlayerPage);
