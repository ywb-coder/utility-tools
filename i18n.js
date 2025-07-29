// 国际化配置
const i18n = {
    currentLanguage: 'en', // 默认英文
    
    translations: {
        'zh-CN': {
            // 页面标题和主要界面
            pageTitle: '实用工具箱 - 现代化工具集合',
            mainTitle: '实用工具箱',
            loading: '加载中...',
            settings: '设置',
            
            // 工具卡片标题
            clockTitle: '实时时钟',
            todoTitle: '待办事项',
            weatherTitle: '天气信息',
            timerTitle: '倒计时器',
            calculatorTitle: '简易计算器',
            notesTitle: '快速便签',
            textToolsTitle: '文本处理',
            converterTitle: '单位转换',
            qrcodeTitle: '二维码生成',
            passwordTitle: '密码生成',
            colorTitle: '颜色工具',
            base64Title: 'Base64编码',
            mathTitle: '数学工具',
            
            // 待办事项
            todayTasks: '今日任务',
            completedTasks: '已完成',
            addTodo: '添加待办事项',
            todoPlaceholder: '输入待办事项...',
            urgentTask: '紧急任务',
            cancel: '取消',
            add: '添加',
            
            // 统计信息
            characters: '字符',
            words: '单词',
            lines: '行数',
            notSaved: '未保存',
            charCount: '字符数',
            
            // 按钮文本
            generate: '生成',
            download: '下载',
            refresh: '刷新',
            start: '开始',
            pause: '暂停',
            reset: '重置',
            save: '保存',
            swap: '交换',
            copy: '复制',
            clear: '清空',
            
            // 天气
            location: '北京',
            sunny: '晴朗',
            cloudy: '多云',
            rainy: '雨天',
            
            // 倒计时器
            setTimer: '设置倒计时',
            minutesLabel: '分钟',
            secondsLabel: '秒钟',
            confirm: '确定',
            
            // 便签
            notesPlaceholder: '在这里记录您的想法...',
            
            // 文本处理
            textInputPlaceholder: '输入要处理的文本...',
            textOutputPlaceholder: '处理结果将显示在这里...',
            uppercase: '大写',
            lowercase: '小写',
            capitalize: '首字母大写',
            reverse: '反转',
            removeSpaces: '去空格',
            
            // 单位转换
            length: '长度',
            weight: '重量',
            temperature: '温度',
            enterValue: '输入数值',
            conversionResult: '转换结果',
            
            // 二维码
            qrInputPlaceholder: '输入要生成二维码的内容...',
            qrPlaceholder: '输入内容生成二维码',
            
            // 密码生成器
            passwordPlaceholder: '生成的密码将显示在这里',
            passwordLength: '长度',
            includeUppercase: '大写字母',
            includeLowercase: '小写字母',
            includeNumbers: '数字',
            includeSymbols: '符号',
            
            // Base64
            base64InputPlaceholder: '输入要编码的文本...',
            base64OutputPlaceholder: '编码结果将显示在这里...',
            encode: '编码',
            decode: '解码',
            
            // 数学工具
            baseConversion: '进制转换',
            percentage: '百分比计算',
            randomNumber: '随机数生成',
            enterNumber: '输入数值',
            binary: '二进制',
            octal: '八进制',
            decimal: '十进制',
            hexadecimal: '十六进制',
            
            // 设置面板
            themeMode: '主题模式',
            darkMode: '深色模式',
            lightMode: '浅色模式',
            autoMode: '跟随系统',
            citySettings: '城市设置',
            cityPlaceholder: '输入城市名称',
            enableAnimations: '启用动画效果',
            language: '语言',
            
            // 基础功能消息
            todoAdded: '待办事项已添加',
            taskCompleted: '任务已完成',
            taskRestored: '任务已恢复',
            todoDeleted: '待办事项已删除',
            weatherUpdated: '天气信息已更新',
            timerSet: '计时器设置为',
            minutes: '分钟',
            seconds: '秒',
            timerFinished: '计时器结束！',
            notesSaved: '便签已保存',
            saved: '已保存',
            autoSaved: '自动保存',
            networkOnline: '网络连接已恢复',
            networkOffline: '网络连接已断开',
            
            // 文本处理工具
            textUppercased: '文本已转换为大写',
            textLowercased: '文本已转换为小写',
            textCapitalized: '文本已转换为首字母大写',
            textReversed: '文本已反转',
            spacesRemoved: '多余空格已移除',
            textCopied: '文本已复制到剪贴板',
            copyFailed: '复制失败，请手动复制',
            textCleared: '文本已清空',
            
            // 单位转换器
            unitConverted: '单位转换完成',
            invalidNumber: '请输入有效数字',
            
            // 密码生成器
            passwordGenerated: '密码已生成',
            passwordCopied: '密码已复制到剪贴板',
            
            // 二维码生成器
            qrGenerated: '二维码已生成',
            enterText: '请输入要生成二维码的文本',
            
            // 颜色工具
            colorCopied: '颜色值已复制到剪贴板',
            randomColorGenerated: '随机颜色已生成',
            
            // Base64工具
            textEncoded: '文本已编码',
            textDecoded: '文本已解码',
            invalidBase64: '无效的Base64格式',
            
            // 数学工具
            numberConverted: '进制转换完成',
            invalidInput: '输入格式无效',
            
            // 星期
            weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        },
        
        'en': {
            // 页面标题和主要界面
            pageTitle: 'Utility Toolbox - Modern Tool Collection',
            mainTitle: 'Utility Toolbox',
            loading: 'Loading...',
            settings: 'Settings',
            
            // 工具卡片标题
            clockTitle: 'Real-time Clock',
            todoTitle: 'Todo List',
            weatherTitle: 'Weather Info',
            timerTitle: 'Timer',
            calculatorTitle: 'Calculator',
            notesTitle: 'Quick Notes',
            textToolsTitle: 'Text Tools',
            converterTitle: 'Unit Converter',
            qrcodeTitle: 'QR Code Generator',
            passwordTitle: 'Password Generator',
            colorTitle: 'Color Tools',
            base64Title: 'Base64 Encoder',
            mathTitle: 'Math Tools',
            
            // 待办事项
            todayTasks: 'Today Tasks',
            completedTasks: 'Completed',
            addTodo: 'Add Todo Item',
            todoPlaceholder: 'Enter todo item...',
            urgentTask: 'Urgent Task',
            cancel: 'Cancel',
            add: 'Add',
            
            // 统计信息
            characters: 'Characters',
            words: 'Words',
            lines: 'Lines',
            notSaved: 'Not Saved',
            charCount: 'Character Count',
            
            // 按钮文本
            generate: 'Generate',
            download: 'Download',
            refresh: 'Refresh',
            start: 'Start',
            pause: 'Pause',
            reset: 'Reset',
            save: 'Save',
            swap: 'Swap',
            copy: 'Copy',
            clear: 'Clear',
            
            // 天气
            location: 'Beijing',
            sunny: 'Sunny',
            cloudy: 'Cloudy',
            rainy: 'Rainy',
            
            // 倒计时器
            setTimer: 'Set Timer',
            minutesLabel: 'Minutes',
            secondsLabel: 'Seconds',
            confirm: 'Confirm',
            
            // 便签
            notesPlaceholder: 'Record your thoughts here...',
            
            // 文本处理
            textInputPlaceholder: 'Enter text to process...',
            textOutputPlaceholder: 'Processing results will be displayed here...',
            uppercase: 'UPPERCASE',
            lowercase: 'lowercase',
            capitalize: 'Capitalize',
            reverse: 'Reverse',
            removeSpaces: 'Remove Spaces',
            
            // 单位转换
            length: 'Length',
            weight: 'Weight',
            temperature: 'Temperature',
            enterValue: 'Enter Value',
            conversionResult: 'Conversion Result',
            
            // 二维码
            qrInputPlaceholder: 'Enter content to generate QR code...',
            qrPlaceholder: 'Enter content to generate QR code',
            
            // 密码生成器
            passwordPlaceholder: 'Generated password will be displayed here',
            passwordLength: 'Length',
            includeUppercase: 'Uppercase Letters',
            includeLowercase: 'Lowercase Letters',
            includeNumbers: 'Numbers',
            includeSymbols: 'Symbols',
            
            // Base64
            base64InputPlaceholder: 'Enter text to encode...',
            base64OutputPlaceholder: 'Encoding results will be displayed here...',
            encode: 'Encode',
            decode: 'Decode',
            
            // 数学工具
            baseConversion: 'Base Conversion',
            percentage: 'Percentage Calculation',
            randomNumber: 'Random Number Generation',
            enterNumber: 'Enter Number',
            binary: 'Binary',
            octal: 'Octal',
            decimal: 'Decimal',
            hexadecimal: 'Hexadecimal',
            
            // 设置面板
            themeMode: 'Theme Mode',
            darkMode: 'Dark Mode',
            lightMode: 'Light Mode',
            autoMode: 'Follow System',
            citySettings: 'City Settings',
            cityPlaceholder: 'Enter city name',
            enableAnimations: 'Enable Animations',
            language: 'Language',
            
            // 基础功能消息
            todoAdded: 'Todo item added',
            taskCompleted: 'Task completed',
            taskRestored: 'Task restored',
            todoDeleted: 'Todo item deleted',
            weatherUpdated: 'Weather info updated',
            timerSet: 'Timer set to',
            minutes: 'minutes',
            seconds: 'seconds',
            timerFinished: 'Timer finished!',
            notesSaved: 'Notes saved',
            saved: 'Saved',
            autoSaved: 'Auto Saved',
            networkOnline: 'Network connection restored',
            networkOffline: 'Network connection lost',
            
            // 文本处理工具
            textUppercased: 'Text converted to uppercase',
            textLowercased: 'Text converted to lowercase',
            textCapitalized: 'Text converted to title case',
            textReversed: 'Text reversed',
            spacesRemoved: 'Extra spaces removed',
            textCopied: 'Text copied to clipboard',
            copyFailed: 'Copy failed, please copy manually',
            textCleared: 'Text cleared',
            
            // 单位转换器
            unitConverted: 'Unit conversion completed',
            invalidNumber: 'Please enter a valid number',
            
            // 密码生成器
            passwordGenerated: 'Password generated',
            passwordCopied: 'Password copied to clipboard',
            
            // 二维码生成器
            qrGenerated: 'QR code generated',
            enterText: 'Please enter text to generate QR code',
            
            // 颜色工具
            colorCopied: 'Color value copied to clipboard',
            randomColorGenerated: 'Random color generated',
            
            // Base64工具
            textEncoded: 'Text encoded',
            textDecoded: 'Text decoded',
            invalidBase64: 'Invalid Base64 format',
            
            // 数学工具
            numberConverted: 'Number conversion completed',
            invalidInput: 'Invalid input format',
            
            // 星期
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        }
    },
    
    // 获取翻译文本
    t(key) {
        try {
            const translation = this.translations[this.currentLanguage];
            return translation && translation[key] ? translation[key] : key;
        } catch (error) {
            console.warn('Translation error:', error);
            return key;
        }
    },
    
    // 切换语言
    switchLanguage(language) {
        try {
            // 处理语言代码映射
            const langMap = {
                'zh-CN': 'zh-CN',
                'zh': 'zh-CN',
                'en': 'en',
                'en-US': 'en'
            };
            
            const targetLang = langMap[language] || language;
            
            if (this.translations[targetLang]) {
                this.currentLanguage = targetLang;
                localStorage.setItem('language', language);
                this.updateUI();
                console.log(`Language switched to: ${targetLang}`);
            } else {
                // 不支持的语言时，回退到默认语言
                const defaultLang = 'en';
                if (this.currentLanguage !== defaultLang) {
                    this.currentLanguage = defaultLang;
                    localStorage.setItem('language', defaultLang);
                    this.updateUI();
                }
            }
        } catch (error) {
            console.error('Language switch error:', error);
        }
    },
    
    // 更新界面文本
    updateUI() {
        try {
            // 更新页面标题
            document.title = this.t('pageTitle');
            
            // 更新所有带有data-i18n属性的元素
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                const translation = this.t(key);
                
                if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email')) {
                    element.placeholder = translation;
                } else if (element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            });
            
            // 更新主标题
            const mainTitleSpan = document.querySelector('.main-title span');
            if (mainTitleSpan) {
                mainTitleSpan.textContent = this.t('mainTitle');
            }
            
            // 更新工具卡片标题
            this.updateCardTitles();
            
            // 更新界面文本
            this.updateInterfaceTexts();
            
            // 更新时钟显示
            this.updateClock();
            
            // 更新天气描述
            this.updateWeatherDesc();
            
            // 更新保存状态文本
            this.updateSavedText();
            
        } catch (error) {
            console.error('UI update error:', error);
        }
    },
    
    // 更新卡片标题
    updateCardTitles() {
        const cardTitles = {
            '.clock-card h3': 'clockTitle',
            '.todo-card h3': 'todoTitle',
            '.weather-card h3': 'weatherTitle',
            '.timer-card h3': 'timerTitle',
            '.calculator-card h3': 'calculatorTitle',
            '.notes-card h3': 'notesTitle',
            '.text-tools-card h3': 'textToolsTitle',
            '.converter-card h3': 'converterTitle',
            '.qrcode-card h3': 'qrcodeTitle',
            '.password-card h3': 'passwordTitle',
            '.color-card h3': 'colorTitle',
            '.base64-card h3': 'base64Title',
            '.math-card h3': 'mathTitle'
        };
        
        Object.entries(cardTitles).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element) element.textContent = this.t(key);
        });
    },
    
    // 更新界面文本
    updateInterfaceTexts() {
        // 更新占位符文本
        const placeholders = {
            '#todoInput': 'todoPlaceholder',
            '#notesTextarea': 'notesPlaceholder',
            '#textInput': 'textInputPlaceholder',
            '#textOutput': 'textOutputPlaceholder',
            '#qrInput': 'qrInputPlaceholder',
            '#generatedPassword': 'passwordPlaceholder',
            '#base64Input': 'base64InputPlaceholder',
            '#base64Output': 'base64OutputPlaceholder',
            '#fromValue': 'enterValue',
            '#toValue': 'conversionResult',
            '#baseInput': 'enterNumber',
            '#cityInput': 'cityPlaceholder'
        };
        
        Object.entries(placeholders).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element) element.placeholder = this.t(key);
        });
        
        // 更新按钮文本
        const buttons = {
            '#upperCaseBtn': 'uppercase',
            '#lowerCaseBtn': 'lowercase',
            '#capitalizeBtn': 'capitalize',
            '#reverseTextBtn': 'reverse',
            '#removeSpacesBtn': 'removeSpaces',
            '#copyTextBtn': 'copy',
            '#clearTextBtn': 'clear',
            '#encodeBtn': 'encode',
            '#decodeBtn': 'decode',
            '#cancelTodoBtn': 'cancel',
            '#confirmTodoBtn': 'add',
            '#cancelTimerBtn': 'cancel',
            '#confirmTimerBtn': 'confirm'
        };
        
        Object.entries(buttons).forEach(([selector, key]) => {
            const element = document.querySelector(selector);
            if (element) element.textContent = this.t(key);
        });
        
        // 更新统计文本
        const todoCountElement = document.querySelector('.todo-count');
        if (todoCountElement) {
            const countSpan = todoCountElement.querySelector('#todoCount');
            if (countSpan) {
                todoCountElement.innerHTML = `${this.t('todayTasks')}: <span id="todoCount">${countSpan.textContent}</span>`;
            }
        }
        
        const completedCountElement = document.querySelector('.completed-count');
        if (completedCountElement) {
            const countSpan = completedCountElement.querySelector('#completedCount');
            if (countSpan) {
                completedCountElement.innerHTML = `${this.t('completedTasks')}: <span id="completedCount">${countSpan.textContent}</span>`;
            }
        }
        
        const charCountElement = document.querySelector('.char-count');
        if (charCountElement) {
            const countSpan = charCountElement.querySelector('#charCount');
            if (countSpan) {
                charCountElement.innerHTML = `${this.t('charCount')}: <span id="charCount">${countSpan.textContent}</span>`;
            }
        }
        
        // 更新文本统计
        const textStats = document.getElementById('textStats');
        if (textStats) {
            const spans = textStats.querySelectorAll('span');
            if (spans.length >= 3) {
                const charCount = spans[0].textContent.match(/\d+/);
                const wordCount = spans[1].textContent.match(/\d+/);
                const lineCount = spans[2].textContent.match(/\d+/);
                spans[0].textContent = `${this.t('characters')}: ${charCount ? charCount[0] : '0'}`;
                spans[1].textContent = `${this.t('words')}: ${wordCount ? wordCount[0] : '0'}`;
                spans[2].textContent = `${this.t('lines')}: ${lineCount ? lineCount[0] : '0'}`;
            }
        }
        
        // 更新选择器选项
        const converterType = document.getElementById('converterType');
        if (converterType) {
            const options = converterType.querySelectorAll('option');
            options.forEach(option => {
                switch(option.value) {
                    case 'length':
                        option.textContent = this.t('length');
                        break;
                    case 'weight':
                        option.textContent = this.t('weight');
                        break;
                    case 'temperature':
                        option.textContent = this.t('temperature');
                        break;
                }
            });
        }
        
        // 更新数学工具选择器
        const mathToolType = document.getElementById('mathToolType');
        if (mathToolType) {
            const options = mathToolType.querySelectorAll('option');
            options.forEach(option => {
                switch(option.value) {
                    case 'base':
                        option.textContent = this.t('baseConversion');
                        break;
                    case 'percentage':
                        option.textContent = this.t('percentage');
                        break;
                    case 'random':
                        option.textContent = this.t('randomNumber');
                        break;
                }
            });
        }
        
        // 更新模态框标题
        const todoModalTitle = document.querySelector('#todoModal .modal-header h3');
        if (todoModalTitle) todoModalTitle.textContent = this.t('addTodo');
        
        const timerModalTitle = document.querySelector('#timerModal .modal-header h3');
        if (timerModalTitle) timerModalTitle.textContent = this.t('setTimer');
        
        // 更新设置面板标题
        const settingsTitle = document.querySelector('.settings-header h3');
        if (settingsTitle) settingsTitle.textContent = this.t('settings');
        
        // 更新标签文本
        const minutesLabel = document.querySelector('#timerModal .time-input-group:first-child label');
        if (minutesLabel) minutesLabel.textContent = this.t('minutesLabel');
        
        const secondsLabel = document.querySelector('#timerModal .time-input-group:last-child label');
        if (secondsLabel) secondsLabel.textContent = this.t('secondsLabel');
        
        // 更新紧急任务标签
        const urgentTaskSpan = document.querySelector('#todoModal label span:last-child');
        if (urgentTaskSpan) urgentTaskSpan.textContent = this.t('urgentTask');
        
        // 更新设置标签
        const cityLabel = document.querySelector('label[for="cityInput"]');
        if (cityLabel) cityLabel.textContent = this.t('citySettings');
        
        const themeLabel = document.querySelector('label[for="themeSelect"]');
        if (themeLabel) themeLabel.textContent = this.t('themeMode');
        
        const languageLabel = document.querySelector('label[for="languageSelect"]');
        if (languageLabel) languageLabel.textContent = this.t('language');
        
        // 更新设置选项
        const themeSelect = document.getElementById('themeSelect');
        if (themeSelect) {
            const options = themeSelect.querySelectorAll('option');
            options.forEach(option => {
                switch(option.value) {
                    case 'dark':
                        option.textContent = this.t('darkMode');
                        break;
                    case 'light':
                        option.textContent = this.t('lightMode');
                        break;
                    case 'auto':
                        option.textContent = this.t('autoMode');
                        break;
                }
            });
        }
        
        // 更新动画设置标签
        const animationsLabel = document.querySelector('label[for="animationsToggle"]');
        if (animationsLabel) {
            const checkbox = animationsLabel.querySelector('input[type="checkbox"]');
            if (checkbox) {
                animationsLabel.innerHTML = `<input type="checkbox" id="animationsToggle" ${checkbox.checked ? 'checked' : ''}> ${this.t('enableAnimations')}`;
            }
        }
        
        // 更新密码选项标签
        const passwordOptions = document.querySelectorAll('.option-checkboxes label');
        passwordOptions.forEach(label => {
            const checkbox = label.querySelector('input[type="checkbox"]');
            if (checkbox) {
                switch(checkbox.id) {
                    case 'includeUppercase':
                        label.innerHTML = `<input type="checkbox" id="includeUppercase" ${checkbox.checked ? 'checked' : ''}> ${this.t('includeUppercase')}`;
                        break;
                    case 'includeLowercase':
                        label.innerHTML = `<input type="checkbox" id="includeLowercase" ${checkbox.checked ? 'checked' : ''}> ${this.t('includeLowercase')}`;
                        break;
                    case 'includeNumbers':
                        label.innerHTML = `<input type="checkbox" id="includeNumbers" ${checkbox.checked ? 'checked' : ''}> ${this.t('includeNumbers')}`;
                        break;
                    case 'includeSymbols':
                        label.innerHTML = `<input type="checkbox" id="includeSymbols" ${checkbox.checked ? 'checked' : ''}> ${this.t('includeSymbols')}`;
                        break;
                }
            }
        });
        
        // 更新密码长度标签
        const passwordLengthLabel = document.querySelector('.option-group label');
        if (passwordLengthLabel) {
            const lengthSpan = passwordLengthLabel.querySelector('#passwordLength');
            if (lengthSpan) {
                passwordLengthLabel.innerHTML = `${this.t('passwordLength')}: <span id="passwordLength">${lengthSpan.textContent}</span>`;
            }
        }
        
        // 更新进制转换标签
        const baseResults = document.querySelectorAll('.base-result label');
        baseResults.forEach(label => {
            const text = label.textContent.replace(':', '');
            switch(text) {
                case '二进制':
                case 'Binary':
                    label.textContent = `${this.t('binary')}:`;
                    break;
                case '八进制':
                case 'Octal':
                    label.textContent = `${this.t('octal')}:`;
                    break;
                case '十进制':
                case 'Decimal':
                    label.textContent = `${this.t('decimal')}:`;
                    break;
                case '十六进制':
                case 'Hexadecimal':
                    label.textContent = `${this.t('hexadecimal')}:`;
                    break;
            }
        });
        
        // 更新二维码占位符文本
        const qrPlaceholder = document.querySelector('.qr-placeholder p');
        if (qrPlaceholder) qrPlaceholder.textContent = this.t('qrPlaceholder');
        
        // 更新未保存状态
        const lastSaved = document.getElementById('lastSaved');
        if (lastSaved && lastSaved.textContent === '未保存') {
            lastSaved.textContent = this.t('notSaved');
        }
    },
    
    // 更新时钟显示
    updateClock() {
        const now = new Date();
        const weekdays = this.t('weekdays');
        if (Array.isArray(weekdays)) {
            const currentWeekday = document.getElementById('currentWeekday');
            if (currentWeekday) {
                currentWeekday.textContent = weekdays[now.getDay()];
            }
        }
    },
    
    // 更新天气描述
    updateWeatherDesc() {
        const weatherDesc = document.getElementById('weatherDesc');
        if (weatherDesc) {
            const currentDesc = weatherDesc.textContent;
            if (currentDesc.includes('晴') || currentDesc.includes('Sunny')) {
                weatherDesc.textContent = this.t('sunny');
            } else if (currentDesc.includes('云') || currentDesc.includes('Cloudy')) {
                weatherDesc.textContent = this.t('cloudy');
            } else if (currentDesc.includes('雨') || currentDesc.includes('Rainy')) {
                weatherDesc.textContent = this.t('rainy');
            }
        }
    },
    
    // 更新保存状态文本
    updateSavedText() {
        const lastSaved = document.getElementById('lastSaved');
        if (lastSaved && lastSaved.textContent) {
            const savedText = this.t('saved');
            if (lastSaved.textContent.includes('已保存') || lastSaved.textContent.includes('Saved')) {
                const timeMatch = lastSaved.textContent.match(/\d{4}\/\d{1,2}\/\d{1,2}.*\d{1,2}:\d{2}:\d{2}/);
                if (timeMatch) {
                    lastSaved.textContent = `${savedText} ${timeMatch[0]}`;
                } else {
                    lastSaved.textContent = savedText;
                }
            }
        }
    }
};

// 将i18n暴露到全局
window.i18n = i18n;

// 初始化语言设置
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.switchLanguage(savedLanguage);
});

console.log('🌐 国际化模块已加载完成！');
