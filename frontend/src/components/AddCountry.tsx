export default function AddCountry() {
  return (
    <div className="add_country_background">
      <label className="label" htmlFor="Name">
        <span className="label-text">Name</span>
      </label>
      <input required type="text" name="name" id="name" className="input" />
      <label className="label" htmlFor="Emoji">
        <span className="label-text">Emoji</span>
      </label>
      <input required type="text" name="emoji" id="emoji" className="input" />
      <label className="label" htmlFor="Code">
        <span className="label-text">Code</span>
      </label>
      <input required type="text" name="code" id="code" className="input" />
      <button className="add_button">Add</button>
    </div>
  );
}
