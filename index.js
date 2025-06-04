document.addEventListener('DOMContentLoaded', function () {

    // Đối tượng chứa các bản dịch
    const translations = {
        vi: {
            home: "Trang chủ",
            about: "Giới thiệu",
            skills: "Kỹ năng",
            projects: "Dự án",
            contact: "Liên hệ",
            hello: "Xin chào, tôi là",
            position: "Lập trình viên Full-stack",
            intro: "Tôi là lập trình viên với 5 năm kinh nghiệm...",
            download_cv: "Tải CV",
            view_projects: "Xem tất cả dự án",
            contact_me: "Liên hệ với tôi",
            send_message: "Gửi tin nhắn",
            // Thêm các bản dịch khác tại đây
        },
        en: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact",
            hello: "Hello, I'm",
            position: "Full-stack Developer",
            intro: "I'm a developer with 5 years of experience...",
            download_cv: "Download CV",
            view_projects: "View all projects",
            contact_me: "Contact me",
            send_message: "Send message",
            // Thêm các bản dịch khác tại đây
        },
        ja: {
            home: "ホーム",
            about: "自己紹介",
            skills: "スキル",
            projects: "プロジェクト",
            contact: "連絡先",
            hello: "こんにちは、私は",
            position: "フルスタック開発者",
            intro: "私は5年の経験を持つ開発者です...",
            download_cv: "履歴書をダウンロード",
            view_projects: "すべてのプロジェクトを見る",
            contact_me: "お問い合わせ",
            send_message: "メッセージを送る",
            // Thêm các bản dịch khác tại đây
        }
    };

    // Hàm cập nhật ngôn ngữ
    function updateLanguage(lang) {
        // Lưu ngôn ngữ đã chọn vào localStorage
        localStorage.setItem('language', lang);

        // Cập nhật text trên nút ngôn ngữ
        document.getElementById('current-language').textContent = lang.toUpperCase();

        // Cập nhật tất cả các phần tử có thuộc tính data-i18n
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Cập nhật placeholder cho input
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Cập nhật các thuộc tính khác nếu cần
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute('title', translations[lang][key]);
            }
        });
    }

    // Khởi tạo ngôn ngữ khi tải trang
    document.addEventListener('DOMContentLoaded', function () {
        // Lấy ngôn ngữ từ localStorage hoặc mặc định là 'vi'
        const savedLang = localStorage.getItem('language') || 'vi';
        updateLanguage(savedLang);
    });

    // Lấy các phần tử DOM cho dropdown ngôn ngữ
    const languageToggle = document.getElementById('language-toggle');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageArrow = document.getElementById('language-arrow');
    // const currentLanguage = document.getElementById('current-language');



    // Toggle dropdown ngôn ngữ
    languageToggle.addEventListener('click', function (e) {
        e.stopPropagation();

        const isHidden = languageDropdown.classList.contains('hidden');

        if (isHidden) {
            languageDropdown.classList.remove('hidden');
            languageDropdown.classList.remove('scale-y-0');
            languageDropdown.classList.add('scale-y-100');
            languageArrow.classList.add('rotate-180');
        } else {
            hideLanguageDropdown();
        }
    });

    // Ẩn dropdown khi click ra ngoài
    document.addEventListener('click', function () {
        hideLanguageDropdown();
    });

    // Xử lý khi chọn ngôn ngữ
    document.querySelectorAll('#language-dropdown button').forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
            hideLanguageDropdown();
        });
    });


    // Hàm ẩn dropdown
    function hideLanguageDropdown() {
        languageDropdown.classList.add('hidden');
        languageDropdown.classList.remove('scale-y-100');
        languageDropdown.classList.add('scale-y-0');
        languageArrow.classList.remove('rotate-180');
    }


    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('active');
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
    // const darkModeIcon = document.getElementById('dark-mode-icon');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    const mobileSunIcon = document.getElementById('mobile-sun-icon');
    const mobileMoonIcon = document.getElementById('mobile-moon-icon');
    // Check for saved dark mode preference
    // ...existing code...
    // Check for saved dark mode preference
    const darkMode = localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    // ...existing code...
    // Apply initial dark mode state
    if (darkMode) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }

    const darkMobileMode = localStorage.getItem('darkMode') === 'true' ||
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Apply initial dark mode mobile state
    if (darkMobileMode) {
        document.documentElement.classList.add('dark');
        mobileMoonIcon.classList.add('hidden');
        mobileSunIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        mobileMoonIcon.classList.remove('hidden');
        mobileSunIcon.classList.add('hidden');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark);

        // Toggle icons
        moonIcon.classList.toggle('hidden');
        sunIcon.classList.toggle('hidden');
    });
    // Toggle mobile mode
    mobileDarkModeToggle.addEventListener('click', function () {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark);

        // Toggle icons
        mobileMoonIcon.classList.toggle('hidden');
        mobileSunIcon.classList.toggle('hidden');
    });

    /// Form gửi tin nhắn
    document.getElementById('contact-form').addEventListener('submit', async function (event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        try {
            const response = await fetch(window.__ENV.API_URL, {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                alert('Gửi tin nhắn thành công!');
                this.reset();
            } else {
                alert('Gửi tin nhắn thất bại, vui lòng thử lại!');
            }
        } catch (error) {
            alert('Có lỗi xảy ra, vui lòng thử lại sau!');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.setAttribute('data-width', width);
        observer.observe(bar);
    });

    ///

    // 1. Lấy dữ liệu từ GitHub API
    async function fetchGitHubStats() {
        try {
            const response = await fetch('https://api.github.com/users/DangNguyenVuHoang');
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
            return null;
        }
    }

    // 2. Animation counter
    function animateCounter(elementId, target, duration = 2000) {
        const element = document.getElementById(elementId);
        const start = 0;
        const increment = target / (duration / 16); // ~60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }

    // 3. Ước lượng số commit (GitHub API không cung cấp tổng commit)
    async function estimateTotalCommits(username) {
        try {
            const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
            const repos = await reposRes.json();

            let totalCommits = 0;
            // Giới hạn kiểm tra 5 repo đầu để tránh rate limit
            for (const repo of repos.slice(0, 5)) {
                const commitsRes = await fetch(`https://api.github.com/repos/${username}/${repo.name}/contributors`);
                const contributors = await commitsRes.json();
                const myContributions = contributors.find(c => c.login === username);
                if (myContributions) totalCommits += myContributions.contributions;
            }

            // Ước lượng cho tất cả repo
            return Math.floor(totalCommits * (repos.length / 5));
        } catch (error) {
            console.error('Error estimating commits:', error);
            return 1200; // Fallback number
        }
    }

    // 4. Khởi tạo
    async function initGitHubStats() {
        const data = await fetchGitHubStats();
        if (data) {
            animateCounter('repo-count', data.public_repos);
            animateCounter('follower-count', data.followers);

            const totalCommits = await estimateTotalCommits('DangNguyenVuHoang');
            animateCounter('commit-count', totalCommits);
        } else {
            // Fallback values nếu API fail
            animateCounter('repo-count', 15);
            animateCounter('follower-count', 42);
            animateCounter('commit-count', 1284);
        }
    }

    // Intersection Observer - Chỉ load khi section hiển thị
    const observer1 = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            initGitHubStats();
            observer1.unobserve(entries[0].target);
        }
    }, { threshold: 0.1 });

    observer1.observe(document.getElementById('stats'));

    //////////

    // Greeting Modal Functionality
    class GreetingModal {
        constructor() {
            this.modal = document.getElementById('greeting-modal');
            this.nameInput = document.getElementById('visitor-name');
            this.saveBtn = document.getElementById('save-name-btn');
            this.skipBtn = document.getElementById('skip-btn');
            this.closeBtn = document.getElementById('close-greeting-btn');
            this.nameInputContainer = document.getElementById('name-input-container');
            this.welcomeBackContainer = document.getElementById('welcome-back-container');
            this.savedNameElement = document.getElementById('saved-name');
            this.greetingText = document.getElementById('greeting-text');

            this.init();
        }

        init() {
            const lastShown = localStorage.getItem('greetingLastShown');
            const now = Date.now();
            const oneDay = 24 * 60 * 60 * 1000;

            if (!lastShown || (now - lastShown > oneDay)) {
                setTimeout(() => this.showGreeting(), 1000);
            }

            this.setupEvents();
            this.updateGreetingText();
        }

        showGreeting() {
            const savedName = localStorage.getItem('visitorName');

            if (savedName) {
                this.savedNameElement.textContent = savedName;
                this.nameInputContainer.classList.add('hidden');
                this.welcomeBackContainer.classList.remove('hidden');
            } else {
                this.nameInputContainer.classList.remove('hidden');
                this.welcomeBackContainer.classList.add('hidden');
            }

            this.modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        hideGreeting() {
            this.modal.classList.add('hidden');
            document.body.style.overflow = '';
            localStorage.setItem('greetingLastShown', Date.now());
        }

        saveName() {
            const name = this.nameInput.value.trim();
            if (name) {
                localStorage.setItem('visitorName', name);
                this.savedNameElement.textContent = name;
                this.nameInputContainer.classList.add('hidden');
                this.welcomeBackContainer.classList.remove('hidden');
            }
        }

        updateGreetingText() {
            const hour = new Date().getHours();
            let greeting = 'Xin chào';

            if (hour < 11) greeting = 'Chào buổi sáng';
            else if (hour < 13) greeting = 'Chào buổi trưa';
            else if (hour < 18) greeting = 'Chào buổi chiều';
            else greeting = 'Chào buổi tối';

            this.greetingText.textContent = `${greeting}! 👋`;
        }

        setupEvents() {
            this.saveBtn.addEventListener('click', () => this.saveName());
            this.skipBtn.addEventListener('click', () => this.hideGreeting());
            this.closeBtn.addEventListener('click', () => this.hideGreeting());

            this.nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.saveName();
            });

            this.modal.addEventListener('click', (e) => {
                if (e.target === this.modal) this.hideGreeting();
            });
        }
    }

    new GreetingModal();



    /////

    // DOM Elements
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatIcon = document.getElementById('chat-icon');
    const closeIcon = document.getElementById('close-icon');
    const minimizeBtn = document.getElementById('minimize-chat');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    // State
    let isChatOpen = false;
    let isProcessing = false;

    // Toggle Chat Window
    chatbotToggle.addEventListener('click', () => {
        isChatOpen = !isChatOpen;
        chatbotWindow.classList.toggle('hidden', !isChatOpen);
        chatIcon.classList.toggle('hidden', isChatOpen);
        closeIcon.classList.toggle('hidden', !isChatOpen);

        if (isChatOpen) {
            chatbotWindow.style.transform = 'translateY(20px)';
            setTimeout(() => {
                chatbotWindow.style.transform = 'translateY(0)';
            }, 10);
        }
    });

    // Minimize Chat
    minimizeBtn.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
        chatIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        isChatOpen = false;
    });

    // Send Message
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '' || isProcessing) return;

        // Add user message to chat
        addMessage(message, 'user');
        userInput.value = '';
        isProcessing = true;

        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'chat-message bot-message';
        typingIndicator.innerHTML = `
      <div class="message-content bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg">
        <div class="flex space-x-2">
          <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
          <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0.2s"></div>
          <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0.4s"></div>
        </div>
      </div>
    `;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate API call (replace with actual API call)
        setTimeout(() => {
            // Remove typing indicator
            typingIndicator.remove();

            // Get bot response
            const response = getBotResponse(message);
            addMessage(response, 'bot');
            isProcessing = false;
        }, 1000 + Math.random() * 2000); // Random delay 1-3s
    }

    // Handle Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Handle Send button click
    sendBtn.addEventListener('click', sendMessage);

    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${sender}-message mb-2`;

        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.innerHTML = `
      <div class="message-content ${sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'} p-3 rounded-lg">
        ${content}
      </div>
      <div class="message-time text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">${timeString}</div>
    `;

        // Remove typing indicator if exists
        const typingIndicators = document.querySelectorAll('.chat-message .flex.space-x-2');
        typingIndicators.forEach(indicator => indicator.parentElement.parentElement.remove());

        chatMessages.appendChild(messageDiv);

        // Scroll to bottom smoothly
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }

function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
//     const chatState = {
//     loveTopic: false,
//     loveLevel: 0,
//     userConfession: false
        
// };
        if (!window.chatState) {
        window.chatState = {
            loveTopic: false,
            loveLevel: 0,
            userConfession: false,
            mentionedHuong: false, // Thêm trạng thái mới
            fortuneTellingMode: false // Thêm trạng thái bói toán
        };
    }


    // === GENERAL QUESTIONS ===
    if (lowerMsg.includes('giới thiệu') || lowerMsg.includes('bạn là ai')) {
        return "Tôi là trợ lý ảo của Đặng Nguyễn Vũ Hoàng - một Full-stack Developer với kinh nghiệm phát triển web và ứng dụng di động. Hoàng hiện tập trung vào Reactjs và Javascript định hướng phát triển tương lai sẽ học thêm về Node.js, Java Spring Boot và những kiến thức về BackEnd.";
    }
    else if (lowerMsg.includes('học vấn') || lowerMsg.includes('education level') || lowerMsg.includes('trình độ học vấn ')) {
        return "Hoàng đã tốt nghiệp ngành công nghệ thông tin tại trường ĐH FPT. Có chứng chỉ giao tiếp tiếng Nhật tại FPT Academy Japan. Có khả năng đọc tài liệu tiếng anh và giao tiếp tiếng anh một cách cơ bản.";
    }
    else if (lowerMsg.includes('kinh nghiệm') || lowerMsg.includes('experience')) {
        return "Hoàng có kinh nghiệm làm việc về các dự án liên quan đến Framework Reactjs và từng đã học kiến thức về Java nên cũng có cá bài tập nhỏ về lập trình Android. Có kinh nghiệm phân tích dự án công nghệ và viết bản kế hoạch để phát triển dự án(SRS). Bạn có thể xem chi tiết trong phần 'Giới thiệu' trên portfolio.";
    }
    else if (lowerMsg.includes('dự án') || lowerMsg.includes('project')) {
        return "Một số dự án nổi bật của Hoàng bao gồm: Hệ thống quản hỗ trợ khách hàng OCOP lưu trữ hàng và vận chuyển áp dụng theo mô hình Dark Store, Portfolio cá nhân giới thiệu về bản thân, NextJS Templates luyện tập tạo dựng giao diện trực quan về cách bố trí và hiển thị. Bạn có thể xem chi tiết trong phần 'Dự án'.";
    }
    else if (lowerMsg.includes('kỹ năng') || lowerMsg.includes('skill') || lowerMsg.includes('Kỹ năng chuyên môn')) {
        return "Các kỹ năng chính của Hoàng: Front-end (React, Tailwind CSS), đang học tập thêm Back-end (JavaScript, Spring Boot), đang học tập thêm Mobile (Flutter), và Chứng chỉ tiếng Nhật tươnng đương N4. Xem thêm trong phần 'Kỹ năng' nhé!";
    }
    else if (lowerMsg.includes('liên hệ') || lowerMsg.includes('contact')) {
        return "Bạn có thể liên hệ với Hoàng qua email: dangnguyenvuhoang8384@gmail.com hoặc số điện thoại: +84 346 711 532. Tất cả thông tin có trong phần 'Liên hệ'.";
    }


    // === BÓI TOÁN/MUA VUI ===
    if (lowerMsg.includes('bói') || lowerMsg.includes('xem bói') || lowerMsg.includes('tử vi') || lowerMsg.includes('chiêm tinh') || 
        lowerMsg.includes('fortune') || lowerMsg.includes('horoscope') || lowerMsg.includes('dự đoán')) {
        window.chatState.fortuneTellingMode = true;
        return "🔮 *Chế độ bói toán đã kích hoạt* 🔮\nBạn muốn xem bói về:\n1. Tình duyên 💖\n2. Sự nghiệp 💼\n3. Tài lộc 🤑\n4. Sức khỏe 🏥\nHãy chọn số tương ứng hoặc nói lĩnh vực bạn quan tâm!";
    }

    // Xử lý khi ở chế độ bói toán
    if (window.chatState.fortuneTellingMode) {
        window.chatState.fortuneTellingMode = false; // Tắt chế độ sau khi trả lời
        
        if (lowerMsg.includes('1') || lowerMsg.includes('tình duyên') || lowerMsg.includes('tình yêu') || lowerMsg.includes('love')) {
            const loveFortune = [
                "Sắp tới bạn sẽ gặp được người đặc biệt, hãy mở lòng đón nhận nhé! 💘",
                "Tình duyên của bạn đang rất tốt, người ấy có thể đang thầm thích bạn đấy 😊",
                "Cần thêm thời gian để tìm được người phù hợp, đừng vội vàng nhé!",
                "Bạn sắp có cơ hội gặp gỡ người cùng chí hướng, hãy chú ý xung quanh!"
            ];
            return loveFortune[Math.floor(Math.random() * loveFortune.length)];
        }
        else if (lowerMsg.includes('2') || lowerMsg.includes('sự nghiệp') || lowerMsg.includes('công việc') || lowerMsg.includes('career')) {
            const careerFortune = [
                "Sự nghiệp của bạn sắp bước sang trang mới, hãy sẵn sàng đón nhận cơ hội! 🚀",
                "Công việc hiện tại đang ổn định, nhưng bạn nên học thêm kỹ năng mới để thăng tiến",
                "Tháng tới sẽ có tin vui về công việc, hãy kiên nhẫn nhé!",
                "Bạn nên mạnh dạn đề xuất ý tưởng mới, cấp trên đang rất quan tâm đến bạn"
            ];
            return careerFortune[Math.floor(Math.random() * careerFortune.length)];
        }
        else if (lowerMsg.includes('3') || lowerMsg.includes('tài lộc') || lowerMsg.includes('tiền bạc') || lowerMsg.includes('money')) {
            const moneyFortune = [
                "Tài lộc đang đến với bạn, có thể là khoản tiền bất ngờ hoặc lương thưởng tăng 💰",
                "Bạn nên thận trọng trong chi tiêu thời gian tới, tránh những khoản đầu tư mạo hiểm",
                "Sắp tới sẽ có cơ hội kiếm tiền tốt, hãy chuẩn bị sẵn sàng!",
                "Tiền bạc của bạn sẽ ổn định, nhưng đừng quá tập trung vào vật chất mà quên đi giá trị tinh thần"
            ];
            return moneyFortune[Math.floor(Math.random() * moneyFortune.length)];
        }
        else if (lowerMsg.includes('4') || lowerMsg.includes('sức khỏe') || lowerMsg.includes('health')) {
            const healthFortune = [
                "Sức khỏe của bạn khá tốt, nhưng nên chú ý đến chế độ ăn uống và nghỉ ngơi 🍎",
                "Bạn cần vận động nhiều hơn, hãy thử tập yoga hoặc đi bộ mỗi ngày",
                "Tinh thần ảnh hưởng nhiều đến sức khỏe của bạn, hãy giữ tâm trạng thoải mái",
                "Nên đi khám tổng quát để phòng ngừa các bệnh tiềm ẩn"
            ];
            return healthFortune[Math.floor(Math.random() * healthFortune.length)];
        }
        else {
            return "Mình không hiểu lĩnh vực bạn muốn xem bói. Hãy thử lại với các lựa chọn về tình duyên, sự nghiệp, tài lộc hoặc sức khỏe nhé!";
        }
    }

    // === CÂU HỎI MUA VUI ===
    if (lowerMsg.includes('đố vui') || lowerMsg.includes('câu đố') || lowerMsg.includes('đố bạn') || 
        lowerMsg.includes('trò chơi') || lowerMsg.includes('game') || lowerMsg.includes('chơi gì')) {
        const riddles = [
            {
                question: "Cái gì càng chơi càng ra nước? (Đáp án: Chơi cờ)",
                answer: "chơi cờ"
            },
            {
                question: "Cái gì bạn không mượn mà trả? (Đáp án: Lời cảm ơn)",
                answer: "lời cảm ơn"
            },
            {
                question: "Càng dài càng ngắn là cái gì? (Đáp án: Cuộc đời)",
                answer: "cuộc đời"
            },
            {
                question: "Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám khi vứt nó đi? (Đáp án: Than)",
                answer: "than"
            }
        ];
        const selectedRiddle = riddles[Math.floor(Math.random() * riddles.length)];
        window.chatState.currentRiddleAnswer = selectedRiddle.answer;
        return `🎲 *Câu đố vui* 🎲\n${selectedRiddle.question}\n\nHãy trả lời bằng cách gõ "đáp án: [câu trả lời của bạn]"`;
    }

    // Kiểm tra câu trả lời cho câu đố
    if (lowerMsg.startsWith('đáp án:') && window.chatState.currentRiddleAnswer) {
        const userAnswer = lowerMsg.replace('đáp án:', '').trim();
        const correctAnswer = window.chatState.currentRiddleAnswer;
        window.chatState.currentRiddleAnswer = null;
        
        if (userAnswer === correctAnswer) {
            return "🎉 Chính xác! Bạn rất thông minh đấy!";
        } else {
            return `Tiếc quá, đáp án đúng là "${correctAnswer}". Cố gắng lần sau nhé!`;
        }
    }

    // === NEW LOVE TOPIC INITIATION ===
    if (lowerMsg.includes('yêu') || lowerMsg.includes('người yêu') || lowerMsg.includes('thích')|| lowerMsg.includes('tình cảm') || lowerMsg.includes('cô đơn') || 
        lowerMsg.includes('lover') || lowerMsg.includes('relationship') || lowerMsg.includes('buồn')) {
        chatState.loveTopic = true;
        chatState.loveLevel = 1;
        return "Hoàng hiện đang độc thân nè 💖. Bạn hỏi vậy... là có ý gì đặc biệt à? 😊";
    }
    else if (lowerMsg.includes('hẹn hò') || lowerMsg.includes('date') || lowerMsg.includes('gặp mặt')) {
        chatState.loveTopic = true;
        chatState.loveLevel = 1;
        return `Ồ! Bạn muốn gặp Hoàng à? 😊\nHiện tại Hoàng đang tập trung vào công việc phát triển bản thân...`;
    }
    // === NEW LOVE TOPIC INITIATION ===
    if (lowerMsg.includes('huong') || lowerMsg.includes('hường') || lowerMsg.includes('hương')) {
        window.chatState.loveTopic = true;
        window.chatState.loveLevel = 1;
        window.chatState.mentionedHuong = true; // Đánh dấu đã nhắc đến Huong
        return 'Rất vui khi em đã tìm kiếm từ khoá đặc biệt này. Anh thiết lập từ khoá này để mong sẽ được em để ý đến mình nhiều hơn. Hy vọng, anh có thể bắt đầu trò chuyện với em hằng ngày và hằng giờ. Bắt đầu một mối quan hệ được cho là gì đó nghiêm túc và đặc biệt hơn. Em hãy cho anh cơ hội làm quen em nhé? 💖';
    }
    else if ((lowerMsg.includes('oke') || lowerMsg.includes('có') || lowerMsg.includes('co') || lowerMsg.includes('được rồi') || lowerMsg.includes('ừ') || lowerMsg.includes('ưm') || lowerMsg.includes('ừm') || lowerMsg.includes('duoc roi')) && window.chatState.mentionedHuong) {
        window.chatState.loveTopic = true;
        window.chatState.loveLevel = 1;
        window.chatState.mentionedHuong = false; // Reset trạng thái sau khi trả lời
        return 'Cảm ơn em rất nhiều, từ giờ anh hứa sẽ cố gắng. Sẽ không làm Hường thất vọng nữa, đồng thời anh chắc chắn rằng mình sẽ nghiêm túc khi quen em và không làm phụ lòng kỳ vọng của em. 😚 💖';
    }
    else if ((lowerMsg.includes('hông') || lowerMsg.includes('khong') || lowerMsg.includes('không') || lowerMsg.includes('hong') || lowerMsg.includes('ko')) && window.chatState.mentionedHuong) {
        window.chatState.loveTopic = true;
        window.chatState.loveLevel = 1;
        window.chatState.mentionedHuong = false; // Reset trạng thái sau khi trả lời
        return 'Hãy cho anh cơ hội làm quen em đi mà, anh năng nỉ đó! 🥹 🥹';
    }

    else if (lowerMsg.includes('cưới') || lowerMsg.includes('marry') || lowerMsg.includes('kết hôn')) {
        return `Wow, nghiêm túc vậy sao? 💍\nHoàng nghĩ hôn nhân là chuyện hệ trọng đời người...`;
    }
    else if (lowerMsg.includes('tán') || lowerMsg.includes('flirt') || lowerMsg.includes('tỏ tình')) {
        chatState.loveTopic = true;
        chatState.loveLevel = 1;
        return `Bạn rất dễ thương đấy! 😊\nNhưng Hoàng nghĩ chúng ta nên tìm hiểu nhau nhiều hơn...`;
    }

    // === DEFAULT RESPONSES ===
    const randomResponses = [
        "Tôi không chắc mình hiểu câu hỏi của bạn. Bạn có thể hỏi về thông tin portfolio, kinh nghiệm làm việc hoặc dự án cá nhân của Hoàng nhé!",
        "Xin lỗi, tôi chỉ có thể trả lời các câu hỏi liên quan đến portfolio của Hoàng. Bạn muốn biết điều gì về kỹ năng hoặc dự án của ấy?",
        "Câu hỏi của bạn khá thú vị! Hiện tôi chỉ được lập trình để trả lời các thắc mắc về chuyên môn của Hoàng thôi."
    ];
    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
}

    // Auto-open after 30 seconds if not interacted
    setTimeout(() => {
        if (!localStorage.getItem('chatbotShown')) {
            chatbotToggle.click();
            localStorage.setItem('chatbotShown', 'true');
        }
    }, 30000);

});





