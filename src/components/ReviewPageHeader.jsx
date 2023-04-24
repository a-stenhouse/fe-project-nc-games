const ReviewPageHeader = ({ searchParams, setSearchParams, categoryQuery, sortByQuery, orderQuery }) => {

    const updateSearchParams = (parameter, value) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set(parameter, value);
        setSearchParams(newParams);
    }

    const handleCategory = (event) => {
        updateSearchParams("category", event.target.value)
    }

    const handleSortBy = (event) => {
        updateSearchParams("sortBy", event.target.value)
    }

    const handleOrder = (event) => {
        updateSearchParams("order", event.target.value)
    }

    return (
        <header id="reviewPageHeader">
            <select className="reviewPageHeaderSelects" onChange={handleCategory} value={categoryQuery ? categoryQuery : ""}>
                <option value="">All</option>
                <option value="strategy">Strategy</option>
                <option value="hidden-roles">Hidden-roles</option>
                <option value="dexterity">Dexterity</option>
                <option value="push-your-luck">Push-your-luck</option>
                <option value="roll-and-write">Roll-and-write</option>
                <option value="deck-building">Deck-building</option>
                <option value="engine-building">Engine-building</option>
            </select>
            <select className="reviewPageHeaderSelects" onChange={handleSortBy} value={sortByQuery ? sortByQuery : "review_id"}>
                <option value="review_id">Default</option>
                <option value="created_at">Date</option>
                <option value="comment_count">Comments</option>
                <option value="votes">Votes</option>
            </select>
            <select className="reviewPageHeaderSelects" onChange={handleOrder} value={orderQuery ? orderQuery : "DESC"}>
                <option value="DESC">Descending</option>
                <option value="ASC">Ascending</option>
            </select>
        </header>
    )
}

export default ReviewPageHeader