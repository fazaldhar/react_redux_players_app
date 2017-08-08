import React, {PropTypes} from 'react';
import PlayerListRow from './PlayerListRow';

const PlayerList = ({players}) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Name</th>
          <th>Total Runs Scored</th>
          <th>IPL Team</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
      {players.map(player =>
        <PlayerListRow key={player.id} player={player}/>
      )}
      </tbody>
    </table>
  );
};

PlayerList.propTypes = {
  players : PropTypes.array.isRequired
};

export default PlayerList;
