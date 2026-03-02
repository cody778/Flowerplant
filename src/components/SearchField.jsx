export default function Searchfield({ filterText, onInputChange }) {
    return (
        <input 
            type="search" 
            placeholder="Type to search ..." 
            value={filterText} 
            onChange={onInputChange} 
        />
    )
}
