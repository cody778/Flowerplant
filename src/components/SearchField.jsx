export default function Searchfield({ filterText, onInputChange }) {
    return (
        <div className="search-field">
            <input
                className="search-input"
                type="search"
                placeholder="Type to search ..."
                value={filterText}
                onChange={onInputChange}
            />
        </div>
    )
}
