// 全局变量
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let timerInterval = null;
let timerDuration = 0;
let timerRemaining = 0;
let isTimerRunning = false;

// DOM元素
const loadingOverlay = document.getElementById('loadingOverlay');
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');

// 时钟元素
const currentTime = document.getElementById('currentTime');
const currentDate = document.getElementById('currentDate');
const currentWeekday = document.getElementById('currentWeekday');

// 待办事项元素
const addTodoBtn = document.getElementById('addTodoBtn');
const todoModal = document.getElementById('todoModal');
const closeTodoModal = document.getElementById('closeTodoModal');
const todoInput = document.getElementById('todoInput');
const todoUrgent = document.getElementById('todoUrgent');
const confirmTodoBtn = document.getElementById('confirmTodoBtn');
const cancelTodoBtn = document.getElementById('cancelTodoBtn');
const todoList = document.getElementById('todoList');
const todoCount = document.getElementById('todoCount');
const completedCount = document.getElementById('completedCount');

// 天气元素
const refreshWeatherBtn = document.getElementById('refreshWeatherBtn');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const weatherDesc = document.getElementById('weatherDesc');
const locationElement = document.getElementById('location');

// 倒计时器元素
const timerSettingsBtn = document.getElementById('timerSettingsBtn');
const timerModal = document.getElementById('timerModal');
const closeTimerModal = document.getElementById('closeTimerModal');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');
const confirmTimerBtn = document.getElementById('confirmTimerBtn');
const cancelTimerBtn = document.getElementById('cancelTimerBtn');
const timerTime = document.getElementById('timerTime');
const startTimerBtn = document.getElementById('startTimerBtn');
const pauseTimerBtn = document.getElementById('pauseTimerBtn');
const resetTimerBtn = document.getElementById('resetTimerBtn');
const progressRingCircle = document.querySelector('.progress-ring-circle');

// 计算器元素
const calcScreen = document.getElementById('calcScreen');
const calcButtons = document.querySelectorAll('.calc-btn');

// 便签元素
const notesTextarea = document.getElementById('notesTextarea');
const saveNotesBtn = document.getElementById('saveNotesBtn');
const charCount = document.getElementById('charCount');
const lastSaved = document.getElementById('lastSaved');

// 设置元素
const themeSelect = document.getElementById('themeSelect');
const cityInput = document.getElementById('cityInput');
const animationsToggle = document.getElementById('animationsToggle');
const languageSelect = document.getElementById('languageSelect');

// 文本处理工具元素
const textInput = document.getElementById('textInput');
const textOutput = document.getElementById('textOutput');
const textStats = document.getElementById('textStats');
const uppercaseBtn = document.getElementById('upperCaseBtn');
const lowercaseBtn = document.getElementById('lowerCaseBtn');
const capitalizeBtn = document.getElementById('capitalizeBtn');
const reverseBtn = document.getElementById('reverseTextBtn');
const removeSpacesBtn = document.getElementById('removeSpacesBtn');
const copyTextBtn = document.getElementById('copyTextBtn');
const clearTextBtn = document.getElementById('clearTextBtn');

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 立即隐藏加载动画并初始化应用
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }
    initializeApp();
});

// 初始化应用
function initializeApp() {
    initializeClock();
    initializeTodos();
    initializeWeather();
    initializeTimer();
    initializeCalculator();
    initializeNotes();
    initializeTextProcessor();
    initializeSettings();
    initializeEventListeners();
    
    // 初始化新工具（确保new-tools.js中的函数被调用）
    console.log('检查initializeNewTools函数:', typeof initializeNewTools);
    if (typeof initializeNewTools === 'function') {
        console.log('开始初始化新工具...');
        initializeNewTools();
        console.log('新工具初始化完成');
    } else {
        console.error('initializeNewTools函数未找到');
    }
    
    // 添加卡片动画
    animateCards();
}

// 卡片动画
function animateCards() {
    const cards = document.querySelectorAll('.tool-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-in');
    });
}

// 初始化时钟
function initializeClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('zh-CN', { hour12: false });
    const dateString = now.toLocaleDateString('zh-CN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // 使用多语言星期显示
    let weekdayString = '星期日';
    if (window.i18n && window.i18n.t) {
        const weekdays = window.i18n.t('weekdays');
        if (Array.isArray(weekdays)) {
            weekdayString = weekdays[now.getDay()];
        }
    }
    
    if (currentTime) currentTime.textContent = timeString;
    if (currentDate) currentDate.textContent = dateString;
    if (currentWeekday) currentWeekday.textContent = weekdayString;
}

// 初始化待办事项
function initializeTodos() {
    renderTodos();
    updateTodoStats();
}

function renderTodos() {
    if (!todoList) return;
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const todoItem = createTodoElement(todo, index);
        todoList.appendChild(todoItem);
    });
}

function createTodoElement(todo, index) {
    const todoItem = document.createElement('div');
    todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    todoItem.innerHTML = `
        <input type="checkbox" class="todo-checkbox" ${todo.completed ? 'checked' : ''} 
               onchange="toggleTodo(${index})">
        <span class="todo-text ${todo.urgent ? 'urgent' : ''}">${todo.text}</span>
        <button class="todo-delete" onclick="deleteTodo(${index})">
            <i class="fas fa-trash"></i>
        </button>
    `;
    return todoItem;
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        const newTodo = {
            text: text,
            completed: false,
            urgent: todoUrgent.checked,
            createdAt: new Date().toISOString()
        };
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        updateTodoStats();
        closeTodoModalHandler();
        showNotification(window.i18n ? window.i18n.t('todoAdded') : '待办事项已添加');
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
    updateTodoStats();
    const message = todos[index].completed ? 
        (window.i18n ? window.i18n.t('taskCompleted') : '任务已完成') : 
        (window.i18n ? window.i18n.t('taskRestored') : '任务已恢复');
    showNotification(message);
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
    updateTodoStats();
    showNotification(window.i18n ? window.i18n.t('todoDeleted') : '待办事项已删除');
}

function updateTodoStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    if (todoCount) todoCount.textContent = total;
    if (completedCount) completedCount.textContent = completed;
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 初始化天气
function initializeWeather() {
    const savedCity = localStorage.getItem('weatherCity') || 'Beijing';
    if (locationElement) locationElement.textContent = savedCity;
    updateWeather(); // 初始化时不显示通知
}

function updateWeather(showNotify = false) {
    // 模拟天气数据（实际项目中应该调用真实的天气API）
    const weatherData = getSimulatedWeather();
    
    if (weatherIcon) weatherIcon.className = `fas ${weatherData.icon}`;
    if (temperature) temperature.textContent = weatherData.temperature;
    if (weatherDesc) weatherDesc.textContent = weatherData.description;
    
    // 更新天气卡片背景
    const weatherCard = document.querySelector('.weather-card');
    if (weatherCard) weatherCard.style.background = weatherData.gradient;
    
    // 只有手动刷新时才显示通知
    if (showNotify) {
        showNotification(window.i18n ? window.i18n.t('weatherUpdated') : '天气信息已更新');
    }
}

function getSimulatedWeather() {
    const weathers = [
        {
            icon: 'fa-sun',
            temperature: '22°C',
            description: window.i18n ? window.i18n.t('sunny') : '晴天',
            gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
        },
        {
            icon: 'fa-cloud',
            temperature: '18°C',
            description: window.i18n ? window.i18n.t('cloudy') : '多云',
            gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)'
        },
        {
            icon: 'fa-cloud-rain',
            temperature: '15°C',
            description: window.i18n ? window.i18n.t('rainy') : '雨天',
            gradient: 'linear-gradient(135deg, #81ecec 0%, #00b894 100%)'
        }
    ];
    
    return weathers[Math.floor(Math.random() * weathers.length)];
}

// 初始化倒计时器
function initializeTimer() {
    updateTimerDisplay();
    setupProgressRing();
}

function setupProgressRing() {
    if (!progressRingCircle) return;
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    progressRingCircle.style.strokeDasharray = circumference;
    progressRingCircle.style.strokeDashoffset = circumference;
}

function setTimer() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    timerDuration = minutes * 60 + seconds;
    timerRemaining = timerDuration;
    
    if (timerDuration > 0) {
        updateTimerDisplay();
        updateProgressRing();
        closeTimerModalHandler();
        const message = window.i18n ? 
            `${window.i18n.t('timerSet')} ${minutes}分钟${seconds}秒` :
            `计时器设置为 ${minutes} 分钟 ${seconds} 秒`;
        showNotification(message);
    }
}

function startTimer() {
    if (timerRemaining > 0 && !isTimerRunning) {
        isTimerRunning = true;
        timerInterval = setInterval(() => {
            timerRemaining--;
            updateTimerDisplay();
            updateProgressRing();
            
            if (timerRemaining <= 0) {
                stopTimer();
                showNotification(window.i18n ? window.i18n.t('timerFinished') : '计时器结束！');
                playTimerSound();
            }
        }, 1000);
        
        if (startTimerBtn) startTimerBtn.style.display = 'none';
        if (pauseTimerBtn) pauseTimerBtn.style.display = 'inline-flex';
    }
}

function pauseTimer() {
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(timerInterval);
        if (startTimerBtn) startTimerBtn.style.display = 'inline-flex';
        if (pauseTimerBtn) pauseTimerBtn.style.display = 'none';
    }
}

function resetTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    timerRemaining = timerDuration;
    updateTimerDisplay();
    updateProgressRing();
    if (startTimerBtn) startTimerBtn.style.display = 'inline-flex';
    if (pauseTimerBtn) pauseTimerBtn.style.display = 'none';
}

function stopTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    if (startTimerBtn) startTimerBtn.style.display = 'inline-flex';
    if (pauseTimerBtn) pauseTimerBtn.style.display = 'none';
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerRemaining / 60);
    const seconds = timerRemaining % 60;
    if (timerTime) {
        timerTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

function updateProgressRing() {
    if (!progressRingCircle) return;
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const progress = timerDuration > 0 ? (timerDuration - timerRemaining) / timerDuration : 0;
    const offset = circumference - (progress * circumference);
    
    progressRingCircle.style.strokeDashoffset = offset;
    progressRingCircle.style.stroke = progress > 0.8 ? '#e74c3c' : '#3498db';
}

function playTimerSound() {
    try {
        // 创建简单的提示音
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1);
    } catch (error) {
        console.log('Audio context not available');
    }
}

// 初始化计算器
function initializeCalculator() {
    if (!calcScreen || !calcButtons) return;
    
    let currentInput = '';
    let operator = '';
    let previousInput = '';
    
    calcButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action;
            const number = this.dataset.number;
            const operatorValue = this.dataset.operator;
            
            if (number !== undefined) {
                if (currentInput === '0' && number !== '.') {
                    currentInput = number;
                } else {
                    currentInput += number;
                }
                calcScreen.value = currentInput;
            }
            
            if (action === 'clear') {
                currentInput = '';
                operator = '';
                previousInput = '';
                calcScreen.value = '0';
            }
            
            if (action === 'delete') {
                currentInput = currentInput.slice(0, -1);
                calcScreen.value = currentInput || '0';
            }
            
            if (action === 'operator') {
                if (previousInput && currentInput && operator) {
                    const result = calculate(previousInput, currentInput, operator);
                    calcScreen.value = result;
                    currentInput = result.toString();
                }
                
                operator = operatorValue;
                previousInput = currentInput;
                currentInput = '';
            }
            
            if (action === 'equals') {
                if (previousInput && currentInput && operator) {
                    const result = calculate(previousInput, currentInput, operator);
                    calcScreen.value = result;
                    currentInput = result.toString();
                    operator = '';
                    previousInput = '';
                }
            }
        });
    });
}

function calculate(a, b, operator) {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    
    switch (operator) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        case '/':
            return numB !== 0 ? numA / numB : 'Error';
        default:
            return 0;
    }
}

// 初始化便签
function initializeNotes() {
    if (!notesTextarea) return;
    
    const savedNotes = localStorage.getItem('notes') || '';
    notesTextarea.value = savedNotes;
    updateCharCount();
    
    notesTextarea.addEventListener('input', updateCharCount);
}

function updateCharCount() {
    if (!notesTextarea || !charCount) return;
    const count = notesTextarea.value.length;
    charCount.textContent = count;
}

function saveNotes() {
    if (!notesTextarea) return;
    
    const notes = notesTextarea.value;
    localStorage.setItem('notes', notes);
    
    const now = new Date().toLocaleString('zh-CN');
    const savedText = window.i18n ? window.i18n.t('saved') : '已保存';
    if (lastSaved) lastSaved.textContent = `${savedText} ${now}`;
    
    showNotification(window.i18n ? window.i18n.t('notesSaved') : '便签已保存');
    
    // 3秒后恢复显示
    setTimeout(() => {
        if (lastSaved) lastSaved.textContent = savedText;
    }, 3000);
}

// 初始化文本处理工具
function initializeTextProcessor() {
    if (!textInput) return;
    
    // 监听输入变化，实时更新统计信息
    textInput.addEventListener('input', updateTextStats);
    
    // 初始化统计信息
    updateTextStats();
}

function updateTextStats() {
    if (!textInput || !textStats) return;
    
    const text = textInput.value;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const lines = text.split('\n').length;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).length : 0;
    
    textStats.innerHTML = `
        <div class="stat-item">
            <span class="stat-label">字符数：</span>
            <span class="stat-value">${chars}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">字符数（不含空格）：</span>
            <span class="stat-value">${charsNoSpaces}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">单词数：</span>
            <span class="stat-value">${words}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">行数：</span>
            <span class="stat-value">${lines}</span>
        </div>
        <div class="stat-item">
            <span class="stat-label">段落数：</span>
            <span class="stat-value">${paragraphs}</span>
        </div>
    `;
}

// 文本处理功能
function convertToUppercase() {
    if (!textInput || !textOutput) return;
    const text = textInput.value;
    textOutput.value = text.toUpperCase();
    showNotification(window.i18n ? window.i18n.t('textUppercased') : '文本已转换为大写');
}

function convertToLowercase() {
    if (!textInput || !textOutput) return;
    const text = textInput.value;
    textOutput.value = text.toLowerCase();
    showNotification(window.i18n ? window.i18n.t('textLowercased') : '文本已转换为小写');
}

function capitalizeText() {
    if (!textInput || !textOutput) return;
    const text = textInput.value;
    textOutput.value = text.replace(/\b\w/g, l => l.toUpperCase());
    showNotification(window.i18n ? window.i18n.t('textCapitalized') : '文本已转换为首字母大写');
}

function reverseText() {
    if (!textInput || !textOutput) return;
    const text = textInput.value;
    textOutput.value = text.split('').reverse().join('');
    showNotification(window.i18n ? window.i18n.t('textReversed') : '文本已反转');
}

function removeSpaces() {
    if (!textInput || !textOutput) return;
    const text = textInput.value;
    textOutput.value = text.replace(/\s+/g, ' ').trim();
    showNotification(window.i18n ? window.i18n.t('spacesRemoved') : '多余空格已移除');
}

function copyText() {
    if (!textOutput) return;
    
    textOutput.select();
    textOutput.setSelectionRange(0, 99999); // 移动端兼容
    
    try {
        document.execCommand('copy');
        showNotification(window.i18n ? window.i18n.t('textCopied') : '文本已复制到剪贴板');
    } catch (err) {
        // 使用现代API
        if (navigator.clipboard) {
            navigator.clipboard.writeText(textOutput.value).then(() => {
                showNotification(window.i18n ? window.i18n.t('textCopied') : '文本已复制到剪贴板');
            }).catch(() => {
                showNotification(window.i18n ? window.i18n.t('copyFailed') : '复制失败，请手动复制');
            });
        } else {
            showNotification(window.i18n ? window.i18n.t('copyFailed') : '复制失败，请手动复制');
        }
    }
}

function clearText() {
    if (textInput) textInput.value = '';
    if (textOutput) textOutput.value = '';
    updateTextStats();
    showNotification(window.i18n ? window.i18n.t('textCleared') : '文本已清空');
}

// 初始化设置
function initializeSettings() {
    // 加载保存的设置，默认深色主题和中文
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedCity = localStorage.getItem('weatherCity') || '北京';
    const savedAnimations = localStorage.getItem('animations') !== 'false';
    const savedLanguage = localStorage.getItem('language') || 'zh-CN';
    
    if (themeSelect) themeSelect.value = savedTheme;
    if (cityInput) cityInput.value = savedCity;
    if (animationsToggle) animationsToggle.checked = savedAnimations;
    if (languageSelect) languageSelect.value = savedLanguage;
    
    applyTheme(savedTheme);
    applyAnimationSettings(savedAnimations);
    
    // 初始化语言 - 确保i18n已加载
    setTimeout(() => {
        if (window.i18n && window.i18n.switchLanguage) {
            window.i18n.switchLanguage(savedLanguage);
        }
    }, 100);
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
}

function applyAnimationSettings(enabled) {
    if (!enabled) {
        document.body.classList.add('no-animations');
    } else {
        document.body.classList.remove('no-animations');
    }
}

// 事件监听器
function initializeEventListeners() {
    // 设置面板
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            if (settingsPanel) settingsPanel.classList.add('open');
        });
    }
    
    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', () => {
            if (settingsPanel) settingsPanel.classList.remove('open');
        });
    }
    
    // 点击外部关闭设置面板
    document.addEventListener('click', (e) => {
        if (settingsPanel && settingsPanel.classList.contains('open') && 
            !settingsPanel.contains(e.target) && 
            !settingsBtn.contains(e.target)) {
            settingsPanel.classList.remove('open');
        }
    });
    
    // 待办事项模态框
    if (addTodoBtn) {
        addTodoBtn.addEventListener('click', () => {
            if (todoModal) {
                todoModal.classList.add('open');
                if (todoInput) todoInput.focus();
            }
        });
    }
    
    if (closeTodoModal) closeTodoModal.addEventListener('click', closeTodoModalHandler);
    if (cancelTodoBtn) cancelTodoBtn.addEventListener('click', closeTodoModalHandler);
    if (confirmTodoBtn) confirmTodoBtn.addEventListener('click', addTodo);
    
    // 回车键添加待办事项
    if (todoInput) {
        todoInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTodo();
            }
        });
    }
    
    // 倒计时器模态框
    if (timerSettingsBtn) {
        timerSettingsBtn.addEventListener('click', () => {
            if (timerModal) {
                timerModal.classList.add('open');
                if (minutesInput) minutesInput.focus();
            }
        });
    }
    
    if (closeTimerModal) closeTimerModal.addEventListener('click', closeTimerModalHandler);
    if (cancelTimerBtn) cancelTimerBtn.addEventListener('click', closeTimerModalHandler);
    if (confirmTimerBtn) confirmTimerBtn.addEventListener('click', setTimer);
    
    // 倒计时器控制
    if (startTimerBtn) startTimerBtn.addEventListener('click', startTimer);
    if (pauseTimerBtn) pauseTimerBtn.addEventListener('click', pauseTimer);
    if (resetTimerBtn) resetTimerBtn.addEventListener('click', resetTimer);
    
    // 天气刷新
    if (refreshWeatherBtn) refreshWeatherBtn.addEventListener('click', () => updateWeather(true));
    
    // 便签保存
    if (saveNotesBtn) saveNotesBtn.addEventListener('click', saveNotes);
    
    // 文本处理工具按钮
    if (uppercaseBtn) uppercaseBtn.addEventListener('click', convertToUppercase);
    if (lowercaseBtn) lowercaseBtn.addEventListener('click', convertToLowercase);
    if (capitalizeBtn) capitalizeBtn.addEventListener('click', capitalizeText);
    if (reverseBtn) reverseBtn.addEventListener('click', reverseText);
    if (removeSpacesBtn) removeSpacesBtn.addEventListener('click', removeSpaces);
    if (copyTextBtn) copyTextBtn.addEventListener('click', copyText);
    if (clearTextBtn) clearTextBtn.addEventListener('click', clearText);
    
    // 设置变更
    if (themeSelect) {
        themeSelect.addEventListener('change', (e) => {
            const theme = e.target.value;
            localStorage.setItem('theme', theme);
            applyTheme(theme);
        });
    }
    
    if (cityInput) {
        cityInput.addEventListener('change', (e) => {
            const city = e.target.value;
            localStorage.setItem('weatherCity', city);
            if (locationElement) locationElement.textContent = city;
            updateWeather(true);
        });
    }
    
    if (animationsToggle) {
        animationsToggle.addEventListener('change', (e) => {
            const enabled = e.target.checked;
            localStorage.setItem('animations', enabled);
            applyAnimationSettings(enabled);
        });
    }
    
    // 语言切换
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            const language = e.target.value;
            localStorage.setItem('language', language);
            if (window.i18n && window.i18n.switchLanguage) {
                window.i18n.switchLanguage(language);
            }
        });
    }
    
    // 模态框外部点击关闭
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('open');
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.open').forEach(modal => {
                modal.classList.remove('open');
            });
            if (settingsPanel && settingsPanel.classList.contains('open')) {
                settingsPanel.classList.remove('open');
            }
        }
    });
}

function closeTodoModalHandler() {
    if (todoModal) todoModal.classList.remove('open');
    if (todoInput) todoInput.value = '';
    if (todoUrgent) todoUrgent.checked = false;
}

function closeTimerModalHandler() {
    if (timerModal) timerModal.classList.remove('open');
}

// 通知系统
function showNotification(message) {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-medium);
        z-index: 3000;
        transform: translateX(100%);
        transition: var(--transition);
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 自动隐藏
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S 保存便签
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveNotes();
    }
    
    // Ctrl/Cmd + N 添加待办事项
    if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
        e.preventDefault();
        if (todoModal) {
            todoModal.classList.add('open');
            if (todoInput) todoInput.focus();
        }
    }
    
    // 空格键 开始/暂停倒计时
    if (e.code === 'Space' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        if (isTimerRunning) {
            pauseTimer();
        } else if (timerRemaining > 0) {
            startTimer();
        }
    }
});

// 页面可见性变化处理
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // 页面隐藏时暂停不必要的更新
        console.log('页面已隐藏');
    } else {
        // 页面重新可见时更新数据
        updateClock();
        console.log('页面已显示');
    }
});

// 网络状态监听 - 延迟注册，避免初始化时触发
setTimeout(() => {
    window.addEventListener('online', () => {
        showNotification(window.i18n ? window.i18n.t('networkOnline') : '网络连接已恢复');
    });

    window.addEventListener('offline', () => {
        showNotification(window.i18n ? window.i18n.t('networkOffline') : '网络连接已断开');
    });
}, 2000);

// 触摸设备支持
if ('ontouchstart' in window) {
    // 为触摸设备添加特殊样式
    document.body.classList.add('touch-device');
    
    // 防止双击缩放
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// 性能优化：节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 自动保存便签（防抖）
const autoSaveNotes = debounce(() => {
    if (!notesTextarea) return;
    const notes = notesTextarea.value;
    localStorage.setItem('notes', notes);
    const autoSavedText = window.i18n ? window.i18n.t('autoSaved') : '自动保存';
    if (lastSaved) lastSaved.textContent = autoSavedText;
    setTimeout(() => {
        const savedText = window.i18n ? window.i18n.t('saved') : '已保存';
        if (lastSaved) lastSaved.textContent = savedText;
    }, 2000);
}, 2000);

// 为便签添加自动保存
if (notesTextarea) {
    notesTextarea.addEventListener('input', autoSaveNotes);
}

// 添加一些实用的工具函数
const utils = {
    // 格式化文件大小
    formatFileSize(bytes) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },
    
    // 生成随机ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },
    
    // 深拷贝对象
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    },
    
    // 获取随机颜色
    getRandomColor() {
        const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
};

// 将工具函数暴露到全局
window.utils = utils;

console.log('🎉 实用工具箱已加载完成！');
console.log('💡 快捷键提示：');
console.log('   Ctrl/Cmd + S: 保存便签');
console.log('   Ctrl/Cmd + N: 添加待办事项');
console.log('   空格键: 开始/暂停倒计时');
