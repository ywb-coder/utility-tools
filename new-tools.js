/**
 * 新工具模块 - 扩展功能
 * 包含单位转换器、二维码生成器、密码生成器、颜色工具、Base64编码工具、数学工具
 */

// 全局变量
let currentConverterType = 'length';

// 初始化所有新工具
function initializeNewTools() {
    initializeUnitConverter();
    initializeQRGenerator();
    initializePasswordGenerator();
    initializeColorTools();
    initializeBase64Tools();
    initializeMathTools();
}

// 单位转换器
function initializeUnitConverter() {
    const converterType = document.getElementById('converterType');
    const fromValue = document.getElementById('fromValue');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const toValue = document.getElementById('toValue');

    if (!converterType || !fromValue || !fromUnit || !toUnit || !toValue) return;

    // 单位定义
    const units = {
        length: {
            m: { name: '米', factor: 1 },
            cm: { name: '厘米', factor: 0.01 },
            km: { name: '千米', factor: 1000 },
            ft: { name: '英尺', factor: 0.3048 },
            in: { name: '英寸', factor: 0.0254 }
        },
        weight: {
            kg: { name: '千克', factor: 1 },
            g: { name: '克', factor: 0.001 },
            lb: { name: '磅', factor: 0.453592 },
            oz: { name: '盎司', factor: 0.0283495 }
        },
        temperature: {
            c: { name: '摄氏度', factor: 1 },
            f: { name: '华氏度', factor: 1 },
            k: { name: '开尔文', factor: 1 }
        }
    };

    // 更新单位选项
    function updateUnits(type) {
        const unitOptions = units[type];
        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';
        
        Object.keys(unitOptions).forEach(key => {
            const option1 = document.createElement('option');
            option1.value = key;
            option1.textContent = unitOptions[key].name;
            fromUnit.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = key;
            option2.textContent = unitOptions[key].name;
            toUnit.appendChild(option2);
        });
        
        // 设置默认选择
        if (type === 'length') {
            fromUnit.value = 'm';
            toUnit.value = 'cm';
        } else if (type === 'weight') {
            fromUnit.value = 'kg';
            toUnit.value = 'g';
        } else if (type === 'temperature') {
            fromUnit.value = 'c';
            toUnit.value = 'f';
        }
    }

    // 转换函数
    function convertUnits() {
        const value = parseFloat(fromValue.value);
        if (isNaN(value)) {
            toValue.value = '';
            return;
        }

        const type = converterType.value;
        const fromUnitKey = fromUnit.value;
        const toUnitKey = toUnit.value;

        let result;
        
        if (type === 'temperature') {
            result = convertTemperature(value, fromUnitKey, toUnitKey);
        } else {
            const fromFactor = units[type][fromUnitKey].factor;
            const toFactor = units[type][toUnitKey].factor;
            result = (value * fromFactor) / toFactor;
        }

        toValue.value = result.toFixed(6).replace(/\.?0+$/, '');
        
        if (window.i18n) {
            showNotification(window.i18n.t('unitConverted') || '单位转换完成');
        }
    }

    // 温度转换
    function convertTemperature(value, from, to) {
        let celsius;
        
        // 转换为摄氏度
        switch (from) {
            case 'c':
                celsius = value;
                break;
            case 'f':
                celsius = (value - 32) * 5/9;
                break;
            case 'k':
                celsius = value - 273.15;
                break;
        }
        
        // 从摄氏度转换为目标单位
        switch (to) {
            case 'c':
                return celsius;
            case 'f':
                return celsius * 9/5 + 32;
            case 'k':
                return celsius + 273.15;
        }
    }

    // 事件监听
    converterType.addEventListener('change', (e) => {
        currentConverterType = e.target.value;
        updateUnits(currentConverterType);
        convertUnits();
    });

    fromValue.addEventListener('input', convertUnits);
    fromUnit.addEventListener('change', convertUnits);
    toUnit.addEventListener('change', convertUnits);

    // 初始化
    updateUnits(currentConverterType);
}

// 二维码生成器
function initializeQRGenerator() {
    const qrInput = document.getElementById('qrInput');
    const qrCanvas = document.getElementById('qrCanvas');
    const downloadQrBtn = document.getElementById('downloadQrBtn');

    if (!qrInput || !qrCanvas) return;

    // 生成二维码
    function generateQR() {
        const text = qrInput.value.trim();
        if (!text) {
            qrCanvas.innerHTML = `
                <div class="qr-placeholder">
                    <i class="fas fa-qrcode"></i>
                    <p>输入内容生成二维码</p>
                </div>
            `;
            return;
        }

        // 使用QR Server API生成二维码
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
        
        qrCanvas.innerHTML = `
            <img src="${qrUrl}" alt="QR Code" style="max-width: 100%; height: auto; border-radius: 8px;">
        `;
        
        if (window.i18n) {
            showNotification(window.i18n.t('qrGenerated') || '二维码已生成');
        }
    }

    // 下载二维码
    function downloadQR() {
        const img = qrCanvas.querySelector('img');
        if (!img) {
            showNotification('请先生成二维码');
            return;
        }

        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = img.src;
        link.click();
    }

    // 事件监听
    qrInput.addEventListener('input', generateQR);
    if (downloadQrBtn) {
        downloadQrBtn.addEventListener('click', downloadQR);
    }
}

// 密码生成器
function initializePasswordGenerator() {
    const generatePasswordBtn = document.getElementById('generatePasswordBtn');
    const generatedPassword = document.getElementById('generatedPassword');
    const copyPasswordBtn = document.getElementById('copyPasswordBtn');
    const lengthSlider = document.getElementById('lengthSlider');
    const passwordLength = document.getElementById('passwordLength');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeNumbers = document.getElementById('includeNumbers');
    const includeSymbols = document.getElementById('includeSymbols');

    console.log('密码生成器元素检查:', {
        generatePasswordBtn: !!generatePasswordBtn,
        generatedPassword: !!generatedPassword,
        lengthSlider: !!lengthSlider,
        includeUppercase: !!includeUppercase,
        includeLowercase: !!includeLowercase,
        includeNumbers: !!includeNumbers,
        includeSymbols: !!includeSymbols
    });

    if (!generatePasswordBtn || !generatedPassword) {
        console.log('密码生成器核心元素未找到，跳过初始化');
        return;
    }

    // 字符集
    const charSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
    };

    // 生成密码
    function generatePassword() {
        const length = parseInt(lengthSlider.value);
        let charset = '';
        
        if (includeUppercase && includeUppercase.checked) charset += charSets.uppercase;
        if (includeLowercase && includeLowercase.checked) charset += charSets.lowercase;
        if (includeNumbers && includeNumbers.checked) charset += charSets.numbers;
        if (includeSymbols && includeSymbols.checked) charset += charSets.symbols;
        
        if (!charset) {
            charset = charSets.lowercase;
        }
        
        let password = '';
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        
        generatedPassword.value = password;
        
        if (window.i18n) {
            showNotification(window.i18n.t('passwordGenerated') || '密码已生成');
        }
    }

    // 复制密码
    function copyPassword() {
        if (!generatedPassword.value) return;
        
        generatedPassword.select();
        generatedPassword.setSelectionRange(0, 99999);
        
        try {
            document.execCommand('copy');
            showNotification(window.i18n ? window.i18n.t('passwordCopied') : '密码已复制到剪贴板');
        } catch (err) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(generatedPassword.value).then(() => {
                    showNotification(window.i18n ? window.i18n.t('passwordCopied') : '密码已复制到剪贴板');
                });
            }
        }
    }

    // 更新长度显示
    function updateLength() {
        if (passwordLength) {
            passwordLength.textContent = lengthSlider.value;
        }
    }

    // 事件监听
    generatePasswordBtn.addEventListener('click', generatePassword);
    if (copyPasswordBtn) copyPasswordBtn.addEventListener('click', copyPassword);
    if (lengthSlider) {
        lengthSlider.addEventListener('input', updateLength);
        lengthSlider.addEventListener('change', generatePassword);
    }
    
    // 选项变化时重新生成
    [includeUppercase, includeLowercase, includeNumbers, includeSymbols].forEach((checkbox, index) => {
        const names = ['includeUppercase', 'includeLowercase', 'includeNumbers', 'includeSymbols'];
        console.log(`绑定复选框 ${names[index]}:`, !!checkbox);
        if (checkbox) {
            checkbox.addEventListener('change', () => {
                console.log(`复选框 ${names[index]} 状态改变:`, checkbox.checked);
                generatePassword();
            });
        }
    });

    // 初始生成
    generatePassword();
}

// 颜色工具
function initializeColorTools() {
    const colorPicker = document.getElementById('colorPicker');
    const colorPreview = document.getElementById('colorPreview');
    const hexValue = document.getElementById('hexValue');
    const rgbValue = document.getElementById('rgbValue');
    const hslValue = document.getElementById('hslValue');
    const randomColorBtn = document.getElementById('randomColorBtn');

    if (!colorPicker) return;

    // 更新颜色值
    function updateColorValues(color) {
        const hex = color;
        const rgb = hexToRgb(hex);
        const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
        
        if (colorPreview) colorPreview.style.backgroundColor = hex;
        if (hexValue) hexValue.value = hex;
        if (rgbValue) rgbValue.value = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        if (hslValue) hslValue.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    }

    // 生成随机颜色
    function generateRandomColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        colorPicker.value = randomColor;
        updateColorValues(randomColor);
        
        showNotification(window.i18n ? window.i18n.t('randomColorGenerated') : '随机颜色已生成');
    }

    // 颜色转换函数
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function rgbToHsl(r, g, b) {
        r /= 255;
        g /= 255;
        b /= 255;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }

    // 事件监听
    colorPicker.addEventListener('input', (e) => {
        updateColorValues(e.target.value);
    });

    if (randomColorBtn) {
        randomColorBtn.addEventListener('click', generateRandomColor);
    }

    // 点击颜色值复制
    [hexValue, rgbValue, hslValue].forEach(input => {
        if (input) {
            input.addEventListener('click', () => {
                input.select();
                try {
                    document.execCommand('copy');
                    showNotification(window.i18n ? window.i18n.t('colorCopied') : '颜色值已复制到剪贴板');
                } catch (err) {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(input.value);
                    }
                }
            });
        }
    });

    // 初始化
    updateColorValues(colorPicker.value);
}

// Base64编码工具
function initializeBase64Tools() {
    const base64Input = document.getElementById('base64Input');
    const base64Output = document.getElementById('base64Output');
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');
    const swapBase64Btn = document.getElementById('swapBase64Btn');

    if (!base64Input || !base64Output) return;

    // 编码
    function encodeBase64() {
        const text = base64Input.value;
        if (!text) return;
        
        try {
            const encoded = btoa(unescape(encodeURIComponent(text)));
            base64Output.value = encoded;
            showNotification(window.i18n ? window.i18n.t('textEncoded') : '文本已编码');
        } catch (error) {
            showNotification('编码失败');
        }
    }

    // 解码
    function decodeBase64() {
        const text = base64Input.value;
        if (!text) return;
        
        try {
            const decoded = decodeURIComponent(escape(atob(text)));
            base64Output.value = decoded;
            showNotification(window.i18n ? window.i18n.t('textDecoded') : '文本已解码');
        } catch (error) {
            showNotification(window.i18n ? window.i18n.t('invalidBase64') : '无效的Base64格式');
        }
    }

    // 交换输入输出
    function swapInputOutput() {
        const temp = base64Input.value;
        base64Input.value = base64Output.value;
        base64Output.value = temp;
    }

    // 事件监听
    if (encodeBtn) encodeBtn.addEventListener('click', encodeBase64);
    if (decodeBtn) decodeBtn.addEventListener('click', decodeBase64);
    if (swapBase64Btn) swapBase64Btn.addEventListener('click', swapInputOutput);
}

// 数学工具
function initializeMathTools() {
    console.log('初始化数学工具...');
    
    // 基数转换 - 根据实际HTML结构修正
    const numberInput = document.querySelector('#mathTools input[placeholder="Enter Number"]');
    const baseSelect = document.querySelector('#mathTools select');
    const binaryOutput = document.querySelector('#mathTools input[readonly]:nth-of-type(1)');
    const octalOutput = document.querySelector('#mathTools input[readonly]:nth-of-type(2)');
    const decimalOutput = document.querySelector('#mathTools input[readonly]:nth-of-type(3)');
    const hexOutput = document.querySelector('#mathTools input[readonly]:nth-of-type(4)');
    
    console.log('数学工具元素检查:', {
        numberInput: !!numberInput,
        baseSelect: !!baseSelect,
        binaryOutput: !!binaryOutput,
        octalOutput: !!octalOutput,
        decimalOutput: !!decimalOutput,
        hexOutput: !!hexOutput
    });
    
    // 进制转换函数
    function convertNumber() {
        if (!numberInput || !baseSelect) return;
        
        const input = numberInput.value.trim();
        const fromBase = parseInt(baseSelect.value);
        
        // 清空所有输出
        if (binaryOutput) binaryOutput.value = '';
        if (octalOutput) octalOutput.value = '';
        if (decimalOutput) decimalOutput.value = '';
        if (hexOutput) hexOutput.value = '';
        
        if (!input) return;
        
        try {
            // 转换为十进制
            const decimal = parseInt(input, fromBase);
            
            if (isNaN(decimal)) {
                showNotification('输入格式错误');
                return;
            }
            
            // 转换为各种进制
            if (binaryOutput) binaryOutput.value = decimal.toString(2);
            if (octalOutput) octalOutput.value = decimal.toString(8);
            if (decimalOutput) decimalOutput.value = decimal.toString(10);
            if (hexOutput) hexOutput.value = decimal.toString(16).toUpperCase();
            
            showNotification(window.i18n ? window.i18n.t('numberConverted') : '进制转换完成');
        } catch (error) {
            showNotification(window.i18n ? window.i18n.t('invalidInput') : '输入格式无效');
        }
    }
    
    // 绑定事件
    if (numberInput) {
        numberInput.addEventListener('input', convertNumber);
    }
    if (baseSelect) {
        baseSelect.addEventListener('change', convertNumber);
    }
    
    // 科学计算
    const scientificInput = document.getElementById('scientificInput');
    const scientificResult = document.getElementById('scientificResult');
    const scientificButtons = document.querySelectorAll('.scientific-btn');
    
    console.log('科学计算元素:', {
        scientificInput: !!scientificInput,
        scientificResult: !!scientificResult,
        scientificButtons: scientificButtons.length
    });
    
    // 科学计算函数
    function performScientificCalculation(operation) {
        if (!scientificInput || !scientificResult) return;
        
        const value = parseFloat(scientificInput.value);
        if (isNaN(value)) {
            scientificResult.value = '请输入有效数字';
            return;
        }
        
        let result;
        try {
            switch (operation) {
                case 'sin':
                    result = Math.sin(value * Math.PI / 180);
                    break;
                case 'cos':
                    result = Math.cos(value * Math.PI / 180);
                    break;
                case 'tan':
                    result = Math.tan(value * Math.PI / 180);
                    break;
                case 'log':
                    result = Math.log10(value);
                    break;
                case 'ln':
                    result = Math.log(value);
                    break;
                case 'sqrt':
                    result = Math.sqrt(value);
                    break;
                case 'square':
                    result = value * value;
                    break;
                case 'factorial':
                    result = factorial(Math.floor(value));
                    break;
                default:
                    result = '未知操作';
            }
            
            scientificResult.value = typeof result === 'number' ? result.toFixed(6).replace(/\.?0+$/, '') : result;
        } catch (error) {
            scientificResult.value = '计算错误';
        }
    }
    
    // 阶乘函数
    function factorial(n) {
        if (n < 0) return '负数无阶乘';
        if (n > 170) return '数值过大';
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    // 绑定科学计算按钮
    scientificButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const operation = this.dataset.operation;
            performScientificCalculation(operation);
        });
    });
    
    // 统计计算
    const statsInput = document.getElementById('statsInput');
    const calculateStatsBtn = document.getElementById('calculateStatsBtn');
    const statsResults = document.getElementById('statsResults');
    
    console.log('统计计算元素:', {
        statsInput: !!statsInput,
        calculateStatsBtn: !!calculateStatsBtn,
        statsResults: !!statsResults
    });
    
    // 统计计算函数
    function calculateStatistics() {
        if (!statsInput || !statsResults) return;
        
        const input = statsInput.value.trim();
        if (!input) {
            statsResults.innerHTML = '<p>请输入数字（用逗号分隔）</p>';
            return;
        }
        
        try {
            const numbers = input.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
            
            if (numbers.length === 0) {
                statsResults.innerHTML = '<p>请输入有效的数字</p>';
                return;
            }
            
            // 计算统计值
            const sum = numbers.reduce((a, b) => a + b, 0);
            const mean = sum / numbers.length;
            const sortedNumbers = [...numbers].sort((a, b) => a - b);
            const median = sortedNumbers.length % 2 === 0 
                ? (sortedNumbers[sortedNumbers.length / 2 - 1] + sortedNumbers[sortedNumbers.length / 2]) / 2
                : sortedNumbers[Math.floor(sortedNumbers.length / 2)];
            const variance = numbers.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numbers.length;
            const stdDev = Math.sqrt(variance);
            const min = Math.min(...numbers);
            const max = Math.max(...numbers);
            
            statsResults.innerHTML = `
                <div class="stats-result">
                    <p><strong>总和:</strong> ${sum.toFixed(2)}</p>
                    <p><strong>平均值:</strong> ${mean.toFixed(2)}</p>
                    <p><strong>中位数:</strong> ${median.toFixed(2)}</p>
                    <p><strong>标准差:</strong> ${stdDev.toFixed(2)}</p>
                    <p><strong>方差:</strong> ${variance.toFixed(2)}</p>
                    <p><strong>最小值:</strong> ${min}</p>
                    <p><strong>最大值:</strong> ${max}</p>
                    <p><strong>数据个数:</strong> ${numbers.length}</p>
                </div>
            `;
            
            showNotification(window.i18n ? window.i18n.t('statsCalculated') : '统计计算完成');
        } catch (error) {
            statsResults.innerHTML = '<p>计算出错，请检查输入格式</p>';
        }
    }
    
    // 绑定统计计算按钮
    if (calculateStatsBtn) {
        calculateStatsBtn.addEventListener('click', calculateStatistics);
    }
}

// 暴露初始化函数到全局
window.initializeNewTools = initializeNewTools;