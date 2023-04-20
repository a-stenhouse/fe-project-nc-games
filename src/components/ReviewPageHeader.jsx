const ReviewPageHeader = ({ category, setCategory, sortBy, setSortBy, order, setOrder }) => {

    const handleCategory = (event) => {
        setCategory(event.target.value)
    }

    const handleSortBy = (event) => {
        setSortBy(event.target.value)
    }

    const handleOrder = (event) => {
        setOrder(event.target.value)
    }

    return (
        <header id="reviewPageHeader">
            <select className="selectCategory" value={category} onChange={handleCategory}>
                <option value="">All</option>
                <option value="strategy">Strategy</option>
                <option value="hidden-roles">Hidden-roles</option>
                <option value="dexterity">Dexterity</option>
                <option value="push-your-luck">Push-your-luck</option>
                <option value="roll-and-write">Roll-and-write</option>
                <option value="deck-building">Deck-building</option>
                <option value="engine-building">Engine-building</option>
            </select>
            <select className="selectSortBy" value={sortBy} onChange={handleSortBy}>
                <option value="review_id">Default</option>
                <option value="created_at">Date</option>
                <option value="comment_count">Comments</option>
                <option value="votes">Votes</option>
            </select>
            <select className="selectOrder" value={order} onChange={handleOrder}>
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
            </select>
        </header>
    )
}

export default ReviewPageHeader