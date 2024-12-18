// script.js

document.addEventListener('DOMContentLoaded', function() {

    // Career Guidance Form
    document.getElementById('career-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let goals = document.getElementById('goals').value;
        let interests = document.getElementById('interests').value;

        fetch('https://api.gemini.com/analyze', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_GEMINI_API_KEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: `Goals: ${goals}, Interests: ${interests}` })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('career-results').innerHTML = `<p>${data.Careers.join(', ')}</p>`;
        })
        .catch(error => console.error('Error:', error));
    });

    // Personalized Learning Suggestions
    document.getElementById('learning-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let learningGoals = document.getElementById('learning-goals').value;
        let learningInterests = document.getElementById('learning-interests').value;

        fetch('https://api.gemini.com/generate_learning_plan', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_GEMINI_API_KEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ goals: learningGoals, interests: learningInterests })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('learning-results').innerHTML = `<p>${data.LearningContent.join(', ')}</p>`;
        })
        .catch(error => console.error('Error:', error));
    });

    // On-Demand Tutor
    document.getElementById('tutor-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let expertise = document.getElementById('tutor-expertise').value;

        fetch(`https://api.gemini.com/find_tutor?expertise=${expertise}`, {
            headers: {
                'Authorization': 'Bearer YOUR_GEMINI_API_KEY'
            }
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('tutor-results').innerHTML = `<p>${data.Tutors.map(t => `${t.Name} (${t.Expertise})`).join(', ')}</p>`;
        })
        .catch(error => console.error('Error:', error));
    });

    // Accessible Education Platform for Visually Impaired
    document.getElementById('accessible-form').addEventListener('submit', function(e) {
        e.preventDefault();

        let command = document.getElementById('accessible-command').value;

        fetch('https://api.gemini.com/process_command', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_GEMINI_API_KEY',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ command: command })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('accessible-results').innerHTML = `<p>${data.Response}</p>`;
        })
        .catch(error => console.error('Error:', error));
    });

});
