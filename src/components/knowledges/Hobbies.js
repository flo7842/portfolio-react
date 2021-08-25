import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-foot"></i>
                    <span>Football</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Randonnées</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-kitchen"></i>
                    <span>Cuisiner</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;