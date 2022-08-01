import React from 'react';

export class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.func(this.state.search, this.state.type);
        }
    };

    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => {
                this.props.func(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="input-field">
                    <input
                        placeholder="Search"
                        id="search"
                        type="email"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className="btn search-btn"
                        onClick={() =>
                            this.props.func(this.state.search, this.state.type)
                        }
                    >
                        Search
                    </button>
                </div>
                <div>
                    <p>
                        <label>
                            <input
                                name="group1"
                                type="radio"
                                data-type="all"
                                onClick={this.handleFilter}
                                checked={this.state.type === 'all'}
                            />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name="group1"
                                type="radio"
                                data-type="movie"
                                onClick={this.handleFilter}
                                checked={this.state.type === 'movie'}
                            />
                            <span>Movies only</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input
                                name="group1"
                                type="radio"
                                data-type="series"
                                onClick={this.handleFilter}
                                checked={this.state.type === 'series'}
                            />
                            <span>Series only</span>
                        </label>
                    </p>
                </div>
            </div>
        );
    }
}
