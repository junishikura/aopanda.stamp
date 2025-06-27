
class VotingSystem {
    constructor() {
        this.stamps = [
            { id: 'stamp1', name: 'ハッピーあおぱんだ', emoji: '😊', image: 'images/stamps/stamp1.png' },
            { id: 'stamp2', name: 'おやすみあおぱんだ', emoji: '😴', image: 'images/stamps/stamp2.png' },
            { id: 'stamp3', name: 'テンション高めあおぱんだ', emoji: '🤩', image: 'images/stamps/stamp3.png' },
            { id: 'stamp4', name: '考え中あおぱんだ', emoji: '🤔', image: 'images/stamps/stamp4.png' },
            { id: 'stamp5', name: 'ラブラブあおぱんだ', emoji: '😍', image: 'images/stamps/stamp5.png' },
            { id: 'stamp6', name: '泣いてるあおぱんだ', emoji: '😭', image: 'images/stamps/stamp6.png' },
            { id: 'stamp7', name: '怒ってるあおぱんだ', emoji: '😠', image: 'images/stamps/stamp7.png' },
            { id: 'stamp8', name: 'びっくりあおぱんだ', emoji: '😲', image: 'images/stamps/stamp8.png' },
            { id: 'stamp9', name: 'ウインクあおぱんだ', emoji: '😉', image: 'images/stamps/stamp9.png' },
            { id: 'stamp10', name: '照れあおぱんだ', emoji: '😊', image: 'images/stamps/stamp10.png' },
            { id: 'stamp11', name: 'がんばるあおぱんだ', emoji: '💪', image: 'images/stamps/stamp11.png' },
            { id: 'stamp12', name: 'おめでとうあおぱんだ', emoji: '🎉', image: 'images/stamps/stamp12.png' },
            { id: 'stamp13', name: 'ありがとうあおぱんだ', emoji: '🙏', image: 'images/stamps/stamp13.png' },
            { id: 'stamp14', name: 'ごめんなさいあおぱんだ', emoji: '🙇', image: 'images/stamps/stamp14.png' },
            { id: 'stamp15', name: 'おつかれさまあおぱんだ', emoji: '😌', image: 'images/stamps/stamp15.png' },
            { id: 'stamp16', name: 'いただきますあおぱんだ', emoji: '🍽️', image: 'images/stamps/stamp16.png' },
            { id: 'stamp17', name: 'ごちそうさまあおぱんだ', emoji: '😋', image: 'images/stamps/stamp17.png' },
            { id: 'stamp18', name: 'おはようあおぱんだ', emoji: '🌅', image: 'images/stamps/stamp18.png' },
            { id: 'stamp19', name: 'こんにちはあおぱんだ', emoji: '👋', image: 'images/stamps/stamp19.png' },
            { id: 'stamp20', name: 'こんばんはあおぱんだ', emoji: '🌙', image: 'images/stamps/stamp20.png' },
            { id: 'stamp21', name: 'お疲れ様あおぱんだ', emoji: '😪', image: 'images/stamps/stamp21.png' },
            { id: 'stamp22', name: 'いってきますあおぱんだ', emoji: '🚪', image: 'images/stamps/stamp22.png' },
            { id: 'stamp23', name: 'ただいまあおぱんだ', emoji: '🏠', image: 'images/stamps/stamp23.png' },
            { id: 'stamp24', name: 'いってらっしゃいあおぱんだ', emoji: '👋', image: 'images/stamps/stamp24.png' },
            { id: 'stamp25', name: 'おかえりあおぱんだ', emoji: '🤗', image: 'images/stamps/stamp25.png' },
            { id: 'stamp26', name: 'がんばってあおぱんだ', emoji: '📣', image: 'images/stamps/stamp26.png' },
            { id: 'stamp27', name: 'お疲れさまあおぱんだ', emoji: '🍵', image: 'images/stamps/stamp27.png' },
            { id: 'stamp28', name: 'よろしくあおぱんだ', emoji: '🤝', image: 'images/stamps/stamp28.png' },
            { id: 'stamp29', name: 'すみませんあおぱんだ', emoji: '🙏', image: 'images/stamps/stamp29.png' },
            { id: 'stamp30', name: 'うれしいあおぱんだ', emoji: '🥰', image: 'images/stamps/stamp30.png' },
            { id: 'stamp31', name: 'かなしいあおぱんだ', emoji: '😢', image: 'images/stamps/stamp31.png' },
            { id: 'stamp32', name: 'たのしいあおぱんだ', emoji: '😄', image: 'images/stamps/stamp32.png' },
            { id: 'stamp33', name: 'びっくりあおぱんだ', emoji: '😱', image: 'images/stamps/stamp33.png' },
            { id: 'stamp34', name: 'こまったあおぱんだ', emoji: '😵', image: 'images/stamps/stamp34.png' },
            { id: 'stamp35', name: 'つかれたあおぱんだ', emoji: '😴', image: 'images/stamps/stamp35.png' },
            { id: 'stamp36', name: 'げんきあおぱんだ', emoji: '💪', image: 'images/stamps/stamp36.png' },
            { id: 'stamp37', name: 'やったーあおぱんだ', emoji: '🙌', image: 'images/stamps/stamp37.png' },
            { id: 'stamp38', name: 'えーんあおぱんだ', emoji: '😭', image: 'images/stamps/stamp38.png' },
            { id: 'stamp39', name: 'むむむあおぱんだ', emoji: '🤨', image: 'images/stamps/stamp39.png' },
            { id: 'stamp40', name: 'ぽかーんあおぱんだ', emoji: '😐', image: 'images/stamps/stamp40.png' },
            { id: 'stamp41', name: 'きゃーあおぱんだ', emoji: '😆', image: 'images/stamps/stamp41.png' },
            { id: 'stamp42', name: 'ほっこりあおぱんだ', emoji: '☺️', image: 'images/stamps/stamp42.png' }
        ];
        
        this.votes = {};
        this.stamps.forEach(stamp => {
            this.votes[stamp.id] = 0;
        });
        
        this.totalVotes = 0;
        this.votesRemaining = 2;
        this.selectedStamps = [];
        this.hasVoted = false;
        this.showingResults = false;
        this.isAdmin = false;
        this.sessionId = this.generateSessionId();
        this.userFingerprint = this.generateUserFingerprint();
        
        this.init();
        this.generateStampOptions();
        this.loadVotes();
    }
    
    init() {
        this.voteBtn = document.getElementById('vote-btn');
        this.adminBtn = document.getElementById('admin-btn');
        this.showResultsBtn = document.getElementById('show-results-btn');
        this.showChartBtn = document.getElementById('show-chart-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.closeAdminBtn = document.getElementById('close-admin-btn');
        this.totalCountElement = document.getElementById('total-count');
        this.remainingVotesElement = document.getElementById('remaining-votes');
        this.pollContainer = document.querySelector('.poll-container');
        this.optionsContainer = document.getElementById('options-container');
        this.adminPanel = document.getElementById('admin-panel');
        this.chartContainer = document.getElementById('chart-container');
        this.shareSection = document.getElementById('share-section');
        
        // グラフとシェア関連
        this.barChartBtn = document.getElementById('bar-chart-btn');
        this.pieChartBtn = document.getElementById('pie-chart-btn');
        this.rankingBtn = document.getElementById('ranking-btn');
        this.closeChartBtn = document.getElementById('close-chart-btn');
        this.shareTwitterBtn = document.getElementById('share-twitter');
        this.shareNativeBtn = document.getElementById('share-native');
        this.copyUrlBtn = document.getElementById('copy-url');
        
        this.currentChart = null;
        
        // Web Share API対応チェック
        if (navigator.share) {
            this.shareNativeBtn.style.display = 'inline-block';
        }
        
        this.voteBtn.addEventListener('click', () => this.vote());
        this.adminBtn.addEventListener('click', () => this.toggleAdminPanel());
        this.showResultsBtn.addEventListener('click', () => this.showResults());
        this.showChartBtn.addEventListener('click', () => this.showChart());
        this.resetBtn.addEventListener('click', () => this.resetPoll());
        this.closeAdminBtn.addEventListener('click', () => this.closeAdminPanel());
        
        // グラフボタンのイベントリスナー
        this.barChartBtn.addEventListener('click', () => this.showBarChart());
        this.pieChartBtn.addEventListener('click', () => this.showPieChart());
        this.rankingBtn.addEventListener('click', () => this.showRankingTable());
        this.closeChartBtn.addEventListener('click', () => this.hideChart());
        
        // シェアボタンのイベントリスナー
        this.shareTwitterBtn.addEventListener('click', () => this.shareOnTwitter());
        this.shareNativeBtn.addEventListener('click', () => this.shareNative());
        this.copyUrlBtn.addEventListener('click', () => this.copyUrl());
        
        // 管理者モード切り替え（Ctrl+Shift+A）
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.shiftKey && e.key === 'A') {
                this.toggleAdminMode();
            }
        });
        
        this.updateVoteButton();
    }
    
    generateStampOptions() {
        this.optionsContainer.innerHTML = '';
        
        this.stamps.forEach(stamp => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.setAttribute('data-option', stamp.id);
            
            optionDiv.innerHTML = `
                <label>
                    <input type="checkbox" name="poll" value="${stamp.id}">
                    <div class="stamp-image-container">
                        <img src="${stamp.image}" alt="${stamp.name}" class="stamp-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                        <span class="emoji" style="display: none;">${stamp.emoji}</span>
                    </div>
                    <span class="option-text">${stamp.name}</span>
                    <div class="progress-bar">
                        <div class="progress-fill" data-option="${stamp.id}"></div>
                    </div>
                    <span class="percentage" data-option="${stamp.id}">0%</span>
                </label>
            `;
            
            this.optionsContainer.appendChild(optionDiv);
        });
        
        this.checkboxes = document.querySelectorAll('input[name="poll"]');
        this.checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => this.handleStampSelection(checkbox));
        });
    }
    
    loadVotes() {
        const savedVotes = localStorage.getItem('pollVotes');
        const savedTotal = localStorage.getItem('pollTotal');
        const savedHasVoted = localStorage.getItem('hasVoted');
        const savedFingerprint = localStorage.getItem('userFingerprint');
        const voteTimestamp = localStorage.getItem('voteTimestamp');
        
        // 重複投票チェック
        if (savedFingerprint && savedFingerprint !== this.userFingerprint) {
            console.warn('Different user fingerprint detected');
        }
        
        // 24時間経過チェック
        if (voteTimestamp) {
            const timeDiff = Date.now() - parseInt(voteTimestamp);
            const hoursPassed = timeDiff / (1000 * 60 * 60);
            if (hoursPassed > 24) {
                // 24時間経過したら再投票可能
                localStorage.removeItem('hasVoted');
                localStorage.removeItem('userFingerprint');
                localStorage.removeItem('voteTimestamp');
                console.log('Vote session expired - allowing new vote');
            }
        }
        
        if (savedVotes) {
            this.votes = JSON.parse(savedVotes);
        }
        
        if (savedTotal) {
            this.totalVotes = parseInt(savedTotal);
        }
        
        if (localStorage.getItem('hasVoted') === 'true') {
            this.hasVoted = true;
            this.votesRemaining = 0;
            this.voteBtn.textContent = '投票済み';
            this.voteBtn.disabled = true;
        }
        
        this.updateDisplay();
    }
    
    generateSessionId() {
        return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    }
    
    generateUserFingerprint() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Fingerprint test', 2, 2);
        
        const fingerprint = {
            screen: `${screen.width}x${screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
            platform: navigator.platform,
            canvas: canvas.toDataURL(),
            userAgent: navigator.userAgent.substr(0, 100)
        };
        
        return btoa(JSON.stringify(fingerprint)).substr(0, 32);
    }
    
    saveVotes() {
        localStorage.setItem('pollVotes', JSON.stringify(this.votes));
        localStorage.setItem('pollTotal', this.totalVotes.toString());
        localStorage.setItem('hasVoted', this.hasVoted.toString());
        localStorage.setItem('userFingerprint', this.userFingerprint);
        localStorage.setItem('sessionId', this.sessionId);
        localStorage.setItem('voteTimestamp', Date.now().toString());
    }
    
    handleStampSelection(checkbox) {
        if (checkbox.checked) {
            if (this.selectedStamps.length >= 2) {
                checkbox.checked = false;
                alert('最大2つまで選択できます');
                return;
            }
            this.selectedStamps.push(checkbox.value);
        } else {
            this.selectedStamps = this.selectedStamps.filter(id => id !== checkbox.value);
        }
        
        this.votesRemaining = 2 - this.selectedStamps.length;
        this.updateVoteButton();
        this.updateRemainingVotes();
    }
    
    updateVoteButton() {
        this.voteBtn.disabled = this.selectedStamps.length === 0 || this.hasVoted;
    }
    
    updateRemainingVotes() {
        this.remainingVotesElement.textContent = this.votesRemaining;
    }
    
    vote() {
        if (this.hasVoted) return;
        
        if (this.selectedStamps.length === 0) {
            alert('最低1つは選択してください');
            return;
        }
        
        this.selectedStamps.forEach(stampId => {
            this.votes[stampId]++;
        });
        
        this.totalVotes += this.selectedStamps.length;
        this.hasVoted = true;
        this.votesRemaining = 0;
        
        this.voteBtn.textContent = '投票済み';
        this.voteBtn.disabled = true;
        
        this.selectedStamps.forEach(stampId => {
            const checkbox = document.querySelector(`input[value="${stampId}"]`);
            const votedOption = checkbox.closest('.option');
            votedOption.classList.add('voted');
            checkbox.disabled = true;
        });
        
        this.checkboxes.forEach(checkbox => {
            if (!this.selectedStamps.includes(checkbox.value)) {
                checkbox.disabled = true;
            }
        });
        
        this.saveVotes();
        this.updateDisplay();
        this.updateRemainingVotes();
        
        // 投票完了後にシェアセクションを表示
        this.shareSection.style.display = 'block';
        
        alert(`投票完了！${this.selectedStamps.length}票を投票しました。`);
    }
    
    toggleAdminMode() {
        this.isAdmin = !this.isAdmin;
        if (this.isAdmin) {
            this.adminBtn.style.display = 'inline-block';
            alert('管理者モードが有効になりました');
        } else {
            this.adminBtn.style.display = 'none';
            this.adminPanel.style.display = 'none';
            this.hideResults();
            alert('管理者モードが無効になりました');
        }
    }
    
    toggleAdminPanel() {
        if (this.adminPanel.style.display === 'none') {
            this.adminPanel.style.display = 'block';
        } else {
            this.adminPanel.style.display = 'none';
        }
    }
    
    closeAdminPanel() {
        this.adminPanel.style.display = 'none';
        this.hideResults();
    }
    
    showResults() {
        if (!this.isAdmin) {
            alert('結果の閲覧は管理者のみ可能です');
            return;
        }
        this.showingResults = true;
        this.pollContainer.classList.add('results-mode');
        this.updatePercentages();
    }
    
    hideResults() {
        this.showingResults = false;
        this.pollContainer.classList.remove('results-mode');
    }
    
    updatePercentages() {
        Object.keys(this.votes).forEach(option => {
            const percentage = this.totalVotes > 0 ? 
                Math.round((this.votes[option] / this.totalVotes) * 100) : 0;
            
            const percentageElement = document.querySelector(`[data-option="${option}"].percentage`);
            const progressFill = document.querySelector(`[data-option="${option}"].progress-fill`);
            
            if (percentageElement) {
                percentageElement.textContent = `${percentage}% (${this.votes[option]})`;
            }
            
            if (progressFill) {
                setTimeout(() => {
                    progressFill.style.width = `${percentage}%`;
                }, 100);
            }
        });
    }
    
    updateDisplay() {
        this.totalCountElement.textContent = this.totalVotes;
        if (this.showingResults) {
            this.updatePercentages();
        }
    }
    
    resetPoll() {
        if (!this.isAdmin) {
            alert('リセット機能は管理者のみ使用可能です');
            return;
        }
        
        if (confirm('投票データをリセットしますか？')) {
            this.votes = {};
            this.stamps.forEach(stamp => {
                this.votes[stamp.id] = 0;
            });
            this.totalVotes = 0;
            this.hasVoted = false;
            this.votesRemaining = 2;
            this.selectedStamps = [];
            
            localStorage.removeItem('pollVotes');
            localStorage.removeItem('pollTotal');
            localStorage.removeItem('hasVoted');
            
            this.voteBtn.textContent = '投票する';
            this.voteBtn.disabled = true;
            
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('voted');
            });
            
            document.querySelectorAll('input[name="poll"]').forEach(checkbox => {
                checkbox.checked = false;
                checkbox.disabled = false;
            });
            
            this.hideResults();
            this.updateDisplay();
            this.updateRemainingVotes();
            alert('投票データがリセットされました');
        }
    }
    
    // グラフ表示機能
    showChart() {
        if (!this.isAdmin) {
            alert('グラフの表示は管理者のみ可能です');
            return;
        }
        this.chartContainer.style.display = 'block';
        this.showBarChart(); // デフォルトで棒グラフを表示
    }
    
    hideChart() {
        this.chartContainer.style.display = 'none';
        if (this.currentChart) {
            this.currentChart.destroy();
            this.currentChart = null;
        }
    }
    
    showBarChart() {
        this.setActiveTab('bar-chart-btn');
        document.getElementById('ranking-table').style.display = 'none';
        document.getElementById('results-chart').style.display = 'block';
        
        if (this.currentChart) {
            this.currentChart.destroy();
        }
        
        const ctx = document.getElementById('results-chart').getContext('2d');
        const sortedData = this.getSortedVoteData();
        
        this.currentChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: sortedData.map(item => item.name),
                datasets: [{
                    label: '投票数',
                    data: sortedData.map(item => item.votes),
                    backgroundColor: 'rgba(255, 193, 7, 0.8)',
                    borderColor: 'rgba(255, 193, 7, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        }
                    },
                    x: {
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutBounce'
                }
            }
        });
    }
    
    showPieChart() {
        this.setActiveTab('pie-chart-btn');
        document.getElementById('ranking-table').style.display = 'none';
        document.getElementById('results-chart').style.display = 'block';
        
        if (this.currentChart) {
            this.currentChart.destroy();
        }
        
        const ctx = document.getElementById('results-chart').getContext('2d');
        const sortedData = this.getSortedVoteData().slice(0, 10); // 上位10件のみ
        
        const colors = [
            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
            '#FF9F40', '#FF6384', '#C9CBCF', '#4BC0C0', '#FF6384'
        ];
        
        this.currentChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: sortedData.map(item => item.name),
                datasets: [{
                    data: sortedData.map(item => item.votes),
                    backgroundColor: colors,
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 12,
                            padding: 10
                        }
                    }
                },
                animation: {
                    duration: 1500,
                    easing: 'easeOutBounce'
                }
            }
        });
    }
    
    showRankingTable() {
        this.setActiveTab('ranking-btn');
        document.getElementById('results-chart').style.display = 'none';
        document.getElementById('ranking-table').style.display = 'block';
        
        if (this.currentChart) {
            this.currentChart.destroy();
            this.currentChart = null;
        }
        
        const sortedData = this.getSortedVoteData();
        const tableHtml = `
            <h4>🏆 投票ランキング</h4>
            <table>
                <thead>
                    <tr>
                        <th>順位</th>
                        <th>スタンプ</th>
                        <th>投票数</th>
                        <th>割合</th>
                    </tr>
                </thead>
                <tbody>
                    ${sortedData.map((item, index) => `
                        <tr class="rank-${index + 1}">
                            <td class="rank">${index + 1}</td>
                            <td class="stamp-name">${item.name}</td>
                            <td class="votes">${item.votes}票</td>
                            <td class="percentage">${this.calculatePercentage(item.votes)}%</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        
        document.getElementById('ranking-table').innerHTML = tableHtml;
    }
    
    getSortedVoteData() {
        return this.stamps
            .map(stamp => ({
                name: stamp.name,
                votes: this.votes[stamp.id] || 0
            }))
            .sort((a, b) => b.votes - a.votes);
    }
    
    calculatePercentage(votes) {
        return this.totalVotes > 0 ? Math.round((votes / this.totalVotes) * 100) : 0;
    }
    
    setActiveTab(activeId) {
        document.querySelectorAll('.chart-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(activeId).classList.add('active');
    }
    
    // シェア機能
    shareOnTwitter() {
        const text = 'あおぱんだスタンプ人気ランキングに投票しました！あなたも投票してみませんか？';
        const url = window.location.href;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
    }
    
    async shareNative() {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'あおぱんだスタンプ人気ランキング',
                    text: 'あおぱんだスタンプの人気投票に参加しよう！',
                    url: window.location.href
                });
            } catch (error) {
                console.log('シェアがキャンセルされました');
            }
        }
    }
    
    async copyUrl() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('URLをコピーしました！');
        } catch (error) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = window.location.href;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('URLをコピーしました！');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const votingSystem = new VotingSystem();
});