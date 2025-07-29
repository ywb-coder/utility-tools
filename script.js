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
    initializeSettings();
    initializeEventListeners();
    
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
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekdayString = weekdays[now.getDay()];
    
    currentTime.textContent = timeString;
    currentDate.textContent = dateString;
    currentWeekday.textContent = weekdayString;
}

// 初始化待办事项
function initializeTodos() {
    renderTodos();
    updateTodoStats();
}

function renderTodos() {
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
        showNotification('待办事项已添加');
    }
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    saveTodos();
    renderTodos();
    updateTodoStats();
    showNotification(todos[index].completed ? '任务已完成' : '任务已恢复');
}

function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
    updateTodoStats();
    showNotification('待办事项已删除');
}

function updateTodoStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    todoCount.textContent = total;
    completedCount.textContent = completed;
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// 初始化天气
function initializeWeather() {
    const savedCity = localStorage.getItem('weatherCity') || '北京';
    locationElement.textContent = savedCity;
    updateWeather();
}

function updateWeather() {
    // 模拟天气数据（实际项目中应该调用真实的天气API）
    const weatherData = getSimulatedWeather();
    
    weatherIcon.className = `fas ${weatherData.icon}`;
    temperature.textContent = weatherData.temperature;
    weatherDesc.textContent = weatherData.description;
    
    // 更新天气卡片背景
    const weatherCard = document.querySelector('.weather-card');
    weatherCard.style.background = weatherData.gradient;
    
    showNotification('天气信息已更新');
}

function getSimulatedWeather() {
    const weathers = [
        {
            icon: 'fa-sun',
            temperature: '22°C',
            description: '晴朗',
            gradient: 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)'
        },
        {
            icon: 'fa-cloud',
            temperature: '18°C',
            description: '多云',
            gradient: 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)'
        },
        {
            icon: 'fa-cloud-rain',
            temperature: '15°C',
            description: '小雨',
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
        showNotification(`倒计时设置为 ${minutes}分${seconds}秒`);
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
                showNotification('倒计时结束！');
                playTimerSound();
            }
        }, 1000);
        
        startTimerBtn.style.display = 'none';
        pauseTimerBtn.style.display = 'inline-flex';
    }
}

function pauseTimer() {
    if (isTimerRunning) {
        isTimerRunning = false;
        clearInterval(timerInterval);
        startTimerBtn.style.display = 'inline-flex';
        pauseTimerBtn.style.display = 'none';
    }
}

function resetTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    timerRemaining = timerDuration;
    updateTimerDisplay();
    updateProgressRing();
    startTimerBtn.style.display = 'inline-flex';
    pauseTimerBtn.style.display = 'none';
}

function stopTimer() {
    isTimerRunning = false;
    clearInterval(timerInterval);
    startTimerBtn.style.display = 'inline-flex';
    pauseTimerBtn.style.display = 'none';
}

function updateTimerDisplay() {
    const minutes = Math.floor(timerRemaining / 60);
    const seconds = timerRemaining % 60;
    timerTime.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateProgressRing() {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const progress = timerDuration > 0 ? (timerDuration - timerRemaining) / timerDuration : 0;
    const offset = circumference - (progress * circumference);
    
    progressRingCircle.style.strokeDashoffset = offset;
    progressRingCircle.style.stroke = progress > 0.8 ? '#e74c3c' : '#3498db';
}

function playTimerSound() {
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
}

// 初始化计算器
function initializeCalculator() {
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
    const savedNotes = localStorage.getItem('notes') || '';
    notesTextarea.value = savedNotes;
    updateCharCount();
    
    notesTextarea.addEventListener('input', updateCharCount);
}

function updateCharCount() {
    const count = notesTextarea.value.length;
    charCount.textContent = count;
}

function saveNotes() {
    const notes = notesTextarea.value;
    localStorage.setItem('notes', notes);
    
    const now = new Date().toLocaleString('zh-CN');
    lastSaved.textContent = `已保存 ${now}`;
    
    showNotification('便签已保存');
    
    // 3秒后恢复显示
    setTimeout(() => {
        lastSaved.textContent = '已保存';
    }, 3000);
}

// 初始化设置
function initializeSettings() {
    // 加载保存的设置
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedCity = localStorage.getItem('weatherCity') || '北京';
    const savedAnimations = localStorage.getItem('animations') !== 'false';
    
    themeSelect.value = savedTheme;
    cityInput.value = savedCity;
    animationsToggle.checked = savedAnimations;
    
    applyTheme(savedTheme);
    applyAnimationSettings(savedAnimations);
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
    settingsBtn.addEventListener('click', () => {
        settingsPanel.classList.add('open');
    });
    
    closeSettingsBtn.addEventListener('click', () => {
        settingsPanel.classList.remove('open');
    });
    
    // 点击外部关闭设置面板
    document.addEventListener('click', (e) => {
        if (settingsPanel.classList.contains('open') && 
            !settingsPanel.contains(e.target) && 
            !settingsBtn.contains(e.target)) {
            settingsPanel.classList.remove('open');
        }
    });
    
    // 待办事项模态框
    addTodoBtn.addEventListener('click', () => {
        todoModal.classList.add('open');
        todoInput.focus();
    });
    
    closeTodoModal.addEventListener('click', closeTodoModalHandler);
    cancelTodoBtn.addEventListener('click', closeTodoModalHandler);
    confirmTodoBtn.addEventListener('click', addTodo);
    
    // 回车键添加待办事项
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    // 倒计时器模态框
    timerSettingsBtn.addEventListener('click', () => {
        timerModal.classList.add('open');
        minutesInput.focus();
    });
    
    closeTimerModal.addEventListener('click', closeTimerModalHandler);
    cancelTimerBtn.addEventListener('click', closeTimerModalHandler);
    confirmTimerBtn.addEventListener('click', setTimer);
    
    // 倒计时器控制
    startTimerBtn.addEventListener('click', startTimer);
    pauseTimerBtn.addEventListener('click', pauseTimer);
    resetTimerBtn.addEventListener('click', resetTimer);
    
    // 天气刷新
    refreshWeatherBtn.addEventListener('click', updateWeather);
    
    // 便签保存
    saveNotesBtn.addEventListener('click', saveNotes);
    
    // 设置变更
    themeSelect.addEventListener('change', (e) => {
        const theme = e.target.value;
        localStorage.setItem('theme', theme);
        applyTheme(theme);
    });
    
    cityInput.addEventListener('change', (e) => {
        const city = e.target.value;
        localStorage.setItem('weatherCity', city);
        locationElement.textContent = city;
        updateWeather();
    });
    
    animationsToggle.addEventListener('change', (e) => {
        const enabled = e.target.checked;
        localStorage.setItem('animations', enabled);
        applyAnimationSettings(enabled);
    });
    
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
            if (settingsPanel.classList.contains('open')) {
                settingsPanel.classList.remove('open');
            }
        }
    });
}

function closeTodoModalHandler() {
    todoModal.classList.remove('open');
    todoInput.value = '';
    todoUrgent.checked = false;
}

function closeTimerModalHandler() {
    timerModal.classList.remove('open');
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
            document.body.removeChild(notification);
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
        todoModal.classList.add('open');
        todoInput.focus();
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

// 网络状态监听
window.addEventListener('online', () => {
    showNotification('网络连接已恢复');
});

window.addEventListener('offline', () => {
    showNotification('网络连接已断开');
});

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
    const notes = notesTextarea.value;
    localStorage.setItem('notes', notes);
    lastSaved.textContent = '自动保存';
    setTimeout(() => {
        lastSaved.textContent = '已保存';
    }, 2000);
}, 2000);

// 为便签添加自动保存
notesTextarea.addEventListener('input', autoSaveNotes);

// 数据导出功能
function exportData() {
    const data = {
        todos: todos,
        notes: localStorage.getItem('notes') || '',
        settings: {
            theme: localStorage.getItem('theme') || 'light',
            city: localStorage.getItem('weatherCity') || '北京',
            animations: localStorage.getItem('animations') !== 'false'
        },
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `工具箱数据_${new Date().toLocaleDateString('zh-CN')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('数据导出成功');
}

// 数据导入功能
function importData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            
            if (data.todos) {
                todos = data.todos;
                saveTodos();
                renderTodos();
                updateTodoStats();
            }
            
            if (data.notes) {
                localStorage.setItem('notes', data.notes);
                notesTextarea.value = data.notes;
                updateCharCount();
            }
            
            if (data.settings) {
                if (data.settings.theme) {
                    localStorage.setItem('theme', data.settings.theme);
                    themeSelect.value = data.settings.theme;
                    applyTheme(data.settings.theme);
                }
                
                if (data.settings.city) {
                    localStorage.setItem('weatherCity', data.settings.city);
                    cityInput.value = data.settings.city;
                    locationElement.textContent = data.settings.city;
                }
                
                if (data.settings.animations !== undefined) {
                    localStorage.setItem('animations', data.settings.animations);
                    animationsToggle.checked = data.settings.animations;
                    applyAnimationSettings(data.settings.animations);
                }
            }
            
            showNotification('数据导入成功');
        } catch (error) {
            showNotification('数据导入失败：文件格式错误');
            console.error('导入错误:', error);
        }
    };
    reader.readAsText(file);
}

// 添加导入导出按钮到设置面板
function addImportExportButtons() {
    const settingsBody = document.querySelector('.settings-body');
    
    const exportSection = document.createElement('div');
    exportSection.className = 'setting-item';
    exportSection.innerHTML = `
        <label>数据管理</label>
        <div style="display: flex; gap: 10px; margin-top: 10px;">
            <button class="btn btn-secondary" onclick="exportData()">
                <i class="fas fa-download"></i> 导出数据
            </button>
            <label class="btn btn-secondary" style="margin: 0; cursor: pointer;">
                <i class="fas fa-upload"></i> 导入数据
                <input type="file" accept=".json" style="display: none;" onchange="importData(this.files[0])">
            </label>
        </div>
    `;
    
    settingsBody.appendChild(exportSection);
}

// 页面完全加载后执行
window.addEventListener('load', () => {
    addImportExportButtons();
    
    // 检查是否支持 Service Worker
    if ('serviceWorker' in navigator) {
        // 可以在这里注册 Service Worker 实现离线功能
        console.log('支持 Service Worker');
    }
    
    // 检查是否支持 Web Notifications
    if ('Notification' in window) {
        if (Notification.permission === 'default') {
            // 可以请求通知权限
            console.log('可以请求通知权限');
        }
    }
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('全局错误:', e.error);
    showNotification('发生了一个错误，请刷新页面重试');
});

// 未处理的 Promise 拒绝
window.addEventListener('unhandledrejection', (e) => {
    console.error('未处理的 Promise 拒绝:', e.reason);
    e.preventDefault();
});

// 页面卸载前保存数据
window.addEventListener('beforeunload', () => {
    // 确保所有数据都已保存
    const notes = notesTextarea.value;
    localStorage.setItem('notes', notes);
});

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
console.log('   ESC: 关闭弹窗');
