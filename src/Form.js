import AddCircleIcon from "@material-ui/icons/AddCircle";
import Input from "@material-ui/core/Input";
import { Grid } from "@material-ui/core";

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Grid container>
        <Grid item>
          <Input
            type="text"
            value={props.inp}
            onChange={props.handleInp}
            className="input"
            fullWidth={true}
            placeholder="Enter your todo item"
          />
        </Grid>

        <Grid item>
          <button type="submit">
            <AddCircleIcon />
          </button>
        </Grid>
      </Grid>
    </form>
  );
}
