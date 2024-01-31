import "./EditGroup.scss";

function EditGroup() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="edit-group">
      <form onSubmit={handleSubmit} className="edit-group__form">
        <article className="edit-group-inputs">
          <label>
            Edit group name: <input />
          </label>
          <label>
            Add friends to group: <input />
          </label>
          <label>
            Remove friends from group: <input />
          </label>
        </article>
        <article className="edit-group-responses">
          <p>Group 1</p>
          <p>Friends in group: </p>
          <button>Edit group</button>
        </article>
      </form>
    </section>
  );
}

export default EditGroup;
