import React from 'react';

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>antomay101</h1>
        <p>مرحبًا بك في موقع antomay101 – صفحة واحدة بتصميم عصري وجذاب!</p>
      </header>
      <main>
        <div className="card">
          <h2>فكرة المشروع</h2>
          <p>
            هذا النص تجريبي ويمكنك تعديله لاحقًا حسب رؤيتك للمحتوى المناسب أو العرض للمستثمرين.
          </p>
        </div>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} antomay101. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}