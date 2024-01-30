import "./NewGroup.scss";

function NewGroup() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="new-group">
      <form onSubmit={handleSubmit} className="new-group__form">
        <article className="new-group-inputs">
          <label>
            Name group: <input />
          </label>
          <label>
            Add friends to group: <input />
          </label>
        </article>
        <article className="new-group-responses">
          <p>Group 1</p>
          <p>Friends in group: </p>
          <button>Create group</button>
        </article>
      </form>
    </section>
  );
}

export default NewGroup;
