import React from "react";
export default function ModelCase({ setIsOpen, movie }) {
    return (
        <div className="modal-show" onClick={() => setIsOpen(false)}>
            <div id="modal1" className="model" style={{ display: 'block', top: '35%' }}>
                <div className="modal-content">
                    <h4>Video for {movie.title}</h4>
                    <p><iframe width="100%" height="400px" src={movie.clip} title={movie.title} frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen /></p>
                </div>
                <div className="modal-footer">
                    <h4 className="modal-close white-text">Close</h4>
                </div>
            </div>

        </div>
    )
}