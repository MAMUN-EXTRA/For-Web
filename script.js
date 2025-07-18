// Language translations
const translations = {
    en: {
        title: "Daily Interest Calculator",
        subtitle: "Calculate your daily compound interest earnings",
        principalLabel: "Principal Amount ($)",
        rateLabel: "Annual Interest Rate (%)",
        timeLabel: "Time Period (Days)",
        compoundLabel: "Compounding Frequency",
        calculateBtn: "Calculate",
        resultsTitle: "Results",
        principalResultLabel: "Principal Amount:",
        interestLabel: "Interest Earned:",
        totalLabel: "Total Amount:",
        daily: "Daily",
        weekly: "Weekly",
        biweekly: "Bi-weekly",
        monthly: "Monthly",
        errorMessage: "Please enter valid values for all fields",
        tooltips: {
            principal: "The initial amount of money",
            rate: "The annual interest rate in percentage",
            time: "The number of days to calculate interest for",
            compound: "How often interest is added to the principal"
        }
    },
    es: {
        title: "Calculadora de Interés Diario",
        subtitle: "Calcule sus ganancias de interés compuesto diario",
        principalLabel: "Cantidad Principal ($)",
        rateLabel: "Tasa de Interés Anual (%)",
        timeLabel: "Período de Tiempo (Días)",
        compoundLabel: "Frecuencia de Capitalización",
        calculateBtn: "Calcular",
        resultsTitle: "Resultados",
        principalResultLabel: "Cantidad Principal:",
        interestLabel: "Intereses Ganados:",
        totalLabel: "Cantidad Total:",
        daily: "Diario",
        weekly: "Semanal",
        biweekly: "Quincenal",
        monthly: "Mensual",
        errorMessage: "Por favor ingrese valores válidos para todos los campos",
        tooltips: {
            principal: "La cantidad inicial de dinero",
            rate: "La tasa de interés anual en porcentaje",
            time: "El número de días para calcular el interés",
            compound: "Con qué frecuencia se agrega interés al principal"
        }
    },
    fr: {
        title: "Calculateur d'Intérêt Quotidien",
        subtitle: "Calculez vos gains d'intérêt composé quotidien",
        principalLabel: "Montant Principal (€)",
        rateLabel: "Taux d'Intérêt Annuel (%)",
        timeLabel: "Période de Temps (Jours)",
        compoundLabel: "Fréquence de Composition",
        calculateBtn: "Calculer",
        resultsTitle: "Résultats",
        principalResultLabel: "Montant Principal:",
        interestLabel: "Intérêt Gagné:",
        totalLabel: "Montant Total:",
        daily: "Quotidien",
        weekly: "Hebdomadaire",
        biweekly: "Bi-hebdomadaire",
        monthly: "Mensuel",
        errorMessage: "Veuillez entrer des valeurs valides pour tous les champs",
        tooltips: {
            principal: "Le montant initial d'argent",
            rate: "Le taux d'intérêt annuel en pourcentage",
            time: "Le nombre de jours pour calculer les intérêts",
            compound: "Fréquence à laquelle les intérêts sont ajoutés au principal"
        }
    },
    de: {
        title: "Täglicher Zinsrechner",
        subtitle: "Berechnen Sie Ihre täglichen Zinseszinsen",
        principalLabel: "Kapitalbetrag (€)",
        rateLabel: "Jährlicher Zinssatz (%)",
        timeLabel: "Zeitraum (Tage)",
        compoundLabel: "Zinseszinshäufigkeit",
        calculateBtn: "Berechnen",
        resultsTitle: "Ergebnisse",
        principalResultLabel: "Kapitalbetrag:",
        interestLabel: "Erhaltener Zins:",
        totalLabel: "Gesamtbetrag:",
        daily: "Täglich",
        weekly: "Wöchentlich",
        biweekly: "Zweiwöchentlich",
        monthly: "Monatlich",
        errorMessage: "Bitte geben Sie gültige Werte für alle Felder ein",
        tooltips: {
            principal: "Der anfängliche Geldbetrag",
            rate: "Der jährliche Zinssatz in Prozent",
            time: "Die Anzahl der Tage, für die Zinsen berechnet werden sollen",
            compound: "Wie oft Zinsen zum Kapital hinzugefügt werden"
        }
    },
    ja: {
        title: "日利計算機",
        subtitle: "毎日の複利収益を計算する",
        principalLabel: "元本 (¥)",
        rateLabel: "年間利率 (%)",
        timeLabel: "期間 (日)",
        compoundLabel: "複利頻度",
        calculateBtn: "計算する",
        resultsTitle: "結果",
        principalResultLabel: "元本:",
        interestLabel: "獲得利息:",
        totalLabel: "合計金額:",
        daily: "毎日",
        weekly: "毎週",
        biweekly: "隔週",
        monthly: "毎月",
        errorMessage: "すべてのフィールドに有効な値を入力してください",
        tooltips: {
            principal: "初期金額",
            rate: "パーセンテージでの年間利率",
            time: "利息を計算する日数",
            compound: "元本に利息が追加される頻度"
        }
    }
};

// Current language
let currentLang = 'en';

// DOM elements
const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');
const principalLabelEl = document.getElementById('principal-label');
const rateLabelEl = document.getElementById('rate-label');
const timeLabelEl = document.getElementById('time-label');
const compoundLabelEl = document.getElementById('compound-label');
const calculateBtnEl = document.getElementById('calculate-btn');
const resultsTitleEl = document.getElementById('results-title');
const principalResultLabelEl = document.getElementById('principal-result-label');
const interestLabelEl = document.getElementById('interest-label');
const totalLabelEl = document.getElementById('total-label');
const compoundSelectEl = document.getElementById('compound');
const languageBtns = document.querySelectorAll('.language-btn');
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const timeInput = document.getElementById('time');

// Add tooltips to inputs
function addTooltips() {
    const t = translations[currentLang].tooltips;
    
    principalInput.title = t.principal;
    rateInput.title = t.rate;
    timeInput.title = t.time;
    compoundSelectEl.title = t.compound;
}

// Update UI based on selected language
function updateLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    titleEl.textContent = t.title;
    subtitleEl.textContent = t.subtitle;
    principalLabelEl.innerHTML = `<i class="fas fa-money-bill-wave"></i> ${t.principalLabel}`;
    rateLabelEl.innerHTML = `<i class="fas fa-percentage"></i> ${t.rateLabel}`;
    timeLabelEl.innerHTML = `<i class="far fa-calendar-alt"></i> ${t.timeLabel}`;
    compoundLabelEl.innerHTML = `<i class="fas fa-calculator"></i> ${t.compoundLabel}`;
    calculateBtnEl.innerHTML = `<i class="fas fa-calculator"></i> ${t.calculateBtn}`;
    resultsTitleEl.textContent = t.resultsTitle;
    principalResultLabelEl.innerHTML = `<i class="fas fa-money-bill-wave"></i> ${t.principalResultLabel}`;
    interestLabelEl.innerHTML = `<i class="fas fa-coins"></i> ${t.interestLabel}`;
    totalLabelEl.innerHTML = `<i class="fas fa-piggy-bank"></i> ${t.totalLabel}`;
    
    // Update compound frequency options
    compoundSelectEl.innerHTML = `
        <option value="1">${t.daily}</option>
        <option value="7">${t.weekly}</option>
        <option value="14">${t.biweekly}</option>
        <option value="30">${t.monthly}</option>
    `;
    
    // Update active language button
    languageBtns.forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
            btn.innerHTML = `<i class="fas fa-language"></i> ${btn.textContent}`;
        } else {
            btn.classList.remove('active');
            btn.innerHTML = `<i class="fas fa-language"></i> ${btn.textContent}`;
        }
    });
    
    // Update tooltips
    addTooltips();
}

// Show error message
function showError(message) {
    const errorEl = document.createElement('div');
    errorEl.className = 'error-message';
    errorEl.textContent = message;
    errorEl.style.color = 'var(--error-color)';
    errorEl.style.marginTop = '10px';
    errorEl.style.textAlign = 'center';
    
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    document.querySelector('.calculator-body').appendChild(errorEl);
    
    setTimeout(() => {
        errorEl.style.opacity = '0';
        setTimeout(() => errorEl.remove(), 300);
    }, 3000);
}

// Calculate daily compound interest
function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseInt(document.getElementById('time').value);
    const compoundFreq = parseInt(document.getElementById('compound').value);
    
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || time <= 0) {
        showError(translations[currentLang].errorMessage);
        return;
    }
    
    // Calculate the total amount with compound interest
    const n = 365 / compoundFreq; // number of compounding periods per year
    const totalAmount = principal * Math.pow(1 + rate / n, n * time / 365);
    const interest = totalAmount - principal;
    
    // Format currency based on language
    let currencySymbol = '$';
    if (currentLang === 'es') currencySymbol = '$';
    else if (currentLang === 'fr') currencySymbol = '€';
    else if (currentLang === 'de') currencySymbol = '€';
    else if (currentLang === 'ja') currencySymbol = '¥';
    
    // Display results
    document.getElementById('principal-result').textContent = `${currencySymbol}${principal.toFixed(2)}`;
    document.getElementById('interest').textContent = `${currencySymbol}${interest.toFixed(2)}`;
    document.getElementById('total').textContent = `${currencySymbol}${totalAmount.toFixed(2)}`;
    
    // Show results with animation
    const resultsEl = document.getElementById('results');
    resultsEl.style.display = 'block';
    resultsEl.style.animation = 'none';
    void resultsEl.offsetWidth; // Trigger reflow
    resultsEl.style.animation = 'fadeIn 0.5s ease-out';
}

// Event listeners
document.getElementById('calculate-btn').addEventListener('click', calculateInterest);

languageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
    });
});

// Allow pressing Enter key to calculate
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        calculateInterest();
    }
});

// Initialize with English and tooltips
updateLanguage('en');
addTooltips();