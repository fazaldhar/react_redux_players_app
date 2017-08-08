import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PlayerListRow = ({player}) => {
  return (
    <tr>
      <td><a href={player.wiki} target="_blank">Wiki</a> </td>
      <td><Link to={'/player/' + player.id}>{player.name}</Link></td>
      <td>{player.totalRuns}</td>
      <td>{player.iplTeam}</td>
      <td>{player.height}</td>
    </tr>
  );
};

PlayerListRow.propTypes = {
  player : PropTypes.object.isRequired
};

export default PlayerListRow;
