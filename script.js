
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
        
        this.init();
        this.generateStampOptions();
        this.loadVotes();
    }
    
    init() {
        this.voteBtn = document.getElementById('vote-btn');
        this.adminBtn = document.getElementById('admin-btn');
        this.showResultsBtn = document.getElementById('show-results-btn');
        this.resetBtn = document.getElementById('reset-btn');
        this.closeAdminBtn = document.getElementById('close-admin-btn');
        this.totalCountElement = document.getElementById('total-count');
        this.remainingVotesElement = document.getElementById('remaining-votes');
        this.pollContainer = document.querySelector('.poll-container');
        this.optionsContainer = document.getElementById('options-container');
        this.adminPanel = document.getElementById('admin-panel');
        
        this.voteBtn.addEventListener('click', () => this.vote());
        this.adminBtn.addEventListener('click', () => this.toggleAdminPanel());
        this.showResultsBtn.addEventListener('click', () => this.showResults());
        this.resetBtn.addEventListener('click', () => this.resetPoll());
        this.closeAdminBtn.addEventListener('click', () => this.closeAdminPanel());
        
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
        
        if (savedVotes) {
            this.votes = JSON.parse(savedVotes);
        }
        
        if (savedTotal) {
            this.totalVotes = parseInt(savedTotal);
        }
        
        if (savedHasVoted === 'true') {
            this.hasVoted = true;
            this.votesRemaining = 0;
            this.voteBtn.textContent = '投票済み';
            this.voteBtn.disabled = true;
        }
        
        this.updateDisplay();
    }
    
    saveVotes() {
        localStorage.setItem('pollVotes', JSON.stringify(this.votes));
        localStorage.setItem('pollTotal', this.totalVotes.toString());
        localStorage.setItem('hasVoted', this.hasVoted.toString());
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
}

document.addEventListener('DOMContentLoaded', () => {
    const votingSystem = new VotingSystem();
});