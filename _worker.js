export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // 处理 API 请求
    if (url.pathname.startsWith('/api/')) {
      if (request.method === 'POST' && url.pathname === '/api/generate') {
        const { userName, userProblem } = await request.json();
        const generator = new ReportGenerator(userName, userProblem);
        const report = await generator.generateReport();
        
        return new Response(JSON.stringify({ report }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }
    
    // 处理静态文件
    return env.ASSETS.fetch(request);
  }
}; 