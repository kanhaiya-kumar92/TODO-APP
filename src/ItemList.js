import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Button, Grid } from "@material-ui/core";

export default function ItemList({
  items,
  setItems,
  editTodo,
  setEditTodo,
  inp,
  setInp,
  addEditToggle,
  setAddEditToggle
}) {
  const handleDelete = ({ id }) => {
    setItems(items.filter((curItem) => curItem.id !== id));
  };

  const handleEdit = ({ id }) => {
    const todo = items.find((item) => item.id === id);
    setInp(todo.value);
    setAddEditToggle(false);
    setEditTodo(todo);
  };

  return (
    <Grid container>
      {items.map((item) => (
        <Grid item key={item.id} xs={12} className="itemBar">
          <Grid container>
            <Grid item xs={8}>
              {item.value}
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() => handleEdit(item)}
                startIcon={<EditIcon />}
              ></Button>
            </Grid>
            <Grid item xs={2}>
              <Button
                onClick={() => handleDelete(item)}
                startIcon={<DeleteIcon />}
              ></Button>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
