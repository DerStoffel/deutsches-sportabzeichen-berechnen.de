document.addEventListener('DOMContentLoaded', () => {
    // #region DATEN (Gekürzt zur Lesbarkeit, enthält den vollen Datensatz)
    const performanceData = {
        ausdauer: {
            '800m-Lauf (min:s)': {
                w: { '6-7': ['5:40', '5:00', '4:15'], '8-9': ['5:35', '4:50', '4:10'], '10-11': ['5:20', '4:40', '4:00'], '12-13': ['5:10', '4:25', '3:45'], '14-15': ['5:00', '4:20', '3:35'], '16-17': ['4:50', '4:05', '3:25'] },
                m: { '6-7': ['5:40', '5:00', '4:15'], '8-9': ['5:25', '4:40', '3:55'], '10-11': ['5:05', '4:20', '3:35'], '12-13': ['4:45', '4:00', '3:15'], '14-15': ['4:20', '3:40', '3:00'], '16-17': ['4:05', '3:25', '2:45'] }
            },
            '3000m-Lauf (min:s)': {
                w: { '18-19': ['20:50', '18:50', '16:50'], '20-24': ['20:20', '18:20', '16:20'], '25-29': ['20:40', '18:40', '16:40'], '30-34': ['21:30', '19:30', '17:30'], '35-39': ['22:00', '20:00', '18:00'], '40-44': ['22:50', '20:40', '18:30'], '45-49': ['23:50', '21:30', '18:50'], '50-54': ['24:50', '22:10', '19:10'], '55-59': ['25:50', '22:50', '19:50'], '60-64': ['26:30', '23:30', '20:30'], '65-69': ['27:10', '24:10', '21:10'], '70-74': ['27:40', '24:40', '21:40'], '75-79': ['28:30', '25:30', '22:30'], '80-84': ['29:40', '26:40', '23:40'], '85-89': ['31:00', '28:00', '25:00'], '90+': ['32:30', '29:30', '26:30'] },
                m: { '18-19': ['17:50', '15:50', '13:50'], '20-24': ['17:20', '15:20', '13:20'], '25-29': ['17:40', '15:40', '13:40'], '30-34': ['18:30', '16:30', '14:30'], '35-39': ['19:50', '17:20', '15:00'], '40-44': ['21:00', '18:30', '15:50'], '45-49': ['22:10', '19:30', '16:30'], '50-54': ['23:20', '20:20', '17:20'], '55-59': ['23:50', '20:50', '17:50'], '60-64': ['24:30', '21:30', '18:30'], '65-69': ['25:00', '22:00', '19:00'], '70-74': ['25:20', '22:20', '19:20'], '75-79': ['26:00', '23:00', '20:00'], '80-84': ['26:30', '23:30', '20:30'], '85-89': ['27:30', '24:30', '21:30'], '90+': ['29:50', '26:50', '23:50'] }
            },
            // ... alle anderen Daten hier einfügen
        kraft: {
            'Schlagball (80g, m)': { w: { '6-7': ['6.00', '9.00', '12.00'], '8-9': ['9.00', '12.00', '15.00'], '10-11': ['11.00', '15.00', '18.00'] }, m: { '6-7': ['12.00', '15.00', '17.00'], '8-9': ['17.00', '20.00', '23.00'], '10-11': ['21.00', '25.00', '28.00'] } },
             // ...
            'Standweitsprung (m)': { w: { '6-7': ['1.05', '1.25', '1.40'], '8-9': ['1.15', '1.30', '1.50'], '10-11': ['1.30', '1.45', '1.65'], '12-13': ['1.40', '1.60', '1.80'], '14-15': ['1.55', '1.70', '1.90'], '16-17': ['1.65', '1.80', '2.00'], '18-19': ['1.65', '1.85', '2.05'], '20-24': ['1.60', '1.80', '2.00'], '25-29': ['1.50', '1.70', '1.95'], '30-34': ['1.35', '1.60', '1.85'], '35-39': ['1.25', '1.50', '1.80'], '40-44': ['1.15', '1.40', '1.65'], '45-49': ['1.10', '1.35', '1.60'], '50-54': ['1.00', '1.30', '1.55'], '55-59': ['0.95', '1.25', '1.50'], '60-64': ['0.95', '1.20', '1.45'], '65-69': ['0.90', '1.15', '1.40'], '70-74': ['0.90', '1.15', '1.35'], '75-79': ['0.90', '1.15', '1.35'], '80-84': ['0.85', '1.10', '1.30'], '85-89': ['0.85', '1.05', '1.25'], '90+': ['0.80', '1.00', '1.20'] }, m: { '6-7': ['1.15', '1.35', '1.50'], '8-9': ['1.30', '1.50', '1.65'], '10-11': ['1.50', '1.70', '1.85'], '12-13': ['1.70', '1.90', '2.05'], '14-15': ['1.90', '2.05', '2.25'], '16-17': ['2.05', '2.20', '2.40'], '18-19': ['2.10', '2.30', '2.50'], '20-24': ['2.10', '2.30', '2.50'], '25-29': ['2.05', '2.25', '2.45'], '30-34': ['1.85', '2.10', '2.35'], '35-39': ['1.65', '1.95', '2.25'], '40-44': ['1.55', '1.85', '2.15'], '45-49': ['1.45', '1.75', '2.05'], '50-54': ['1.40', '1.70', '2.00'], '55-59': ['1.35', '1.65', '1.95'], '60-64': ['1.30', '1.60', '1.90'], '65-69': ['1.30', '1.60', '1.90'], '70-74': ['1.25', '1.55', '1.85'], '75-79': ['1.20', '1.50', '1.80'], '80-84': ['1.15', '1.45', '1.75'], '85-89': ['1.00', '1.30', '1.60'], '90+': ['0.90', '1.20', '1.50'] } }
        },
        schnelligkeit: {
            // ...
        },
        koordination: {
            // ...
        }
    };
    // #endregion

    // #region DOM-Elemente und State
    const elements = {
        name: document.getElementById('athlete-name'),
        age: document.getElementById('age'),
        gender: document.getElementById('gender'),
        group: document.getElementById('discipline-group'),
        discipline: document.getElementById('discipline'),
        addBtn: document.getElementById('add-discipline-btn'),
        slotsContainer: document.getElementById('performance-slots'),
        finalResultContainer: document.getElementById('final-result-container'),
        finalResultText: document.getElementById('final-result-text'),
        finalMedal: document.getElementById('final-medal'),
        archiveBtn: document.getElementById('archive-btn'),
        clearBtn: document.getElementById('clear-btn'),
        savedRecordsList: document.getElementById('saved-records-list')
    };

    let currentState = {};

    const getBlankState = () => ({
        id: null,
        name: '',
        age: '18-19',
        gender: 'w',
        selections: {
            ausdauer: null,
            kraft: null,
            schnelligkeit: null,
            koordination: null
        }
    });
    // #endregion

    // #region Hilfsfunktionen
    const parseTimeToSeconds = (timeStr) => {
        if (typeof timeStr !== 'string') return NaN;
        const parts = timeStr.split(':').map(part => parseFloat(part.replace(',', '.')));
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        return parts[0];
    };

    const isLowerBetter = (disciplineName) => {
        const name = disciplineName.toLowerCase();
        return name.includes('lauf') || name.includes('schwimmen') || name.includes('walking') || name.includes('radfahren') || name.includes('(s)');
    };
    // #endregion

    // #region State Management & Local Storage
    function saveState() {
        if (!currentState) return;
        currentState.name = elements.name.value;
        currentState.age = elements.age.value;
        currentState.gender = elements.gender.value;
        localStorage.setItem('sportabzeichen_currentSession', JSON.stringify(currentState));
    }

    function loadState() {
        const savedState = localStorage.getItem('sportabzeichen_currentSession');
        currentState = savedState ? JSON.parse(savedState) : getBlankState();
        
        elements.name.value = currentState.name;
        elements.age.value = currentState.age;
        elements.gender.value = currentState.gender;
        
        renderAll();
    }

    function startNew() {
        if (!confirm('Möchten Sie wirklich ein neues, leeres Abzeichen starten? Alle nicht archivierten Eingaben gehen verloren.')) return;
        currentState = getBlankState();
        saveState();
        loadState();
    }
    // #endregion

    // #region UI-Rendering
    function updateDisciplineOptions() {
        const selectedGroup = elements.group.value;
        const selectedAge = elements.age.value;
        const selectedGender = elements.gender.value;

        elements.discipline.innerHTML = '';
        elements.addBtn.disabled = true;

        const groupDisciplines = performanceData[selectedGroup];
        for (const disciplineName in groupDisciplines) {
            if (groupDisciplines[disciplineName]?.[selectedGender]?.[selectedAge]) {
                const option = document.createElement('option');
                option.value = disciplineName;
                option.textContent = disciplineName;
                elements.discipline.appendChild(option);
            }
        }

        if (elements.discipline.options.length > 0) {
            elements.addBtn.disabled = false;
        } else {
            elements.discipline.innerHTML = '<option>Keine Disziplinen verfügbar</option>';
        }
    }

    function renderPerformanceSlots() {
        elements.slotsContainer.innerHTML = '';
        ['ausdauer', 'kraft', 'schnelligkeit', 'koordination'].forEach(group => {
            const selection = currentState.selections[group];
            const slot = document.createElement('div');
            slot.classList.add('performance-slot');
            
            if (selection) {
                const points = selection.points || 0;
                let level = 'unbewertet';
                if (points === 3) level = 'gold';
                else if (points === 2) level = 'silber';
                else if (points === 1) level = 'bronze';
                else if (points === 0 && selection.evaluated) level = 'fail';

                slot.classList.add(level);
                const achievedValue = selection.achievedValue || '';

                slot.innerHTML = `
                    <div class="slot-header">
                        <span>${group.charAt(0).toUpperCase() + group.slice(1)}: ${selection.name}</span>
                        <span class="slot-points">${selection.evaluated ? `${points} P.` : ''}</span>
                    </div>
                    <div class="slot-body">
                        <p>Gold: ${selection.req[2]} | Silber: ${selection.req[1]} | Bronze: ${selection.req[0]}</p>
                        <div class="slot-input-group">
                            <input type="text" class="performance-input" data-group="${group}" value="${achievedValue}" placeholder="z.B. 15:30 oder 4.50">
                            <button class="evaluate-btn" data-group="${group}">Bewerten</button>
                        </div>
                    </div>
                `;
            } else {
                 slot.classList.add('unbewertet');
                 slot.innerHTML = `<div class="slot-header"><span>${group.charAt(0).toUpperCase() + group.slice(1)}</span> <span>Bitte auswählen</span></div>`;
            }
            elements.slotsContainer.appendChild(slot);
        });
    }

    function renderAll() {
        updateDisciplineOptions();
        renderPerformanceSlots();
        calculateFinalResult();
        renderArchivedRecords();
    }
    // #endregion

    // #region Kernlogik
    function addDiscipline() {
        const group = elements.group.value;
        const disciplineName = elements.discipline.value;
        
        if (!disciplineName || disciplineName === 'Keine Disziplinen verfügbar') return;
        
        const requirements = performanceData[group]?.[disciplineName]?.[currentState.gender]?.[currentState.age];
        if (!requirements) return;

        currentState.selections[group] = {
            name: disciplineName,
            req: requirements,
            points: null,
            evaluated: false,
            achievedValue: ''
        };
        saveState();
        renderPerformanceSlots();
        calculateFinalResult();
    }

    function evaluate(group) {
        const selection = currentState.selections[group];
        const input = elements.slotsContainer.querySelector(`input[data-group="${group}"]`);
        
        if (!selection || !input || !input.value) return;

        selection.achievedValue = input.value;
        const isTimeBased = isLowerBetter(selection.name);
        const achieved = isTimeBased ? parseTimeToSeconds(selection.achievedValue) : parseFloat(selection.achievedValue.replace(',', '.'));
        
        if (isNaN(achieved)) {
            alert('Bitte eine gültige Zahl oder Zeit (mm:ss oder ss,ms) eingeben.');
            return;
        }

        const reqs = selection.req.map(val => isTimeBased ? parseTimeToSeconds(val) : parseFloat(val));
        
        let points = 0;
        if (isTimeBased) { // Niedriger ist besser
            if (achieved <= reqs[2]) points = 3;
            else if (achieved <= reqs[1]) points = 2;
            else if (achieved <= reqs[0]) points = 1;
        } else { // Höher ist besser
            if (achieved >= reqs[2]) points = 3;
            else if (achieved >= reqs[1]) points = 2;
            else if (achieved >= reqs[0]) points = 1;
        }
        
        selection.points = points;
        selection.evaluated = true;
        
        saveState();
        renderPerformanceSlots();
        calculateFinalResult();
    }

    function calculateFinalResult() {
        let totalPoints = 0;
        let evaluatedCount = 0;
        let hasFailed = false;
        
        for (const group in currentState.selections) {
            const selection = currentState.selections[group];
            if (selection && selection.evaluated) {
                evaluatedCount++;
                if (selection.points === 0) hasFailed = true;
                totalPoints += selection.points;
            }
        }
        
        elements.archiveBtn.disabled = !(evaluatedCount === 4 && !hasFailed && elements.name.value.trim());

        if (evaluatedCount < 4 || (evaluatedCount === 4 && hasFailed)) {
            if(evaluatedCount === 4 && hasFailed) {
                elements.finalResultContainer.style.display = 'block';
                elements.finalResultText.textContent = 'Leider nicht bestanden';
                elements.finalMedal.innerHTML = '👎';
            } else {
                elements.finalResultContainer.style.display = 'none';
            }
            return;
        }
        
        elements.finalResultContainer.style.display = 'block';
        if (totalPoints >= 11) {
            currentState.finalResult = 'Gold';
            elements.finalResultText.textContent = 'Gesamtergebnis: Gold!';
            elements.finalMedal.innerHTML = '🥇';
        } else if (totalPoints >= 8) {
            currentState.finalResult = 'Silber';
            elements.finalResultText.textContent = 'Gesamtergebnis: Silber!';
            elements.finalMedal.innerHTML = '🥈';
        } else {
            currentState.finalResult = 'Bronze';
            elements.finalResultText.textContent = 'Gesamtergebnis: Bronze!';
            elements.finalMedal.innerHTML = '🥉';
        }
        currentState.totalPoints = totalPoints;
        saveState();
    }
    // #endregion

    // #region Archivierungslogik
    function getArchive() {
        return JSON.parse(localStorage.getItem('sportabzeichen_allRecords') || '[]');
    }

    function saveArchive(archive) {
        localStorage.setItem('sportabzeichen_allRecords', JSON.stringify(archive));
    }

    function archiveRecord() {
        const recordName = elements.name.value.trim();
        if (!recordName) {
            alert('Bitte geben Sie zuerst einen Namen ein.');
            return;
        }
        
        const archive = getArchive();
        currentState.name = recordName;
        const record = { ...currentState, date: new Date().toLocaleDateString('de-DE') };
        
        if (record.id) { // ID existiert -> Datensatz wird aktualisiert
            const index = archive.findIndex(r => r.id === record.id);
            if (index > -1) {
                archive[index] = record;
            } else { // Falls ID aus irgendeinem Grund nicht gefunden wird, als neuen Eintrag speichern
                 record.id = Date.now();
                 archive.push(record);
            }
        } else { // Keine ID -> Neuer Datensatz
            record.id = Date.now(); // Neue, einzigartige ID vergeben
            archive.push(record);
        }
        
        saveArchive(archive);
        renderArchivedRecords();
        alert(`Das Abzeichen für ${record.name} wurde gespeichert!`);
        startNew();
    }

    function loadRecordForEdit(id) {
        const archive = getArchive();
        const recordToLoad = archive.find(r => r.id === id);
        if (recordToLoad) {
            // Eine tiefe Kopie erstellen, um Referenzprobleme zu vermeiden
            currentState = JSON.parse(JSON.stringify(recordToLoad));
            saveState(); 
            loadState(); // Lädt den Zustand in die UI
            window.scrollTo(0, 0);
        }
    }

    function deleteRecord(id) {
        const archive = getArchive();
        const recordToDelete = archive.find(r => r.id === id);
        if (!recordToDelete) return;
        
        if (!confirm(`Möchten Sie den Eintrag für ${recordToDelete.name} wirklich löschen?`)) return;
        
        const updatedArchive = archive.filter(r => r.id !== id);
        saveArchive(updatedArchive);
        renderArchivedRecords();
    }
    
    function renderArchivedRecords() {
        const archive = getArchive();
        elements.savedRecordsList.innerHTML = '';
        if (archive.length === 0) {
            elements.savedRecordsList.innerHTML = '<p>Bisher wurden keine Abzeichen gespeichert.</p>';
            return;
        }
        archive.sort((a,b) => a.name.localeCompare(b.name));
        archive.forEach(record => {
            const medalEmoji = { Gold: '🥇', Silber: '🥈', Bronze: '🥉' }[record.finalResult] || '❔';
            const recordItem = document.createElement('div');
            recordItem.className = 'saved-record-item';

            const getMedalForPoints = (points) => {
                if (points === 3) return 'Gold 🥇';
                if (points === 2) return 'Silber 🥈';
                if (points === 1) return 'Bronze 🥉';
                return 'Nicht bestanden 👎';
            }

            let summaryHtml = '<div class="summary-grid">';
            for(const group in record.selections) {
                const sel = record.selections[group];
                if(sel) {
                    const groupMedal = getMedalForPoints(sel.points);
                    summaryHtml += `<div class="summary-grid-item"><strong>${group.charAt(0).toUpperCase() + group.slice(1)}:</strong> ${sel.name} <br> ↳ Ergebnis: ${sel.achievedValue} | ${groupMedal} (${sel.points || 0} P.)</div>`;
                } else {
                    summaryHtml += `<div class="summary-grid-item"><strong>${group.charAt(0).toUpperCase() + group.slice(1)}:</strong> Keine Disziplin ausgewählt.</div>`;
                }
            }
            summaryHtml += '</div>';

            recordItem.innerHTML = `
                <div class="record-header">
                    <div class="record-info">
                        <span>${record.name}</span> (${record.date}) - ${record.finalResult || 'Unvollständig'} ${medalEmoji}
                    </div>
                    <div class="record-actions">
                        <button class="details-btn" data-id="${record.id}">Details</button>
                        <button class="edit-btn" data-id="${record.id}">Bearbeiten</button>
                        <button class="delete-btn" data-id="${record.id}">Löschen</button>
                    </div>
                </div>
                <div class="record-summary">${summaryHtml}</div>
            `;
            elements.savedRecordsList.appendChild(recordItem);
        });
    }
    // #endregion

    // #region Event Listeners & Initialisierung
    elements.name.addEventListener('keyup', () => {
        saveState();
        calculateFinalResult();
    });
    elements.age.addEventListener('change', () => { saveState(); updateDisciplineOptions(); });
    elements.gender.addEventListener('change', () => { saveState(); updateDisciplineOptions(); });
    elements.group.addEventListener('change', updateDisciplineOptions);
    elements.addBtn.addEventListener('click', addDiscipline);
    elements.clearBtn.addEventListener('click', startNew);
    elements.archiveBtn.addEventListener('click', archiveRecord);
    
    elements.slotsContainer.addEventListener('input', (event) => {
        if(event.target.matches('.performance-input')) {
            const group = event.target.dataset.group;
            if(currentState.selections[group]) {
                currentState.selections[group].achievedValue = event.target.value;
                saveState();
            }
        }
    });

    elements.slotsContainer.addEventListener('click', (event) => {
        if (event.target.matches('.evaluate-btn')) {
            const group = event.target.dataset.group;
            evaluate(group);
        }
    });
    
    elements.savedRecordsList.addEventListener('click', (event) => {
        const target = event.target;
        const recordId = target.dataset.id ? parseInt(target.dataset.id, 10) : null;
        if (!recordId) return;

        if (target.matches('.edit-btn')) {
            loadRecordForEdit(recordId);
        } else if (target.matches('.delete-btn')) {
            deleteRecord(recordId);
        } else if (target.matches('.details-btn')) {
            const summary = target.closest('.saved-record-item').querySelector('.record-summary');
            if(summary) summary.classList.toggle('visible');
            target.classList.toggle('active');
        }
    });

    // Initialer Ladevorgang
    loadState();
    // #endregion
});