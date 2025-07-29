// 多语言配置
const languages = {
    'zh-CN': {
        name: '简体中文',
        flag: '🇨🇳',
        translations: {
            // 页面标题和导航
            pageTitle: '实用工具箱 - 现代化工具集合',
            mainTitle: '实用工具箱',
            settings: '设置',
            
            // 工具卡片标题
            clock: '实时时钟',
            todo: '待办事项',
            weather: '天气信息',
            timer: '倒计时器',
            calculator: '简易计算器',
            notes: '快速便签',
            
            // 时钟相关
            weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            
            // 待办事项
            todayTasks: '今日任务',
            completed: '已完成',
            addTodo: '添加待办事项',
            urgentTask: '紧急任务',
            cancel: '取消',
            add: '添加',
            confirm: '确定',
            
            // 天气
            sunny: '晴朗',
            cloudy: '多云',
            rainy: '小雨',
            
            // 倒计时器
            setTimer: '设置倒计时',
            minutes: '分钟',
            seconds: '秒钟',
            
            // 便签
            notesPlaceholder: '在这里记录您的想法...',
            charCount: '字符数',
            notSaved: '未保存',
            saved: '已保存',
            autoSaved: '自动保存',
            
            // 设置面板
            settingsTitle: '设置',
            themeMode: '主题模式',
            lightMode: '浅色模式',
            darkMode: '深色模式',
            autoMode: '跟随系统',
            citySettings: '城市设置',
            cityPlaceholder: '输入城市名称',
            enableAnimations: '启用动画效果',
            language: '语言',
            dataManagement: '数据管理',
            exportData: '导出数据',
            importData: '导入数据',
            
            // 通知消息
            todoAdded: '待办事项已添加',
            taskCompleted: '任务已完成',
            taskRestored: '任务已恢复',
            todoDeleted: '待办事项已删除',
            weatherUpdated: '天气信息已更新',
            timerSet: '倒计时设置为',
            timerFinished: '倒计时结束！',
            notesSaved: '便签已保存',
            dataExported: '数据导出成功',
            dataImported: '数据导入成功',
            dataImportError: '数据导入失败：文件格式错误',
            networkOnline: '网络连接已恢复',
            networkOffline: '网络连接已断开',
            error: '发生了一个错误，请刷新页面重试',
            
            // 快捷键提示
            shortcuts: '快捷键提示',
            shortcutSave: 'Ctrl/Cmd + S: 保存便签',
            shortcutAdd: 'Ctrl/Cmd + N: 添加待办事项',
            shortcutTimer: '空格键: 开始/暂停倒计时',
            shortcutClose: 'ESC: 关闭弹窗'
        }
    },
    
    'en': {
        name: 'English',
        flag: '🇺🇸',
        translations: {
            pageTitle: 'Utility Toolbox - Modern Tool Collection',
            mainTitle: 'Utility Toolbox',
            settings: 'Settings',
            
            clock: 'Real-time Clock',
            todo: 'Todo List',
            weather: 'Weather Info',
            timer: 'Timer',
            calculator: 'Calculator',
            notes: 'Quick Notes',
            
            weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            
            todayTasks: 'Today\'s Tasks',
            completed: 'Completed',
            addTodo: 'Add Todo Item',
            urgentTask: 'Urgent Task',
            cancel: 'Cancel',
            add: 'Add',
            confirm: 'Confirm',
            
            sunny: 'Sunny',
            cloudy: 'Cloudy',
            rainy: 'Rainy',
            
            setTimer: 'Set Timer',
            minutes: 'Minutes',
            seconds: 'Seconds',
            
            notesPlaceholder: 'Write your thoughts here...',
            charCount: 'Character Count',
            notSaved: 'Not Saved',
            saved: 'Saved',
            autoSaved: 'Auto Saved',
            
            settingsTitle: 'Settings',
            themeMode: 'Theme Mode',
            lightMode: 'Light Mode',
            darkMode: 'Dark Mode',
            autoMode: 'Follow System',
            citySettings: 'City Settings',
            cityPlaceholder: 'Enter city name',
            enableAnimations: 'Enable Animations',
            language: 'Language',
            dataManagement: 'Data Management',
            exportData: 'Export Data',
            importData: 'Import Data',
            
            todoAdded: 'Todo item added',
            taskCompleted: 'Task completed',
            taskRestored: 'Task restored',
            todoDeleted: 'Todo item deleted',
            weatherUpdated: 'Weather info updated',
            timerSet: 'Timer set to',
            timerFinished: 'Timer finished!',
            notesSaved: 'Notes saved',
            dataExported: 'Data exported successfully',
            dataImported: 'Data imported successfully',
            dataImportError: 'Data import failed: Invalid file format',
            networkOnline: 'Network connection restored',
            networkOffline: 'Network connection lost',
            error: 'An error occurred, please refresh the page',
            
            shortcuts: 'Keyboard Shortcuts',
            shortcutSave: 'Ctrl/Cmd + S: Save notes',
            shortcutAdd: 'Ctrl/Cmd + N: Add todo item',
            shortcutTimer: 'Space: Start/pause timer',
            shortcutClose: 'ESC: Close dialogs'
        }
    },
    
    'es': {
        name: 'Español',
        flag: '🇪🇸',
        translations: {
            pageTitle: 'Caja de Herramientas - Colección de Herramientas Modernas',
            mainTitle: 'Caja de Herramientas',
            settings: 'Configuración',
            
            clock: 'Reloj en Tiempo Real',
            todo: 'Lista de Tareas',
            weather: 'Información del Clima',
            timer: 'Temporizador',
            calculator: 'Calculadora',
            notes: 'Notas Rápidas',
            
            weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            
            todayTasks: 'Tareas de Hoy',
            completed: 'Completadas',
            addTodo: 'Agregar Tarea',
            urgentTask: 'Tarea Urgente',
            cancel: 'Cancelar',
            add: 'Agregar',
            confirm: 'Confirmar',
            
            sunny: 'Soleado',
            cloudy: 'Nublado',
            rainy: 'Lluvioso',
            
            setTimer: 'Configurar Temporizador',
            minutes: 'Minutos',
            seconds: 'Segundos',
            
            notesPlaceholder: 'Escribe tus pensamientos aquí...',
            charCount: 'Conteo de Caracteres',
            notSaved: 'No Guardado',
            saved: 'Guardado',
            autoSaved: 'Guardado Automático',
            
            settingsTitle: 'Configuración',
            themeMode: 'Modo de Tema',
            lightMode: 'Modo Claro',
            darkMode: 'Modo Oscuro',
            autoMode: 'Seguir Sistema',
            citySettings: 'Configuración de Ciudad',
            cityPlaceholder: 'Ingresa nombre de ciudad',
            enableAnimations: 'Habilitar Animaciones',
            language: 'Idioma',
            dataManagement: 'Gestión de Datos',
            exportData: 'Exportar Datos',
            importData: 'Importar Datos',
            
            todoAdded: 'Tarea agregada',
            taskCompleted: 'Tarea completada',
            taskRestored: 'Tarea restaurada',
            todoDeleted: 'Tarea eliminada',
            weatherUpdated: 'Información del clima actualizada',
            timerSet: 'Temporizador configurado a',
            timerFinished: '¡Temporizador terminado!',
            notesSaved: 'Notas guardadas',
            dataExported: 'Datos exportados exitosamente',
            dataImported: 'Datos importados exitosamente',
            dataImportError: 'Error al importar datos: Formato de archivo inválido',
            networkOnline: 'Conexión de red restaurada',
            networkOffline: 'Conexión de red perdida',
            error: 'Ocurrió un error, por favor recarga la página',
            
            shortcuts: 'Atajos de Teclado',
            shortcutSave: 'Ctrl/Cmd + S: Guardar notas',
            shortcutAdd: 'Ctrl/Cmd + N: Agregar tarea',
            shortcutTimer: 'Espacio: Iniciar/pausar temporizador',
            shortcutClose: 'ESC: Cerrar diálogos'
        }
    },
    
    'ko': {
        name: '한국어',
        flag: '🇰🇷',
        translations: {
            pageTitle: '유틸리티 도구상자 - 현대적인 도구 모음',
            mainTitle: '유틸리티 도구상자',
            settings: '설정',
            
            clock: '실시간 시계',
            todo: '할 일 목록',
            weather: '날씨 정보',
            timer: '타이머',
            calculator: '계산기',
            notes: '빠른 메모',
            
            weekdays: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
            
            todayTasks: '오늘의 작업',
            completed: '완료됨',
            addTodo: '할 일 추가',
            urgentTask: '긴급 작업',
            cancel: '취소',
            add: '추가',
            confirm: '확인',
            
            sunny: '맑음',
            cloudy: '흐림',
            rainy: '비',
            
            setTimer: '타이머 설정',
            minutes: '분',
            seconds: '초',
            
            notesPlaceholder: '여기에 생각을 적어보세요...',
            charCount: '문자 수',
            notSaved: '저장되지 않음',
            saved: '저장됨',
            autoSaved: '자동 저장됨',
            
            settingsTitle: '설정',
            themeMode: '테마 모드',
            lightMode: '라이트 모드',
            darkMode: '다크 모드',
            autoMode: '시스템 따라가기',
            citySettings: '도시 설정',
            cityPlaceholder: '도시 이름 입력',
            enableAnimations: '애니메이션 활성화',
            language: '언어',
            dataManagement: '데이터 관리',
            exportData: '데이터 내보내기',
            importData: '데이터 가져오기',
            
            todoAdded: '할 일이 추가되었습니다',
            taskCompleted: '작업이 완료되었습니다',
            taskRestored: '작업이 복원되었습니다',
            todoDeleted: '할 일이 삭제되었습니다',
            weatherUpdated: '날씨 정보가 업데이트되었습니다',
            timerSet: '타이머가 설정되었습니다',
            timerFinished: '타이머가 종료되었습니다!',
            notesSaved: '메모가 저장되었습니다',
            dataExported: '데이터가 성공적으로 내보내졌습니다',
            dataImported: '데이터가 성공적으로 가져와졌습니다',
            dataImportError: '데이터 가져오기 실패: 잘못된 파일 형식',
            networkOnline: '네트워크 연결이 복원되었습니다',
            networkOffline: '네트워크 연결이 끊어졌습니다',
            error: '오류가 발생했습니다. 페이지를 새로고침해주세요',
            
            shortcuts: '키보드 단축키',
            shortcutSave: 'Ctrl/Cmd + S: 메모 저장',
            shortcutAdd: 'Ctrl/Cmd + N: 할 일 추가',
            shortcutTimer: '스페이스바: 타이머 시작/일시정지',
            shortcutClose: 'ESC: 대화상자 닫기'
        }
    },
    
    'ja': {
        name: '日本語',
        flag: '🇯🇵',
        translations: {
            pageTitle: 'ユーティリティツールボックス - モダンツールコレクション',
            mainTitle: 'ユーティリティツールボックス',
            settings: '設定',
            
            clock: 'リアルタイム時計',
            todo: 'ToDoリスト',
            weather: '天気情報',
            timer: 'タイマー',
            calculator: '電卓',
            notes: 'クイックメモ',
            
            weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
            
            todayTasks: '今日のタスク',
            completed: '完了',
            addTodo: 'ToDoアイテムを追加',
            urgentTask: '緊急タスク',
            cancel: 'キャンセル',
            add: '追加',
            confirm: '確認',
            
            sunny: '晴れ',
            cloudy: '曇り',
            rainy: '雨',
            
            setTimer: 'タイマー設定',
            minutes: '分',
            seconds: '秒',
            
            notesPlaceholder: 'ここに考えを書いてください...',
            charCount: '文字数',
            notSaved: '未保存',
            saved: '保存済み',
            autoSaved: '自動保存済み',
            
            settingsTitle: '設定',
            themeMode: 'テーマモード',
            lightMode: 'ライトモード',
            darkMode: 'ダークモード',
            autoMode: 'システムに従う',
            citySettings: '都市設定',
            cityPlaceholder: '都市名を入力',
            enableAnimations: 'アニメーションを有効にする',
            language: '言語',
            dataManagement: 'データ管理',
            exportData: 'データエクスポート',
            importData: 'データインポート',
            
            todoAdded: 'ToDoアイテムが追加されました',
            taskCompleted: 'タスクが完了しました',
            taskRestored: 'タスクが復元されました',
            todoDeleted: 'ToDoアイテムが削除されました',
            weatherUpdated: '天気情報が更新されました',
            timerSet: 'タイマーが設定されました',
            timerFinished: 'タイマーが終了しました！',
            notesSaved: 'メモが保存されました',
            dataExported: 'データが正常にエクスポートされました',
            dataImported: 'データが正常にインポートされました',
            dataImportError: 'データインポート失敗：無効なファイル形式',
            networkOnline: 'ネットワーク接続が復元されました',
            networkOffline: 'ネットワーク接続が失われました',
            error: 'エラーが発生しました。ページを更新してください',
            
            shortcuts: 'キーボードショートカット',
            shortcutSave: 'Ctrl/Cmd + S: メモを保存',
            shortcutAdd: 'Ctrl/Cmd + N: ToDoアイテムを追加',
            shortcutTimer: 'スペース: タイマー開始/一時停止',
            shortcutClose: 'ESC: ダイアログを閉じる'
        }
    },
    
    'nl': {
        name: 'Nederlands',
        flag: '🇳🇱',
        translations: {
            pageTitle: 'Hulpmiddelen Toolbox - Moderne Tool Collectie',
            mainTitle: 'Hulpmiddelen Toolbox',
            settings: 'Instellingen',
            
            clock: 'Realtime Klok',
            todo: 'Takenlijst',
            weather: 'Weer Informatie',
            timer: 'Timer',
            calculator: 'Rekenmachine',
            notes: 'Snelle Notities',
            
            weekdays: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
            
            todayTasks: 'Taken van Vandaag',
            completed: 'Voltooid',
            addTodo: 'Taak Toevoegen',
            urgentTask: 'Urgente Taak',
            cancel: 'Annuleren',
            add: 'Toevoegen',
            confirm: 'Bevestigen',
            
            sunny: 'Zonnig',
            cloudy: 'Bewolkt',
            rainy: 'Regenachtig',
            
            setTimer: 'Timer Instellen',
            minutes: 'Minuten',
            seconds: 'Seconden',
            
            notesPlaceholder: 'Schrijf hier je gedachten...',
            charCount: 'Aantal Tekens',
            notSaved: 'Niet Opgeslagen',
            saved: 'Opgeslagen',
            autoSaved: 'Automatisch Opgeslagen',
            
            settingsTitle: 'Instellingen',
            themeMode: 'Thema Modus',
            lightMode: 'Lichte Modus',
            darkMode: 'Donkere Modus',
            autoMode: 'Volg Systeem',
            citySettings: 'Stad Instellingen',
            cityPlaceholder: 'Voer stadsnaam in',
            enableAnimations: 'Animaties Inschakelen',
            language: 'Taal',
            dataManagement: 'Gegevensbeheer',
            exportData: 'Gegevens Exporteren',
            importData: 'Gegevens Importeren',
            
            todoAdded: 'Taak toegevoegd',
            taskCompleted: 'Taak voltooid',
            taskRestored: 'Taak hersteld',
            todoDeleted: 'Taak verwijderd',
            weatherUpdated: 'Weer informatie bijgewerkt',
            timerSet: 'Timer ingesteld op',
            timerFinished: 'Timer afgelopen!',
            notesSaved: 'Notities opgeslagen',
            dataExported: 'Gegevens succesvol geëxporteerd',
            dataImported: 'Gegevens succesvol geïmporteerd',
            dataImportError: 'Gegevens importeren mislukt: Ongeldig bestandsformaat',
            networkOnline: 'Netwerkverbinding hersteld',
            networkOffline: 'Netwerkverbinding verloren',
            error: 'Er is een fout opgetreden, ververs de pagina',
            
            shortcuts: 'Toetsenbord Snelkoppelingen',
            shortcutSave: 'Ctrl/Cmd + S: Notities opslaan',
            shortcutAdd: 'Ctrl/Cmd + N: Taak toevoegen',
            shortcutTimer: 'Spatie: Timer starten/pauzeren',
            shortcutClose: 'ESC: Dialogen sluiten'
        }
    },
    
    'pt': {
        name: 'Português',
        flag: '🇵🇹',
        translations: {
            pageTitle: 'Caixa de Ferramentas - Coleção de Ferramentas Modernas',
            mainTitle: 'Caixa de Ferramentas',
            settings: 'Configurações',
            
            clock: 'Relógio em Tempo Real',
            todo: 'Lista de Tarefas',
            weather: 'Informações do Clima',
            timer: 'Cronômetro',
            calculator: 'Calculadora',
            notes: 'Notas Rápidas',
            
            weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
            
            todayTasks: 'Tarefas de Hoje',
            completed: 'Concluídas',
            addTodo: 'Adicionar Tarefa',
            urgentTask: 'Tarefa Urgente',
            cancel: 'Cancelar',
            add: 'Adicionar',
            confirm: 'Confirmar',
            
            sunny: 'Ensolarado',
            cloudy: 'Nublado',
            rainy: 'Chuvoso',
            
            setTimer: 'Configurar Cronômetro',
            minutes: 'Minutos',
            seconds: 'Segundos',
            
            notesPlaceholder: 'Escreva seus pensamentos aqui...',
            charCount: 'Contagem de Caracteres',
            notSaved: 'Não Salvo',
            saved: 'Salvo',
            autoSaved: 'Salvo Automaticamente',
            
            settingsTitle: 'Configurações',
            themeMode: 'Modo do Tema',
            lightMode: 'Modo Claro',
            darkMode: 'Modo Escuro',
            autoMode: 'Seguir Sistema',
            citySettings: 'Configurações da Cidade',
            cityPlaceholder: 'Digite o nome da cidade',
            enableAnimations: 'Habilitar Animações',
            language: 'Idioma',
            dataManagement: 'Gerenciamento de Dados',
            exportData: 'Exportar Dados',
            importData: 'Importar Dados',
            
            todoAdded: 'Tarefa adicionada',
            taskCompleted: 'Tarefa concluída',
            taskRestored: 'Tarefa restaurada',
            todoDeleted: 'Tarefa removida',
            weatherUpdated: 'Informações do clima atualizadas',
            timerSet: 'Cronômetro configurado para',
            timerFinished: 'Cronômetro finalizado!',
            notesSaved: 'Notas salvas',
            dataExported: 'Dados exportados com sucesso',
            dataImported: 'Dados importados com sucesso',
            dataImportError: 'Falha ao importar dados: Formato de arquivo inválido',
            networkOnline: 'Conexão de rede restaurada',
            networkOffline: 'Conexão de rede perdida',
            error: 'Ocorreu um erro, por favor atualize a página',
            
            shortcuts: 'Atalhos do Teclado',
            shortcutSave: 'Ctrl/Cmd + S: Salvar notas',
            shortcutAdd: 'Ctrl/Cmd + N: Adicionar tarefa',
            shortcutTimer: 'Espaço: Iniciar/pausar cronômetro',
            shortcutClose: 'ESC: Fechar diálogos'
        }
    },
    
    'th': {
        name: 'ไทย',
        flag: '🇹🇭',
        translations: {
            pageTitle: 'กล่องเครื่องมือ - คอลเลกชันเครื่องมือสมัยใหม่',
            mainTitle: 'กล่องเครื่องมือ',
            settings: 'การตั้งค่า',
            
            clock: 'นาฬิกาเรียลไทม์',
            todo: 'รายการสิ่งที่ต้องทำ',
            weather: 'ข้อมูลสภาพอากาศ',
            timer: 'ตัวจับเวลา',
            calculator: 'เครื่องคิดเลข',
            notes: 'บันทึกด่วน',
            
            weekdays: ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'],
            
            todayTasks: 'งานวันนี้',
            completed: 'เสร็จแล้ว',
            addTodo: 'เพิ่มรายการ',
            urgentTask: 'งานด่วน',
            cancel: 'ยกเลิก',
            add: 'เพิ่ม',
            confirm: 'ยืนยัน',
            
            sunny: 'แจ่มใส',
            cloudy: 'มีเมฆ',
            rainy: 'ฝนตก',
            
            setTimer: 'ตั้งเวลา',
            minutes: 'นาที',
            seconds: 'วินาที',
            
            notesPlaceholder: 'เขียนความคิดของคุณที่นี่...',
            charCount: 'จำนวนตัวอักษร',
            notSaved: 'ยังไม่ได้บันทึก',
            saved: 'บันทึกแล้ว',
            autoSaved: 'บันทึกอัตโนมัติ',
            
            settingsTitle: 'การตั้งค่า',
            themeMode: 'โหมดธีม',
            lightMode: 'โหมดสว่าง',
            darkMode: 'โหมดมืด',
            autoMode: 'ตามระบบ',
            citySettings: 'ตั้งค่าเมือง',
            cityPlaceholder: 'ใส่ชื่อเมือง',
            enableAnimations: 'เปิดใช้งานแอนิเมชัน',
            language: 'ภาษา',
            dataManagement: 'การจัดการข้อมูล',
            exportData: 'ส่งออกข้อมูล',
            importData: 'นำเข้าข้อมูล',
            
            todoAdded: 'เพิ่มรายการแล้ว',
            taskCompleted: 'งานเสร็จแล้ว',
            taskRestored: 'คืนค่างานแล้ว',
            todoDeleted: 'ลบรายการแล้ว',
            weatherUpdated: 'อัปเดตข้อมูลสภาพอากาศแล้ว',
            timerSet: 'ตั้งเวลาเป็น',
            timerFinished: 'หมดเวลาแล้ว!',
            notesSaved: 'บันทึกโน้ตแล้ว',
            dataExported: 'ส่งออกข้อมูลสำเร็จ',
            dataImported: 'นำเข้าข้อมูลสำเร็จ',
            dataImportError: 'นำเข้าข้อมูลไม่สำเร็จ: รูปแบบไฟล์ไม่ถูกต้อง',
            networkOnline: 'เชื่อมต่อเครือข่ายแล้ว',
            networkOffline: 'เครือข่ายขาดการเชื่อมต่อ',
            error: 'เกิดข้อผิดพลาด กรุณารีเฟรชหน้า',
            
            shortcuts: 'แป้นพิมพ์ลัด',
            shortcutSave: 'Ctrl/Cmd + S: บันทึกโน้ต',
            shortcutAdd: 'Ctrl/Cmd + N: เพิ่มรายการ',
            shortcutTimer: 'Space: เริ่ม/หยุดชั่วคราว',
            shortcutClose: 'ESC: ปิดหน้าต่าง'
        }
    }
};

// 当前语言
let currentLanguage = localStorage.getItem('language') || 'zh-CN';

// 获取翻译文本
function t(key) {
    const lang = languages[currentLanguage];
    if (lang && lang.translations[key]) {
        return lang.translations[key];
    }
    // 如果找不到翻译，返回中文作为默认值
    return languages['zh-CN'].translations[key] || key;
}

// 切换语言
function switchLanguage(langCode) {
    if (languages[langCode]) {
        currentLanguage = langCode;
        localStorage.setItem('language', langCode);
        updatePageLanguage();
        showNotification(t('languageChanged') || '语言已切换');
    }
}

// 更新页面语言
function updatePageLanguage() {
    // 更新页面标题
    document.title = t('pageTitle');
    
    // 更新主标题
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        mainTitle.innerHTML = `<i class="fas fa-toolbox"></i>${t('mainTitle')}`;
    }
    
    // 更新工具卡片标题
    updateCardTitles();
    
    // 更新设置面板
    updateSettingsPanel();
    
    // 更新模态框
    updateModals();
    
    // 更新其他UI元素
    updateOtherElements();
}

// 更新卡片标题
function updateCardTitles() {
    const cardTitles = {
        'clock': t('clock'),
        'todo': t('todo'),
        'weather': t('weather'),
        'timer': t('timer'),
        'calculator': t('calculator'),
        'notes': t('notes')
    };
    
    Object.keys(cardTitles).forEach(tool => {
        const card = document.querySelector(`[data-tool="${tool}"] h3`);
        if (card) {
            const icon = card.querySelector('i');
            card.innerHTML = '';
            if (icon) card.appendChild(icon);
            card.appendChild(document.createTextNode(cardTitles[tool]));
        }
    });
}

// 更新设置面板
function updateSettingsPanel() {
    // 设置按钮
    const settingsBtn = document.getElementById('settingsBtn');
    if (settingsBtn) {
        settingsBtn.title = t('settings');
    }
    
    // 更新设置面板标题
    const settingsTitle = document.querySelector('.settings-header h3');
    if (settingsTitle) {
        settingsTitle.textContent = t('settingsTitle');
    }
    
    // 更新设置项标签
    const settingLabels = document.querySelectorAll('.setting-item label');
    settingLabels.forEach((label, index) => {
        const forAttr = label.getAttribute('for');
        if (forAttr === 'themeSelect') {
            label.textContent = t('themeMode');
        } else if (forAttr === 'cityInput') {
            label.textContent = t('citySettings');
        } else if (forAttr === 'languageSelect') {
            label.textContent = t('language');
        } else if (label.querySelector('input[type="checkbox"]')) {
            // 动画效果复选框
            const checkbox = label.querySelector('input[type="checkbox"]');
            const text = label.childNodes[label.childNodes.length - 1];
            if (text && text.nodeType === Node.TEXT_NODE) {
                text.textContent = t('enableAnimations');
            }
        }
    });
    
    // 更新主题选择选项
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
        const options = themeSelect.querySelectorAll('option');
        if (options[0]) options[0].textContent = t('lightMode');
        if (options[1]) options[1].textContent = t('darkMode');
        if (options[2]) options[2].textContent = t('autoMode');
    }
    
    // 更新城市输入框占位符
    const cityInput = document.getElementById('cityInput');
    if (cityInput) {
        cityInput.placeholder = t('cityPlaceholder');
    }
    
    // 更新数据管理部分
    const dataManagementLabel = document.querySelector('.setting-item:last-child label');
    if (dataManagementLabel && dataManagementLabel.textContent.includes('数据管理')) {
        dataManagementLabel.textContent = t('dataManagement');
    }
    
    const exportBtn = document.querySelector('button[onclick="exportData()"]');
    if (exportBtn) {
        exportBtn.innerHTML = `<i class="fas fa-download"></i> ${t('exportData')}`;
    }
    
    const importLabel = document.querySelector('label.btn.btn-secondary');
    if (importLabel && importLabel.innerHTML.includes('导入数据')) {
        importLabel.innerHTML = `<i class="fas fa-upload"></i> ${t('importData')}<input type="file" accept=".json" style="display: none;" onchange="importData(this.files[0])">`;
    }
    
    // 更新待办事项统计
    const todoCountLabel = document.querySelector('.todo-count');
    const completedCountLabel = document.querySelector('.completed-count');
    if (todoCountLabel) {
        const count = document.getElementById('todoCount').textContent;
        todoCountLabel.innerHTML = `${t('todayTasks')}: <span id="todoCount">${count}</span>`;
    }
    if (completedCountLabel) {
        const count = document.getElementById('completedCount').textContent;
        completedCountLabel.innerHTML = `${t('completed')}: <span id="completedCount">${count}</span>`;
    }
    
    // 更新便签占位符和信息
    const notesTextarea = document.getElementById('notesTextarea');
    if (notesTextarea) {
        notesTextarea.placeholder = t('notesPlaceholder');
    }
    
    const charCountLabel = document.querySelector('.char-count');
    if (charCountLabel) {
        const count = document.getElementById('charCount').textContent;
        charCountLabel.innerHTML = `${t('charCount')}: <span id="charCount">${count}</span>`;
    }
    
    // 更新最后保存状态
    const lastSaved = document.getElementById('lastSaved');
    if (lastSaved && lastSaved.textContent === '未保存') {
        lastSaved.textContent = t('notSaved');
    } else if (lastSaved && lastSaved.textContent === '已保存') {
        lastSaved.textContent = t('saved');
    }
}

// 更新模态框
function updateModals() {
    // 待办事项模态框
    const todoModalTitle = document.querySelector('#todoModal .modal-header h3');
    if (todoModalTitle) todoModalTitle.textContent = t('addTodo');
    
    const todoInput = document.getElementById('todoInput');
    if (todoInput) todoInput.placeholder = t('addTodo') + '...';
    
    const urgentTaskLabel = document.querySelector('#todoModal .todo-options label');
    if (urgentTaskLabel) {
        const checkbox = urgentTaskLabel.querySelector('input[type="checkbox"]');
        const checkmark = urgentTaskLabel.querySelector('.checkmark');
        urgentTaskLabel.innerHTML = '';
        urgentTaskLabel.appendChild(checkbox);
        urgentTaskLabel.appendChild(checkmark);
        urgentTaskLabel.appendChild(document.createTextNode(t('urgentTask')));
    }
    
    const cancelTodoBtn = document.getElementById('cancelTodoBtn');
    const confirmTodoBtn = document.getElementById('confirmTodoBtn');
    if (cancelTodoBtn) cancelTodoBtn.textContent = t('cancel');
    if (confirmTodoBtn) confirmTodoBtn.textContent = t('add');
    
    // 倒计时器模态框
    const timerModalTitle = document.querySelector('#timerModal .modal-header h3');
    if (timerModalTitle) timerModalTitle.textContent = t('setTimer');
    
    const minutesLabel = document.querySelector('#timerModal .time-input-group:first-child label');
    const secondsLabel = document.querySelector('#timerModal .time-input-group:last-child label');
    if (minutesLabel) minutesLabel.textContent = t('minutes');
    if (secondsLabel) secondsLabel.textContent = t('seconds');
    
    const cancelTimerBtn = document.getElementById('cancelTimerBtn');
    const confirmTimerBtn = document.getElementById('confirmTimerBtn');
    if (cancelTimerBtn) cancelTimerBtn.textContent = t('cancel');
    if (confirmTimerBtn) confirmTimerBtn.textContent = t('confirm');
}

// 更新其他UI元素
function updateOtherElements() {
    // 更新星期显示
    updateWeekdayDisplay();
}

// 更新星期显示
function updateWeekdayDisplay() {
    const weekdayElement = document.getElementById('currentWeekday');
    if (weekdayElement) {
        const now = new Date();
        const weekdays = t('weekdays');
        if (Array.isArray(weekdays)) {
            weekdayElement.textContent = weekdays[now.getDay()];
        }
    }
}

// 获取可用语言列表
function getAvailableLanguages() {
    return Object.keys(languages).map(code => ({
        code: code,
        name: languages[code].name,
        flag: languages[code].flag
    }));
}

// 为新工具添加多语言翻译
Object.keys(languages).forEach(langCode => {
    const lang = languages[langCode];
    
    // 添加新工具的翻译
    const newTranslations = {
        // 文本处理工具
        'textTools': langCode === 'zh-CN' ? '文本处理' : 
                    langCode === 'en' ? 'Text Tools' :
                    langCode === 'es' ? 'Herramientas de Texto' :
                    langCode === 'ko' ? '텍스트 도구' :
                    langCode === 'ja' ? 'テキストツール' :
                    langCode === 'nl' ? 'Tekstgereedschap' :
                    langCode === 'pt' ? 'Ferramentas de Texto' :
                    'เครื่องมือข้อความ',
        'textConverted': langCode === 'zh-CN' ? '文本已转换' : 
                        langCode === 'en' ? 'Text converted' :
                        langCode === 'es' ? 'Texto convertido' :
                        langCode === 'ko' ? '텍스트가 변환되었습니다' :
                        langCode === 'ja' ? 'テキストが変換されました' :
                        langCode === 'nl' ? 'Tekst geconverteerd' :
                        langCode === 'pt' ? 'Texto convertido' :
                        'ข้อความถูกแปลงแล้ว',
        'textAnalyzed': langCode === 'zh-CN' ? '文本已分析' : 
                       langCode === 'en' ? 'Text analyzed' :
                       langCode === 'es' ? 'Texto analizado' :
                       langCode === 'ko' ? '텍스트가 분석되었습니다' :
                       langCode === 'ja' ? 'テキストが分析されました' :
                       langCode === 'nl' ? 'Tekst geanalyseerd' :
                       langCode === 'pt' ? 'Texto analisado' :
                       'ข้อความถูกวิเคราะห์แล้ว',
        'textReversed': langCode === 'zh-CN' ? '文本已反转' : 
                       langCode === 'en' ? 'Text reversed' :
                       langCode === 'es' ? 'Texto invertido' :
                       langCode === 'ko' ? '텍스트가 뒤집혔습니다' :
                       langCode === 'ja' ? 'テキストが反転されました' :
                       langCode === 'nl' ? 'Tekst omgekeerd' :
                       langCode === 'pt' ? 'Texto invertido' :
                       'ข้อความถูกกลับด้านแล้ว',
        
        // 二维码生成器
        'qrGenerated': langCode === 'zh-CN' ? '二维码已生成' : 
                      langCode === 'en' ? 'QR code generated' :
                      langCode === 'es' ? 'Código QR generado' :
                      langCode === 'ko' ? 'QR 코드가 생성되었습니다' :
                      langCode === 'ja' ? 'QRコードが生成されました' :
                      langCode === 'nl' ? 'QR-code gegenereerd' :
                      langCode === 'pt' ? 'Código QR gerado' :
                      'QR โค้ดถูกสร้างแล้ว',
        'qrDownload': langCode === 'zh-CN' ? '二维码下载功能即将推出' : 
                     langCode === 'en' ? 'QR code download feature coming soon' :
                     langCode === 'es' ? 'Función de descarga de código QR próximamente' :
                     langCode === 'ko' ? 'QR 코드 다운로드 기능 곧 출시' :
                     langCode === 'ja' ? 'QRコードダウンロード機能は近日公開' :
                     langCode === 'nl' ? 'QR-code downloadfunctie komt binnenkort' :
                     langCode === 'pt' ? 'Recurso de download de código QR em breve' :
                     'ฟีเจอร์ดาวน์โหลด QR โค้ดเร็วๆ นี้',
        
        // 密码生成器
        'passwordGenerated': langCode === 'zh-CN' ? '密码已生成' : 
                            langCode === 'en' ? 'Password generated' :
                            langCode === 'es' ? 'Contraseña generada' :
                            langCode === 'ko' ? '비밀번호가 생성되었습니다' :
                            langCode === 'ja' ? 'パスワードが生成されました' :
                            langCode === 'nl' ? 'Wachtwoord gegenereerd' :
                            langCode === 'pt' ? 'Senha gerada' :
                            'รหัสผ่านถูกสร้างแล้ว',
        'passwordCopied': langCode === 'zh-CN' ? '密码已复制到剪贴板' : 
                         langCode === 'en' ? 'Password copied to clipboard' :
                         langCode === 'es' ? 'Contraseña copiada al portapapeles' :
                         langCode === 'ko' ? '비밀번호가 클립보드에 복사되었습니다' :
                         langCode === 'ja' ? 'パスワードがクリップボードにコピーされました' :
                         langCode === 'nl' ? 'Wachtwoord gekopieerd naar klembord' :
                         langCode === 'pt' ? 'Senha copiada para a área de transferência' :
                         'รหัสผ่านถูกคัดลอกไปยังคลิปบอร์ดแล้ว',
        'selectPasswordOptions': langCode === 'zh-CN' ? '请至少选择一个选项' : 
                                langCode === 'en' ? 'Please select at least one option' :
                                langCode === 'es' ? 'Por favor selecciona al menos una opción' :
                                langCode === 'ko' ? '최소 하나의 옵션을 선택해주세요' :
                                langCode === 'ja' ? '少なくとも1つのオプションを選択してください' :
                                langCode === 'nl' ? 'Selecteer ten minste één optie' :
                                langCode === 'pt' ? 'Por favor, selecione pelo menos uma opção' :
                                'กรุณาเลือกอย่างน้อยหนึ่งตัวเลือก',
        'copyFailed': langCode === 'zh-CN' ? '复制失败' : 
                     langCode === 'en' ? 'Failed to copy' :
                     langCode === 'es' ? 'Error al copiar' :
                     langCode === 'ko' ? '복사 실패' :
                     langCode === 'ja' ? 'コピーに失敗しました' :
                     langCode === 'nl' ? 'Kopiëren mislukt' :
                     langCode === 'pt' ? 'Falha ao copiar' :
                     'คัดลอกไม่สำเร็จ',
        
        // 颜色工具
        'randomColorGenerated': langCode === 'zh-CN' ? '随机颜色已生成' : 
                               langCode === 'en' ? 'Random color generated' :
                               langCode === 'es' ? 'Color aleatorio generado' :
                               langCode === 'ko' ? '랜덤 색상이 생성되었습니다' :
                               langCode === 'ja' ? 'ランダムカラーが生成されました' :
                               langCode === 'nl' ? 'Willekeurige kleur gegenereerd' :
                               langCode === 'pt' ? 'Cor aleatória gerada' :
                               'สีสุ่มถูกสร้างแล้ว',
        
        // Base64编码工具
        'textEncoded': langCode === 'zh-CN' ? '文本已编码为Base64' : 
                      langCode === 'en' ? 'Text encoded to Base64' :
                      langCode === 'es' ? 'Texto codificado a Base64' :
                      langCode === 'ko' ? '텍스트가 Base64로 인코딩되었습니다' :
                      langCode === 'ja' ? 'テキストがBase64にエンコードされました' :
                      langCode === 'nl' ? 'Tekst gecodeerd naar Base64' :
                      langCode === 'pt' ? 'Texto codificado para Base64' :
                      'ข้อความถูกเข้ารหัสเป็น Base64',
        'textDecoded': langCode === 'zh-CN' ? '文本已从Base64解码' : 
                      langCode === 'en' ? 'Text decoded from Base64' :
                      langCode === 'es' ? 'Texto decodificado de Base64' :
                      langCode === 'ko' ? '텍스트가 Base64에서 디코딩되었습니다' :
                      langCode === 'ja' ? 'テキストがBase64からデコードされました' :
                      langCode === 'nl' ? 'Tekst gedecodeerd van Base64' :
                      langCode === 'pt' ? 'Texto decodificado de Base64' :
                      'ข้อความถูกถอดรหัสจาก Base64',
        'encodeFailed': langCode === 'zh-CN' ? '编码失败' : 
                       langCode === 'en' ? 'Encoding failed' :
                       langCode === 'es' ? 'Error de codificación' :
                       langCode === 'ko' ? '인코딩 실패' :
                       langCode === 'ja' ? 'エンコードに失敗しました' :
                       langCode === 'nl' ? 'Codering mislukt' :
                       langCode === 'pt' ? 'Falha na codificação' :
                       'การเข้ารหัสล้มเหลว',
        'decodeFailed': langCode === 'zh-CN' ? '解码失败' : 
                       langCode === 'en' ? 'Decoding failed' :
                       langCode === 'es' ? 'Error de decodificación' :
                       langCode === 'ko' ? '디코딩 실패' :
                       langCode === 'ja' ? 'デコードに失敗しました' :
                       langCode === 'nl' ? 'Decodering mislukt' :
                       langCode === 'pt' ? 'Falha na decodificação' :
                       'การถอดรหัสล้มเหลว',
        'contentSwapped': langCode === 'zh-CN' ? '内容已交换' : 
                         langCode === 'en' ? 'Content swapped' :
                         langCode === 'es' ? 'Contenido intercambiado' :
                         langCode === 'ko' ? '내용이 교체되었습니다' :
                         langCode === 'ja' ? 'コンテンツが交換されました' :
                         langCode === 'nl' ? 'Inhoud gewisseld' :
                         langCode === 'pt' ? 'Conteúdo trocado' :
                         'เนื้อหาถูกสลับแล้ว'
    };
    
    // 合并新翻译到现有语言包
    Object.assign(lang.translations, newTranslations);
});

// 导出语言相关函数
window.i18n = {
    t,
    switchLanguage,
    updatePageLanguage,
    getAvailableLanguages,
    getCurrentLanguage: () => currentLanguage
};
