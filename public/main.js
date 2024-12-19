document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('invitationForm');
    const resultSection = document.getElementById('resultSection');
    const reportContent = document.querySelector('.report-content');
    const copyBtn = document.getElementById('copyBtn');
    const regenerateBtn = document.getElementById('regenerateBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const buttons = document.querySelectorAll('button');

    async function generateInvitation(userName, userProblem) {
        // 显示加载状态
        loadingSpinner.classList.add('show');
        form.querySelector('button').disabled = true;
        form.querySelector('button').textContent = '生成中...';
        
        try {
            const generator = new ReportGenerator(userName, userProblem);
            const report = await generator.generateReport();
            
            // 显示结果
            reportContent.textContent = report;
            resultSection.classList.remove('hidden');
            
            // 滚动到结果区域
            resultSection.scrollIntoView({ behavior: 'smooth' });
        } catch (error) {
            alert('生成失败，请重试');
            console.error('生成失败:', error);
        } finally {
            loadingSpinner.classList.remove('show');
            form.querySelector('button').disabled = false;
            form.querySelector('button').textContent = '生成邀请函';
        }
    }

    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        
        button.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // 移动端提交时收起键盘
        document.activeElement.blur();
        
        const userName = document.getElementById('userName').value.trim();
        const userProblem = document.getElementById('userProblem').value.trim();
        
        if (!userName || !userProblem) {
            alert('请填写完整信息');
            return;
        }
        
        await generateInvitation(userName, userProblem);
    });

    // 复制功能
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(reportContent.textContent)
            .then(() => {
                copyBtn.textContent = '已复制！';
                setTimeout(() => {
                    copyBtn.textContent = '复制内容';
                }, 2000);
            })
            .catch(() => alert('复制失败，请手动复制'));
    });

    // 重新生成功能
    regenerateBtn.addEventListener('click', async () => {
        const userName = document.getElementById('userName').value.trim();
        const userProblem = document.getElementById('userProblem').value.trim();
        await generateInvitation(userName, userProblem);
    });

    // 添加下拉刷新功能
    let touchStartY = 0;
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        const scrollTop = document.documentElement.scrollTop;
        
        // 下拉刷新逻辑
        if (scrollTop === 0 && touchY - touchStartY > 100) {
            e.preventDefault();
            if (confirm('是否重新生成邀请函？')) {
                const userName = document.getElementById('userName').value.trim();
                const userProblem = document.getElementById('userProblem').value.trim();
                if (userName && userProblem) {
                    generateInvitation(userName, userProblem);
                }
            }
        }
    }, { passive: false });
}); 