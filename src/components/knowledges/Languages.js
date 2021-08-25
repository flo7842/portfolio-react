import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {

    state = {
        languages: [
            {id: 1, value: "JavaScript", xp: 2.5},
            {id: 2, value: "Php", xp: 2},
            {id: 3, value: "Css", xp: 3},
            {id: 5, value: "Xml", xp: 0.5},
            {id: 6, value: "Java", xp: 0.5}
        ],
        frameworks: [
            {id: 1, value: "Symfony", xp:2},
            {id: 1, value: "NodeJS", xp:2},
            {id: 1, value: "Express", xp:2},
            {id: 1, value: "Sequelize", xp:2},
            {id: 2, value: "Angular", xp: 1},
            {id: 3, value: "React", xp: 1},
            {id: 4, value: "Scss", xp: 1},
            {id: 5, value: "Bootstrap", xp: 3},
            {id: 6, value: "Express", xp: 1}
        ],
        conception: [
            {id: 1, value: "Diagramme de cas d'utilisation (Use case)", xp: 1},
            {id: 2, value: "Diagramme de séquence", xp: 1},
            {id: 3, value: "Diagramme de classe", xp: 1},
            {id: 4, value: "Diagramme de classe", xp: 1},
            {id: 5, value: "MCD", xp: 1},
            {id: 6, value: "MLD", xp: 1}
        ]
    }
    
    render() {
        let {languages, frameworks, conception} = this.state;
        

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    key={1}
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    key={2}
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
                <ProgressBar
                    key={3}
                    languages={conception}
                    title="UML & Merise"
                    className="conceptionDisplay"
                />
            </div>
        );
    }
}

export default Languages;