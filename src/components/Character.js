import React, { Component } from 'react'

class Character extends Component {
    render() {
        const isFavorite = this.props.favorites.find((favorite) => {
            return (
                favorite.fullName === this.props.name
            )
        })
        return (
            <div className={`grid-item ${isFavorite ? 'favorite' : ''}`}>
                <div>
                    <img src={this.props.image} alt={this.props.name} />
                    <h3>{this.props.name}</h3>
                </div>
                <p>{this.props.title}</p>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => {
                        this.props.toggleFavorite(this.props.name)
                    }}
                >
                    {isFavorite ? 'Enlever des favoris' : 'Ajouter aux favoris'}
                </button>
            </div>
        )
    }
}


export default Character
