import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const PlayerForm = ({player, iplTeams, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Player</h1>
      <TextInput
        name="name"
        label="Name"
        value={player.name}
        onChange={onChange}
        error={errors.Name}/>

      <SelectInput
        name="iplTeam"
        label="IPL Teams"
        value={player.iplTeam}
        defaultOption="Select Team"
        options={iplTeams}
        onChange={onChange}
        error={errors.iplTeam}/>

      <TextInput
        name="totalRuns"
        label="Total Runs"
        value={player.totalRuns}
        onChange={onChange}
        error={errors.totalRuns}/>

      <TextInput
        name="height"
        label="Height"
        value={player.height}
        onChange={onChange}
        error={errors.height}/>

      <input
      type="submit"
      disabled={saving}
      value={saving ? 'Saving...' : 'save'}
      className="btn btn-primary"
      onClick={onSave}/>
    </form>
  );
};

PlayerForm.propTypes = {
  player: PropTypes.object.isRequired,
  iplTeams: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default PlayerForm;
